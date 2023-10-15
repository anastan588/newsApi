export interface DataISourse {
    category: string;
    country: ECountry;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface DataINews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
}

export interface IViewNews {
    articles?: DataINews[];
    status: string;
    totalResults: number;
}

export interface IViewSources {
    sources: DataISourse[];
    status: string;
}

export type TLoader = {
    [key: string]: string;
};

export type TFunctionGeneric<T> = (data: T) => void;

export enum ECountry {
    ar = 'Argentina',
    au = 'Australia',
    at = 'Austria',
    be = 'Belgium',
    br = 'Brazil',
    bg = 'Bulgaria',
    ca = 'Canada',
    cn = 'China',
    co = 'Colombia',
    cu = 'Cuba',
    cz = 'Czech Republic',
    eg = 'Egypt',
    fr = 'France',
    de = 'Germany',
    gr = 'Greece',
    hk = 'Hong Kong',
    hu = 'Hungary',
    in = 'India',
    id = 'Indonesia',
    ie = 'Ireland',
    il = 'Israel',
    it = 'Italy',
    jp = 'Japan',
    lv = 'Latvia',
    lt = 'Lithuania',
    my = 'Malaysia',
    mx = 'Mexico',
    ma = 'Morocco',
    nl = 'Netherlands',
    nz = 'New Zealand',
    ng = 'Nigeria',
    no = 'Nigeria',
    ph = 'Philippines',
    pl = 'Poland',
    pt = 'Portugal',
    ro = 'Romania',
    ru = 'Russia',
    sa = 'Saudi Arabia',
    rs = 'Serbia',
    sg = 'Singapore',
    sk = 'Slovakia',
    si = 'Slovenia',
    za = 'South Africa',
    kr = 'South Korea',
    se = 'Sweden',
    ch = 'Switzerland',
    tw = 'Taiwan',
    th = 'Thailand',
    tr = 'Turkey',
    ae = 'UAE',
    ua = 'Ukraine',
    gb = 'United Kingdom',
    us = 'United States',
    ve = 'Venuzuela',
}
