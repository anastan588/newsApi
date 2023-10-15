import AppLoader from './appLoader';
import { IViewNews, IViewSources, TFunctionGeneric } from '../typesOfVariables';

class AppController extends AppLoader {
    public getSources(callback: TFunctionGeneric<IViewSources>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: TFunctionGeneric<IViewNews>): void {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLDivElement>e.currentTarget;
        const targetElement = <HTMLDivElement>target;

        while (target !== newsContainer) {
            if (targetElement.classList.contains('source__item')) {
                const sourceId = <string>targetElement.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
