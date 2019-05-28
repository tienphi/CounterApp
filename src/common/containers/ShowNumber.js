import { connect } from 'react-redux'
import { MyNumber } from '../components';

const mapStateToProps = (state) => ({
    number: state.number
})

export default connect(mapStateToProps)(MyNumber)
