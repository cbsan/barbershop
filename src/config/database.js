module.exports = {
  dialect: 'postgress',
  host: 'db',
  username: 'docker',
  password: 'docker',
  database: 'barbershop',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
