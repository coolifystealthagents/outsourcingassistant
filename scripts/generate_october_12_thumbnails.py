#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import hashlib
import json

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public'/'oct12'
OUT.mkdir(parents=True,exist_ok=True)
items=[
('executive-inbox-delegation-receipt','Create a Receipt for Executive Inbox Delegation','BLOG'),('recurring-invoice-approval-preparation','Prepare Recurring Invoices for Approval without Moving Money','BLOG'),('stakeholder-briefing-source-pack','Build a Stakeholder Briefing Source Pack','BLOG'),('travel-option-hold-expiry','Track Expiry Times for Travel Options on Hold','BLOG'),('password-manager-request-routing','Route Password-Manager Access Requests Safely','BLOG'),('customer-refund-evidence-packet','Assemble a Customer Refund Evidence Packet','BLOG'),('weekly-kpi-commentary-draft','Draft Weekly KPI Commentary from Verified Drivers','BLOG'),('signature-status-follow-up','Follow Up on Document Signatures without Altering Terms','BLOG'),('event-attendee-reconciliation','Reconcile Event Registrations with Attendee Records','BLOG'),('marketing-asset-approval-handoff','Hand Off Marketing Assets with Approval Evidence','BLOG'),('recruitment-scheduling-conflict','Resolve Recruitment Scheduling Conflicts without Choosing Candidates','BLOG'),('contractor-renewal-notice-tracker','Track Contractor Renewal Notices and Decision Dates','BLOG'),
('delegated-queue-owner-response-latency','Measure Owner Response Latency in Delegated Queues','RESEARCH'),('assistant-instruction-version-drift','Detect Instruction Version Drift in Assistant Work','RESEARCH'),('approval-window-reliability','Evaluate Approval Window Reliability for Assistant Handoffs','RESEARCH'),('access-scope-expansion-rework','Study Rework after Assistant Access Scope Expands','RESEARCH'),('briefing-source-omission','Audit Source Omissions in Assistant-Prepared Briefings','RESEARCH')]
font_path='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
regular_path='/System/Library/Fonts/Supplemental/Arial.ttf'
title_font=ImageFont.truetype(font_path,76); label_font=ImageFont.truetype(font_path,28); brand_font=ImageFont.truetype(regular_path,25)
def wrap(draw,text,font,width):
    lines=[]; line=''
    for word in text.split():
        trial=(line+' '+word).strip()
        if draw.textbbox((0,0),trial,font=font)[2] <= width: line=trial
        else: lines.append(line); line=word
    if line: lines.append(line)
    return lines
for slug,title,kind in items:
    seed=hashlib.sha256(slug.encode()).digest()
    bg=(12+seed[0]%28,25+seed[1]%35,48+seed[2]%45); accent=(80+seed[3]%150,110+seed[4]%130,120+seed[5]%125)
    im=Image.new('RGB',(1672,941),bg); d=ImageDraw.Draw(im)
    d.polygon([(1000,0),(1672,0),(1672,941),(1270,941),(840,470)],fill=accent)
    d.ellipse((1180+seed[6],100+seed[7]//2,1580+seed[6],500+seed[7]//2),outline=(255,255,255),width=8)
    d.line((1120,690,1570,690),fill=(255,255,255),width=8)
    d.rounded_rectangle((90,80,330,135),16,fill=accent)
    d.text((112,92),kind,font=label_font,fill=(255,255,255))
    lines=wrap(d,title,title_font,850); y=220
    for line in lines: d.text((90,y),line,font=title_font,fill=(248,250,252)); y+=94
    d.text((90,850),'OutsourcingAssistant.com',font=brand_font,fill=(220,230,240))
    im.save(OUT/f'{slug}.png',optimize=True)
manifest_dir=ROOT/'publishing'/'2026-10-12'; manifest_dir.mkdir(parents=True,exist_ok=True)
entries=[]
for slug,title,kind in items:
    entries.append({'system':'Research' if kind=='RESEARCH' else 'Blog','slug':slug,'title':title,'date':'2026-10-12','source':f"app/{'research' if kind=='RESEARCH' else 'blog'}-batch-2026-10-12.ts",'route':f"/{'research' if kind=='RESEARCH' else 'blog'}/{slug}",'thumbnail':f'/oct12/{slug}.png','thumbnailTitle':title})
manifest={'date':'2026-10-12','site':'OutsourcingAssistant.com','blogCount':12,'researchCount':5,'blogRegistry':'app/data.ts','researchRegistry':'app/fleet-content.ts','blogIndex':'app/blog/page.tsx','researchIndex':'app/research/page.tsx','blogRoute':'app/blog/[slug]/page.tsx','researchRoute':'app/research/[slug]/page.tsx','items':entries}
(manifest_dir/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print(f'Generated {len(items)} thumbnails in {OUT}')
