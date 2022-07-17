import type { NextPage } from 'next'
import Menu from '../../components/menu';
import ListingPromotion from '../../components/promotion/Listing';

const Promotion: NextPage = () => {
  return (
    <>
        <Menu
            layout={<ListingPromotion/>}
        ></Menu>
    </>
  )
}

export default Promotion