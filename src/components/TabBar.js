import React from 'react'

import Theme from '../utils/Theme'
import Button from './helper/Button'
import Box from './helper/Box'
import Text from './helper/Text'
import { HomeIcon, SearchIcon, BookmarkIcon, BellIcon, UserIcon } from './icons/index'

function TabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options

    if (focusedOptions.tabBarVisible === false) {
        return null
    }

    return (
        <Box
            flexDirection="row"
            bg="white"
            pb={20}
            style={{
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 20
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name)
                    }
                }

                return (
                    <Button key={label} pt={6} flexDirection="column" height={56} flex={1} onPress={onPress}>
                        {label === 'HomeView' && <HomeIcon stroke={Theme.colors.black} width={30} height={30} />}
                        {label === 'SearchView' && <SearchIcon stroke={Theme.colors.black} width={30} height={30} />}
                        {label === 'SavedPostView' && <BookmarkIcon stroke={Theme.colors.black} width={30} height={30} />}
                        {label === 'NotificationView' && <BellIcon stroke={Theme.colors.black} width={30} height={30} />}
                        {label === 'ProfileView' && <UserIcon stroke={Theme.colors.black} width={30} height={30} />}
                        <Box size={3} bg={isFocused ? Theme.colors.black : 'white'} mt={6} />
                    </Button>
                )
            })}
        </Box>
    )
}

export default TabBar
