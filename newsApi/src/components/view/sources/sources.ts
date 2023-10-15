import './sources.css';
import { DataISourse } from '../../typesOfVariables';

class Sources {
    public draw(data: DataISourse[]): void {
        const fragment = <DocumentFragment>document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
        data.forEach((item: DataISourse): void => {
            const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);
            const sourseItemName = <HTMLSpanElement>sourceClone.querySelector('.source__item-name');
            const sourseItem = <HTMLDivElement>sourceClone.querySelector('.source__item');
            sourseItemName.textContent = item.name;
            sourseItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sources = <HTMLDivElement>document.querySelector('.sources');
        sources.append(fragment);
    }
}

export default Sources;
