// Central business configuration for Bake Brothers.
// Fill in verified details only. Empty strings show clearly-marked placeholders.
export const site = {
  name: "Bake Brothers",
  area: "Punjabi Bagh, Delhi, India",
  // Digits only, with country code, e.g. "919876543210". Leave empty until verified.
  whatsappNumber: "",
  phone: "", // verified display phone, e.g. "+91 98765 43210"
  hours: "", // verified opening hours text
  instagramUrl: "", // verified official Instagram URL
  streetAddress: "", // verified street address
  mapQuery: "Punjabi Bagh, Delhi, India",
};

export const defaultMessage =
  "Hi Bake Brothers! I'd like to enquire about your bakery products. Could you please share the details?";

export function whatsappLink(product?: string): string | null {
  if (!site.whatsappNumber) return null;
  const text = product
    ? `Hi Bake Brothers! I'd like to enquire about your ${product}. Could you please share the details?`
    : defaultMessage;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
