import type { NextPage } from 'next'
import Hero from '../../components/single/Hero';
import Info from '../../components/single/Info';
import Tabs from '../../components/single/Tabs';
import Search from '../../components/single/Search';

const Single: NextPage = () => {
  return (
    <div>
        <Hero></Hero>
        <Info></Info>
        <Search></Search>
        <Tabs></Tabs>
    </div>
  )
}

export default Single