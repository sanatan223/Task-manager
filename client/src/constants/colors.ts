export const themeColors = {
  light: {
    // --- 60% DOMINANT ---
    appBg: "#EFF6FF", // A very pale, icy blue

    // --- 30% SECONDARY ---
    sectionBg: "#FFFFFF",     // Pure white to lift off the blue background
    formBg: "#DBEAFE",        // Soft light blue for inputs and secondary areas
    textPrimary: "#1E3A8A",   // Deep navy blue for high readability
    textSecondary: "#64748B", // Muted slate blue for supporting text

    // --- 10% ACCENT ---
    accent: "#2563EB",          // Vibrant, pure primary blue for buttons/links
    importantTextBg: "#BFDBFE", // Slightly darker pale blue for highlighting
    importantText: "#1D4ED8",   // Strong, vivid dark blue to sit on the highlight
  },
  
  dark: {
    // --- 60% DOMINANT ---
    appBg: "#0B1120", // Deep midnight blue

    // --- 30% SECONDARY ---
    sectionBg: "#2D1657",     // Rich dark blue to separate structural sections
    formBg: "#1E3A8A",        // Slightly lighter navy for form fields
    textPrimary: "#EFF6FF",   // Very pale icy blue (inverts the light theme base)
    textSecondary: "#94A3B8", // Muted grayish-blue to fall back in the visual hierarchy

    // --- 10% ACCENT ---
    accent: "#38BDF8",          // Bright sky blue to pop against the dark backgrounds
    importantTextBg: "#C084FC", // Deep, vivid blue for highlighting
    importantText: "#000000",   // Near-white light blue for maximum contra
  }
} as const;

// Optional: Extract types automatically for your components if you ever need them
export type ThemeMode = keyof typeof themeColors;
export type ThemeColor = keyof typeof themeColors['light'];