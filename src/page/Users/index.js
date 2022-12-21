import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";




function Users ( props ) {
    console.log("Users.rendered");
  

   
    return (
      <div>
        <h1>Users Page</h1>
      </div>
    );
}

const mapStateToProps = function ( state, props ) {
    console.log("Users.mapStateToProps",state);
  
   return {
       

    }
}

const mapDispatchToProps = function ( dispatch ) {
    console.log("Users.mapDispatchToProps");
   
    return {
       
    }
}

const Component = React.memo(Users, (prevProps, nextProps) => {
    console.log("---- Users.React.memo ----\n", "PrevProps:", prevProps, "NextProps:", nextProps);
   

    console.log("Users.doNotRender");
    return true;
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
