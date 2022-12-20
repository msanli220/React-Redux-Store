import {connect} from "react-redux";
import Authentication from './page/Authentication';


function App( props ) {
    console.log("App.rendered: ");


    return <Authentication />;
}

const mapStateToProps = function(state, props) {
    console.log("App.mapStateToProps", state.AuthPageStore);
    return {
       
    }
}

const mapDispatchToProps = function (dispatch) {
    console.log("App.mapDispatchToProps");
  
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
