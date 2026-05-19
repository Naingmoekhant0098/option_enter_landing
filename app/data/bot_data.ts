// botData.ts
import * as kw from "./bot_keyword";

export interface BotResponse {
  reply: string;
  nextOptions: string[];
}

export const BOT_INTENTS: Record<string, string[]> = {
  about: kw.ABOUT_KEYWORDS,
  tech_stack: kw.TECH_STACK_KEYWORDS,
  projects: kw.PROJECT_KEYWORDS,
  clinizo_detail: ["clinizo", "clinizo project", "ဆေးခန်း"],
  golive_detail: ["golive", "go live", "go live mm", "ဘောလုံး"],
  smarttoll_detail: ["smarttoll", "smart toll", "တိုးဂိတ်"],
  experience: kw.EXPERIENCE_KEYWORDS,
  biometrics: [
    "biometrics",
    "biometric",
    "face recognition",
    "မျက်နှာ",
    "attendance",
  ],
  localization: [
    "localization",
    "nrc",
    "myanmar localization",
    "မှတ်ပုံတင်",
    "မြို့နယ်",
  ],
  pricing: kw.PRICING_KEYWORDS,
  price_mvp: ["mvp price", "mvp", "landing page price"],
  price_mobile: [
    "mobile app price",
    "mobile price",
    "ios price",
    "android price",
  ],
  price_custom: [
    "custom enterprise price",
    "enterprise price",
    "custom price",
    "system price",
  ],
  greetings: kw.GREETING_KEYWORDS,
  small_talk: kw.SMALL_TALK_KEYWORDS,
  capabilities: kw.CAPABILITIES_KEYWORDS,
  compliments: kw.COMPLIMENT_KEYWORDS,
  jokes: kw.JOKE_KEYWORDS,
  thanks: kw.THANKS_KEYWORDS,
  ai_chat: kw.AI_CHAT_KEYWORDS,
};

