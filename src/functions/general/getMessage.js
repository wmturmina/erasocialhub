const getMessage = (messages, formattedMessage) => {
  return (
    messages[(formattedMessage.props || {}).id] ||
    (formattedMessage.props || {}).defaultMessage
  )
}
export default getMessage
