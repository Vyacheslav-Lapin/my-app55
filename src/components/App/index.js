import {connect} from "react-redux";
import Counter from '../Counter'

const mapStateToProps = state => ({countValue: state.count});
export default connect(mapStateToProps)(Counter);

// export default connect(mapStateToProps/*, mapDispatchToProps*/)(Counter);

// const increase = {type: 'increase'};
// const decrease = {type: 'decrease'};

// function mapDispatchToProps(dispatch) {
//     // noinspection JSUnusedGlobalSymbols
//     return {
//         increaseCount: () => dispatch(increase),
//         decreaseCount: () => dispatch(decrease),
//     };
// }

// HOC
