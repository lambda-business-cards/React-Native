import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import LoadingView from '../../views/LoadingView';
import Auth from '../Authenticate';
import App from '../App';

export default createSwitchNavigator({ Loading: LoadingView, Auth, App });
