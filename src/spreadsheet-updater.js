/**
 * Spreadsheet Update Service
 * Handles delivery state updates
 * after email execution.
 */

function updateDeliveryStatus(record, status) {
  return {
    ...record,
    deliveryStatus: status,
    updatedAt: new Date().toISOString()
  };
}

module.exports = { updateDeliveryStatus };
