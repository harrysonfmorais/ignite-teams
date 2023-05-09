import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonTypeStyleProps, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({title, type = 'PRIMARY', ...rest}: ButtonProps) {
  return (
    <ButtonContainer type={type} {...rest}>
      <Title>
        {title}
      </Title>
    </ButtonContainer>
  )
}