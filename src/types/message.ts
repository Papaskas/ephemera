/**
 * @param id - unique identifier for the message. ChatId + MessageId === id
 * @paran text - text of the message
 * */
export type Message = {
  id: number,
  text: string,
}
