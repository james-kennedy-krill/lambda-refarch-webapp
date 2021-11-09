// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4oifcuup60mpi0h62sqk72mrbm",     // CognitoClientID
  "api_base_url": "https://lztrvamqy9.execute-api.us-west-2.amazonaws.com/stage",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-sample-lambda-webapp.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1d96mngl6u9cs.amplifyapp.com"                                      // AmplifyURL
};

export default config;
