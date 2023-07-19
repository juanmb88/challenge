import {MongoClient} from "mongodb";
// const urlGlobal = MONGODB_URL
const  connectDB = async(url)=>{
 const  client = new MongoClient(url)
await client.connect()
try {
    const client = new MongoClient("mongodb+srv://user:1234@cluster.s4bt3ui.mongodb.net/?retryWrites=true&w=majority");
    
        await client.connect();
    
        const database = client.db("DB_CLientes");
        const users = database.collection("Clientes");
         console.log(users);

         const query = { Nombre : "Dario" };
         const options = {
                //select
            sort: { "Nombre": -1 },
               //order by
            projection: { _id: 0, Nombre: 1 },
          };
          const movie = await movies.findOne(query, options);
          console.log(movie)
    } catch (e) {
        console.error(e);
    }finally {
        await client.close();
    }

    
    
}

export default connectDB;