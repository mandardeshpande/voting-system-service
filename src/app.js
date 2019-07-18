import Express from "express";
import ExpressGraphQL from "express-graphql";
import mongodb from "mongodb";
import {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} from "graphql";

const app = Express();

const options = { 
    server: { 
      socketOptions: { 
        keepAlive: 300000, connectTimeoutMS: 30000 
      } 
    }, 
    replset: { 
      socketOptions: { 
        keepAlive: 300000, 
        connectTimeoutMS : 30000 
      } 
    } 
  };

  mongodb.MongoClient.connect("mongodb://heroku_6vxqnnwp:b5pio4vjnjuu3qrb7k5n1es3ii@ds353007.mlab.com:53007/heroku_6vxqnnwp",{
    useNewUrlParser: true
  })
.then(() => {
    app.listen(3000, () => {
        console.log("Listening at :3000...");
    });
})
  .catch(err => console.log(err));

// app.use("/graphql", ExpressGraphQL({
//     schema: schema,
//     graphiql: true
// }));

