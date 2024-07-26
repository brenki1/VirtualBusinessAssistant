const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()

const { GoogleGenerativeAI} = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI(process.env.API_KEY)

app.post('/gemini', async(req,res)=>{

    const model = genAI.getGenerativeModel({ model: "gemini-pro"})

    const chat = model.startChat({
        history: req.body.history,

        generationConfig: {
            maxOutputTokens: 5000,
        }
    })

    const msg = req.body.message

    const result = await chat.sendMessage(msg)
    const response = await result.response
    const text = response.text()
    res.send(text)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))