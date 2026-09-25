// Formatting and Calculation Utilities for Grand Horizon Hotel & Resort

/**
 * Format a number into Indian Rupee representation (e.g., ₹12,500)
 */
export function formatPrice(amount) {
  if (typeof amount !== "number" || isNaN(amount)) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Calculate difference in days between two ISO date strings (YYYY-MM-DD)
 */
export function calculateNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const inDate = new Date(checkIn);
  const outDate = new Date(checkOut);
  const diffTime = outDate.getTime() - inDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

/**
 * Calculate detailed pricing breakdown
 */
export function calculateBookingEstimate(roomPrice, nights, roomsCount = 1, promoDiscountPct = 0) {
  const safeNights = Math.max(1, nights || 1);
  const safeRooms = Math.max(1, roomsCount || 1);
  const baseSubtotal = (roomPrice || 0) * safeNights * safeRooms;
  
  const discountAmount = Math.round((baseSubtotal * promoDiscountPct) / 100);
  const discountedSubtotal = baseSubtotal - discountAmount;
  
  // Luxury Hospitality GST in India (typically 12% for hotels)
  const gstTax = Math.round(discountedSubtotal * 0.12);
  // Service charge (5%)
  const serviceCharge = Math.round(discountedSubtotal * 0.05);
  const grandTotal = discountedSubtotal + gstTax + serviceCharge;

  return {
    nights: safeNights,
    roomsCount: safeRooms,
    baseSubtotal,
    discountAmount,
    discountedSubtotal,
    gstTax,
    serviceCharge,
    grandTotal
  };
}

/**
 * Return today's date formatted as YYYY-MM-DD for min date inputs
 */
export function getTodayDateString() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Return date N days from today formatted as YYYY-MM-DD
 */
export function getFutureDateString(daysAhead = 1) {
  const future = new Date();
  future.setDate(future.getDate() + daysAhead);
  const yyyy = future.getFullYear();
  const mm = String(future.getMonth() + 1).padStart(2, "0");
  const dd = String(future.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
