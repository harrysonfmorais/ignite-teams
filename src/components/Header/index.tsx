import { BackButton, BackIcon, HeaderContainer, Logo } from "./styles";

import logoImg from '@assets/logo.png'
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }
  
  return (
    <HeaderContainer>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
      </BackButton>
      }
      <Logo source={logoImg}/>
    </HeaderContainer>
  )
}