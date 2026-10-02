import { useEffect } from 'react';
import Arrow from './components/arrow';
import Name from './components/name';

function App() {

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Arrow />

      <main className='flex flex-col gap-[64px] px-4 md:px-[32px] lg:px-[64px] pb-[160px]'>
        {/* Header */}
        <section id="hero" className='h-dvh flex flex-col justify-start pt-[25vh] gap-[24px]'>
          <Name />
          <p className='text-5xl font-serif mt-4 text-bright-blue reveal reveal-up'>software engineer // computer science & economics student</p>

          <div className='flex gap-6 mt-8 reveal reveal-up'>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/colinlevine" className='hover:scale-[1.1] transition-all duration-200'>
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/colinlevine" className='hover:scale-[1.1] transition-all duration-200'>
              <img src="/github.svg" alt="GitHub" />
            </a>

            {/* Email */}
            <a href="mailto:colinlevine7@gmail.com" className='hover:scale-[1.1] transition-all duration-200'>
              <img src="/mail.svg" alt="Email" />
            </a>
          </div>

          <p className='font-sans text-2xl text-deep-blue reveal reveal-up'>last updated October 1, 2026</p>
        </section>

        {/* Experience Section */}
        <section id="experience" className='flex flex-col gap-[64px]'>
          <h2 className='font-sans text-[64px] text-bright-blue font-semibold reveal reveal-left -mb-[32px]'>work experience</h2>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <div className='flex flex-row justify-between items-center sm:gap-4'>
              <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Afterword - Founder</h3>
              <a href="https://afterword.app" className='hidden sm:block px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white whitespace-nowrap flex-shrink-0'>Learn More</a>
            </div>
            <h4 className='font-serif text-4xl text-deep-blue'>
              Spring 2026 – Summer 2026 | Dallas, TX
              <br />
              <span className='font-serif-italic text-[0.833em]'>TypeScript, React Native, Open-source Embedding Models, Stripe, Azure, Supabase, Fastify</span>
            </h4>
            <ul className='font-sans text-2xl text-deep-blue list-disc list-outside pl-8 space-y-[12px]'>
                <li>Reached <span className='font-semibold'>100+ users in less than 2 months</span> and <span className='font-semibold'>paid out $100 to creators</span> on the platform.</li>
                <li>Launched a social media app for creative writing (poems, essays, book excerpts, etc.) in June 2026 with a platform-wide subscription (instead of per publication) and a customizable full-screen vertical feed.</li>
                <li><span className='font-semibold'>Shipped iOS app</span> and 3-server architecture: main API, embeddings, and web server for browser version.</li>
                <li>Users describe in natural language what they want to see more or less of in the feed.</li>
                <li>From a user: “It was such a small moment that made me feel incredibly seen and encouraged as a writer.”</li>
            </ul>
            {/* Shown only on mobile */}
            <a href="https://afterword.app" className='sm:hidden px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white self-start'>Learn More</a>
          </div>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Microsoft AI - Software Engineer Intern</h3>
            <h4 className='font-serif text-4xl text-deep-blue'>Edge Fundamentals Performance | Summer 2025 | Redmond, WA</h4>
            <ul className='font-sans text-2xl text-deep-blue list-disc list-outside pl-8 space-y-[12px]'>
                <li>Enhanced an internal <span className='font-semibold'>AI-powered commit analysis tool</span> that leverages <span className='font-semibold'>vector databases and GPT-4o</span> to interpret Git commits and assess their impact on browser performance.</li>
                <li>Expanded the tool (originally designed for Edge) into a <span className='font-semibold'>flexible, multi-purpose commit analysis system</span> that can be used across any internal repo.</li>
                <li><span className='font-semibold'>Redesigned UI in Figma</span> for greater usability and implemented frontend using <span className='font-semibold'>React and TypeScript</span>, while improving backend logic in <span className='font-semibold'>Python</span>.</li>
                <li>The tool was integrated into <span className='font-semibold'>Microsoft’s MCP server ecosystem</span> using my implementation as a blueprint.</li>
            </ul>
          </div>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Microsoft AI - Explore Intern <span className='font-normal'>(SWE & PM)</span></h3>
            <h4 className='font-serif text-4xl text-deep-blue'>Edge Consumer Engagement Verticals | Summer 2024 | Redmond, WA</h4>
            <ul className='font-sans text-2xl text-deep-blue list-disc list-outside pl-8 space-y-[12px]'>
                <li>Optimized the delivery mechanism of a crucial asset used by both the <span className='font-semibold'>Edge sidebar and Windows Copilot</span>, impacting <span className='font-semibold'>hundreds of millions of users</span> globally.</li>
                <li>Achieved an <span className='font-semibold'>83% reduction in CDN asset delivery costs</span> for the entire browser and <span className='font-semibold'>improved browser launch times by 3-4 seconds on P90 and P95 devices</span>.</li>
                <li>Involved in every phase of the project, from product specs to engineering implementation, utilizing <span className='font-semibold'>C++ and Python</span>.</li>
                <li>Was an early contributor to an unreleased browser feature, focusing on <span className='font-semibold'>TypeScript</span> for UI and C++, collaborating with designers, PMs, and SWEs to deliver on the product.</li>
            </ul>
          </div>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <div className='flex flex-row justify-between items-center sm:gap-4'>
              <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Flashback - Founder <span className='font-normal'>(part-time)</span></h3>
              <a href="https://flashbackstudy.com" className='hidden sm:block px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white whitespace-nowrap flex-shrink-0'>Learn More</a>
            </div>
            <h4 className='font-serif text-4xl text-deep-blue'>
              Spring 2024 – Summer 2025 | Texas & Washington
              <br />
              <span className='font-serif-italic text-[0.833em]'>Next.js, Azure, Vercel, Supabase (PostgreSQL), Anthropic, Stripe, Notion</span>
            </h4>
            <ul className='font-sans text-2xl text-deep-blue list-disc list-outside pl-8 space-y-[12px]'>
                <li>Bootstrapped consumer education app to <span className='font-semibold'>3,000+ users</span> who generated <span className='font-semibold'>30,000+ flashcards</span>.</li>
                <li>Flashback is an <span className='font-semibold'>AI study partner that turns any course material into memory-boosting study sessions</span>, converting Notion pages, text inputs, PDFs, and YouTube videos into flashcards, multiple-choice quizzes, and AI-evaluated free response questions.</li>
                <li>Launched in January 2025 and is still used internationally by college students, medical doctors, and homeschool parents.</li>
            </ul>
            {/* Shown only on mobile */}
            <a href="https://flashbackstudy.com" className='sm:hidden px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white self-start'>Learn More</a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className='flex flex-col gap-[64px] mt-[64px]'>
          <h2 className='font-sans text-[64px] text-bright-blue font-semibold reveal reveal-left -mb-[32px]'>recent projects</h2>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <h3 className='font-sans text-4xl text-deep-blue font-semibold'>RL Drones</h3>
            <h4 className='font-serif text-4xl text-deep-blue'>
              Spring 2026
              <br />
              <span className='font-serif-italic text-[0.833em]'>Python, PyTorch</span>
            </h4>
            <ul className='font-sans text-2xl text-deep-blue list-disc list-outside pl-8 space-y-[12px]'>
                <li>Constructed a <span className='font-semibold'>GPU-batched quadrotor physics simulator</span> for RL training of autonomous racing drones.</li>
                <li>Trained a <span className='font-semibold'>ConvNeXt + EPro-PnP</span> perception model that estimates gate pose and velocity from camera.</li>
                <li>Trained a <a href="https://arxiv.org/abs/2512.24880" target="_blank" rel="noopener noreferrer" className='font-semibold underline hover:text-bright-blue transition-colors duration-200'>Manifold-Constrained Hyper-Connections</a> policy with <span className='font-semibold'>PPO</span> that is adaptable to any drone/perception model via a 150D state interface.</li>
            </ul>
          </div>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <div className='flex flex-row justify-between items-center sm:gap-4'>
              <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Savira - AI Security</h3>
              <a href="https://substack.com/home/post/p-171507545" className='hidden sm:block px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white whitespace-nowrap flex-shrink-0'>Learn More</a>
            </div>
            <h4 className='font-serif text-4xl text-deep-blue'>
              Fall 2025
              <br />
              <span className='font-serif-italic text-[0.833em]'>Custom models, Python, Hugging Face, PyTorch</span>
            </h4>
            <ul className='font-sans text-2xl text-deep-blue list-disc list-outside pl-8 space-y-[12px]'>
                <li>Utilized traditional deep learning principles around image classification to create text classification models capable of detecting prompt injection attacks with 90%+ accuracy on leading benchmarks.</li>
                <li>Used Qwen3-4B base model as the backbone and attached a classification head, training with <span className='font-semibold'>Low-Rank Adaptation (LoRA)</span> on an <span className='font-semibold'>NVIDIA A100 GPU</span>.</li>
            </ul>
            {/* Shown only on mobile */}
            <a href="https://substack.com/home/post/p-171507545" className='sm:hidden px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white self-start'>Learn More</a>
          </div>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <div className='flex flex-row justify-between items-center sm:gap-4'>
              <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Open Game Agent - Microsoft Global Intern Hackathon</h3>
              <a href="https://github.com/colinlevine/open-game-agent" className='hidden sm:block px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white whitespace-nowrap flex-shrink-0'>Learn More</a>
            </div>
            <h4 className='font-serif text-4xl text-deep-blue'>
              Summer 2025
              <br />
              <span className='font-serif-italic text-[0.833em]'>OpenAI, Python, Model Context Protocol</span>
            </h4>
            <ul className='font-sans text-2xl text-deep-blue list-disc list-outside pl-8 space-y-[12px]'>
                <li>Developed an <span className='font-semibold'>open-source framework</span> to help developers build <span className='font-semibold'>memory-driven AI agents</span> with Model Context Protocol (MCP).</li>
                <li>Enables agents to perceive on-screen states and perform click and keyboard interactions across games and other applications.</li>
                <li>Uses Retrieval-Augmented Generation (RAG) via <span className='font-semibold'>Azure AI Search</span> to store game states, decisions, and outcomes as embeddings, allowing agents to improve decision-making across sessions.</li>
            </ul>
            {/* Shown only on mobile */}
            <a href="https://github.com/colinlevine/open-game-agent" className='sm:hidden px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white self-start'>Learn More</a>
          </div>

        </section>
      </main>
    </>
  )
}

export default App
