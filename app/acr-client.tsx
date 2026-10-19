'use client';
import { useEffect } from 'react';
function slug(value:string){return value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,48)||'action'}
export function AcrClient(){useEffect(()=>{
  const labelCtas=()=>{const used=new Set<string>();document.querySelectorAll<HTMLElement>('a[href],button:not([type="submit"]),[role="button"]').forEach((el)=>{if(el.closest('form')||el.id.startsWith('cta-')){if(el.id)used.add(el.id);return}const scope=el.closest('header')?'global-header':el.closest('footer')?'global-footer':slug(location.pathname==='/'?'home':location.pathname);const raw=slug(el.textContent||el.getAttribute('aria-label')||el.getAttribute('href')||'action');let id=`cta-${scope}-${raw}`,n=2;while(used.has(id)||document.getElementById(id))id=`cta-${scope}-${raw}-${n++}`;el.id=id;used.add(id)});document.querySelectorAll<HTMLIFrameElement>('iframe[src*="oncehub.com"],iframe[src*="scheduleonce.com"]').forEach(frame=>{const wrapper=frame.parentElement;if(wrapper&&!wrapper.dataset.acrTrack)wrapper.dataset.acrTrack='contact-booking-iframe'})};
  labelCtas();const observer=new MutationObserver(labelCtas);observer.observe(document.documentElement,{childList:true,subtree:true});
  return()=>observer.disconnect();
},[]);return null}
