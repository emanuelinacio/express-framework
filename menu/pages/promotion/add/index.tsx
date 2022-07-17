import type { NextPage } from 'next'
import Menu from '../../../components/menu';
import FormAdd from '../../../components/promotion/FormAdd';

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