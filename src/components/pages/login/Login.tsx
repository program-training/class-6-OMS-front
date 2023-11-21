import {loginUser, registerUser} from '../../../services/usersServices'
import {fetchOrders} from '../../../services/ordersService'
console.log(await fetchOrders());
//console.log(await registerUser({email: "trywithtoken22@gmail.com", password: "mendiL23!!", isAdmin: true, userName: "yosi"}));
const Login = () => {
  
  return (
    <div>Login</div>
  )
}

export default Login