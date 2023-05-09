import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const GroupContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.COLORS.GRAY_600};
  padding: 24px;
`