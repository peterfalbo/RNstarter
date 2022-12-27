# RNstarter
Installs Basic React Native app, Navigation, Elements, Redux, Thunk, Debugger, Async Storage

yarn add @react-navigation/native

REACT NATIVE ELEMENTS
yarn add @rneui/themed @rneui/base
yarn add react-native-vector-icons
yarn add react-native-safe-area-context


Added
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return <SafeAreaProvider>...</SafeAreaProvider>;
}
as per https://reactnativeelements.com/docs/installation

yarn add redux react-redux redux-thunk
yarn add redux-devtools-extension 

Changed this to false in the podfile...
:hermes_enabled => false,
After doing this it worked with the standalone debugger


yarn add @react-native-async-storage/async-storage

Done all of the above, and starting to "Testing new libraries on App.js (as a demo)"
https://dev.to/roycechua/how-to-make-your-own-custom-react-native-templates-2021-20l5


TO CREATE A NEW APP WITH THIS TEMPLATE:
npx react-native init SomeApp --template https://github.com/peterfalbo/rnstarter

