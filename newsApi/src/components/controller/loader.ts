import { TLoader } from '../typesOfVariables';
import { TFunctionGeneric } from '../typesOfVariables';

class Loader {
    private baseLink: string;
    private options: TLoader;

    constructor(baseLink: string, options: TLoader) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options = {} }: { endpoint: string; options?: TLoader },
        callback: TFunctionGeneric<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    public errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    public makeUrl(options: TLoader, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    public load<T>(
        method: string,
        endpoint: string,
        callback: (data: T, err?: string) => void,
        options: TLoader = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
