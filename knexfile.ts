import path from 'path';

// module.exports = {
//     client: 'pg',
//     connection: {
//         host: "salavida_database",
//         user: "postgres",
//         password: "root",
//         database: "salavida",
//         port: 5432
//     },
//     migrations: {
//         directory: path.resolve(__dirname, 'src', 'database', 'migrations')
//     }
// };

module.exports = {
    client: 'pg',
    connection: {
        host: "ec2-54-158-122-162.compute-1.amazonaws.com",
        user: "bwtfmxaqlmhneo",
        password: "b7cb1ca047ae7ced0d2481ec6256ce7b2f8ed6ceff1b13bbf82feca0ec493a42",
        database: "d7c4bnht5eed4p",
        port: 5432
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
};