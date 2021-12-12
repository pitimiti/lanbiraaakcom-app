import { Text as T } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, typography, space, border, borderRadius } from 'styled-system'

const Text = styled(T)(compose(typography, space, color, size, border, borderRadius))

export default Text
