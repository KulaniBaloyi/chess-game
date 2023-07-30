import Image from 'next/image'
import Board from './components/Board'
import Opponent from './components/Opponent'
import You from './components/You'
import History from './components/History'

export default function Home() {
  return (
  <main className=' h-[100dvh] bg-[#312e2b] border-2 border-red-500 p-5 flex gap-5'>
    <section className='flex flex-col flex-[.7]'>
    <Opponent/>
      <Board/>
      <You/>
    </section>
    <aside className='flex-[.3]'>
      <History/>

    </aside>
    
      
    </main>
  )
}
