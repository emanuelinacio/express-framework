import type { NextPage } from 'next'
import Hero from '../../components/single/Hero';
import Info from '../../components/single/Info';
import Tabs from '../../components/single/Tabs';
import Search from '../../components/single/Search';
import api from '../../lib/http';

const singleID: NextPage = ( props:any ) => {

  const { store } = props;

  console.log( store.store );

  return (
    <div>
        <Hero></Hero>
        <Info></Info>
        <Search></Search>
        <Tabs></Tabs>
    </div>
  );
}

export default singleID;

export const getServerSideProps = async (context:any) => {

    const responseAxios = await api.get( `/stores/single/${context.params.id}` );
    const store = await responseAxios.data;

    return { props: { store } }
}