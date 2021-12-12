import { View } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, space, flexbox, border, borderRadius, shadow } from 'styled-system'

const Box = styled(View)(compose(color, size, space, flexbox, border, borderRadius, shadow))

export default Box
