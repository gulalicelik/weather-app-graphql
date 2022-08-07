import './App.css';
import Home from './Pages/Home/';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import video from './bg-video.mp4';

function App() {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri  : 'https://graphql-weather-api.herokuapp.com/',
    });

    return (
        <ApolloProvider client={client}>
            <div className="app">
                <div className="bg">
                    <video autoPlay muted loop id="bgVideo">
                        <source src={video} type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>
                </div>

                <div className="layout">
                    <Home/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae distinctio doloribus eaque
                        enim molestiae officia quis rem suscipit totam? Enim, molestiae, quas. Asperiores cum hic nobis
                        porro repellendus, voluptatum.</p>
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;
