import Main from './componentes/Main';
import Chat from './componentes/Chat';
import login from './componentes/login';
import { createStackNavigator} from 'react-navigation'

state = {
  isLoggedIn: false
}

const navigator = createStackNavigator({
  login: {screen: login},
  Main: {screen: Main},
  Chat: {screen: Chat},
});






export default navigator

