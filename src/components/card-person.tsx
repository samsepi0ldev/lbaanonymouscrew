'use client'

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { Instagram, X } from 'lucide-react'

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
        <Dialog.Content className='p-4 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] h-[554px] max-w-5xl translate-x-[-50%] translate-y-[-50%] border-2 border-zinc-100 bg-zinc-950'>
          <div className='flex gap-10 mt-10'>
            <Image
              src='https://static.wixstatic.com/media/1f31ed_bb3725298a37491b9255627e989fbb81~mv2.jpg/v1/fill/w_424,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1f31ed_bb3725298a37491b9255627e989fbb81~mv2.jpg'
              alt='Camile Bueno'
              className='h-[424px] w-[424px] shrink-0 cursor-pointer grayscale transition-all hover:grayscale-0'
              width={424}
              height={424}
            />
            <div className='flex flex-col text-zinc-100'>
              <span>Hometown: Harbor City, CA</span>
              <br />
              <span>Dance Lineage: Kaba Modern, DVS, Chill Factor, KM Legacy, Culture Shock LA, Kinjaz</span>
              <br />
              <p>JD McElroy has been dancing in the professional industry for the past 15 years. Moving to Los Angeles from Boulder CO at the age of 17, JD quickly became one of the top dancers at Bloc Talent Agency at a very young age booking his first tour at 18.  From touring the world with artists such as Beyonce, Usher, Mariah Carey, Chris Brown Gloria Estefan. To staring in Commercial Campaigns with Apple, Pepsi, McDonalds. Featured in movies like, You Got Served, Collateral  Fast and Furious Tokyo drift.  He has danced with companies such as The Groovaloos and The LXD and currently representing The KINJAZ.</p>
            </div>
          </div>
          <button className='text-zinc-100 ml-auto bg-gradient-instagram px-4 gap-4 font-bold h-16 flex items-center justify-center rounded-full'>
            <Instagram />
            Me sega no instagram
          </button>
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
