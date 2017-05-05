import express from 'express'

import schema from './schema/'
import expressGraphQL from 'express-graphql'

const app = express()

app.use('/graphql', expressGraphQL({
	schema,
	graphiql: true
}))

app.listen(1337, () => {
	console.log("Magic happening at PORT 1337")
})
