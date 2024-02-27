import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-4 text-center sm:flex-row'>
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
        </Link>

        <p className='font-bold'>
          &copy; Evently. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
