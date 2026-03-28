'use client';

import { useEffect, useState } from 'react';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function fetchFromSupabase(table, params = '') {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return [];

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${table}${params}`,
      {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

export default function StatsPage() {
  const [stats, setStats] = useState({
    totalVisits: 0,
    uniqueVisitors: 0,
    todayVisits: 0,
    topPages: [],
    last7Days: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setLoading(true);

    // Get today's date range
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayISO = today.toISOString();

    // Calculate last 7 days
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const day = new Date(today);
      day.setDate(day.getDate() - i);
      last7Days.push({
        date: day.toISOString().split('T')[0],
        start: day.toISOString(),
        end: new Date(day.getTime() + 86400000).toISOString(),
      });
    }

    // Fetch all visits
    const allVisits = await fetchFromSupabase('page_visits');

    // Total visits
    const totalVisits = allVisits.length;

    // Unique visitors
    const uniqueSessions = new Set(allVisits.map(v => v.session_id));
    const uniqueVisitors = uniqueSessions.size;

    // Today's visits
    const todayVisits = allVisits.filter(v => new Date(v.created_at) >= today).length;

    // Top pages (count by page_path)
    const pageCounts = {};
    allVisits.forEach(v => {
      pageCounts[v.page_path] = (pageCounts[v.page_path] || 0) + 1;
    });
    const topPages = Object.entries(pageCounts)
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Last 7 days data
    const last7DaysData = last7Days.map(day => ({
      date: day.date,
      visits: allVisits.filter(v => {
        const created = new Date(v.created_at);
        return created >= new Date(day.start) && created < new Date(day.end);
      }).length,
    }));

    setStats({
      totalVisits,
      uniqueVisitors,
      todayVisits,
      topPages,
      last7Days: last7DaysData,
    });

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-48 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow h-32"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const maxVisits = Math.max(...stats.last7Days.map(d => d.visits), 1);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Statistik Pengunjung</h1>
          <p className="text-gray-600">Data kunjungan website AFC Japan Store</p>
          <button
            onClick={loadStats}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Refresh Data
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500 mb-1">Total Kunjungan</p>
            <p className="text-3xl font-bold text-blue-600">{stats.totalVisits}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500 mb-1">Pengunjung Unik</p>
            <p className="text-3xl font-bold text-green-600">{stats.uniqueVisitors}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500 mb-1">Kunjungan Hari Ini</p>
            <p className="text-3xl font-bold text-purple-600">{stats.todayVisits}</p>
          </div>
        </div>

        {/* Last 7 Days Chart */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold mb-4">7 Hari Terakhir</h2>
          <div className="space-y-3">
            {stats.last7Days.map((day) => (
              <div key={day.date} className="flex items-center gap-3">
                <span className="text-sm text-gray-500 w-24">{day.date}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                  <div
                    className="bg-blue-500 h-6 rounded-full transition-all duration-500"
                    style={{ width: `${(day.visits / maxVisits) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold w-12 text-right">{day.visits}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold mb-4">Halaman Populer</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-gray-600">Halaman</th>
                  <th className="text-right py-3 px-4 text-gray-600">Kunjungan</th>
                </tr>
              </thead>
              <tbody>
                {stats.topPages.map((page, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">{page.page}</code>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">{page.count}</td>
                  </tr>
                ))}
                {stats.topPages.length === 0 && (
                  <tr>
                    <td colSpan="2" className="py-4 text-center text-gray-500">
                      Belum ada data kunjungan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Data diperbarui setiap kali halaman dimuat</p>
        </div>
      </div>
    </div>
  );
}