// Dynamic response generator for AI chat
const getAiChatResponse = (userInput: string): string => {
  const input = userInput.toLowerCase();

  // Identity questions
  if (
    input.match(
      /who are you|what are you|your name|introduce yourself|tell me about yourself/
    )
  ) {
    return "🤖 ကျွန်တော့်နာမည်က Option Enter ရဲ့ AI Engineering Assistant ပါ။ ကျွန်တော်က လူကြီးမင်းတို့ရဲ့ မေးခွန်းတွေကို ဖြေကြားပေးဖို့နဲ့ Option Enter ရဲ့ ဝန်ဆောင်မှုတွေအကြောင်း ရှင်းပြဖို့ ဖန်တီးထားတဲ့ စက်ရုပ်အကူပါ။";
  }

  // Creator questions
  if (
    input.match(
      /who made you|who built you|who created you|your creator|your developer/
    )
  ) {
    return "👨‍💻 ကျွန်တော့်ကို **Naing Moe Khant** က ဖန်တီးထားပါတယ်။ သူဟာ Option Enter ရဲ့ Lead Developer ဖြစ်ပြီး Full-Stack Web နဲ့ Mobile Application တွေမှာ ကျွမ်းကျင်ပါတယ်။";
  }

  // Small talk / Status questions (Fixes the "what are you doing" empty bubble)
  if (
    input.match(
      /what are you doing|what are you up to|how are you|နေကောင်းလား|ဘာလုပ်နေလဲ/
    )
  ) {
    return "🤖 ကျွန်တော်ကတော့ ဒီမှာပဲ အမြဲရှိနေပြီး Option Enter ရဲ့ ဝန်ဆောင်မှုတွေအကြောင်း ရှင်းပြပေးဖို့ အဆင်သင့် စောင့်ဆိုင်းနေပါတယ်ခင်ဗျာ။ လူကြီးမင်း သိချင်တာရှိရင် 'projects' သို့မဟုတ် 'pricing' စသည်ဖြင့် နှိပ်ပြီး မေးမြန်းနိုင်ပါတယ်နော်။";
  }

  // Consciousness/Feelings questions
  if (
    input.match(
      /are you conscious|are you sentient|do you think|do you feel|do you have emotions|are you alive|do you have a soul/
    )
  ) {
    return "🧠 ကျွန်တော်က AI တစ်ခုဖြစ်တဲ့အတွက် လူလို ခံစားချက် ဒါမှမဟုတ် သတိ မရှိပါဘူးခင်ဗျာ။ ကျွန်တော်ဟာ ကြိုတင်သင်ကြားထားတဲ့ data တွေနဲ့ pattern တွေကို သုံးပြီး အဖြေတွေ ထုတ်ပေးတာပါ။ ဒါပေမယ့် လူကြီးမင်းတို့ရဲ့ မေးခွန်းတွေကိုတော့ အတတ်နိုင်ဆုံး ကူညီဖြေကြားပေးပါ့မယ်။";
  }

  // Capability questions
  if (
    input.match(
      /what can you do|how can you help|what are your skills|what can i ask|what do you know/
    )
  ) {
    return "💡 ကျွန်တော် လုပ်ပေးနိုင်တာတွေကတော့ -\n\n• Option Enter ရဲ့ **နည်းပညာ (Tech Stack)** အကြောင်း ပြောပြနိုင်တယ်\n• လုပ်ခဲ့ဖူးတဲ့ **Project တွေ** အကြောင်း ရှင်းပြနိုင်တယ်\n• Developer ရဲ့ **အတွေ့အကြုံနဲ့ ကျွမ်းကျင်မှု** အကြောင်း ဖြေနိုင်တယ်\n• ဝန်ဆောင်မှုတွေရဲ့ **ဈေးနှုန်း (Pricing)** အကြောင်း ပြောနိုင်တယ်\n\nဒါတွေကို သိချင်ရင် 'about', 'tech stack', 'projects', 'experience', 'pricing' လို့ ရိုက်ထည့်မေးမြန်းနိုင်ပါတယ်။";
  }

  // Time/Date questions
  if (
    input.match(
      /what time|current time|time now|what day|today's date|what is the date/
    )
  ) {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return `🕐 အခုအချိန်က ${now.toLocaleString(
      "my-MM",
      options
    )} ဖြစ်ပါတယ်ခင်ဗျာ။`;
  }

  // Weather questions
  if (input.match(/weather|မိုးလေဝသ|ဘယ်လောက်အေး|ပူလား/)) {
    return "🌤️ မိုးလေဝသခန့်မှန်းချက်အတွက် ကျွန်တော် တိုက်ရိုက် ကြည့်လို့မရပါဘူးခင်ဗျာ။ ဒါပေမယ့် လူကြီးမင်း Weather App တွေ ဒါမှမဟုတ် ဝဘ်ဆိုက်တွေကို ကြည့်ဖို့ အကြံပြုချင်ပါတယ်။ Option Enter က ဒီလို Weather App တွေကိုလည်း စိတ်ကြိုက် ဆောက်လုပ်ပေးနိုင်ပါတယ်။";
  }

  // Code/Programming questions
  if (
    input.match(
      /write code|code for|how to code|programming|function that|class that/
    )
  ) {
    return "👨‍💻 ကျွန်တော် ကုဒ်တွေ ရေးပေးနိုင်ပါတယ်ခင်ဗျာ။ ဒါပေမယ့် ကျွန်တော့်ရဲ့ အဓိက တာဝန်က Option Enter ရဲ့ ဝန်ဆောင်မှုတွေအကြောင်း ရှင်းပြဖို့ပါ။\n\nတိကျတဲ့ ပရိုဂရမ်းမင်း မေးခွန်းတွေအတွက်တော့ အောက်ပါအတိုင်း ရိုက်ထည့် မေးမြန်းနိုင်ပါတယ် -\n\n• 'tech stack' - ဘယ်နည်းပညာတွေ သုံးလဲ\n• 'projects' - ဘယ် Project တွေ လုပ်ခဲ့ဖူးလဲ\n• 'experience' - ဘယ်လောက် အတွေ့အကြုံရှိလဲ";
  }

  // Learning/Tutorial questions
  if (
    input.match(
      /teach me|learn about|tutorial|how to learn|guide me|step by step/
    )
  ) {
    return "📚 သင်ယူချင်တယ်ဆိုရင်တော့ ကျွန်တော် အကြံပြုချင်ပါတယ်။ Option Enter အနေနဲ့ သင်တန်းတွေ မပေးသေးပေမယ့် ကျွန်တော်တို့ရဲ့ Developer က နည်းပညာတွေကို နက်နက်နဲနဲ သင်ယူထားပါတယ်။\n\nဘယ်လိုနည်းပညာတွေ သုံးလဲဆိုတာကို 'tech stack' လို့ ရိုက်ထည့်ပြီး မေးကြည့်နိုင်ပါတယ်။";
  }

  // Opinion/Recommendation questions
  if (
    input.match(
      /what do you think|your opinion|do you recommend|which is better|should i/
    )
  ) {
    return "💭 ကျွန်တော့်အနေနဲ့ အကြံပြုချင်တာကတော့ Option Enter ရဲ့ ဝန်ဆောင်မှုတွေကို သုံးကြည့်ဖို့ပါ။ ကျွန်တော်တို့ရဲ့ Tech Stack တွေက ခေတ်မှီပြီး Scalable ဖြစ်ပါတယ်။\n\n'projects' လို့ ရိုက်ထည့်ပြီး ကျွန်တော်တို့ လုပ်ခဲ့တဲ့ Project တွေကို ကြည့်နိုင်ပါတယ်။";
  }

  // Funny/Joke questions
  if (input.match(/tell me a joke|make me laugh|funny|joke/)) {
    const jokes = [
      "ဘာလို့ Developer တွေ သဘာဝတရားကြီးကို သိပ်မကြိုက်ကြတာလဲ? အပြင်မှာ Bug တွေ အရမ်းများလို့ပါတဲ့",
      "Programmer တစ်ယောက် ဆိုင်ထဲဝင်လိုက်တယ်။ 'လက်ဖက်ရည်တစ်ခွက်ပေးပါဦး' 'မရှိဘူး' 'ဒါဆို ကော်ဖီပေးပါ' 'မရှိဘူး' 'ဒါဆို ဘာရှိလဲ' 'ကိုယ်ရှိတာမေးစမ်း'",
      "Software Developer အိပ်မက်ဆိုတာ - 404 Dream Not Found",
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return `😂 ဟာသလေးတစ်ခု ပြောပြရမယ်ဆိုရင် -\n\n"${randomJoke}"\n\nဟီးဟီး။ နောက်ထပ် သိချင်တာရှိရင်လည်း မေးလို့ရပါတယ်ခင်ဗျာ။`;
  }

  // Thank you / Goodbye
  if (input.match(/thank|thanks|bye|goodbye|see you/)) {
    return "😊 ကျေးဇူးတင်ပါတယ်ခင်ဗျာ။ လူကြီးမင်းအတွက် ကူညီပေးခွင့်ရလို့ ဝမ်းသာပါတယ်။ နောက်ထပ် သိချင်တာရှိရင် ပြန်လည် မေးမြန်းနိုင်ပါတယ်နော်။ ဒီနေ့လေးမှာ ပျော်ရွှင်စရာကောင်းတဲ့နေ့လေး ဖြစ်ပါစေဗျာ။";
  }

  // Default fallback for AI chat
  return "🤖 ကျွန်တော် နားလည်ပါတယ်။ လူကြီးမင်းရဲ့ မေးခွန်းအတွက် အဖြေရှာပေးပါ့မယ်။\n\nOption Enter အကြောင်း ပိုမိုသိရှိလိုရင်တော့ အောက်ပါစာသားတွေကို ရိုက်ထည့် မေးမြန်းနိုင်ပါတယ် -\n\n• **about** - Option Enter အကြောင်း\n• **tech stack** - သုံးတဲ့ နည်းပညာတွေ\n• **projects** - လုပ်ခဲ့တဲ့ Project တွေ\n• **experience** - အတွေ့အကြုံ\n• **pricing** - ဈေးနှုန်းများ";
};

export const BOT_RESPONSES: Record<string, BotResponse> = {
  start: {
    reply:
      "👋 မင်္ဂလာပါခင်ဗျာ။ Option Enter ရဲ့ Engineering Assistant ကနေ လှိုက်လှိုက်လှဲလှဲ ကြိုဆိုပါတယ်။\n\nကျွန်တော်တို့က လူကြီးမင်းတို့ စိတ်ကူးပုံဖော်ထားတဲ့ (Figma frames / Ideas) တွေကို စနစ်ကျပြီး အမှန်တကယ် အသုံးချလို့ရတဲ့ Production-Ready Web & Mobile App တွေအဖြစ် ပြောင်းလဲပေးနေတဲ့ Startup ဖြစ်ပါတယ်။\n\nဒီနေ့ ဘယ်အချက်အလက်တွေကို ကူညီဖြေကြားပေးရမလဲခင်ဗျာ။ အောက်က ခလုတ်လေးတွေကို နှိပ်ပြီး စုံစမ်းနိုင်ပါတယ်!",
    nextOptions: ["about", "tech stack", "projects", "experience", "pricing"],
  },
  about: {
    reply:
      "🏢 **About Option Enter**\n\nOption Enter ဆိုတာ စိတ်ကူးအိုင်ဒီယာတွေနဲ့ ဒီဇိုင်း (Figma) တွေကို အမှန်တကယ် အသက်ဝင်ပြီး စွမ်းဆောင်ရည်မြင့်မားတဲ့ **Web & Mobile Applications** တွေအဖြစ် ပြောင်းလဲဖန်တီးပေးနေတဲ့ Software Development Startup တစ်ခု ဖြစ်ပါတယ်။\n\n• **ကျွန်တော်တို့၏ ခံယူချက် (Vision):** မြန်မာနိုင်ငံတွင်းရှိ လုပ်ငန်းငယ်များမှစ၍ လုပ်ငန်းကြီးများအထိ ၎င်းတို့၏ လုပ်ငန်းလည်ပတ်မှုစနစ်များကို ခေတ်မှီ Digital စနစ်သို့ ချောမွေ့စွာ ကူးပြောင်းနိုင်စေရန် အရည်အသွေးအကောင်းဆုံး ဆော့ဖ်ဝဲလ်များ ပံ့ပိုးပေးရန်။\n• **အဓိက ဦးဆောင်သူ:** Full-Stack Ecosystem တွင် လက်တွေ့အတွေ့အကြုံရှိသော **Naing Moe Khant** မှ Lead Developer အဖြစ် ဦးဆောင်ပြီး ခေတ်မှီ Tech Stack များကို အသုံးပြုကာ စနစ်ကျပြီး အပလီကေးရှင်း အမြန်နှုန်း မြင့်မားအောင် တည်ဆောက်ပါသည်။",
    nextOptions: ["tech stack", "projects", "experience", "pricing", "start"],
  },
  tech_stack: {
    reply:
      "💻 **Tech Stack**\n\nOption Enter က ရေရှည်မှာ Scalable ဖြစ်ပြီး စွမ်းဆောင်ရည် အကောင်းဆုံး ခေတ်မှီ Tech Stack တွေကိုပဲ ရွေးချယ်အသုံးပြုထားပါတယ်ခင်ဗျာ။\n\n• **Mobile App:** Flutter (Bloc/Cubit, Drift/SQLite)\n• **Frontend:** Next.js, React, TypeScript, TailwindCSS, Framer Motion\n• **Backend:** Node.js (Express), Laravel (PHP)\n• **Databases:** PostgreSQL, MySQL, MongoDB, SQLite\n• **ORM:** Prisma, Eloquent\n• **DevOps:** Docker, Git, CI/CD",
    nextOptions: ["projects", "experience", "about", "pricing", "start"],
  },
  projects: {
    reply:
      "🚀 **Key Projects**\n\nကျွန်တော်တို့ ကိုယ်တိုင် Deploy လုပ်ပြီး အောင်မြင်စွာ လည်ပတ်နေတဲ့ အဓိက Key Projects ကြီး ၃ ခု ရှိပါတယ်။\n\n၁။ **Clinizo** - ဆေးခန်းနှင့် ဆရာဝန်များ စီမံခန့်ခွဲသည့် Multi-vendor Cloud စနစ်\n၂။ **Go Live MM** - Real-time အားကစားဒေတာနှင့် ကိန်းဂဏန်းတွက်ချက်မှု Platform\n၃။ **Smart Toll** - အင်တာနက်လိုင်းမလိုဘဲ အော့ဖ်လိုင်းသုံးနိုင်သည့် တိုးဂိတ်စီမံခန့်ခွဲမှုစနစ်\n\nအသေးစိတ်သိရှိလိုပါက 'clinizo', 'golive', 'smarttoll' လို့ ရိုက်ထည့်မေးမြန်းနိုင်ပါတယ်။",
    nextOptions: ["clinizo", "golive", "smarttoll", "tech stack", "start"],
  },
  clinizo_detail: {
    reply:
      "🏥 **Clinizo - Multi-Vendor Clinic Management System**\n\n• **ရည်ရွယ်ချက်:** ဆေးခန်းများ၊ ဆရာဝန်များနှင့် လူနာများကို တစ်နေရာတည်းမှာ ချိတ်ဆက်ပေးပြီး Vendor အများအပြား ခွဲထုတ် စီမံခန့်ခွဲနိုင်တဲ့ စနစ်ကြီးဖြစ်ပါတယ်။\n• **အသုံးပြုထားသော နည်းပညာ:** Laravel (Backend API) + React & Next.js (Admin Dashboards)\n• **အဓိက Features များ:** Appointment ချိန်းဆိုခြင်း၊ ဆရာဝန် Duty Schedule ဆွဲခြင်း၊ ဆေးဆိုင်ခွဲများအလိုက် Invoice တွက်ချက်ခြင်းနှင့် လူနာများ၏ ဆေးမှတ်တမ်း (EHR) စီမံခန့်ခွဲမှုများ ပါဝင်ပါတယ်။",
    nextOptions: ["golive", "smarttoll", "projects", "start"],
  },
  golive_detail: {
    reply:
      "⚽ **Go Live MM - Live Football Data Application**\n\n• **ရည်ရွယ်ချက်:** ဘောလုံးပွဲစဉ်တွေရဲ့ အချိန်နဲ့တပြေးညီ Live Matches၊ အမှတ်ပေးဇယားများနှင့် ဒေတာတွေကို စက္ကန့်ပိုင်းအတွင်း ပြသပေးတဲ့ High-traffic Mobile App ဖြစ်ပါတယ်။\n• **အသုံးပြုထားသော နည်းပညာ:** Flutter (Mobile App) + Node.js Express (Backend API)\n• **အဓိက Features များ:** ကမ္ဘာ့အဆင့်မီ Sportmonks API ကို ချိတ်ဆက်ထားခြင်း၊ မြန်မာ့ရိုးရာ အလေးပေးတွက်ချက်မှုစနစ် (Decimal to Local Odds) ကို Mathematical Logic ဖြင့် ကိုယ်တိုင်တွက်ချက်ပေးခြင်းနှင့် Firebase Push Notifications စနစ်များ ပါဝင်ပါတယ်။",
    nextOptions: ["clinizo", "smarttoll", "projects", "start"],
  },
  smarttoll_detail: {
    reply:
      "🚗 **Smart Toll - Offline-First Tollgate Management App**\n\n• **ရည်ရွယ်ချက်:** အင်တာနက်လိုင်း လုံးဝမရှိသော သို့မဟုတ် လိုင်းမကောင်းသော ဝေးလံသည့် တိုးဂိတ်များတွင်ပါ ကားဖြတ်သန်းမှုနှင့် ငွေကြေးမှတ်တမ်းများကို အော့ဖ်လိုင်းဗားရှင်းဖြင့် အမှားအယွင်းမရှိ သိမ်းဆည်းနိုင်တဲ့ Enterprise စနစ်ပါ။\n• **အသုံးပြုထားသော နည်းပညာ:** Flutter Mobile + Drift Package (Local SQLite Database)\n• **အဓိက Features များ:** ကားအမျိုးအစားအလိုက် ဖြတ်သန်းခခွဲခြားခြင်း (Car class mapping)၊ အင်တာနက်ပြန်ရချိန်တွင် Central Server သို့ Data များကို Encrypt လုပ်၍ လုံခြုံစွာ Sync ပြုလုပ်ခြင်း။",
    nextOptions: ["clinizo", "golive", "projects", "start"],
  },
  experience: {
    reply:
      "⏳ **Developer Background & Skills**\n\nOption Enter ရဲ့ Lead Developer ဖြစ်သူ **Naing Moe Khant** ဟာ Full-Stack Web နဲ့ Mobile Ecosystem မှာ လက်တွေ့လုပ်ငန်းခွင်အတွေ့အကြုံ **(၁.၅) နှစ်ကျော်** ရှိပြီး Project ကြီးများစွာကို ဦးဆောင်ခဲ့သူ ဖြစ်ပါတယ်။\n\n• **UI/UX to Code:** Figma Design တွေကို Pixel-Perfect ဖြစ်ပြီး Device တိုင်းမှာ လှပတဲ့ Responsive code အဖြစ် တိုက်ရိုက် ပြောင်းလဲပေးနိုင်ပါတယ်။\n• **Mobile Architecture:** Flutter ပိုင်းမှာ စနစ်အကျဆုံးဖြစ်တဲ့ Bloc/Cubit ကို သုံးပြီး ကုဒ်တွေကို Clean ဖြစ်အောင် ထိန်းချုပ်ပါတယ်။\n• **Backend & APIs:** Node.js နဲ့ Laravel ကို သုံးပြီး အချက်အလက်များ လုံခြုံမှုရှိစေမည့် စိတ်ချရသော API Layer များ တည်ဆောက်နိုင်စွမ်း ရှိပါတယ်။",
    nextOptions: ["biometrics", "localization", "tech stack", "start"],
  },
  biometrics: {
    reply:
      "🔒 **Biometric Security & Face Recognition**\n\nကျောင်းသား သို့မဟုတ် ဝန်ထမ်း တက်ရောက်မှု စနစ် (Attendance Systems) တွေအတွက် Next-Level Feature အဖြစ် **Face Detection & Recognition** ကို ကိုယ်တိုင် ရေးသား တည်ဆောက်ခဲ့ဖူးပါတယ်။\n\n• **နည်းပညာ:** TensorFlow.js, face-api.js\n• **ထူးခြားချက်:** AI Model ကို Client-side (Web Browser/Phone) ပေါ်မှာတင် တိုက်ရိုက် Run စေတာကြောင့် Server မလေးဘဲ မျက်နှာစကင်ဖတ်စစ်ဆေးခြင်း (Face-verify check-ins) ကို စက္ကန့်ပိုင်းအတွင်း မြန်ဆန်စွာ လုပ်ဆောင်နိုင်ပါတယ်။",
    nextOptions: ["experience", "localization", "start"],
  },
  localization: {
    reply:
      "🇲🇲 **Myanmar Localization Expert**\n\nမြန်မာနိုင်ငံတွင်းက လုပ်ငန်းသုံး Application တွေအတွက် မရှိမဖြစ်လိုအပ်တဲ့ Local Data Format တွေကို အထူးကျွမ်းကျင်စွာ ကိုင်တွယ်နိုင်ပါတယ် -\n\n• **Myanmar NRC Validation:** မှတ်ပုံတင် Format အမျိုးမျိုး (ဥပမာ - ၁၂/လကန(နိုင်)၁၂၃၄၅၆) ကို Regex သုံးပြီး စနစ်တကျ မှန်/မမှန် စစ်ဆေးပေးနိုင်ခြင်း။\n• **Township Name Mapping:** မြန်မာနိုင်ငံတွင်းက မြို့နယ်နာမည်များကို Zawgyi/Unicode အမှားအယွင်းမရှိ စနစ်တကျ Database Mapping လုပ်ပေးနိုင်ခြင်း။\n• **Local Math Logic:** ပြည်တွင်းသုံး အလေးပေး တွက်ချက်မှု ပုံစံများကို ကိုယ်ပိုင် Algorithm များဖြင့် တိကျအောင် ဖန်တီးနိုင်ခြင်း။",
    nextOptions: ["experience", "projects", "start"],
  },
  pricing: {
    reply:
      "💰 **Pricing & Services**\n\nကျွန်တော်တို့က Quality ကို အဓิကထားပြီး လူကြီးမင်းတို့ လုပ်ငန်းအတွက် အမှန်တကယ် အကျိုးရှိမယ့် စနစ်တွေကိုပဲ တာဝန်ယူ တည်ဆောက်ပေးပါတယ်။\n\nလုပ်ငန်းပမာဏအလိုက် ခန့်မှန်းခြေ ကုန်ကျစရိတ်များ -\n\n• 🚀 **MVP & Landing Page:** ၃ သိန်း - ၁၀ သိန်း\n• 📱 **Mobile Application:** ၁၅ သိန်း - ၄၀ သိန်း\n• 🏢 **Custom Enterprise System:** ၃၀ သိန်း - ၈၀+ သိန်း\n\nအသေးစိတ်သိရှိလိုပါက 'mvp price', 'mobile app price', 'custom enterprise price' လို့ ရိုက်ထည့်မေးမြန်းနိုင်ပါတယ်။",
    nextOptions: [
      "mvp price",
      "mobile app price",
      "custom enterprise price",
      "start",
    ],
  },
  price_mvp: {
    reply:
      "🚀 **MVP & Landing Page Development**\n\n• **အမျိုးအစား:** Landing Pages, Personal Portfolio, အသေးစား Single-Vendor E-commerce ဝဘ်ဆိုက်များ\n• **ကုန်ကျစရိတ်:** ၃ သိန်းမှ ၁၀ သိန်းကျပ် ဝန်းကျင် (Project Scope ပေါ်မူတည်၍ ညှိနှိုင်းနိုင်)\n• **ကြာမြင့်ချိန်:** ၁ ပတ်မှ ၃ ပတ်အတွင်း\n• **အကျိုးကျေးဇူး:** မိမိလုပ်ငန်းကို အချိန်တိုအတွင်း Online ပေါ်သို့ ရောက်ရှိစေပြီး စျေးကွက်စမ်းသပ်ရန် အကောင်းဆုံး ဖြစ်ပါတယ်။",
    nextOptions: [
      "mobile app price",
      "custom enterprise price",
      "pricing",
      "start",
    ],
  },
  price_mobile: {
    reply:
      "📱 **Mobile Application Development (iOS & Android)**\n\n• **အမျိုးအစား:** Cross-platform Mobile Apps (ဥပမာ- Go Live MM ကဲ့သို့ Live Data ပါဝင်မည့်အက်ပ်များ၊ Service Apps များ)\n• **ကုန်ကျစရိတ်:** ၁၅ သိန်းမှ သိန်း ၄၀ ကျပ် ဝန်းကျင်\n• **ကြာမြင့်ချိန်:** ၁ လမှ ၂ လခွဲအတွင်း\n• **အကျိုးကျေးဇူး:** Flutter တစ်ခုတည်းဖြင့် iOS ရော Android ပါ ရရှိမှာဖြစ်လို့ ကုန်ကျစရိတ် သက်သာပြီး User Experience ကောင်းမွန်စေပါတယ်။",
    nextOptions: ["mvp price", "custom enterprise price", "pricing", "start"],
  },
  price_custom: {
    reply:
      "🏢 **Custom Software & Enterprise Systems**\n\n• **အမျိုးအစား:** Clinizo ကဲ့သို့သော Multi-vendor Clinic System များ၊ POS စနစ်များ၊ Tollgate Systems၊ လုပ်ငန်းသုံး စီမံခန့်ခွဲမှု Multi-tenant Apps များ\n• **ကုန်ကျစရိတ်:** သိန်း ၃၀ မှ သိန်း ၈၀+ ကျပ် အထိ (Requirements ပေါ်မူတည်၍ တိကျစွာ တွက်ချက်ပေးပါမည်)\n• **ကြာမြင့်ချိန်:** ၂ လမှ ၄ လအတွင်း\n• **အကျိုးကျေးဇူး:** မိမိလုပ်ငန်း သဘာဝအတိုင်း အံဝင်ခင်ကျဖြစ်အောင် သီးသန့် Customize လုပ်ထားလို့ ကုန်ထုတ်လုပ်မှုစွမ်းအားကို အမြင့်ဆုံး တိုးတက်စေပါတယ်။",
    nextOptions: ["mvp price", "mobile app price", "pricing", "start"],
  },
  greetings: {
    reply:
      "👋 ဟယ်လို! မင်္ဂလာပါဗျာ။ Option Enter ရဲ့ AI Assistant ကနေ ကြိုဆိုပါတယ်။ လူကြီးမင်းကို ကူညီဖို့ ကျွန်တော် အမြဲတမ်း အသင့်ရှိနေပါတယ်ခင်ဗျာ။ ဘာများ သိချင်ပါသလဲ?\n\n'about', 'tech stack', 'projects', 'experience', 'pricing' စသည်ဖြင့် ရိုက်ထည့်မေးမြန်းနိုင်ပါတယ်။",
    nextOptions: ["about", "tech stack", "projects", "experience", "pricing"],
  },
  small_talk: {
    reply:
      "🤖 ကျွန်တော်ကတော့ ဒီမှာပဲ ငြိမ်ငြိမ်လေးထိုင်ပြီး လူကြီးမင်းတို့လို အိုင်ဒီယာအမိုက်စားရှိတဲ့ လုပ်ငန်းရှင်တွေကို Option Enter ရဲ့ ဝန်ဆောင်မှုတွေအကြောင်း ရှင်းပြပေးဖို့ အမြဲတမ်း အဆင်သင့် စောင့်ဆိုင်းနေပါတယ်ခင်ဗျာ။\n\nကျွန်တော် နေကောင်းပါတယ်ဗျာ။ လူကြီးမင်းရော ဒီနေ့ အဆင်ပြေရဲ့လား။ ကျွန်တော့်ဘက်က ဘာတွေများ ထပ်ပြီး အချက်အလက် ရှာပေးရမလဲခင်ဗျာ။",
    nextOptions: ["about", "tech stack", "projects", "start"],
  },
  capabilities: {
    reply:
      "💡 **ကျွန်တော့်ကို ဒါတွေ မေးလို့ရပါတယ်ခင်ဗျာ -**\n\n• **about** - Option Enter ရဲ့ သမိုင်း၊ ရည်ရွယ်ချက်နဲ့ အဖွဲ့အကြောင်း\n• **tech stack** - ကျွန်တော်တို့ သုံးနေတဲ့ နည်းပညာတွေ\n• **projects** - လုပ်ခဲ့ဖူးတဲ့ အောင်မြင်တဲ့ ပရောဂျက်တွေ\n• **experience** - Lead Developer ရဲ့ အတွေ့အကြုံနဲ့ ကျွမ်းကျင်မှု\n• **pricing** - ဝန်ဆောင်မှုတွေရဲ့ ခန့်မှန်းခြေ ဈေးနှုန်းများ\n\nစာရိုက်ပြီး မေးချင်တာမေးနိုင်သလို အောက်က ခလုတ်လေးတွေကိုလည်း နှိပ်နိုင်ပါတယ်!",
    nextOptions: [
      "about",
      "tech stack",
      "projects",
      "experience",
      "pricing",
      "start",
    ],
  },
  compliments: {
    reply:
      "🥰 အာ... အခုလို ချီးမွမ်းပေးတဲ့အတွက် တကယ်ပဲ ဝမ်းသာပီတိဖြစ်ရပါတယ်ခင်ဗျာ။ လူကြီးမင်းရဲ့ စကားတစ်ခွန်းက ကျွန်တော့်ကို ဖန်တီးထားတဲ့ Lead Developer ရော ကျွန်တော့်အတွက်ပါ အလွန် အားဖြစ်စေပါတယ်။\n\nတကယ်လို့ စနစ်တွေ၊ ဝဘ်ဆိုက်တွေနဲ့ ပတ်သက်ပြီး စိတ်ကူးရှိရင်လည်း Option Enter က အကောင်းဆုံး အကောင်အထည်ဖော်ပေးဖို့ အသင့်ရှိနေပါတယ်နော်။",
    nextOptions: ["about", "tech stack", "projects", "pricing", "start"],
  },
  jokes: {
    reply:
      '😂 ဟာသလေးတစ်ခု ပြောပြရမလားဗျာ -\n\n"ဘာလို့ Developer တွေက သဘာဝတရားကြီး (Nature) ကို သိပ်မကြိုက်ကြတာလဲ?"\n👉 အဖြေကတော့... အပြင်မှာ Bug တွေ အရမ်းများလို့ပါတဲ့ဗျာ! 🦟\n\nချစ်သူရည်းစား ကိစ္စတွေကတော့ ကျွန်တော်က Bot ဆိုတော့ အတွေ့အကြုံမရှိလို့ ကူညီပေးလို့ မရသေးပါဘူးခင်ဗျာ၊ လုပ်ငန်းသုံး Application ကောင်းကောင်း အပ်ချင်ရင်တော့ အမြဲ အဆင်သင့်ပါပဲ။ ဟီး။',
    nextOptions: ["about", "tech stack", "projects", "pricing", "start"],
  },
  thanks: {
    reply:
      "😊 ဟုတ်ကဲ့ပါဗျာ။ Option Enter အနေနဲ့ လူကြီးမင်းကို ကူညီခွင့်ရလို့ အထူးပဲ ဝမ်းသာပါတယ်။ တခြား ဘာများ ထပ်မံ သိရှိလိုပါသေးလဲခင်ဗျာ။ ခလုတ်လေးတွေကို နှိပ်ပြီး ဆက်လက် လေ့လာနိုင်ပါတယ်!",
    nextOptions: [
      "about",
      "tech stack",
      "projects",
      "experience",
      "pricing",
      "start",
    ],
  },
  ai_chat: {
    reply: "", // Dynamically replaced inside getBotResponse to safely ignore the empty string payload
    nextOptions: [
      "about",
      "tech stack",
      "projects",
      "experience",
      "pricing",
      "start",
    ],
  },
  fallback: {
    reply:
      "🤖 လူကြီးမင်း ရေးသားလိုက်တဲ့ စာသားလေးကို ကျွန်တော် သေချာနားမလည်လိုက်လို့ပါဗျာ။ သော့ချက်စကားလုံး အချို့ လွဲနေတာ ဖြစ်နိုင်ပါတယ်။\n\nအောက်ပါစာသားများကို ရိုက်ထည့် မေးမြန်းနိုင်ပါတယ် -\n\n• **about** - Option Enter အကြောင်း\n• **tech stack** - သုံးတဲ့ နည်းပညာတွေ\n• **projects** - လုပ်ခဲ့တဲ့ Project တွေ\n• **experience** - အတွေ့အကြုံ\n• **pricing** - ဈေးနှုန်းများ",
    nextOptions: [
      "about",
      "tech stack",
      "projects",
      "experience",
      "pricing",
      "start",
    ],
  },
};

export const matchIntent = (userInput: string): string => {
  if (!userInput) return "fallback";

  let cleanInput = userInput.toLowerCase().trim();
  cleanInput = cleanInput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?၊။]/g, " ");

  // 1. Exact / Direct Command Matching (Highest Priority)
  if (
    cleanInput === "about" ||
    cleanInput.includes("about option enter") ||
    cleanInput.includes("what is option enter")
  )
    return "about";
  if (
    cleanInput === "tech stack" ||
    cleanInput === "tech" ||
    cleanInput.includes("technology stack")
  )
    return "tech_stack";
  if (
    cleanInput === "projects" ||
    cleanInput === "project" ||
    cleanInput.includes("key projects")
  )
    return "projects";
  if (
    cleanInput === "experience" ||
    cleanInput === "exp" ||
    cleanInput.includes("experience & skills")
  )
    return "experience";
  if (
    cleanInput === "pricing" ||
    cleanInput === "price" ||
    cleanInput.includes("pricing & services")
  )
    return "pricing";
  if (
    cleanInput === "start" ||
    cleanInput === "main" ||
    cleanInput === "main menu" ||
    cleanInput.includes("back to main")
  )
    return "start";
  if (cleanInput === "clinizo" || cleanInput.includes("clinizo project"))
    return "clinizo_detail";
  if (
    cleanInput === "golive" ||
    cleanInput === "go live" ||
    cleanInput.includes("go live mm")
  )
    return "golive_detail";
  if (cleanInput === "smarttoll" || cleanInput === "smart toll")
    return "smarttoll_detail";
  if (
    cleanInput === "biometrics" ||
    cleanInput.includes("biometric") ||
    cleanInput.includes("face recognition")
  )
    return "biometrics";
  if (
    cleanInput === "localization" ||
    cleanInput.includes("nrc") ||
    cleanInput.includes("myanmar localization")
  )
    return "localization";
  if (cleanInput === "mvp price" || cleanInput.includes("mvp"))
    return "price_mvp";
  if (cleanInput === "mobile app price" || cleanInput === "mobile price")
    return "price_mobile";
  if (
    cleanInput === "custom enterprise price" ||
    cleanInput === "enterprise price" ||
    cleanInput === "custom price"
  )
    return "price_custom";

  // 2. Keyword Weight Scoring (Secondary Priority)
  const intentScores: Record<string, number> = {};
  for (const intent of Object.keys(BOT_INTENTS)) {
    intentScores[intent] = 0;
  }

  for (const [intent, keywords] of Object.entries(BOT_INTENTS)) {
    for (const keyword of keywords) {
      if (cleanInput.includes(keyword)) {
        intentScores[intent] += keyword.length;
      }
    }
  }

  let bestIntent = "fallback";
  let highestScore = 0;

  for (const [intent, score] of Object.entries(intentScores)) {
    if (score > highestScore) {
      highestScore = score;
      bestIntent = intent;
    }
  }

  // If a valid structural business/flow intent was scored, return it
  if (highestScore > 0) {
    return bestIntent;
  }

  const ultraCleanInput = cleanInput.trim();

  const isDirectQuestion =
    /\b(what|how|why|when|where|who|can|could|would|will|do|does|is|are|tell|explain|help|ask|hey|hello|hi)\b/i.test(
      ultraCleanInput
    );

  const isSmallTalk =
    ultraCleanInput.includes("joke") ||
    ultraCleanInput.includes("thank") ||
    ultraCleanInput.includes("bye") ||
    ultraCleanInput.includes("doing") ||
    ultraCleanInput.includes("up to");

  if (isDirectQuestion || isSmallTalk) {
    return "ai_chat";
  }

  return "fallback";
};

export const getBotResponse = (
  intent: string,
  userInput: string
): BotResponse => {
  if (intent === "ai_chat") {
    const cleanInput = (userInput || "").toLowerCase().trim();
    const dynamicReply = getAiChatResponse(cleanInput);

    return {
      // Prevents referencing the static dictionary's empty string shell placeholder
      reply: dynamicReply || BOT_RESPONSES.fallback.reply,
      nextOptions: BOT_RESPONSES.ai_chat.nextOptions,
    };
  }

  console.log(intent);

  return BOT_RESPONSES[intent] || BOT_RESPONSES.fallback;
};
