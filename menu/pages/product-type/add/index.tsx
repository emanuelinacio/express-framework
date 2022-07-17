import type { NextPage } from 'next'
import Menu from '../../../components/menu';
import FormAdd from '../../../components/productType/FormAdd';

const Promotion: NextPage = () => {
  return (
    <>
        <Menu
            layout={<FormAdd/>}
        ></Menu>
    </>
  )
}

export default Promotion