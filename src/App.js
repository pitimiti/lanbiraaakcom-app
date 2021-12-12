import 'react-native-gesture-handler'
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'

import Theme from './utils/Theme'
import TabNavigation from './components/TabNavigation'

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <SafeAreaProvider>
                <TabNavigation />
            </SafeAreaProvider>
        </ThemeProvider>
    )
}

export default App
