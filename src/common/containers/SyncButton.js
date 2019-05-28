import { connect } from 'react-redux'
import { MyButton } from '../components';
import { incrementNumber, decrementNumber } from '../../state/number_state/actions';

const mapStateToProps = (state, ownProps) => ({
    text: ownProps.isButtonAdd ? 'Increment' : 'Decrement',
    isButtonAdd: ownProps.isButtonAdd
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: ownProps.isButtonAdd ? () => dispatch(incrementNumber()) : () => dispatch(decrementNumber())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyButton)
