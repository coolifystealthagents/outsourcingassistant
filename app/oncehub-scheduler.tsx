'use client';

import { useRef } from 'react';

const confirmationPath = '/thanks-whats-next';

export function OnceHubScheduler() {
  const frame = useRef<HTMLIFrameElement>(null);

  // OnceHub owns the post-booking redirect configuration. When that configured
  // redirect loads our same-origin confirmation route inside the embed, promote
  // it to the top-level page. Cross-origin iframe locations remain unreadable and
  // are intentionally ignored; no booking is inferred from arbitrary messages.
  const handleLoad = () => {
    try {
      if (frame.current?.contentWindow?.location.pathname === confirmationPath) {
        window.location.assign(confirmationPath);
      }
    } catch {
      // Expected while the iframe is displaying the cross-origin OnceHub flow.
    }
  };

  return <iframe
    ref={frame}
    src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&amp;dt=&amp;em=1&amp;Si=1"
    id="SOI_StealthAgentsTeam"
    name="ScheduleOnceIframe"
    title="Schedule a meeting with Stealth Agents"
    scrolling="yes"
    frameBorder="0"
    height="850"
    width="100%"
    className="sa-oncehub-frame"
    referrerPolicy="strict-origin-when-cross-origin"
    onLoad={handleLoad}
  />;
}
