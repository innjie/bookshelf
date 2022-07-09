export function getIdx(location) {
    var searchString = location.search;
    const params = new URLSearchParams(searchString);
    const keyword = params.get('idx');

    return keyword;
}