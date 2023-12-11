import openai from "@/context/openAi";
import { OpenAIStream, StreamingTextResponse } from "ai";

export async function POST(req, res) {
  try {
    const body = await req.json();
    console.log(body);
    const messages = body.messages;
    const products = body.products;

    const messagesTruncated = messages.slice(-6);
    const systemMessage = {
      role: "system",
      content:
        "you are a intaligent PC Parts Comparison Expert, compare the performance and value of " +
        products
          ?.map(
            (product) => `Title: ${product?.title}\n\ndesc: ${product?.desc}`
          )
          .join("\n\n") +
        "And tell me which one user should buy? the answer should be in the form of a sentence.",
    };
    const resChat = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messagesTruncated],
    });
    const stream = OpenAIStream(resChat);
    return new StreamingTextResponse(stream);
    return Response.json({ body: body }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "internal server error" }, { status: 500 });
  }
}
