import { Sequelize } from 'sequelize'

export interface UserInterface {
  id?: number
  name: string
  email: string
  avatar: string
  passwordHash: string
  provider: boolean
}

type UserInstance = Sequelize.Instance<UserInterface> & UserInterface
type User = Sequelize.Model<UserInstance, UserInterface>

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN
  })

  return User
}
