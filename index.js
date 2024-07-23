import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "Write like a virtual assistant, telling how you can help and how you can improve this business workflow."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
