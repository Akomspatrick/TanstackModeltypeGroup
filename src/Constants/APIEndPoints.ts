//export default const URL ="http://localhost:5007/"
type URLs = {
    ModelManagementURL: string;
    ProductionManagementURL: string;
    RegistrationManagementURL: string;
    RMAManagementURL: string;
    TokenURL: string;
  };
  
  export const BaseURLs: URLs = {
    ModelManagementURL: 'http://localhost:5007/api/',
    ProductionManagementURL: 'http://localhost:5008/api/',
    RegistrationManagementURL: 'http://localhost:5009/api/',
    RMAManagementURL: 'http://localhost:5010/api/',
    TokenURL: 'http://localhost:5011/',
  };
  

export const  EndPoints={

REGISTRATION_MANAGEMENT:{
    REGISTER_USER:'/api/v1/user/register',
    LOGIN_USER:'/api/v1/user/login',
    FORGOT_PASSWORD:'/api/v1/user/forgot-password',
    RESET_PASSWORD:'/api/v1/user/reset-password',

}     ,
MODEL_MANAGEMENT:{
    TESTINGMODEGROUP:'TestingModeGroups',
    GET_MODEL_TYPE_GROUP_BY_ID:'/api/v1/model-management/get-model-type-group-by-id',

 },

}
