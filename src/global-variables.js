// Those variables should be filled out with your AWS & Cognito User Pool configurations.
export const REGION = 'us-east-1';
export const POOL_DATA = {
  UserPoolId: 'us-east-1_luounRzv0',
  ClientId: '7rbfge7ic1s47l8icu8jo3ht0f'
};
export const IDENTITY_POOL_ID = '** place your Cognito Identity Pool Id **';
export const LOGINS_KEY = 'cognito-idp.' + REGION + '.amazonaws.com/' + POOL_DATA.UserPoolId;
