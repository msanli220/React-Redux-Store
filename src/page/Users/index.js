import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import DataTable from '../../components/DataTable';
import PageLayout from '../../components/PageLayout';
import { Paper, Grid } from '@material-ui/core';
import UserAction from '../../action/Page/User/UserAction';
import ButtonMui from '../../components/ButtonMui';
import Lodash from 'lodash'
import TextInput from '../../components/TextInput';
import DialogForm from '../../components/DialogForm';

function Users ( props ) {
    console.log("Users.rendered");
    const [ filter, setFilter ] = useState({ });
    const [userDetails, setUserDetails] = useState({});
    const [selectedIds, setSelectedIds] = useState();


    const [dialog, setDialog] = useState({isOpen:false, message:""});
    const [formData, setFormData] = useState({firstName:"",lastName:"",age:""});
    

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'firstName', headerName: 'First name', width: 130 },
      { field: 'lastName', headerName: 'Last name', width: 130 },
      { field: 'age',headerName: 'Age',type: 'number',width: 90, },
      
    ];


    useEffect(()=>{
      props.doClean();
    })

    function doAddUserOnClick(){

      setDialog({isOpen:true,message:"Please fill the form below"});


    }

    


    function doDeleteUserOnClick(selectedIds){
      console.log("selectedIds::",selectedIds)
      props.doDeleteUser({
        serviceData: {
             selectedIds
        }
    });
    }
    
  useEffect(()=>{

    props.doGetUsers({
      serviceData: {
          queryOptions: filter
      }
  });
  },[])
   

  function firstNameOnChange(e){
    setFormData(prevState => ({...prevState, firstName: e.target.value}));
  }

  function lastNameOnChange(e){
    setFormData(prevState => ({...prevState, lastName: e.target.value}));
  }

  function ageOnChange(e){
    setFormData(prevState => ({...prevState, age: e.target.value}));
  }



  function dialogOnSubmit(e) {
    props.doAddUser({
      serviceData: {
          queryOptions: userDetails
      }
  });

    } 
    return (
      <PageLayout
        title={"Users Page"}
        >
       <Paper elevation={2} style={{margin:10}}>
        <ButtonMui
        label={'Add'}
        onClick={(e) => {
          doAddUserOnClick();
        }}
        style={{textTransform:"none",backgroundColor:"#800f2f"}}
        
        />
        <ButtonMui
        label={'Remove'}
        onClick={(e) => {
          doDeleteUserOnClick(selectedIds);
        }}
        style={{textTransform:"none",backgroundColor:"#800f2f"}}
        
        />
      <DataTable
      columns={columns}
      rows={props.userList}
      onCellClick = {(e)=>{setSelectedIds({key:e.id})}}
      />
      </Paper>

      <DialogForm
                open={dialog.isOpen}
                title={`ADD`}
                actionButton={() => <React.Fragment>
                    <ButtonMui  style={{backgroundColor:'#6c757d'}}   onClick={()=>{setDialog({  isOpen: false, message:""})}} label={'CLOSE'} />
                    <ButtonMui onClick={dialogOnSubmit} label={'ADD'} />
                </React.Fragment>}
            >
                <Grid container spacing={2}>
                    
            
                        <TextInput
                            name={"firstName"}
                            label={"firstName"}
                            value={formData?.firstName}
                            onChange={(e)=>{firstNameOnChange(e)}}
                        />
                         
                        <TextInput
                            name={"lastName"}
                            label={"lastName"}
                            value={formData.lastName}
                            onChange={(e)=>{lastNameOnChange(e)}}
                        />   
                          <TextInput
                            name={"Age"}
                            label={"age"}
                            value={formData.age}
                            onChange={(e)=>{ageOnChange(e)}}
                        />    

                </Grid>
            </DialogForm>

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
       doAddUser: (params) => {userAction.addUser(params);},
       doDeleteUser: (params) => {userAction.deleteUser(params);}, 
       doClean: () => { userAction.getClean();
                        userAction.postClean();
                        userAction.deleteClean();
                      }
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
