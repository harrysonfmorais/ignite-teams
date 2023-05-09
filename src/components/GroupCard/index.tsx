import { TouchableOpacityProps} from 'react-native'
import { GroupCardContainer, Icon, Title } from "./styles";

interface GroupCardProps extends TouchableOpacityProps {
  title: string
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <GroupCardContainer {...rest}>
      <Icon />
      <Title>
        {title}
      </Title>
      
    </GroupCardContainer>
  )
}