import useReveal from '../hooks/useReveal';
import { posts, formatDate, type Post } from './posts';

function EssayList() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className='flex flex-col gap-[64px] w-full max-w-[52rem] mx-auto'>
      <header className='flex flex-col gap-[24px] pt-[15vh]'>
        <a href="/" className='font-serif text-2xl text-deep-blue hover:text-bright-blue transition-colors duration-200 self-start reveal reveal-up'>
          ← colin levine
        </a>
        <h1 className='essay-title font-sans text-[64px] leading-[1.05] text-bright-blue font-semibold reveal reveal-up'>essays</h1>
      </header>

      <section className='flex flex-col gap-[36px]'>
        {sorted.map((post) => (
          <a
            key={post.slug}
            href={`/essays/${post.slug}/`}
            className='flex flex-col gap-[24px] reveal reveal-right border-2 border-bright-blue rounded-lg p-3 hover:bg-bright-blue/5 transition-colors duration-200'
          >
            <h3 className='font-sans text-4xl text-deep-blue font-semibold'>{post.title}</h3>
            <h4 className='font-serif text-4xl text-deep-blue'>
              {formatDate(post.date)}
            </h4>
            <p className='font-sans text-2xl text-deep-blue'>{post.excerpt}</p>
          </a>
        ))}
      </section>
    </div>
  );
}

function EssayPost({ post }: { post: Post }) {
  return (
    <article className='flex flex-col gap-[48px] w-full max-w-[52rem] mx-auto pb-[40vh]'>
      <header className='flex flex-col gap-[24px] pt-[15vh]'>
        <a href="/essays/" className='font-serif text-2xl text-deep-blue hover:text-bright-blue transition-colors duration-200 self-start reveal reveal-up'>
          ← essays
        </a>
        <h1 className='essay-title font-sans text-[64px] leading-[1.05] text-bright-blue font-semibold reveal reveal-up'>{post.title}</h1>
        <h4 className='font-serif text-4xl text-deep-blue reveal reveal-up'>
          Colin Levine | {formatDate(post.date)}
        </h4>
      </header>

      <div className='essay-body flex flex-col font-sans text-2xl text-deep-blue'>
        {post.content}
      </div>
    </article>
  );
}

function NotFound() {
  return (
    <header className='flex flex-col gap-[24px] pt-[25vh]'>
      <h1 className='font-sans text-[64px] text-bright-blue font-semibold'>essay not found</h1>
      <a href="/essays/" className='font-serif text-2xl text-deep-blue hover:text-bright-blue transition-colors duration-200 self-start'>
        ← essays
      </a>
    </header>
  );
}

export default function EssaysApp() {
  // Each top-level block of an essay body (paragraph, quote) reveals individually.
  useReveal('.reveal, .essay-body > *');

  const slug = window.location.pathname.replace(/^\/essays\/?/, '').replace(/\/$/, '');
  const post = slug ? posts.find((p) => p.slug === slug) : undefined;

  if (post) document.title = `${post.title} - Colin Levine`;

  return (
    <main className='flex flex-col gap-[64px] px-4 md:px-[32px] lg:px-[64px] pb-[160px]'>
      {!slug ? <EssayList /> : post ? <EssayPost post={post} /> : <NotFound />}
    </main>
  );
}
