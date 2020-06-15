import React from 'react'
import Layout from 'src/Layout'
import Title from 'src/sections/home/Title'
import Header from 'src/sections/common/Header'
import Subtitle from 'src/sections/home/Subtitle'
import TopicsRow from 'src/sections/home/TopicsRow'
import Project from 'src/sections/home/Project'

const Home = () => {
  return <Layout>
    <Header />
    <Title />
    <Subtitle />
    <TopicsRow />
    <Project />
  </Layout>
}

export default Home
