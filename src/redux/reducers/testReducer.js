function testReducer(state = '', action) {
  switch (action.type) {
    case 'SOMETYPE':
      return '';
    default:
      return state;
  }
}


export default testReducer;