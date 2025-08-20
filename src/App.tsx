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
        <section id="hero" className='pt-[64px] sm:pt-[250px] h-dvh flex flex-col gap-[24px]'>
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
        </section>

        {/* Experience Section */}
        <section id="experience" className='flex flex-col gap-[64px]'>
          <h2 className='font-sans text-[64px] text-bright-blue font-semibold reveal reveal-left -mb-[32px]'>work experience</h2>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Microsoft AI - Software Engineer Intern</h3>
            <h4 className='font-serif text-4xl text-deep-blue'>Edge Fundamentals Performance | Summer 2025 | Redmond, WA</h4>
            <p className='font-sans text-2xl text-deep-blue'>
              I enhanced an internal <span className='font-semibold'>AI-powered commit analysis tool</span> that leverages <span className='font-semibold'>Retrieval-Augmented Generation (RAG) and GPT-4o</span> to interpret Git commits and assess their impact on browser performance. Originally designed for Edge, I expanded the tool into a <span className='font-semibold'>flexible, multi-purpose commit analysis system</span> that can now be used across any internal repository. I <span className='font-semibold'>redesigned the UI in Figma</span> for greater usability and implemented the frontend using <span className='font-semibold'>React and TypeScript</span>, while improving backend logic in <span className='font-semibold'>Python</span>. This work directly contributes to Microsoft’s broader vision of building the best AI browser.
            </p>
          </div>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Microsoft AI - Explore Intern (SWE & PM)</h3>
            <h4 className='font-serif text-4xl text-deep-blue'>Edge Consumer Engagement Verticals | Summer 2024 | Redmond, WA</h4>
            <p className='font-sans text-2xl text-deep-blue'>
              I played a pivotal role in enhancing features that impact <span className='font-semibold'>hundreds of millions of users globally</span>. One of my main contributions was improving the Edge sidebar's functionality in multiple languages, significantly optimizing a crucial file used by both the <span className='font-semibold'>Edge sidebar and Windows Copilot</span>. This optimization achieved an impressive <span className='font-semibold'>83% reduction in CDN costs</span> for asset delivery and <span className='font-semibold'>enhanced browser launch times by 3-4 seconds</span> on P90 and P95 devices. I was deeply involved in every phase of the project, from drafting the initial product management specifications to the engineering implementation, utilizing <span className='font-semibold'>C++ and Python</span>. I collaborated with engineers across three continents to refine and enhance a feature that reaches a vast worldwide user base. Additionally, I contributed significantly to the development of an unreleased Edge browser feature, focusing on front-end UI bug fixes with <span className='font-semibold'>TypeScript</span> and back-end/client-side changes with C++, collaborating with UI/UX designers, product managers, and software engineers to deliver on the product.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="experience" className='flex flex-col gap-[64px] mt-[64px]'>
          <h2 className='font-sans text-[64px] text-bright-blue font-semibold reveal reveal-left -mb-[32px]'>recent projects</h2>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <div className='flex flex-row justify-between items-center'>
              <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Open Game Agent - Microsoft Global Intern Hackathon</h3>
              <a href="https://github.com/colinlevine/open-game-agent" className='px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white'>Learn More</a>
            </div>
            <h4 className='font-serif text-4xl text-deep-blue'>OpenAI, Python, Model Context Protocol, Azure AI Search, FastAPI</h4>
            <p className='font-sans text-2xl text-deep-blue'>
              I developed an <span className='font-semibold'>open-source framework</span> designed to help developers build <span className='font-semibold'>memory-driven AI agents</span> by combining the <span className='font-semibold'>Model Context Protocol (MCP)</span> with <span className='font-semibold'>computer vision and action execution</span>. The framework enables agents to perceive on-screen states and perform click and keyboard interactions across video games and other applications. To support long-term learning, I architected a <span className='font-semibold'>Retrieval-Augmented Generation (RAG) system</span> using <span className='font-semibold'>Azure AI Search</span> to store game states, decisions, and outcomes as embeddings, allowing agents to <span className='font-semibold'>improve decision-making across sessions</span>. While initially showcased through game-playing agents like 2048 and Wordle, the platform was built to be highly generalizable for developers.
            </p>
          </div>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <div className='flex flex-row justify-between items-center'>
              <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Flashback - AI Study Partner</h3>
              <a href="https://flashbackstudy.com" className='px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white'>Learn More</a>
            </div>
            <h4 className='font-serif text-4xl text-deep-blue'>Next.js, Azure, Vercel, Supabase (PostgreSQL), Anthropic, Stripe</h4>
            <p className='font-sans text-2xl text-deep-blue'>
              Flashback is your <span className='font-semibold'>AI study partner that turns any course material into memory-boosting study sessions</span>, converting Notion pages, text inputs, PDFs, and YouTube videos into flashcards. It also generates <span className='font-semibold'>multiple-choice quizzes</span> and <span className='font-semibold'>AI-evaluated free response questions</span> that can understand and grade non-exact answers, providing instant feedback to reinforce learning. The built-in chatbot features text-to-speech and speech recognition for interactive, conversational studying. It launched in January 2025 and is now used internationally by everyone from <span className='font-semibold'>college students, to medical doctors, to homeschool parents</span> looking for extra help creating engaging, personalized learning materials for their kids. Over <span className='font-semibold'>19,000 flashcards have been generated by more than 1,600 users across 1,000 topics</span>, and the project has been featured in various articles, newsletters, and social media posts.
            </p>
          </div>

          <div className='flex flex-col gap-[36px] reveal reveal-left border-2 border-bright-blue rounded-lg p-3'>
            <div className='flex flex-row justify-between items-center'>
              <h3 className='font-sans text-4xl text-deep-blue font-semibold'>Music Generation Model</h3>
              <a href="https://github.com/colinlevine/music-generation-model" className='px-4 py-2 font-serif text-xl rounded-lg bg-bright-blue text-white'>Listen to Songs</a>
            </div>
            <h4 className='font-serif text-4xl text-deep-blue'>Python, TensorFlow, Keras, NumPy</h4>
            <p className='font-sans text-2xl text-deep-blue'>
              Trained on a dataset comprising 13,000 lines of classical music, the model utilizes <span className='font-semibold'>Long Short-Term Memory neural network architecture</span> to capture intricate patterns and structures present in musical compositions. The model generates music as text that is seamlessly converted to MIDI format and synthesized into a grand piano WAV file.</p>
          </div>

        </section>
      </main>
    </>
  )
}

export default App
