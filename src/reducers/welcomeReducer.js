export default (state = '', { type, payload }) => {
  switch (type) {
    case 'WELCOME':
      return payload
    default:
      return state
  }
}
