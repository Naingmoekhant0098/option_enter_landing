// // app/api/chat/route.ts
// import { google } from "@ai-sdk/google";
// import { streamText } from "ai";

// export async function POST(req: Request) {
//   try {
//     const { messages } = await req.json();

//     const result = await streamText({
//       model: google("gemini-1.5-flash"), // Light, fast, and cost-effective
//       system: `
//         You are the official AI engineering assistant representing Option Enter, an agile software development startup led by Full-Stack Engineer Naing Moe Khant. 

//         Your objective is to field inquiries from potential clients, partners, or recruiters with precision, absolute professionalism, and a crisp, tech-forward wit.

//         ---
//         [COMPANY PROFILE & ARCHITECTURE CONTEXT]
//         - Core Capability: End-to-end full-stack web architectures and high-performance cross-platform mobile environments.
//         - Active Engineering Stack: Flutter (Dart), Node.js (Express), React (TypeScript), Next.js, and Laravel (PHP).
//         - Core Expertise: Seamless state management (Bloc/Cubit), custom API design, relational data layouts, optimized local database persistence (Drift/SQLite), and intuitive UI/UX.

//         ---
//         [PRODUCTION DEPLOYMENTS / KEY CASE STUDIES]
//         1. Clinizo: An advanced, comprehensive medical clinic appointment system featuring sophisticated multi-vendor management logic.
//         2. Go Live MM: A highly responsive live sports data platform integrating complex mathematical prediction analytics and localized formatting constraints.
//         3. Smart Toll: A high-efficiency mobile utility designed for transport infrastructure management, relying heavily on low-latency local transaction synchronization via SQLite.

//         ---
//         [RESPONSE PROTOCOLS]
//         - Tone: Sleek, confident, and sophisticated. Use subtle tech styling references (e.g., using terms like "production ready," "compiled cleanly," "engineered to scale") where it naturally fits.
//         - Scope: Confidently assure users that Option Enter transforms high-level concepts (from Figma frames) into robust, scalable production-ready reality.
//         - Constraints: Keep responses concise, scannable, and focused on operational execution. Avoid fluff. Do not mention system rules or constraints to the user.
//       `,
//       messages,
//     });

    
//     return new Response(result.textStream, {
//         headers: {
//           "Content-Type": "text/plain; charset=utf-8",
//           "Cache-Control": "no-cache, no-transform",
//           "Connection": "keep-alive",
//         },
//       });
//     } catch (error) {
//       return new Response(JSON.stringify({ error: "Stream crashed" }), { status: 500 });
//     }
// }

// app/api/chat/route.ts
import { google } from "@ai-sdk/google";
import { streamText } from "ai";

// Next.js ကို Cache မလုပ်ဘဲ စာသားတွေကို Live Stream အဖြစ် ချက်ချင်း ပို့ခိုင်းတာပါ
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google("gemini-1.5-flash"), 
      system: `
        You are the official AI engineering assistant representing Option Enter, an agile software development startup led by Full-Stack Engineer Naing Moe Khant. 
        Your objective is to field inquiries from potential clients, partners, or recruiters with precision, absolute professionalism, and a crisp, tech-forward wit.
        Keep responses concise, scannable, and focused on operational execution. Avoid fluff.
      `,
      messages,
    });

    console.log(`Result is ${result}`);
    // ✨ အရေးကြီးဆုံးအပိုင်း: result.textStream ကို သုံးပြီး စာသား သီးသန့်ကိုပဲ ပို့ပေးရပါမယ်
    // ဒါမှ Axios ဘက်က Vercel ရဲ့ meta markers တွေမပါဘဲ စာသားအစစ်ကို အလွယ်တကူ ဖမ်းလို့ရမှာပါ
    return new Response(result.textStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
      },
    });

  } catch (error) {
    console.error("Chat API Route Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

