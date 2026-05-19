/**
 * Email Eligibility Check
 * Prevents duplicate sends and validates
 * recipient delivery conditions.
 */

function checkEligibility(recipient) {
  if (!recipient.email) {
    return false;
  }

  if (recipient.status === 'sent') {
    return false;
  }

  return true;
}

module.exports = { checkEligibility };
