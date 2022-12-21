import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";




function Products ( props ) {
    console.log("Products.rendered");
  

   
    return (
      <div>
      <h1>Products Page</h1>
    
      </div>
    );
}

const mapStateToProps = function ( state, props ) {
    console.log("Products.mapStateToProps",state);
  
   return {
       

    }
}

const mapDispatchToProps = function ( dispatch ) {
    console.log("Products.mapDispatchToProps");
   
    return {
       
    }
}

const Component = React.memo(Products, (prevProps, nextProps) => {
    console.log("---- Products.React.memo ----\n", "PrevProps:", prevProps, "NextProps:", nextProps);
   

    console.log("Products.doNotRender");
    return true;
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
