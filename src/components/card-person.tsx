'use client'

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export function CardPerson() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Image
          src='https://static.wixstatic.com/media/1f31ed_bb3725298a37491b9255627e989fbb81~mv2.jpg/v1/fill/w_424,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1f31ed_bb3725298a37491b9255627e989fbb81~mv2.jpg'
          alt='Camile Bueno'
          className='h-[424px] w-[424px] shrink-0 cursor-pointer grayscale transition-all hover:grayscale-0'
          width={424}
          height={424}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/80 data-[state=open]:animate-overlayShow fixed inset-0 ' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] h-[554px] max-w-[450px] translate-x-[-50%] translate-y-[-50%] border-2 border-zinc-100 bg-zinc-950'>
          <Dialog.Title>
            Hello
          </Dialog.Title>
          <Dialog.Description />
          <Dialog.Close asChild>
            <button className='fixed top-8 right-8 text-zinc-100 w-10 h-10 rounded hover:bg-zinc-900/50 flex items-center justify-center transition-colors'>
              <X size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
