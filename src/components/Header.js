import React from 'react'
import { StatusBar, Platform } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import Box from './helper/Box'

export default function Header({ children, ...props }) {
    useFocusEffect(
        React.useCallback(() => {
            if (Platform.OS === 'android') {
                StatusBar.setBackgroundColor('transparent')
                StatusBar.setTranslucent(true)
            }
        }, [])
    )

    return (
        <Box alignItems="center" pb={20} pt={25} borderBottomWidth={1} borderBottomColor="extraLightGray" {...props}>
            {children}
        </Box>
    )
}
