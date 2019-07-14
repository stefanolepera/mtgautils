export const getUrlParams = () => {
    let urlParams;
    (window.onpopstate = function () {
        let match;
        const pl = /\+/g;
        const search = /([^&=]+)=?([^&]*)/g;
        const decode = (s) => decodeURIComponent(s.replace(pl, " "));
        const query  = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
    })();

    return urlParams;
}