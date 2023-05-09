import { ListEmptyContainer, Message } from "./styles";

interface ListEmptyProps {
  message: string
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <ListEmptyContainer>
      <Message>
        {message}
      </Message>
    </ListEmptyContainer>
  )
}