import type { ReactNode } from 'react';

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date (YYYY-MM-DD)
  excerpt: string;
  content: ReactNode;
};

const linkClass = 'underline hover:text-bright-blue transition-colors duration-200';

const link = (href: string, text: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {text}
  </a>
);

// To add a post: add an entry here, then add a matching essays/<id>/index.html (id = a fresh UUID)
// and register it in vite.config.ts.
export const posts: Post[] = [
  {
    slug: '45cdf6d8-e46e-46b6-840f-070c8f3cf144',
    title: 'I refuse to build another AI startup',
    date: '2026-06-19',
    excerpt: 'In the big 26, when it comes to software, it feels almost taboo not to be building an AI startup. I tried the AI startup thing, and I failed miserably.',
    content: (
      <>
        <p>
          In the big 26, when it comes to software, it feels almost taboo not to be building an AI startup. Quite literally, 93% of software companies in the most recent {link('https://www.ycombinator.com/companies?batch=Spring%202026', 'Y Combinator batch')} are AI companies. <b className='font-semibold'>I tried the AI startup thing, and I failed miserably.</b>
        </p>
        <p>
          Last August/September, I started working <i>very</i> part-time on a B2B AI security startup while being in college full-time. I was training my own models and quickly realized that I wouldn’t be able to build this company unless I took on outside investment. I made great progress with the money I had, combined with some extra credits that Nader Khalil from NVIDIA blessed me with after I reported some issues (Thanks Nader!). I pitched to big funds, solo GPs, accelerator scouts, and angel investors, and the common thread among the ones that I really connected with was that they wanted to see more progress. I totally get it. I was in this weird chicken and egg scenario where I needed a ton of cash to make meaningful progress, and I needed meaningful progress to raise a ton of cash. I went full-time in January with some help from family, but I was still stuck in the same scenario…trying to accomplish as much as I could with the money that I’d invested and saved up from my internships.
        </p>
        <blockquote>
          Funny side note: One investor told me to “<i>just</i> raise like $250k from friends and family.” We clearly have different friends.
        </blockquote>
        <p>
          I met with an {link('https://speedrun.a16z.com/', 'a16z speedrun')} scout right after going full-time, and he asked me very directly, “Why do you care?” I made up something on the spot about how the market opportunity was great and that I appreciated the learnings that came from a deeply technical business. That was kind of true, but deep down I knew that I didn’t really care about this idea. It seemed like it would be <i>successful</i> on paper, so I tried to build it and failed. It was time to pivot.
        </p>
        <p>
          In late January, I decided to build something completely different, a new social media app for long-form writing called Afterword. Pivoting from B2B AI to a consumer social app seems ridiculous. Social media apps are notoriously impossible to get off the ground, and even if you do, most of the time they crash and burn…falling into irrelevancy like they never even existed. But this idea was a culmination of the people and things that inspired me around this time: Jackson Dahl and his podcast {link('https://www.youtube.com/@Dialectic', 'Dialectic')}, Lulu Cheng Meservey and her {link('https://x.com/lulumeservey/status/2008187268922536109', 'push for authenticity')}, and a poetry class I took in college that introduced me to the intricacies of shrinking an entire life’s worth of experiences into a beautiful, concise piece of literature. The amalgamation of these influences reinvigorated my passion for the craft that is writing and really my passion for human creativity as a whole. I want to help facilitate this curiosity in others and showcase those who have been blessed with such an incredible gift.
        </p>
        <p>
          Undeniably, AI is a fantastic tool that has enabled so many people to build truly incredible things, but <b className='font-semibold'>I’m of the belief that nobody really wants more AI. They want fewer problems, so go solve some or do whatever you want.</b>
        </p>
        <p>
          The lesson I want to share with you is to pursue whatever feels authentic <i>to you</i>. No matter how untechnical or unimpressive it seems. No matter who looks down on you for your idea. Just go build whatever feels right to you, and if you fail, at least you’ve learned something valuable that you can take with you on to the next thing.
        </p>
        <p>
          After many months of hard work and an absurd amount of back and forth with the App Store review team, <b className='font-semibold'>I launched Afterword today</b>. I would love your feedback, so please reach out to me at <a href="mailto:colin@afterword.app" className={linkClass}>colin@afterword.app</a>.
        </p>
      </>
    ),
  },
];

export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
