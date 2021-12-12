import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import TabBar from './TabBar'
import HomeView from '../views/Home'
import SearchView from '../views/Search'
import SavedPostView from '../views/SavedPost'
import NotificationView from '../views/Notification'
import ProfileView from '../views/Profile'

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const SavedPostStack = createStackNavigator()
const NotificationStack = createStackNavigator()
const ProfileStack = createStackNavigator()

function HomeStacks() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeView"
                component={HomeView}
                options={() => {
                    return {
                        headerShown: false
                    }
                }}
            />
        </HomeStack.Navigator>
    )
}

function SearchStacks() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="SearchView"
                component={SearchView}
                options={() => {
                    return {
                        headerShown: false
                    }
                }}
            />
        </SearchStack.Navigator>
    )
}

function SavedPostStacks() {
    return (
        <SavedPostStack.Navigator>
            <SavedPostStack.Screen
                name="SavedPostView"
                component={SavedPostView}
                options={() => {
                    return {
                        headerShown: false
                    }
                }}
            />
        </SavedPostStack.Navigator>
    )
}

function NotificationStacks() {
    return (
        <NotificationStack.Navigator>
            <NotificationStack.Screen
                name="NotificationView"
                component={NotificationView}
                options={() => {
                    return {
                        headerShown: false
                    }
                }}
            />
        </NotificationStack.Navigator>
    )
}

function ProfileStacks() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileView"
                component={ProfileView}
                options={() => {
                    return {
                        headerShown: false
                    }
                }}
            />
        </ProfileStack.Navigator>
    )
}

function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="HomeView" tabBar={(props) => <TabBar {...props} />}>
                <Tab.Screen name="HomeView" component={HomeStacks} />
                <Tab.Screen name="SearchView" component={SearchStacks} />
                <Tab.Screen name="SavedPostView" component={SavedPostStacks} />
                <Tab.Screen name="NotificationView" component={NotificationStacks} />
                <Tab.Screen name="ProfileView" component={ProfileStacks} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation
