import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useColorScheme } from 'nativewind'

export default function App() {
  const { colorScheme, toggleColorScheme }  = useColorScheme()
  //console.log(colorScheme)

  return (
    <View className="flex-1 bg-white justify-center items-center dark:bg-neutral-900">
      <StatusBar style={colorScheme == 'dark' ? 'light' : 'dark'} />
      <View className="flex-row justify-center items-center">
        <Text className="text-xl dark:text-white">Toggle Theme</Text>
        <Switch value={colorScheme == 'dark'} onChange={toggleColorScheme} />
      </View>
      <Text className="dark:text-white">Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
