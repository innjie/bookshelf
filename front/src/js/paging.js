$(document).ready(function () {
    nowPageNo = 1;
    paging();

});

function paging() {
    const urlParams = new URL(location.href).searchParams;
    const pageNo = urlParams.get('pageNo');
    $('#divPagingArea')[0].innerHTML = '';

    var result = "";
    $.ajax({
        url: "/board/count",
        dataType: "json",
        method: "GET",
        data: pageNo
    }).done(function (data) {
        //paging
        result += "<ul class='pagination' >"

        var startPage = 1;
        var endPage = startPage;
        var prevPage = 1;
        var nextPage = 1;
        var pageSize = 5;
        var totalCount = data.listSize;
        var maxPage = 0;
        var maxCountPages = 5;


        //maxPage
        maxPage = parseInt(totalCount / pageSize);
        if (totalCount % pageSize != 0) {
            maxPage = parseInt(totalCount / pageSize) + 1;
        }

        //startPage, endPage setting
        if (pageNo % maxCountPages == 0) {
            startPage = pageNo - maxCountPages + 1;
            endPage = startPage + maxCountPages - 1;
        } else {
            startPage = parseInt(pageNo / maxCountPages) * maxCountPages + 1;
            endPage = (parseInt(pageNo / maxCountPages) + 1) * maxCountPages;
        }

        if (endPage > maxPage) {
            endPage = maxPage;
        }
        if (endPage == maxPage && endPage % maxCountPages == 0) {
            if (endPage != 0) {
                startPage = endPage - maxCountPages + 1;
            }
        }
        //prevPage, nextPage setting
        if (pageNo > maxCountPages) {
            prevPage = startPage - maxCountPages;
        }
        nextPage = endPage + 1;
        if (nextPage > maxPage) {
            nextPage = maxPage;
        }

        //setting buttons
        if (startPage != 1) {
            result += "<li class='page-item'><a href = '/board/home?pageNo=" + prevPage + "'>prev</a></li>";
        }
        for (var nowPage = startPage; nowPage <= endPage; nowPage++) {
            result += "<li class='page-item'><a href = '/board/home?pageNo=" + nowPage + "'>" + nowPage + "</a></li>";
        }
        if (maxPage > endPage) {
            result += "<li class='page-item'><a href = '/board/home?pageNo=" + nextPage + "'>next</a></li>"
        }
        result += "</ul>";

        $("#divPagingArea").append(result);
    })

}