 
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import {
  HomeStack,
  CategoriesStack,
  HistoryStack,
  ProfileStack,
} from '../tabs/index';
import { TabBar } from './components';
import { ROUTES } from 'src/consts';
import { colors, normalize } from 'src/common';

const BottomBar = createBottomTabNavigator();

const BottomTabStack = () => {

  return (
    <View style={styles.container}>
      <BottomBar.Navigator
        tabBar={props => (
          <View style={styles.navigationContainer}>
            <BottomTabBar {...props} />
          </View>
        )}
        screenOptions={{
          tabBarStyle: styles.tabBar,
          headerShown: false,
        }}>
        <BottomBar.Screen
          name={ROUTES.HOME_STACK}
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarButton: props => (
              <TabBar label="Home" index={1} {...props} />
            ),
          }}
        />
        <BottomBar.Screen
          name={ROUTES.CATEGORIES_STACK}
          component={CategoriesStack}
          options={{
            tabBarLabel: '',
            tabBarButton: props => (
              <TabBar label="Categories" index={2} {...props} />
            ),
          }}
        />
        <BottomBar.Screen
          name={ROUTES.HISTORY_STACK}
          component={HistoryStack}
          options={{
            tabBarLabel: '',
            tabBarButton: props => (
              <TabBar label="History" index={3} {...props} />
            ),
          }}
        />
        <BottomBar.Screen
          name={ROUTES.PROFILE_STACK}
          component={ProfileStack}
          options={{
            tabBarLabel: '',
            tabBarButton: props => (
              <TabBar label="Profile" index={4} {...props} />
            ),
          }}
        />
      </BottomBar.Navigator>
    </View>
  );
};

export default BottomTabStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  tabBar: {
    backgroundColor: colors.APP_PRIMARY,
    borderTopColor: colors.BOTTOM_TAB_BORDER,
    borderTopWidth:normalize(1.2),
    height: normalize(87.35),
    alignItems: 'center',
    paddingHorizontal: normalize(0),
  }
});
