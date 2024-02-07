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
