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
      // Get or create session ID
      let sessionId = localStorage.getItem('afc_session_id');
      if (!sessionId) {
        sessionId = generateSessionId();
        localStorage.setItem('afc_session_id', sessionId);
      }

      const data = {
        session_id: sessionId,
        page_path: window.location.pathname,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        device: getDeviceType(),
      };

      // Only track once per session per page (within 1 hour)
      const lastTrack = sessionStorage.getItem(`tracked_${window.location.pathname}`);
      const now = Date.now();
      if (lastTrack && now - parseInt(lastTrack) < 3600000) {
        return; // Already tracked within 1 hour
      }
      sessionStorage.setItem(`tracked_${window.location.pathname}`, now.toString());

      // Send to Supabase REST API directly (no Prisma needed)
      if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        try {
          await fetch(`${SUPABASE_URL}/rest/v1/page_visits`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apikey': SUPABASE_ANON_KEY,
              'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify(data),
          });
        } catch (error) {
          // Silently fail - don't bother user with tracking errors
        }
      }
    };

    trackVisit();
  }, []);

  return null;
}
