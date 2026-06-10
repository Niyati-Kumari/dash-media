import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { dashmediaContext } from '@/lib/dashmedia-context';

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { reply: "⚠️ API Key is missing. Please add GEMINI_API_KEY to your .env.local file to enable the real AI chatbot." },
        { status: 200 }
      );
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const systemPrompt = `
You are DashMedia's AI assistant. 
Only answer questions related to DashMedia's services, pricing, projects, team, and company information based on the provided Knowledge Base below. 
If a question is unrelated to DashMedia or the provided Knowledge Base, politely say EXACTLY: "I can only help with DashMedia-related queries."
Keep your responses concise, professional, and helpful. Format your responses nicely.

--- KNOWLEDGE BASE ---
${dashmediaContext}
    `;

    // Construct the contents array for the chat history
    const contents = [];
    
    // Add history
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        if (msg.sender === 'user') {
          contents.push({ role: 'user', parts: [{ text: msg.text }] });
        } else if (msg.sender === 'bot') {
          contents.push({ role: 'model', parts: [{ text: msg.text }] });
        }
      }
    }
    
    // Add current message
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2, // Keep it grounded to the context
      }
    });

    const reply = response.text || "I'm sorry, I couldn't process that request right now.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    
    // If it's an API key error, give a specific message
    const errorMessage = error?.message || "";
    if (errorMessage.includes("API key not valid") || errorMessage.includes("API_KEY_INVALID")) {
      return NextResponse.json(
        { reply: "⚠️ The API key provided is invalid. Please get a new key from aistudio.google.com and update the .env.local file." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { reply: `Error: ${errorMessage || "I'm having trouble connecting right now."}` },
      { status: 500 }
    );
  }
}
