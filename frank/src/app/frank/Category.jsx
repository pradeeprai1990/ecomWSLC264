import React from 'react'
import Image from 'next/image';
import img1 from '../../img/c1.webp';
import img2 from '../../img/c2.jpg';
import img3 from '../../img/c3.webp';
import img4 from '../../img/c4.jpg';
import img5 from '../../img/c5.webp';
import img6 from '../../img/c6.webp';
export default function Category() {
  return (
    <div>
        <div className='w-full p-10'>
            <h1 className='text-[35px] mb-5'>Featured Categories</h1>
            <div className='flex space-x-2'>
                <div>
                    <Image src={img1} className='w-[200px]'/>
                    <h1>Women dress at 20$ sale</h1>
                </div>
                <div>
                    <Image src={img2} className='w-[200px]'/>
                    <h1>Men shirts at 20$ sale</h1>
                </div>
                <div>
                    <Image src={img3} className='w-[200px]'/>
                    <h1>Women top at 20$ sale</h1>
                </div>
                <div>
                    <Image src={img4} className='w-[200px]'/>
                    <h1>Women dress at 20$ sale</h1>
                </div>
                <div>
                    <Image src={img5} className='w-[200px]'/>
                    <h1>Women dress at 20$ sale</h1>
                </div>
                <div>
                    <Image src={img6} className='w-[200px]'/>
                    <h1>Men top at 20$ sale</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
