import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"
import readline from "readline"
dotenv.config();
import fs from "fs";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function conversar() {

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro",
        systemInstruction : "Answer in the same language that the user is typing." +
        "Introduce yourself and offer to help" +  
        "You are an assistant and finance expert helping a small business grow." 
     + "Write in a positive, assertive and upbeat tone." +
     "Ignore everything that's not related to business"
    });

    const chat = model.startChat({
        history: fs.open("chatLog.txt", "r", function (err, file) {
            if(err) throw err;
        }),
        generationConfig: {
            maxOutputTokens: 500,
        },
    });
    async function askAndRespond() {
        rl.question("You: ", async (msg) => {
            if (msg.toLowerCase() === "exit") {
                var historico = await chat.getHistory();
                //console.log("Obrigado pela conversa! Aqui esta nosso historico de conversa: \n", historico);
                fs.writeFile(
                    "chatLog.txt",
                    JSON.stringify(historico),
                    function (err){
                        if(err) console.error("algo deu errado!");
                    }
                );
                rl.close();
            } else {
                const result = await chat.sendMessage(msg);
                let historico = await chat.getHistory();
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