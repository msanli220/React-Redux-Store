import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import DataTable from '../../components/DataTable';
import PageLayout from '../../components/PageLayout';
import { Paper } from '@material-ui/core';
import UserAction from '../../action/Page/User/UserAction';

function Users ( props ) {
    console.log("Users.rendered");
    const [ filter, setFilter ] = useState({ });

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'firstName', headerName: 'First name', width: 130 },
      { field: 'lastName', headerName: 'Last name', width: 130 },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
      },
      
    ];

    
  useEffect(()=>{

    props.doGetUsers({
      serviceData: {
          queryOptions: filter
      }
  });
  },[])
   
  useEffect(()=>{
    console.log("userList:", props.userList)


  },[props.userList])
    return (
      <PageLayout
        title={"Users Page"}
        >
       <Paper elevation={2} style={{margin:10}}>
      <DataTable
      columns={columns}
      rows={props.userList}
      />
      </Paper>
      </PageLayout>
    );
}

const mapStateToProps = function ( state, props ) {
    console.log("Users.mapStateToProps",state);

    const userList = state.UserPageStore.UserServiceStore?.list?.payload;
    const userListIsLoading = state.UserPageStore.UserServiceStore.list?.isLoading;
   return {
    userList,
    userListIsLoading

    }
}

const mapDispatchToProps = function ( dispatch ) {
    console.log("Users.mapDispatchToProps");
   const userAction = new UserAction(dispatch);
    return {
       doGetUsers: (params) =>{userAction.get(params);} ,
       doClean: () => { userAction.getClean();}
    }
}

const Component = React.memo(Users, (prevProps, nextProps) => {
    console.log("---- Users.React.memo ----\n", "PrevProps:", prevProps, "NextProps:", nextProps);
    if ( prevProps.userListIsLoading !== nextProps.userListIsLoading ) {
      console.log("Users.doRender");
      return false;
  }
    console.log("Users.doNotRender");
    return true;
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
