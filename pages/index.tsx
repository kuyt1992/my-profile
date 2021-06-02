import { VFC } from 'react'
import Layout from '../components/Layout'
import Profile from '../components/Profile'

const Home: VFC = () => {
  return (
    <Layout title="Home">
      <Profile />
    </Layout>
  )
}

export default Home
