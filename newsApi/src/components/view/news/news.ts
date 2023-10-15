import './news.css';
import { DataINews } from '../../typesOfVariables';

class News {
    public draw(data: DataINews[]): void {
        const news: DataINews[] = data.length >= 10 ? data.filter((_item: DataINews, idx: number) => idx < 10) : data;

        const fragment = <DocumentFragment>document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item: DataINews, idx: number) => {
            const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true);
            const newsItem = <HTMLDivElement>newsClone.querySelector('.news__item');
            if (idx % 2) {
                newsItem.classList.add('alt');
            }
            const newsMetaPhoto = <HTMLDivElement>newsClone.querySelector('.news__meta-photo');
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const newsMetaAuthor = <HTMLLIElement>newsClone.querySelector('.news__meta-author');
            newsMetaAuthor.textContent = item.author || item.source.name;
            const newsMetaDate = <HTMLLIElement>newsClone.querySelector('.news__meta-date');
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitle = <HTMLHeadingElement>newsClone.querySelector('.news__description-title');
            newsDescriptionTitle.textContent = item.title;
            const newsDescriptionSource = <HTMLHeadingElement>newsClone.querySelector('.news__description-source');
            newsDescriptionSource.textContent = item.source.name;
            const newsDescriptionContent = <HTMLParagraphElement>newsClone.querySelector('.news__description-content');
            newsDescriptionContent.textContent = item.description;
            const newsReadMore = <HTMLLinkElement>newsClone.querySelector('.news__read-more a');
            newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const newsItem = <HTMLDivElement>document.querySelector('.news');
        newsItem.innerHTML = '';
        newsItem.appendChild(fragment);
    }
}

export default News;
