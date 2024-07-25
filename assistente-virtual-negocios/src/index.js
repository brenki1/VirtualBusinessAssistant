import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"
import readline from "readline"

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function conversar() {

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const chat = model.startChat({
        history: [],
        generationConfig: {
            maxOutputTokens: 5000,
        },
    });

    async function askAndRespond() {
        rl.question("You: ", async (msg) => {
            if (msg.toLowerCase() === "exit") {
                console.log("Obrigado pela conversa!");
                rl.close();
            } else {
                const result = await chat.sendMessage(msg);
                const response = await result.response;
                const text = await response.text();
                console.log("AI: ", text);
                askAndRespond();
            }
        });
    }

    askAndRespond();
}

conversar();

async function teste() {

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = "Write a brief text about programming languages, and point out which ones are the best for beginners and which ones are the most advanced."
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

async function teste2() {

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = "Write a text about the best beginner linux distros."
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

//teste();
//teste2();