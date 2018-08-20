import login from './componentes/login'
import Main from './componentes/Main'
import Chat from './componentes/Chat'

import { createStackNavigator} from 'react-navigation'

const navigator = createStackNavigator({
  login: {screen: login},
  Main: {screen: Main},
  Chat: {screen: Chat},
});

export default navigator