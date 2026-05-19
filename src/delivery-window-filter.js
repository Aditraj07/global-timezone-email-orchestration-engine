/**
 * Delivery Window Filter
 * Ensures emails are delivered only
 * during recipient local business hours.
 */

function isWithinDeliveryWindow(localHour) {
  const startHour = 9;
  const endHour = 18;

  return localHour >= startHour && localHour <= endHour;
}

module.exports = { isWithinDeliveryWindow };
