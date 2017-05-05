import axios from 'axios'
import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema
} from 'graphql'


const CompanyType = new GraphQLObjectType({
	name: 'CompanyQueryType',
	fields: {
		'id': {type: GraphQLString},
		'name': {type: GraphQLString},
		'description': {type: GraphQLString}
	}
})

const UserType = new GraphQLObjectType({
	name: 'UserQueryType',
	fields: {
		'id': {type: GraphQLString},
		'name': {type: GraphQLString},
		'gender': {type: GraphQLString},
		'age': {type: GraphQLInt},
		'company': {
			type: CompanyType,
			resolve(parentValue,args) {
				return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
					.then(res => res.data)
			}
		}
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
