import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('quiz', 'postgres', 'pass', {
    dialect: 'postgres',
    host: 'host.docker.internal',
    port: 5434,
    logging: false
});

export default sequelize;