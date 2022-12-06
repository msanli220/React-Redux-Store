import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import SignIn from '../Authentication/component/sign-in';


function Dashboard ( props ) {
    console.log("Dashboard.rendered");
  

   
    return (
      <div>
       <div>Dashboard</div>
      </div>
    );
}

const mapStateToProps = function ( state, props ) {
    console.log("Dashboard.mapStateToProps",state);
  
   return {
       

    }
}

const mapDispatchToProps = function ( dispatch ) {
    console.log("Dashboard.mapDispatchToProps");
   
    return {
       
    }
}

const Component = React.memo(Dashboard, (prevProps, nextProps) => {
    console.log("---- Dashboard.React.memo ----\n", "PrevProps:", prevProps, "NextProps:", nextProps);
   

    console.log("Dashboard.doNotRender");
    return true;
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
