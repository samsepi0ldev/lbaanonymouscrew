import { CardPerson } from '@/components/card-person';
import { Facebook, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-screen w-full bg-zinc-950'>
      <header className='peer-[]: flex h-28 w-full items-center justify-center bg-zinc-100/5'>
        <Image src='' alt='Logo' />
        <div className='prose uppercase prose-a:inline-block prose-a:w-24 prose-a:text-zinc-100 prose-a:no-underline'>
          <Link href='/home'>Inicio</Link>
          <Link href='/media'>Mídia</Link>
          <Link href='/events'>Eventos</Link>
          <Link href='/about'>Sobre</Link>
        </div>
      </header>
      <section className='flex h-96 max-h-96 flex-col items-center justify-center px-10 text-sm text-zinc-100 lg:px-96'>
        <p className='whitespace-pre-wrap text-center text-lg'>
          ESTABELECIDA EM 2011,
          <br />
          Somos um grupo de irmãos em busca de explorar destemidamente as
          profundezas de nossa imaginação e propósito artístico.
          Com mais de 16 membros no total, incluindo indivíduos especializados
          em outras habilidades além da dança, gostamos de nos considerar um{' '}
          {`'Artista'`}
          irmandade”, nosso objetivo comum é cultivar LBA a todo custo”, apoiar uns aos
          outros para alcançar nosso maior potencial coletivo,
          e impactar positivamente o mundo com nosso tempo e habilidades da
          maneira mais divertida possível.
          Somos o movimento nas sombras.
          Repeite a todos. Não tema a ninguém.
        </p>
      </section>
      <section className='flex flex-col items-center justify-center'>
        <div className='mb-10 flex w-full max-w-sm flex-col gap-4 prose-a:text-white'>
          <a
            href='https://www.youtube.com/user/serafimarcanjorafael'
            target='_blank'
            className='hover: flex items-center gap-4 rounded border-2 border-zinc-800 bg-zinc-900 px-4 py-2 hover:bg-zinc-800 transition-colors'
          >
            <Youtube />
            YouTube
          </a>
          <a
            href='https://facebook.com/lbaproducoes'
            target='_blank'
            className='flex items-center gap-4 rounded border-2 border-zinc-800 bg-zinc-900 px-4 py-2 hover:bg-zinc-800 transition-colors'
          >
            <Facebook />
            Facebook
          </a>
          <a
            href='https://instagram.com/lbaanonymouscrew'
            target='_blank'
            className='flex items-center gap-4 rounded border-2 border-zinc-800 bg-zinc-900 px-4 py-2 hover:bg-zinc-800 transition-colors'
          >
            <Instagram />
            Instagram
          </a>
        </div>
        <div className='flex items-center w-screen overflow-hidden overflow-x-auto'>
          <CardPerson />
          <CardPerson />
          <CardPerson />
          <CardPerson />
        </div>
      </section>
    </main>
  );
}
