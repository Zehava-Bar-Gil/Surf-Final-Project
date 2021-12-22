import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import cors from 'cors'
// import userRouter from './src/routers/users'
// import productsRouter from './src/routers/products'
// import connectShop from './src/shop/index'

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('it')
});
app.get('/api/getUser', (req, res) => {
  const user = 'Zehava';
  res.json(user);
})

app.use(userRouter)
app.use(productsRouter)
connectShop(app)


const url =
  "mongodb+srv://ZehavaBarGil:203085816@final-project.anjse.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => {
    console.log("database connected");
  });

// if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  // app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });
// }


app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

