# EM Developer Meetings — workflow guide

> **Audience.** The Extended Matrix project maintainer (currently Emanuel
> Demetrescu) and anyone who runs or contributes to public coordination
> meetings for the EM ecosystem.
>
> **Goal.** A practical, end-to-end recipe for running monthly Dev Meetings
> the blender.org module-meeting way: notes-first, decisions visible,
> async-friendly, and citable a year later. Nothing is assumed; every
> click, every URL, every file path is spelled out.
>
> **Last updated.** 2026-06-04.

---

## 1. Mental model — three phases, three artifacts

A meeting is not a one-hour Teams call. It is a **three-phase process**
that produces **three artifacts**, only one of which is "the call":

| Phase | When | Artifact | Lives at |
|---|---|---|---|
| **Pre** — async agenda gathering | T-7 to T-1 days | GitHub Discussion thread | github.com/zalmoxes-laran/ExtendedMatrix-dev-site/discussions (Meeting Notes category) |
| **Live** — the meeting itself | T-0 (the call) | HackMD pad (or equivalent) | hackmd.io — ephemeral, link shared in the Discussion thread |
| **Post** — canonical archive | T+0 to T+1 days | Markdown file on the website | extendedmatrix.org/community/dev-meetings/&lt;slug&gt;/ |

The **canonical** record — the one that gets cited in a paper, indexed by
Google, and recoverable five years from now — is the markdown file on the
website. The Discussion thread is **operational** (where the conversation
happens). The HackMD pad is **ephemeral** (notes go missing if you don't
transcribe them; that's intentional, it forces post-processing).

If you forget everything else in this guide, remember this: **the website
.md file is the meeting**. Everything else is scaffolding.

---

## 2. Cadence and identity

- **Frequency.** Monthly, third Tuesday of the month at 15:00 CET (with
  occasional skips for holidays). Adjust if needed; do not adjust
  *frequently* — predictability is the single biggest contributor to
  attendance.
- **Duration.** 45–60 minutes, hard cap. If a topic spills over, it
  becomes the first agenda item next month, not a meeting extension.
- **Audience.** Public. No invitation needed. Anyone with the Teams link
  can join, anonymous Teams access works.
- **Teams meeting URL.** Reused across meetings until it expires
  (Microsoft rotates them). The current ones are stored in the
  `meetingUrl` frontmatter field of each meeting's .md file. When the
  URL changes, regenerate from the host machine via Teams web client
  and update the next .md file before publishing.

---

## 3. Roles

You can wear all three hats yourself if attendance is small. As the
community grows, split them.

| Role | Responsibility |
|---|---|
| **Maintainer** (Emanuel) | Sets the date, owns the canonical .md, decides what merges, decides what gets archived under "Decisions". Final editorial say on the page. |
| **Note-taker** | During the call, writes in the HackMD pad. Within 24h, transcribes into the .md. Same person as the maintainer 95% of the time; rotate to spread the load when convenient. |
| **Facilitator** | During the call, keeps time, names the next speaker, calls "we agree on X, writing it down now" to force decision-making. Same person as the maintainer is OK. |

---

## 4. Phase 1 — Pre-meeting (T-7 → T-1 days)

### Step 1.1 — Open the Discussion thread (T-7)

Seven days before the meeting:

1. Go to https://github.com/zalmoxes-laran/ExtendedMatrix-dev-site/discussions
2. Click **New discussion**
3. Category: **Meeting Notes**
4. Title: `Dev meeting YYYY-MM-DD — agenda thread` (example: `Dev meeting 2026-06-23 — agenda thread`)
5. Body: paste the template from §10.1 below, fill in date/time/Teams URL.
6. Submit.
7. Copy the URL of the new thread.

### Step 1.2 — Wire the thread into the website (T-7)

1. Open `ExtendedMatrix-site/src/content/devMeetings/YYYY-MM-DD-slug.md`
   (the file you already created when the meeting was scheduled).
2. Find the commented `# discussionUrl:` line in the frontmatter.
3. Replace with `discussionUrl: "https://github.com/.../discussions/NNN"` (no `#`).
4. Commit (`docs(dev-meeting): link agenda thread for YYYY-MM-DD`), push.
5. Wait for the Astro build (~2-3 min) — the **Agenda thread ↗** button
   will appear on the meeting page and the /community list.

### Step 1.3 — Announce on the side channels (T-7)

- **Telegram** (`t.me/UserGroupEM`): drop the short version (see §10.4
  template).
- **News post on the site** (optional, monthly cadence): a single news
  entry that covers the EM Hour + the Dev Meeting for the month, as we
  did for June 2026 (`src/content/news/2026-06-04-june-meetings.md`).
- **EM Hour**: mention the upcoming Dev Meeting at the end of every EM
  Hour. Predictability builds expectation; expectation builds attendance.

### Step 1.4 — Collect agenda items (T-7 → T-1)

Participants reply to the Discussion thread with proposed topics. Each
reply should be one topic. Encourage:

> *"I'd like to discuss X. Context: <2-3 sentences>. Decision I'm hoping
> for: <option A vs option B, or 'feedback on direction'>."*

Discourage:

> "Update on Y" — better as a written status update in the thread, not a
> live meeting topic.

### Step 1.5 — Lock the agenda (T-1)

The day before the meeting:

1. Edit the OP of the Discussion thread.
2. Move the accepted agenda items into the body, in the order they'll be
   discussed.
3. Annotate each with `[15 min]`, `[5 min]`, etc. — total ≤ 50 min.
   Leave ≥ 10 min for "open floor".
4. Pin the thread (top-right pin icon) so it's the first one new
   visitors see in the category.
5. Mirror the agenda into the `.md` file's body — replace the
   "Topics expected this session" placeholder with the locked list.
6. Commit & push.

---

## 5. Phase 2 — During the meeting (T-0)

### Step 2.1 — Open the HackMD pad (T-0, 5 min before)

1. Go to https://hackmd.io/new (no signup needed for anonymous pads).
2. Title the pad `EM Dev Meeting YYYY-MM-DD — live notes`.
3. Paste the template from §10.2.
4. Set the pad to **editable by anyone with the link** (gear icon →
   Privacy → "Editable" or "Limited" with link sharing).
5. Copy the pad URL.

### Step 2.2 — Share the pad URL in three places

1. Post it as a **new reply** to the Discussion thread:

   > *"Live notes pad for today's meeting (editable by anyone with the link):
   > https://hackmd.io/&lt;hash&gt;"*

2. Drop it in the **Teams chat** when the call starts.
3. Drop it in **Telegram** when the call starts.

### Step 2.3 — Take notes in the pad, not in your head

The pad has a `## Topic 1 — …` skeleton from the template. Under each
topic, take notes as you go. Keep them telegraphic; you'll polish later.

**Hard rule: every decision goes into the pad the moment it's
articulated.** If you find yourself thinking "obvious, no need to write
it", write it anyway — the magic of decision-making in public is that
the writing-down *is* the deciding. If you can't word it, you haven't
decided yet, and the discussion needs another minute.

Use this micro-template under every topic:

```
### Topic N — <title>
Discussion (free notes):
  - ...
  - ...
Decision: <one sentence, must end with a period>
Action items:
  - @username: <verb> <object> by YYYY-MM-DD
```

### Step 2.4 — Time-box, name speakers, close cleanly

- At 50 minutes, stop accepting new topics. Use the last 10 minutes to
  re-read decisions and confirm action items.
- Before ending the call: state the **next meeting date** explicitly.
  ("Next month, same time — third Tuesday, July 21st at 15:00 CET.")
- End on time. Even when there's more to say.

---

## 6. Phase 3 — Post-meeting (T+0 → T+1 days)

### Step 3.1 — Within 1 hour: post the raw pad URL to the thread

While the call's still warm, paste the link to the (now-frozen) HackMD
pad as a reply to the Discussion thread:

> *"Raw live notes: &lt;hackmd URL&gt;. I'll transcribe into the canonical
> archive within 24 hours and post the link here."*

This is a contract with the people who couldn't attend: they know where
to look, and they know to be patient until tomorrow.

### Step 3.2 — Within 24 hours: transcribe into the .md

1. Open `ExtendedMatrix-site/src/content/devMeetings/YYYY-MM-DD-slug.md`.
2. **Update frontmatter** (the structured side of the page):
   - `attendees: ["Name (affiliation)", "Name (affiliation)", ...]`
     — names of people who actually attended, not the invite list.
   - `decisions: ["Decision 1.", "Decision 2.", ...]`
     — one item per decision, polished to read out of context.
   - `actionItems: ["@user: verb object by YYYY-MM-DD", ...]`
     — copy verbatim from the pad if they're already in the right shape.
   - `tldr: "One-sentence summary of what happened."`
     — write this LAST, after you've transcribed the body.
   - `upcoming: false`
   - `videoUrl: "..."` if there was a recording (rare for dev meetings).
   - `nextMeeting: YYYY-MM-DDTHH:MM:00+02:00` — the next date.
3. **Polish the body**:
   - Replace the `## Topics expected this session` section with
     `## What we discussed`.
   - For each topic, keep the per-topic narrative; clean up the
     telegraphic notes into prose; explicitly write the **Decision** and
     **Action items** under each topic.
   - Remove "Decision (to be filled in after the meeting)" placeholders.
4. Commit:

   ```bash
   cd ~/Documents/GitHub/ExtendedMatrix-site
   git add src/content/devMeetings/YYYY-MM-DD-slug.md
   git commit -m "docs(dev-meeting): transcribe YYYY-MM-DD meeting"
   git push origin main
   ```
5. Wait for the auto-build (~2-3 min). The page at
   `extendedmatrix.org/community/dev-meetings/<slug>/` is now live with
   the structured side cards filled in.

### Step 3.3 — Close the loop on the Discussion thread

Reply to the thread:

> *"Canonical archive: https://extendedmatrix.org/community/dev-meetings/YYYY-MM-DD-slug/
> TL;DR + decisions + action items are filled in. Follow-up questions
> welcome — replies here, the page on the website is read-only."*

Then **unpin** the thread (it's now historical), and pin the *next*
month's thread when you create it.

### Step 3.4 — Cross-post the TL;DR to Telegram

A single short message in the Telegram group:

> *"📝 **Dev meeting recap — YYYY-MM-DD**
> &lt;TL;DR string from the .md&gt;
> Full notes: https://extendedmatrix.org/community/dev-meetings/<slug>/
> Discussion: https://github.com/.../discussions/NNN"*

### Step 3.5 — Update any touched DPs

If a decision created, killed, or advanced a DP on dev.extendedmatrix.org,
edit the relevant `src/content/devprojects/dp-NN-*.md` to reflect that
status (mark `status: "in-dev"`, add a `notes:` line referencing the
meeting URL, etc.). Commit on the dev-site repo, push.

---

## 7. Worked example — the June 23, 2026 meeting

Concrete walk-through of the steps above, with the actual artifacts.

### June 16 (T-7)

- Maintainer opens Discussion thread #1 (hypothetical):
  `Dev meeting 2026-06-23 — agenda thread`
- Maintainer edits `src/content/devMeetings/2026-06-23-coordination.md`,
  replaces the commented `# discussionUrl:` line with the real URL,
  commits with `docs(dev-meeting): link agenda thread for 2026-06-23`,
  pushes.
- Maintainer posts the short Telegram announcement (template §10.4).

### June 16 → June 22 (T-7 → T-1)

Replies trickle in on the thread:

- @enzococca: *"I'd like a 15-min slot on Sub-3 timing — PR target,
  ETA, whether to keep on `EM-tools_v1.6.0_dev` or a side branch."*
- @paola: *"Could we discuss whether the Mappings Registry (DP-61)
  belongs on a community subdomain or a sub-path of the main site?"*
- @luca: *"Quick announcement on the SpatiaLite fixtures landing in
  EM-tools_v1.6.0_dev (commit 6fc4b05)."*

### June 22 (T-1)

Maintainer locks the agenda:

```
1. Announcements (10 min)
   - EM 1.5 LTS LTS commitment retrospective (5 min)
   - SpatiaLite fixtures + scaffolding migration (luca, 5 min)
2. Sub-3 timing (15 min, @enzococca)
3. DP-61 — subdomain decision (15 min, @paola)
4. How to contribute (always-on, ~10 min)
5. Open floor (~5 min)
```

Pinned thread, agenda mirrored into the .md body, push.

### June 23 (T-0, 15:00 CET)

- 14:55 — Maintainer opens hackmd.io/new, pastes §10.2 template,
  shares URL on the thread, in Teams chat, and in Telegram.
- 15:00 — call starts. Five people in the room.
- During the call, notes go into the pad under each topic. Decisions
  written immediately when articulated.
- 15:55 — maintainer reads decisions back, confirms action items with
  explicit owners + dates, states "Next meeting July 21 at 15:00 CET",
  ends the call.

### June 23, 16:00 (T+1 hour)

Maintainer replies to the thread with the raw HackMD URL.

### June 24 (T+1 day)

Maintainer transcribes:

```yaml
attendees:
  - "Emanuel Demetrescu (CNR-ISPC)"
  - "Enzo Cocca"
  - "Paola R. (Università di Padova)"
  - "Luca M. (CNR-ISPC)"
  - "Diego R."
decisions:
  - "Sub-3 (pyArchInit reverse export) targets EM-tools_v1.6.0_dev directly; ETA 2 weeks (PR by 2026-07-08)."
  - "DP-61 Mappings Registry uses mappings.extendedmatrix.org (not registry.* or bridge.*) and GitHub Pages hosting."
  - "DP-61 PR review policy: one maintainer ack required; auto-merge after CI pass NOT enabled in v1."
actionItems:
  - "@enzococca: open Sub-3 PR on EM-tools_v1.6.0_dev by 2026-07-08."
  - "@zalmoxes-laran: file scaffolding for em-mappings repo + extendedmatrix DNS record for mappings subdomain by 2026-07-14."
  - "@paola: write a 1-page rationale for DP-61 review policy choice by 2026-07-07."
tldr: "Sub-3 reverse export greenlit for 2026-07-08 PR. DP-61 Mappings Registry direction locked: mappings.extendedmatrix.org subdomain, GitHub Pages, one-maintainer-ack PR policy."
nextMeeting: 2026-07-21T15:00:00+02:00
upcoming: false
```

Polish body, commit, push, recap on Telegram, update DP-61 from `concept` to `in-dev` on the dev-site, done.

---

## 8. Quick reference — one-page cheat sheet

| When | Who | Where | Action |
|---|---|---|---|
| **T-7** | Maintainer | github.com/.../discussions | New thread, category Meeting Notes, paste §10.1 template |
| **T-7** | Maintainer | ExtendedMatrix-site repo | Wire `discussionUrl` into the meeting .md, push |
| **T-7** | Maintainer | Telegram, News, EM Hour | Short announcement (§10.4 template) |
| **T-7 → T-1** | All | The thread | Replies = proposed topics |
| **T-1** | Maintainer | The thread + the .md | Lock agenda, pin thread, push |
| **T-0, T-5min** | Note-taker | hackmd.io/new | Open pad, paste §10.2 template, set permissions, copy URL |
| **T-0, T+0** | Note-taker | Thread, Teams chat, Telegram | Drop pad URL in three places |
| **T-0** | All | Teams + pad | Call: discuss, decide, write decisions live |
| **T-0, end** | Facilitator | The call | Read decisions back, confirm actions, state next date |
| **T+1h** | Note-taker | The thread | Post the raw HackMD URL as a reply |
| **T+1d** | Note-taker | ExtendedMatrix-site repo | Transcribe pad → .md frontmatter + body, commit, push |
| **T+1d** | Note-taker | The thread | Reply with canonical URL, unpin |
| **T+1d** | Note-taker | Telegram | Cross-post TL;DR + URL |
| **T+1d** | Maintainer | ExtendedMatrix-dev-site repo | Update touched DPs, commit, push |

---

## 9. Community engagement — turning the meeting into a community asset

A meeting without an audience is just a phone call. A meeting *with* an
audience is governance. These are the levers that grow attendance and
participation, in roughly increasing order of effort.

### 9.1 Predictability beats novelty

The single most powerful thing you can do is **run the meeting on the
exact same day and time, every month, without exception, for a year**.
People learn the rhythm. They set calendar holds. They protect the slot.
Skipping a month resets the muscle. Moving the slot resets the muscle.
Cancelling-but-not-rescheduling is the worst outcome — never do this;
always reschedule explicitly with at least 7 days notice.

### 9.2 Lower the cost of attending

- **Public Teams link, anonymous access**: do NOT require a Microsoft
  account, ever. Confirmed working today.
- **45-60 minutes hard cap**: people will protect a one-hour slot they
  won't protect a "1.5–2 hour" one.
- **Async-first**: the Discussion thread before/after means people who
  can't attend can still participate. Repeat this every time:
  *"Couldn't make it? Reply on the thread, we'll address it before
  next meeting."*
- **Time zone**: 15:00 CET catches most of Europe (incl. the UK) and
  the US east coast (09:00 ET). Drift the slot by no more than 1h if
  you need to accommodate a contributor in a different zone, and only
  for one meeting at a time.

### 9.3 Make participation rewarding, not extractive

The single biggest reason people stop attending recurring meetings is
that they showed up, contributed, and got no feedback or credit.
Cheap fixes:

- **Name everyone in the attendees list of the .md**. This is the
  permanent, citable record. Affiliations help — getting your
  institution mentioned on an extendedmatrix.org page is a small but
  real reward.
- **Credit by name in decisions**: *"DP-61 subdomain decision: paola
  argued the case for mappings.* over registry.*; agreed."* Naming is
  the cheapest currency you have.
- **Action items have specific owners**: `@username: verb by date`,
  not "we should do X". Specific ownership = real follow-up = visible
  contribution = motivation to come back.
- **Acknowledge async contributions too**: someone who can't attend
  but writes a thoughtful comment in the thread gets the same credit
  in the .md ("Async contribution from @luca on Topic 3: ...").

### 9.4 Reduce friction for "just listening"

A surprisingly large share of dev meeting attendance is silent. People
who just want to know what's going on. Make them welcome:

- **Standing "How to contribute" slot** (already in the template):
  signals that newcomers are expected, not tolerated.
- **No-attribution agenda items are allowed**: if someone DM's the
  maintainer with a topic they want raised but don't want to be named
  for, the maintainer raises it as their own.
- **No mandatory talking**: the call doesn't go around the room. Speak
  if you want to.

### 9.5 Promote through the right channels

Cadence is everything. Rough monthly rhythm for the EM ecosystem:

- **T-14 days** — news post on extendedmatrix.org (combined EM Hour +
  Dev Meeting if both fall in the month). Indexed by Google, picked up
  by RSS readers, cite-able.
- **T-7 days** — Discussion thread opened, Telegram short announcement.
- **T-3 days** — Telegram reminder ("3 days to the meeting, agenda has
  3 topics, here's the link").
- **T-1 day** — Telegram pin + agenda lock notification.
- **T-30 min** — Telegram bump in the group ("starting in 30 min, link
  is XYZ").
- **T+1 day** — Telegram recap + canonical URL.

Avoid: cross-posting to mailing lists you don't already own, X/Twitter
threads (they decay), random Discord servers without context. The EM
audience is *small and specific*; broadcast to the channels they
actually read.

### 9.6 Vary the format occasionally

Pure dev coordination meetings are a great default but get monotonous.
Once every 3-4 months, swap the format:

- **Case-study spotlight** — invite a community member to present a
  reconstruction project that used EM, 20-min talk + 25-min Q&A. The
  EM Tools developers attend as audience.
- **Onboarding session** — open the meeting to first-timers
  explicitly, walk through how to set up EM Tools from scratch, take
  questions. Skip the dev coordination agenda entirely that month.
- **Roadmap retrospective** — quarterly, look back at the last 3
  meetings' decisions and assess what stuck vs what slipped. Honest
  retrospectives are unusual in open-source communities; doing them
  builds credibility.

### 9.7 Lean on ORCID and academic citation

This is specific to EM (a research project), and it's a real
differentiator vs typical open-source projects:

- **Push attendees to use their ORCID** in the attendees list (as
  DP-59 lands). Academic identity is a different currency than
  GitHub identity; honor it.
- **Make the .md citable**: each meeting page has a stable URL. The
  attendees of a meeting where a decision was made *can cite that URL
  in their academic CV*. ("Contributed to public dev meeting at
  Extended Matrix project, 2026-06-23, https://...".)
- **Periodic Zenodo deposits** (DP-57 dependency): once a year, bundle
  the year's worth of meetings into a single Zenodo deposit with a
  DOI. The DOI is then citable in a way the URL alone is not.

### 9.8 Triggers for engagement bursts

A normal month gets steady-state attendance. Some months get a burst
because something specific happened. Lean into those:

- **A new feature shipped**: dedicate one topic to "what's in v1.6.0,
  what's not, what's planned for v1.7". Users come for the news.
- **A milestone PR merged**: like Enzo's PR #28. Invite the
  contributor explicitly to walk through it for 10 min.
- **A funded project kicks off**: like StratiGraph (ECCCH). One
  meeting where the funded work is presented and the community asks
  "where will this connect with my work?".
- **A controversial decision is on the table**: don't hide it; flag
  it on the agenda. *"Topic 3 — DP-61 PR review policy. Options on
  the table: auto-merge / one ack / ORCID-only. We'll decide today."*
  Decision-driven meetings draw a bigger audience than update-driven
  meetings.

### 9.9 Anti-patterns to actively avoid

- ❌ **Long agendas**: 5 topics × 15 min is the cap. Anything more,
  defer.
- ❌ **Meetings that produce no decisions**: if the call passed and
  nothing was decided, the audience learns the meeting isn't worth
  attending. Force at least one decision per meeting — even if it's
  "decided to postpone the decision to next month, owner X to gather
  more data".
- ❌ **Walls of text in the .md body**: keep prose tight, push detail
  into the structured side cards. Readers should be able to scan a
  meeting in 90 seconds.
- ❌ **Hiding negative outcomes**: if a project missed a milestone,
  say so. Transparency builds trust faster than spin.
- ❌ **Inviting "VIPs" for show**: only invite people who'll
  contribute. Otherwise the meeting feels performative and regulars
  notice.

---

## 10. Templates

### 10.1 — Discussion thread opening post (T-7)

Title: `Dev meeting YYYY-MM-DD — agenda thread`
Category: **Meeting Notes**
Body:

```markdown
**When:** YYYY-MM-DD at 15:00 CET (~14:00 UTC)
**Where:** Teams call, anonymous access OK — link in the meeting page
**Page on the site:** https://extendedmatrix.org/community/dev-meetings/YYYY-MM-DD-slug/
**Format:** notes-first, blender.org-module-meeting style

## Standing agenda

1. Announcements & releases since the last meeting.
2. PRs and proposals on the table.
3. Architectural decisions to discuss.
4. How to contribute (always-on slot for first-timers).
5. Open floor.

## Propose a topic

Reply to this thread with a topic you'd like to discuss. One topic per
reply. Format:

> *I'd like to discuss X. Context: <2-3 sentences>. Decision I'm
> hoping for: <option A vs option B, or 'feedback on direction'>.*

I'll lock the agenda the day before the meeting and pin the chosen
topics at the top of this post.

## Couldn't make it?

Reply here with your input — I'll raise it during the call and we'll
loop you in on the decision via this thread.
```

### 10.2 — HackMD pad template (T-0)

```markdown
# EM Dev Meeting YYYY-MM-DD — live notes

**Editable by anyone with the link.** Take notes here as the call goes;
the maintainer transcribes to extendedmatrix.org within 24 hours.

**Agenda (from the locked thread):**
1. ...
2. ...
3. ...

**Attendees (write your name as you join):**
- Emanuel Demetrescu (CNR-ISPC)
- ...

---

## Topic 1 — <title>

Discussion (free notes, telegraphic OK):
- ...
- ...

**Decision:** <one sentence, ends with a period>

**Action items:**
- @user: <verb> <object> by YYYY-MM-DD

---

## Topic 2 — <title>

Discussion:
- ...

**Decision:**

**Action items:**

---

## Topic 3 — <title>

Discussion:
- ...

**Decision:**

**Action items:**

---

## Open floor

- ...

---

## Decisions summary (read aloud at the end)

1. ...
2. ...
3. ...

## Action items summary (read aloud at the end)

- @user: ... by YYYY-MM-DD
- @user: ... by YYYY-MM-DD

## Next meeting

YYYY-MM-DD, 15:00 CET. Same Teams link.
```

### 10.3 — Markdown file frontmatter (T+1)

```yaml
---
title: "Dev coordination — <month-or-theme> sync"
date: YYYY-MM-DDT15:00:00+02:00
attendees:
  - "Emanuel Demetrescu (CNR-ISPC)"
  - "Name (Affiliation)"
decisions:
  - "<Decision 1, ends with a period.>"
  - "<Decision 2, ends with a period.>"
actionItems:
  - "@user: <verb> <object> by YYYY-MM-DD."
upcoming: false
meetingUrl: "https://teams.microsoft.com/meet/..."
discussionUrl: "https://github.com/zalmoxes-laran/ExtendedMatrix-dev-site/discussions/NNN"
videoUrl: "https://www.youtube.com/watch?v=..."  # optional
tldr: "One-sentence summary of what happened. Newest concrete outcome first."
nextMeeting: YYYY-MM-DDT15:00:00+02:00
---

## What we discussed

### Topic 1 — <title>

<Prose narrative, 1-3 short paragraphs. Polish from the HackMD pad.>

**Decision:** <copied from frontmatter, repeated here in context.>

**Action items:**
- @user: <as above>

### Topic 2 — <title>

...

## Next meeting

YYYY-MM-DD at 15:00 CET. Agenda thread opens 7 days before.
```

### 10.4 — Telegram short announcement (T-7)

```
🛠️ **EM Dev Meeting** — <weekday> <date>, 15:00 CET

Agenda gathering on GitHub Discussions:
https://github.com/zalmoxes-laran/ExtendedMatrix-dev-site/discussions/NNN

Page on the site:
https://extendedmatrix.org/community/dev-meetings/YYYY-MM-DD-slug/

Teams web, anonymous OK, no recording. Drop topics in the thread above
by <T-1 day>; I'll lock the agenda the day before.
```

### 10.5 — Telegram recap (T+1)

```
📝 **Dev meeting recap — YYYY-MM-DD**

<TL;DR from the .md frontmatter>

Decisions:
• <Decision 1>
• <Decision 2>

Full notes: https://extendedmatrix.org/community/dev-meetings/YYYY-MM-DD-slug/
Discussion: https://github.com/.../discussions/NNN

Next meeting: <YYYY-MM-DD> at 15:00 CET.
```

---

## 11. FAQ

**Q. What if no one shows up?**
A. Run the meeting anyway, alone for the first 10 minutes. Then write a
.md with `attendees: ["Emanuel Demetrescu (CNR-ISPC)"]` and a
`tldr: "No-show meeting; no decisions taken. Topics rolled to next
month."`. The point is to keep the rhythm; one bad attendance month
doesn't kill a meeting series, but skipping a month does.

**Q. What if a topic spills over the time budget?**
A. The facilitator says "we're parking this — it becomes Topic 1 next
month". Record that in the .md: *"Action item: @maintainer to put X
as Topic 1 of YYYY-MM-DD meeting"*.

**Q. What if an emergency comes up between meetings?**
A. Don't schedule a separate emergency meeting unless it's truly
critical (security, broken release). Use the Discussion thread + a
follow-up note in the next regular meeting. Emergency meetings
fragment attention; the regular cadence absorbs almost everything.

**Q. What if someone wants to attend but can't make any meeting?**
A. They participate async via the thread. The .md attendees list can
include `"Name (async)"` to credit their contribution explicitly.

**Q. What if a decision was made at a meeting and we need to revisit it
six months later?**
A. Don't edit the original .md (it's the historical record). Make the
new decision at a new meeting, and have the new .md's body say
*"Supersedes the YYYY-MM-DD decision on X."* Cross-link the two.

**Q. Can the meeting be recorded?**
A. Default policy: **no recording**, to lower the bar for participants
to speak freely. If you ever do record (e.g. for a case-study
spotlight), announce it explicitly in the agenda *one week before*
and link the video in `videoUrl` after the fact.

**Q. What about private internal meetings (steering committee,
embargoed topics)?**
A. They don't go through this workflow at all. Keep them in a
separate, private channel (e.g. a private repo or an email thread).
The dev meeting workflow is for *public* coordination only.

**Q. What about meetings in other languages?**
A. The default is English (it's the lingua franca of the community).
Topics can be discussed in Italian, Spanish, etc. during the call,
but the .md transcription is English. Pad notes can be in any
language as long as they're readable enough for the maintainer to
transcribe.

---

## 12. Checklist — laminated card version

**Before (T-7):**
- [ ] New Discussion thread, Meeting Notes category, paste §10.1 template
- [ ] Wire `discussionUrl` into the .md, push
- [ ] Telegram short announcement (§10.4)

**Before (T-1):**
- [ ] Lock agenda in the thread (edit OP, add time-boxes, pin)
- [ ] Mirror agenda into .md body, push

**Day of (T-0):**
- [ ] hackmd.io/new, paste §10.2 template
- [ ] Set pad to editable-with-link
- [ ] Post pad URL in: thread, Teams chat, Telegram
- [ ] Take live notes
- [ ] Read decisions back at the end
- [ ] State next meeting date

**After (T+1h):**
- [ ] Post raw HackMD URL as thread reply

**After (T+1d):**
- [ ] Transcribe pad → .md frontmatter + body
- [ ] Polish, commit, push
- [ ] Reply to thread with canonical URL
- [ ] Unpin thread; pin next month's
- [ ] Telegram recap (§10.5)
- [ ] Update touched DPs on dev-site

---

*This guide is itself the output of a meeting in spirit — written down
so the next maintainer can pick it up without asking. Suggestions for
improvement → Discussion thread under Meeting Notes category, or a PR
on this file.*
