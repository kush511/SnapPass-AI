/**
 * @description Generate a 6-digit OTP and return it as a string.
 * @returns {string} 6-digit OTP (may include leading zeros)
 */
export function generateOTP() {
  const num = Math.floor(Math.random() * 1_000_000); // 0..999999
  return String(num).padStart(6, '0');
}
