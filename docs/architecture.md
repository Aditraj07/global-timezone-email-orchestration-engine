# System Architecture

## Overview

This project is a production-grade timezone-aware email orchestration engine built using n8n and JavaScript for global-scale marketing automation.

The workflow ensures recipients receive emails during their local business hours while preventing duplicate sends and maintaining delivery state tracking.

---

## Workflow Pipeline

1. **Schedule Trigger**
   - Initiates automated execution.

2. **Recipient Data Retrieval**
   - Fetches recipient records from spreadsheet.

3. **Timezone Processing**
   - Converts recipient timezone and local delivery timing.

4. **Content Sheet Merge**
   - Combines email content with recipient data.

5. **Eligibility Validation**
   - Prevents duplicate email delivery.

6. **Delivery Window Filtering**
   - Ensures emails are sent during local business hours.

7. **Email Dispatch**
   - Sends campaign emails.

8. **Delivery State Update**
   - Appends execution state back to spreadsheet.

---

## Core Features

- Global timezone-aware email delivery
- Idempotent email execution
- Spreadsheet-driven orchestration
- Automated workflow scheduling
- Delivery tracking and state management
- Modular JavaScript processing layer

---

## Tech Stack

- **n8n**
- **JavaScript**
- **Spreadsheet Automation**
- **SMTP Email Delivery**
