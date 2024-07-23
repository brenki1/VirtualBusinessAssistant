import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-pro",
    systemInstruction : "Introduce yourself and offer to help" +  
    "You are an assistant and finance expert helping a small business grow." 
     + "Write in a positive, assertive and upbeat tone."
});

const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };


async function run() {


  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });
  const result = await chatSession.sendMessage("Who are you?");
  console.log(result.response.text());
}

run();
