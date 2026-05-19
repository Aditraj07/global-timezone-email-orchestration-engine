# 🌍 Global Timezone Email Orchestration Engine

Production-grade timezone-aware email orchestration system built using **n8n** and **JavaScript** for large-scale global email marketing campaigns.

The system intelligently delivers emails according to the recipient's **local timezone**, prevents duplicate sends using **idempotent logic**, and maintains **delivery tracking** via spreadsheet synchronization.

---

## 🚀 Features

- 🌎 Timezone-aware email delivery
- ⏰ Local business-hour email scheduling
- 🔁 Idempotent duplicate-send prevention
- 📊 Spreadsheet-driven campaign orchestration
- ⚡ Automated execution using n8n workflows
- 🧠 JavaScript-based timezone processing
- 📬 SMTP email dispatch system
- 📝 Delivery state tracking and updates

---

## 🏗️ System Architecture

The workflow follows a production-grade orchestration pipeline:

1. **Schedule Trigger**
   - Initiates automated execution.

2. **Recipient Data Retrieval**
   - Fetches recipient data from spreadsheet.

3. **Timezone Processing**
   - JavaScript nodes calculate timezone eligibility.

4. **Content Merge**
   - Campaign content is merged with recipient data.

5. **Eligibility Validation**
   - Checks whether recipient already received email.

6. **Delivery Window Filter**
   - Ensures local delivery time compliance.

7. **Email Dispatch**
   - Sends email through SMTP.

8. **Spreadsheet Update**
   - Updates delivery state and send logs.

---

## 📂 Project Structure

```text
global-timezone-email-orchestration-engine/
│
├── docs/
│   └── architecture.md
│
├── screenshots/
│   └── workflow-architecture.png
│
├── src/
│   ├── timezone-processor.js
│   ├── eligibility-check.js
│   ├── delivery-window-filter.js
│   └── spreadsheet-updater.js
│
├── workflow/
│   └── global-timezone-email-orchestration-workflow.json
│
├── README.md
└── LICENSE
