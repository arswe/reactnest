import { gql, useMutation } from '@apollo/client'

const CREATE_USER = gql`
  mutation CreateUser($createUseraData: CreateUserInput!) {
    createUser(createUseraData: $createUseraData) {
      id
      email
    }
  }
`

const useCreateUser = () => {
  return useMutation(CREATE_USER)
}

export default useCreateUser
