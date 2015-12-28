$(function() {

    var RSSReader = function () {

        this.feedUrl = 'http://node.dev.puzankov.com/rss/data';

        this.articlesList = $('.articles');
        this.pageNavigator = $('.page-navigation');

        this.articleTmpl = $('.article_tmpl');

        this.currentPage;
        this.countArticles = 5;
        this.countNews = 0;

        this.init();
    };

    RSSReader.prototype.init = function () {
        var __self = this;

        this.currentPage = 1;

        this.getFeed(__self.getUrlHash());

        this.updateMenu();

        $(window).on('hashchange', function (e) {
            __self.getFeed(__self.getUrlHash());
            __self.updateMenu();
        });

        $( ".page-navigation" ).on('click', function (e) {
            var target = e.target;

            if (target.tagName != 'A') return;

            var newNum = $(target).data("num");
            if (newNum) {
                __self.currentPage = newNum;
            } else {

                if ($(target).parent().hasClass("nav-next")) {
                    __self.currentPage = 1;
                }
                if ($(target).parent().hasClass("nav-previous")) {
                    __self.currentPage = Math.ceil(__self.countNews/__self.countArticles);
                }
            }

            __self.getFeed();
        });
    };

    RSSReader.prototype.updateMenu = function () {
        var current = this.getUrlHash();

        $('.sf-menu li').each(function (i, item) {
            $(item).removeClass('current-menu-item');
        });

        $('.menu__li_' + current).addClass('current-menu-item')
    };

    RSSReader.prototype.getUrlHash = function () {
        var hash = window.location.hash || 'habr';
        return hash.replace('#', '');
    };

    RSSReader.prototype.getFeed = function (feedId) {
        $.ajax({
            url: this.feedUrl,
            data: { kind: feedId },
            method: 'GET',
            dataType: 'json'
        })
        .success(this.onGetData.bind(this))
        .error(function (error) {
            console.log(error);
        });
    };

    RSSReader.prototype.onGetData = function (data) {
        this.countNews = data.items.length;
        this.renderFeed(data.items);
    };


    RSSReader.prototype.renderPager = function () {
        var __self = this;
        var listHtmlPager = [];

        if(this.currentPage > 1) {
            listHtmlPager.push('<div class="nav-next"><a href="#">OLDER</a></div>');
        }

        var countElem = 0;
        if (this.countNews > 0) {
            countElem = Math.ceil(this.countNews/this.countArticles);
        }

        for (var i=0; i<countElem; i++) {
            var pageNum = i + 1;
            this.currentPage == pageNum ? listHtmlPager.push('<div class="nav-page"><a href="#" style="text-decoration: underline; color: black;" data-num="' + pageNum + '">' + pageNum + '</a></div>') : listHtmlPager.push('<div class="nav-page"><a href="#" data-num="' + pageNum + '">' + pageNum + '</a></div>');
        }

        if(this.currentPage != countElem) {
            listHtmlPager.push('<div class="nav-previous"><a href="#">NEWER</a></div>');
        }

        this.pageNavigator.html(listHtmlPager);
    };

    RSSReader.prototype.renderFeed = function (dataList) {
        var __self = this,
            listHtml = [];

        var beginArticle = this.currentPage*this.countArticles - this.countArticles;

        dataList.splice(beginArticle, this.countArticles).forEach(function (item) {
            listHtml.push(__self.renderItem(item));
        });

        this.renderPager();

        this.articlesList.html(listHtml);

    };

    RSSReader.prototype.convertDate = function (date) {
        var stringDate = new Date(date);

        var newDate = new Date(date);
        var stringDate = '';

        stringDate += newDate;
        stringDate = stringDate.substring(0, 24);

        return stringDate;

        return stringDate;
    };

    RSSReader.prototype.renderItem = function (item) {
        var newItem = this.articleTmpl.clone().removeClass('article_tmpl');

        newItem
            .find('.post-heading')
            .html(item.title);

        newItem
            .find('.excerpt')
            .html(item.summary);

        newItem
            .find('.author')
            .html(item.author);

        newItem
            .find('.date')
            .html(this.convertDate(item.pubDate));

        newItem
            .find('.action-button')
            .attr('href', item.guid);

        return newItem;
    };



    window.rssReader = new RSSReader();

});
