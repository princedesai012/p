"use server";

import { formatFuelData } from "@/ai/flows/format-fuel-data";

/**
 * Takes raw fuel data and formats it for display using a GenAI flow.
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
    const result = await formatFuelData({ city, fuelType, rawFuelData });
    return result.formattedFuelData;
  } catch (error) {
    console.error(`Error formatting fuel data for ${city} ${fuelType}:`, error);
    // Fallback to a simple format if AI fails
    try {
      const parsed = JSON.parse(rawFuelData);
      return `Price: ${parsed.price} INR\nUnit: Per Liter\nLast Updated: N/A`;
    } catch {
       return "Price: Error\nUnit: Per Liter\nLast Updated: N/A";
    }
  }
}
