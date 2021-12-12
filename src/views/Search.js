import * as React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/helper/Box'
import Header from '../components/Header'
import Text from '../components/helper/Text'

function SearchView() {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('light-content')
        }, [])
    )

    return (
        <Box as={SafeAreaView} bg="black">
            <Header bg="black">
                <Text fontSize={24} color="white">
                    Arama
                </Text>
            </Header>

            <Box bg="white" height="100%" pb={140}>
                <Text color="black">Arama sayfası</Text>
            </Box>
        </Box>
    )
}

export default SearchView
