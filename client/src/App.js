import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AddBook from './components/AddBook';
import BookList from "./components/BookList";

// apollo client setup

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
   cache: new InMemoryCache( ),
});


function App() {
  
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>Ninja's Reading List</h1>
        <BookList/>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
