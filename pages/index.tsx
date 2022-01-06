import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const HomeContainer = dynamic(() => import('../src/features/HomeContainer'), {
  ssr: false
})

const Home: NextPage = () => {
  return (
    <>
      <HomeContainer />
    </>
  )
}

export default Home
