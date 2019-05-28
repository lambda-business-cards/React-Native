import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import LoadingView from '../../views/LoadingView';
import Auth from '../Authenticate';

export default createSwitchNavigator({ Loading: LoadingView, Auth });
