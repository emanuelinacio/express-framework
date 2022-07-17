import type { NextPage } from 'next'
import Menu from '../../../components/menu';
import FormEdit from '../../../components/promotion/FormEdit';

const Promotion: NextPage = () => {
  return (
    <>
        <Menu
            layout={<FormEdit/>}
        ></Menu>
    </>
  )
}

export default Promotion