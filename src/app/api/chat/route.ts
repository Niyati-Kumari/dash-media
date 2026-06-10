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
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { reply: "I'm having trouble connecting to my brain right now. Please try again later." },
      { status: 500 }
    );
  }
}
