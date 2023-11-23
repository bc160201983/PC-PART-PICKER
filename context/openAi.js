import OpenAI from "openai";

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) throw new Error("OPENAI_API_KEY not found");

const openai = new OpenAI({ API_KEY });

export default openai;
