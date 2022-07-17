import type { NextPage } from 'next'
import Menu from '../../components/menu';
import Listing from '../../components/productType/Listing';

const Promotion: NextPage = () => {
  return (
    <>
        <Menu
            layout={<Listing/>}
        ></Menu>
    </>
  )
}

export default Promotion