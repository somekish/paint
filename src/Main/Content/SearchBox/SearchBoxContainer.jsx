import { connect } from "react-redux";
import { updateSearchActionCreator } from "../../../redux/reducers/mainReducer";
import SearchBox from "./SearchBox";

// function SearchBoxContainer() {
//
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let updateSearch = (text) => {
//           store.dispatch(updateSearchActionCreator(text));
//         };
//         return (
//           <SearchBox
//             updateSearchActionCreator={updateSearch}
//             state={store.getState()}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    state: state.main.content.searchBox,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateSearchText: (text) => {
      dispatch(updateSearchActionCreator(text));
    },
  };
};
const SearchBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);

export default SearchBoxContainer;
