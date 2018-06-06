const { send } = require('micro');
const { get, post, router } = require('microrouter');
const { makeExecutableSchema } = require('graphql-tools');
const { microGraphql, microGraphiql } = require('apollo-server-micro');

const typeDefs = `type Query {
    message: String
  }`;

const resolvers = {
	Query: {
		message: () => 'First resolver',
	},
};

const schema = makeExecutableSchema({ typeDefs, resolvers });
const graphqlHandler = microGraphql({
	schema,
});
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });

// const getRandomNumber = (min, max) => {
// 	return Math.floor(min + Math.random() * (max + 1 - min));
// };

module.exports = router(
	get('/graphql', graphqlHandler),
	post('/graphql', graphqlHandler),
	get('/graphiql', graphiqlHandler),
	(req, res) => send(res, 404, 'There is no spoon')
);
