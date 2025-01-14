// ** Core Layout Import
// !Do not remove the Layout import
import Layout from '@layouts/VerticalLayout'

// ** Menu Items Array
import navigation from '@src/navigation/vertical'


const VerticalLayout = props => {
  const userType = localStorage.getItem('utype');
  // const [menuData, setMenuData] = useState([])

  // ** For ServerSide navigation
  // useEffect(() => {
  //   axios.get(URL).then(response => setMenuData(response.data))
  // }, [])  
  const { ...rest } = props;
  return (
    <Layout menuData={navigation[userType]} {...rest}>
      {props.children}
    </Layout>
  )
}

export default VerticalLayout
