import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '5f97371e0a2a4081b8c17644b94073a3', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
