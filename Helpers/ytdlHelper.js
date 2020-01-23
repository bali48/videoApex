const Util = require('util')
const fs = require('fs')
const youtubedl = require('youtube-dl')
module.exports = {
    ytdlVideoInfo: (url, options) => {
        const downloadYoutubeVideo = Util.promisify(youtubedl.getInfo);
        return downloadYoutubeVideo(url, options);
    }
}