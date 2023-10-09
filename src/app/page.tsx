import { Facebook, Instagram, Wand2, Youtube } from 'lucide-react';

export default function Home() {
  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-zinc-800'>
      <button className='flex h-10 w-72 items-center justify-center gap-x-2 border-2 border-zinc-950 bg-purple-500 text-sm font-semibold text-zinc-900 shadow-[4px_4px_0_transparent] shadow-zinc-950 transition-colors hover:bg-purple-600'>
        <Instagram />
        Instagram
      </button>
      <button className='flex h-10 w-72 items-center justify-center gap-x-2 border-2 border-zinc-950 bg-blue-500 text-sm font-semibold text-zinc-900 shadow-[4px_4px_0_transparent] shadow-zinc-950 transition-colors hover:bg-blue-600'>
        <Facebook />
        Facebook
      </button>
      <button className='flex h-10 w-72 items-center justify-center gap-x-2 border-2 border-zinc-950 bg-red-500 text-sm font-semibold text-zinc-900 shadow-[4px_4px_0_transparent] shadow-zinc-950 transition-colors hover:bg-red-600'>
        <Youtube />
        YouTube
      </button>

      <button className='wand hover:after:animate-rainbow relative flex h-44 w-44 flex-col items-center justify-center overflow-hidden rounded-full p-2 text-zinc-100'>
        <div className='z-10 flex h-full w-full flex-col items-center justify-center gap-4 rounded-full bg-zinc-900'>
          <Wand2 />
          Click aqui!
        </div>
      </button>
    </main>
  );
}
