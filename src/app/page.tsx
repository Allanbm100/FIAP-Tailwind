import { Header } from '../components/header/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main>
        <Header />
      </main>
      <section className='container mx-auto'>
        <div className='flex space-x-4 space-y-4'>
          <article className='w-1/3'>1</article>
          <article className='w-1/3'>2</article>
          <article className='w-1/3'>3</article>
        </div>
        <div className='flex space-x-4 space-y-4'>
          <article className='w-1/3'>4</article>
          <article className='w-1/3'>5</article>
          <article className='w-1/3'>6</article>
        </div>
      </section>
    </>
  )
}
