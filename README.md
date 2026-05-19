# 🌍 Global Timezone Email Orchestration Engine

Production-grade timezone-aware email orchestration system built using **n8n** and **JavaScript** for large-scale global email marketing campaigns.

Designed for production environments where emails must be delivered at **recipient-local time**, while ensuring **idempotent execution**, **state tracking**, and **zero duplicate sends**.

---

# 🚀 Project Overview

This system automates global marketing email execution by intelligently aligning email delivery with each recipient’s **local timezone**.

Instead of sending campaigns at one fixed global timestamp, the engine dynamically determines whether a recipient should receive an email based on:

- Local timezone
- Local execution time window
- Campaign execution days
- Delivery status
- Duplicate prevention checks

The orchestration engine was designed for **real production email marketing workflows**, enabling reliable and scalable campaign automation across multiple regions.

---

# ⚙️ Core Features

## 🌐 Timezone-Aware Email Scheduling
Dynamically calculates recipient-local execution timing and delivers emails at approximately **9:30 AM local time** regardless of geography.

### Example
- India → 9:30 AM IST
- USA → 9:30 AM EST/PST
- UK → 9:30 AM GMT

This ensures campaigns feel locally timed instead of globally broadcasted.

---

## 📆 Multi-Day Campaign Execution Logic
Restricts campaign execution to specific marketing days:

- Monday
- Wednesday
- Friday

This prevents over-emailing and aligns with campaign schedules.

---

## 🔒 Idempotent Processing (Duplicate Prevention)
Implements deterministic state management to ensure:

> Every email is sent exactly once.

Before execution, the system validates whether a recipient has already received the campaign.

This prevents:

- Duplicate emails
- Resend failures
- Data inconsistencies
- Customer spam risk

---

## ⚡ Buffered Time Window Execution
Instead of relying on exact timestamp matching, the workflow uses a **buffer execution window**.

This improves resilience against:

- Workflow latency
- Execution delays
- Scheduling inconsistencies
- Temporary system slowdowns

---

## 📊 Real-Time Delivery Tracking
Delivery metadata is automatically updated in the source tracking system.

Tracked fields include:

- Sent status
- Timestamp
- Execution metadata

This enables:

- Campaign monitoring
- Delivery auditing
- Marketing analytics
- Retry prevention

---

# 🏗️ System Architecture

```text
Scheduler Trigger (Every 5 Minutes)
              ↓
Excel Data Ingestion
              ↓
Data Transformation Layer
(JavaScript Logic)
              ↓
Content Data Merge
              ↓
State Validation
(Unsent Records Only)
              ↓
Timezone Validation Engine
(Local Time ≈ 9:30 AM)
              ↓
Email Dispatch Service
              ↓
Status Update + Tracking
```

---

# 🧠 Workflow Execution Logic

The orchestration engine continuously polls data and evaluates each record against multiple validation conditions.

A record is processed only when:

✅ Valid campaign day (Mon/Wed/Fri)

✅ Recipient local time ≈ 9:30 AM

✅ Email status = Pending

✅ Not already processed

Only valid records are dispatched.

This guarantees:

- Accurate delivery timing
- Deterministic execution
- High reliability
- Duplicate prevention

---

# 🛠️ Technology Stack

| Technology | Purpose |
|------------|----------|
| n8n | Workflow orchestration |
| JavaScript | Business logic & data transformation |
| Spreadsheet / Excel | Source of truth & tracking |
| SMTP | Email delivery |
| Cron Scheduling | Automated execution |

---

# 📂 Repository Structure

```text
global-timezone-email-orchestration-engine/
│
├── workflow/
│   └── global-timezone-email-orchestration-workflow.json
│
├── screenshots/
│
├── docs/
│
├── src/
│
└── README.md
```

---

# 🧪 Production Validation

The system was validated through:

- Multi-timezone scheduling tests
- Large dataset execution simulation
- Duplicate prevention testing
- Delayed execution resilience checks
- Delivery timing validation

---

# 🎯 Business Outcome

This system enabled:

✅ Accurate timezone-based campaign execution

✅ Reliable automated email delivery

✅ Zero duplicate email sends

✅ Production-grade scheduling reliability

✅ Scalable marketing automation

---

# 🔮 Future Improvements

Potential production enhancements:

- Queue-based email dispatch
- Retry mechanisms
- Failure alerting
- Analytics dashboard
- AI-powered send-time optimization
- Dynamic campaign segmentation

---

# 👨‍💻 Author

**Adit Raj**

AI Engineer | Automation Engineering | GenAI | Workflow Systems
