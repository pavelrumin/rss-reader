
export class RssLoader {
    async load(url) {
        let text = await this.loadUrl(url);

        let rss = this.parseXml(text);
        if(rss) return this.rssToJson(rss);

        // XML с ошибками, может это HTML?
        let rssLink = this.findRssLink(text);
        if(rssLink) {
            return this.load(rssLink);
        }

        throw new Error('RSS not found');
    }

    async loadUrl(url) {
        let response = await fetch('https://cors-anywhere.herokuapp.com/' + url);
        return await response.text();
    }

    parseXml(text) {
        let doc = new DOMParser().parseFromString(text, "application/xml");
        return this.isRss(doc) ? doc : false;
    }

    isRss(doc) {
        return doc.firstChild.nodeName.toUpperCase() === 'RSS';
    }

    parseHTML(text) {
        return new DOMParser().parseFromString(text, "text/html");
    }

    findRssLink(text) {
        let doc = this.parseHTML(text);
        let rssLink = doc.querySelector('link[type="application/rss+xml"]');

        return rssLink ? rssLink.getAttribute('href') : false;
    }

    rssToJson(doc) {
        let json = {};

        let channel = doc.querySelector('channel');
        if(channel) {
            let items = channel.querySelectorAll('item');
            let itemsJson = Array.from(items).map(item => this.rssItemToJson(item));

            json = {...this.rssItemToJson(channel), items: itemsJson};
        }

        return json;
    }


    rssItemToJson(item) {
        return {
            title: item.querySelector('title').textContent,
            link: item.querySelector('link').textContent,
            description: item.querySelector('description').textContent,
        }
    }

}