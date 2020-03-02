ytdl = require('../../Helpers/ytdlHelper');
arms = require('../../Helpers/commonHelper');
module.exports = {
     downloadfile : async (req, res, next) => {
        var URL = req.body;
        let videoInfo = null;
        const url = 'https://www.youtube.com/watch?v=Hlb-Ss3q3as&t=748s';
        // const url = 'https://www.dailymotion.com/video/x7qvmpk?playlist=x6lgtp';
        // const url = 'https://www.facebook.com/WoodyandKleiny/videos/2241556282743322/';
        const options = [];
        // return  res.status(422).json({'error': err});
        try{
            response = await ytdl.ytdlVideoInfo(url, options);
            res.status(200).json({'url':URL, 'videoInfo': response})
        } catch (error) {
            //ytdl unable to download so use custom logic 
            this.downloadHub(url)
            // res.status(404).json({'url':URL, 'error': error})
        }
    },
    //where to download
    downloadHub: (url) => {
        const hostName = arms.extractHostname(url);
        if(hostname.includes('soundcloud')){
            
        }
        if(hostname.includes('dailymotion')){

        }
        if(hostname.includes('soundcloud')){

        }
        if(hostname.includes('facebook')){

        }
        if(hostname.includes('twitter')){

        }
        if(hostname.includes('instagram')){

        }
        if(hostname.includes('instagram')){

        }
        
    }
 
}