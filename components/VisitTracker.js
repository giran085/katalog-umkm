'use client';

import { useEffect } from 'react';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function generateSessionId() {
  return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function getDeviceType() {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent.toLowerCase();
  if (/mobile/i.test(ua)) return 'mobile';
  if (/tablet|ipad/i.test(ua)) return 'tablet';
  return 'desktop';
}

export default function VisitTracker() {
  useEffect(() => {
    // Skip tracking for admin pages and API routes
    if (typeof window === 'undefined') return;
    if (window.location.pathname.startsWith('/admin')) return;
    if (window.location.pathname.startsWith('/api')) return;

    const trackVisit = async () => {
      // Debug logging
      console.log('[VisitTracker] Starting...');
      console.log('[VisitTracker] SUPABASE_URL:', SUPABASE_URL);
      console.log('[VisitTracker] SUPABASE_ANON_KEY exists:', !!SUPABASE_ANON_KEY);

      if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        console.error('[VisitTracker] Missing Supabase env vars!');
        return;
      }

      // Get or create session ID
      let sessionId = localStorage.getItem('afc_session_id');
      if (!sessionId) {
        sessionId = generateSessionId();
        localStorage.setItem('afc_session_id', sessionId);
        console.log('[VisitTracker] New session created:', sessionId);
      } else {
        console.log('[VisitTracker] Using existing session:', sessionId);
      }

      const data = {
        session_id: sessionId,
        page_path: window.location.pathname,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        device: getDeviceType(),
      };

      console.log('[VisitTracker] Data to send:', data);

      // Send to Supabase REST API directly (no Prisma needed)
      try {
        console.log('[VisitTracker] Sending to:', `${SUPABASE_URL}/rest/v1/page_visits`);

        const response = await fetch(`${SUPABASE_URL}/rest/v1/page_visits`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(data),
        });

        console.log('[VisitTracker] Response status:', response.status);

        if (response.ok) {
          console.log('[VisitTracker] Visit tracked successfully!');
        } else {
          const errorText = await response.text();
          console.error('[VisitTracker] Error:', response.status, errorText);
        }
      } catch (error) {
        console.error('[VisitTracker] Fetch error:', error);
      }
    };

    trackVisit();
  }, []);

  return null;
}
