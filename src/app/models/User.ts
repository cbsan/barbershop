import { Sequelize, DataTypes } from 'sequelize'

export interface UserInterface {
  id?: number
  name: string
  email: string
  avatar: string
  passwordHash: string
  provider: boolean
}

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
  const User = sequelize.define('User', {
    name: dataTypes.STRING,
    email: dataTypes.STRING,
    avatar: dataTypes.STRING,
    passwordHash: dataTypes.STRING,
    provider: dataTypes.BOOLEAN
  })

  return User
}
