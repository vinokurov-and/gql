import { ApolloError } from "apollo-server";

export const ErrorHandlingAPI = promise => {
  return promise.then(response => {
    if (!response.data.ok)
      throw new ApolloError("Произошла ошибка", response.data.error_code, {
        description: response.data.description
      });
    return response.data.result.organizations;
  });
};
