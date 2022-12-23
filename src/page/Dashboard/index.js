import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";

import PageLayout from '../../components/PageLayout';
import { Paper } from '@material-ui/core';
function Dashboard ( props ) {
    console.log("Dashboard.rendered");
  

   
    return (
      <div>
  
      <PageLayout
        title={"DashBoard Page"}
        >
       <Paper elevation={2} style={{margin:10}}>
      
      </Paper>
      </PageLayout>
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
