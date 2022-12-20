import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";



function Dashboard ( props ) {
    console.log("Dashboard.rendered");
  

   
    return (
      <div>
       <div>Dashboard</div>
       <h1>This is Dashboard</h1>
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
