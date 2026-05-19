# System Architecture

This project is a timezone-aware email orchestration engine designed for global email marketing automation.

## Workflow Overview

1. Schedule trigger initiates execution.
2. Recipient data is fetched from spreadsheet.
3. JavaScript nodes process timezone logic.
4. Content sheet is merged with recipient data.
5. Send eligibility is checked.
6. Time filter validates local delivery time.
7. Email is dispatched.
8. Delivery state is appended back to spreadsheet.

## Core Objectives

- Timezone-aware delivery
- Idempotent email execution
- Global campaign orchestration
- Automated workflow execution
- Spreadsheet-driven campaign management
