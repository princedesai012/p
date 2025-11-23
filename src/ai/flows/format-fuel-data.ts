'use server';

/**
 * @fileOverview This file defines a Genkit flow to format raw fuel price data.
 *
 * The flow takes raw fuel price data as input and uses a GenAI model to format it into a user-friendly format.
 * It handles inconsistencies in the API response to ensure the displayed information is clear and consistent.
 *
 * @exports formatFuelData - An asynchronous function that formats the fuel data.
 * @exports FormatFuelDataInput - The input type for the formatFuelData function.
 * @exports FormatFuelDataOutput - The output type for the formatFuelData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FormatFuelDataInputSchema = z.object({
  city: z.string().describe('The city for which to format fuel prices.'),
  fuelType: z.string().describe('The type of fuel (e.g., petrol, diesel).'),
  rawFuelData: z.string().describe('The raw fuel price data received from the API.'),
});
export type FormatFuelDataInput = z.infer<typeof FormatFuelDataInputSchema>;

const FormatFuelDataOutputSchema = z.object({
  formattedFuelData: z
    .string()
    .describe('The fuel price data formatted for display to the user.'),
});
export type FormatFuelDataOutput = z.infer<typeof FormatFuelDataOutputSchema>;

export async function formatFuelData(input: FormatFuelDataInput): Promise<FormatFuelDataOutput> {
  return formatFuelDataFlow(input);
}

const formatFuelDataPrompt = ai.definePrompt({
  name: 'formatFuelDataPrompt',
  input: {schema: FormatFuelDataInputSchema},
  output: {schema: FormatFuelDataOutputSchema},
  prompt: `You are an expert data formatter specializing in fuel prices in India.

You will receive raw fuel price data from an external API. Your task is to format this data into a user-friendly format for the city: {{{city}}} with the following format for the {{fuelType}}:

"Price: [Price] INR\nUnit: Per Liter\nLast Updated: [Date and Time]"

Raw Fuel Data: {{{rawFuelData}}}

Ensure the output is clear, concise, and easy to understand.  Handle any inconsistencies or missing information gracefully.
`,
});

const formatFuelDataFlow = ai.defineFlow(
  {
    name: 'formatFuelDataFlow',
    inputSchema: FormatFuelDataInputSchema,
    outputSchema: FormatFuelDataOutputSchema,
  },
  async input => {
    const {output} = await formatFuelDataPrompt(input);
    return output!;
  }
);
