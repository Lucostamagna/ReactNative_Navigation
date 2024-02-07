import RootNavigator from './src/Navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import * as Notifications from 'expo-notifications'


//inicializador
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator/>
    </Provider>
  );
}
