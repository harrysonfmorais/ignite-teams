import { HighlightContainer, Logo, Subtitle, Title } from "./styles";

interface HighlightProps {
  title: string
  subtitle: string
}

export function Highlight({title, subtitle}: HighlightProps) {
  return (
    <HighlightContainer>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </HighlightContainer>
  )
}