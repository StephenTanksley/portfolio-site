const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type Query {
        projects: [Projects!]!
        technologies: [Technologies!]!
    }

    type Projects {
        id: ID!
        title: String!
        description: String
        image_url: String
    }

    type Technologies {
        id: ID!
        name: String!
        description: String!
    }

    type Mutation {

        newProject(id: ID!, title: String!, description: String!, image_url: String) : Projects
        
        newTechnology(id: ID!, name: String!, description: String!) : Technologies
    }
`

module.exports = typeDefs