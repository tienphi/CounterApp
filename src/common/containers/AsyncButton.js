import { connect } from 'react-redux'
import { MyButton } from '../components';
import { ActionTypes } from '../../state';

const mapStateToProps = (state, ownProps) => ({
    text: ownProps.isButtonAdd ? 'Increment after 1s' : 'Decrement after 1s',
    isButtonAdd: ownProps.isButtonAdd,
    containerStyle: { width: 150 }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: ownProps.isButtonAdd ? () => dispatch({ type: ActionTypes.INCREMENT_ASYNC }) : () => dispatch({ type: ActionTypes.DECREMENT_ASYNC })
})

export default connect(mapStateToProps, mapDispatchToProps)(MyButton)