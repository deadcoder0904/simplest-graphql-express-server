import axios from 'axios'
import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema
} from 'graphql'


const UserType = new GraphQLObjectType({
	name: 'UserQueryType',
	fields: {
		'id': {type: GraphQLString},
		'name': {type: GraphQLString},
		'gender': {type: GraphQLString},
		'age': {type: GraphQLInt}
	}
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			args: {'id': {type: GraphQLString}},
			resolve(parentValue,args) {
				return axios.get(`http://localhost:3000/users/${args.id}`)
					.then(res => res.data)
			}
		}
	}
})

export default new GraphQLSchema({
	query: RootQuery
})
