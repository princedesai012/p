"use server";

import { formatFuelData } from "@/ai/flows/format-fuel-data";

/**
 * Takes raw fuel data and formats it for display.
 * This version prioritizes speed by using direct parsing and only falls back to AI for complex cases.
 * @param city - The city for which to format the price.
 * @param fuelType - The type of fuel (e.g., "Petrol", "Diesel").
 * @param rawFuelData - A string containing the raw, potentially messy data.
 * @returns A formatted string for display or an error message.
 */
export async function getFormattedFuelPrice(
  city: string,
  fuelType: string,
  rawFuelData: string
): Promise<string> {
  try {
    const parsed = JSON.parse(rawFuelData);
    const date = new Date(parsed.last_updated);
    const formattedDate = date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    return `Price: ${parsed.price} INR\nUnit: Per Liter\nLast Updated: ${formattedDate}`;
  } catch (error) {
    console.warn(`Direct parsing failed for ${city} ${fuelType}, falling back to AI. Error:`, error);
    // Fallback to AI formatting only if direct parsing fails
    try {
      const result = await formatFuelData({ city, fuelType, rawFuelData });
      return result.formattedFuelData;
    } catch (aiError) {
      console.error(`Error formatting fuel data for ${city} ${fuelType} with AI:`, aiError);
      return "Price: Error\nUnit: Per Liter\nLast Updated: N/A";
    }
  }
}
