import { gql, useMutation } from '@apollo/client'
import { User } from '../models/User'

export interface CreateUserInput {
  createUserData: {
    email: string
    password: string
  }
}

const CREATE_USER = gql`
  mutation CreateUser($createUseraData: CreateUserInput!) {
    createUser(createUseraData: $createUseraData) {
      _id
      email
    }
  }
`

const useCreateUser = () => {
  return useMutation<User, CreateUserInput>(CREATE_USER)
}

export default useCreateUser
