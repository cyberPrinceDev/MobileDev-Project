import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, // Hides tab bar everywhere
      }}
    >
      <Tabs.Screen name="login" options={{ href: null }} />
      <Tabs.Screen name="home" options={{ href: null }} />
    </Tabs>
  );
}