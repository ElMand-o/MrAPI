const apis = require("../models/apiModel");

class SearchController {
    async search(query) {
        try {
            return await apis.find({
                tags: RegExp(query, "i"),
            });
        } catch (error) {
            return undefined;
        }
    }
}

module.exports = new SearchController();
