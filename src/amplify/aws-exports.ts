const awsconfig = {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID as string,
      userPoolClientId: import.meta.env
        .VITE_AWS_USER_POOL_WEB_CLIENT_ID as string,
    },
  },
}

export default awsconfig
