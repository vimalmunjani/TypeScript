var YouTube = /** @class */ (function () {
    function YouTube(channelName, videoTitle, videoSummary, videoLength) {
        var _this = this;
        this.getchannelName = function () {
            return _this.channelName;
        };
        this.setchannelName = function (channelName) {
            _this.channelName = channelName;
        };
        this.getvideoTitle = function () {
            return _this.videoTitle;
        };
        this.setvideoTitle = function (videoTitle) {
            _this.videoTitle = videoTitle;
        };
        this.getvideoSummary = function () {
            return _this.videoSummary;
        };
        this.setvideoSummary = function (videoSummary) {
            _this.videoSummary = videoSummary;
        };
        this.getvideoLength = function () {
            return _this.videoLength;
        };
        this.setvideoLength = function (videoLength) {
            _this.videoLength = videoLength;
        };
        this.getnoOfViews = function () {
            return _this.noOfViews;
        };
        this.setnoOfViews = function (noOfViews) {
            _this.noOfViews = noOfViews;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.setlikes = function (likes) {
            _this.likes = likes;
        };
        this.getdisLikes = function () {
            return _this.disLikes;
        };
        this.setdisLikes = function (disLikes) {
            _this.disLikes = disLikes;
        };
        this.getpublishDate = function () {
            return _this.publishDate.toString();
        };
        this.getnoOfSubscribers = function () {
            return _this.noOfSubscribers;
        };
        this.getnoOfComments = function () {
            return _this.noOfComments;
        };
        this.getsubscriberDetails = function () {
            return _this.subscriberDetails;
        };
        this.setsubscriberDetails = function (subscriberDetails) {
            _this.subscriberDetails.push(subscriberDetails);
            _this.noOfSubscribers++;
        };
        this.getcommentDetails = function () {
            return _this.commentDetails;
        };
        this.setcommentDetails = function (commentDetails) {
            _this.commentDetails.push(commentDetails);
            _this.noOfComments++;
        };
        this.getrelatedVideos = function () {
            return _this.relatedVideos;
        };
        this.channelName = channelName;
        this.videoTitle = videoTitle;
        this.videoSummary = videoSummary;
        this.videoLength = videoLength;
        this.publishDate = new Date();
        this.subscriberDetails = [];
        this.commentDetails = [];
        this.noOfSubscribers = 0;
        this.noOfComments = 0;
        this.noOfViews = 0;
        this.likes = 0;
        this.disLikes = 0;
        this.relatedVideos = ['video1', 'video2', 'video3', 'video4'];
    }
    return YouTube;
}());
var videoSummary = "Namaskaar Dosto, \nis video mein maine aapse Largest possible File Size ke baare mein baat ki hai, ki aakhir aap maximum kitne size ki file create kar sakte hai? \nStorage toh hamare paas bahut saari hai aur tarah tarah ke options hai, lekin khair aap ek file ko kis size tak create kar sakte hai?\nMujhe umeed hai ki aapko File Systems aur File Size ke baare mein yeh video pasand aayegi.";
var myVideo = new YouTube("Technical Guruji", "Largest Possible File Size? Terabytes? Gigabytes?", videoSummary, 6.42);
myVideo.setnoOfViews(61211);
myVideo.setlikes(6500);
myVideo.setdisLikes(284);
myVideo.setcommentDetails("Very Informative Video!!");
myVideo.setcommentDetails("Superrr useful.....");
myVideo.setcommentDetails("very nice..");
myVideo.setcommentDetails("bullshit.........");
myVideo.setcommentDetails("really helpful");
myVideo.setsubscriberDetails("Vimal Munjani");
myVideo.setsubscriberDetails("Mr X");
myVideo.setsubscriberDetails("Mr Y");
myVideo.setsubscriberDetails("Mr Z");
myVideo.setsubscriberDetails("Mr bluff");
myVideo.setsubscriberDetails("Mr xing");
console.log("--------------------------------------My Video Details-------------------------------------\nChannel Name : " + myVideo.getchannelName() + "\nVideo Title : " + myVideo.getvideoTitle() + "\nVideo Length : " + myVideo.getvideoLength() + "\nVideo Summary : " + myVideo.getvideoSummary() + "\nPublish Date : " + myVideo.getpublishDate() + "\nViews : " + myVideo.getnoOfViews() + "\nLikes : " + myVideo.getlikes() + "\nDisLikes : " + myVideo.getdisLikes() + "\nNo of Subscribers : " + myVideo.getnoOfSubscribers() + "\nSubscriber's Details : " + myVideo.getsubscriberDetails() + "\nNo of Comments : " + myVideo.getnoOfComments() + "\nComment details : " + myVideo.getcommentDetails() + "\nRelated Videos : " + myVideo.getrelatedVideos());
var DisplayDetails = "\nChannel Name : " + myVideo.getchannelName() + "\nVideo Title : " + myVideo.getvideoTitle() + "\nVideo Length : " + myVideo.getvideoLength() + "\nVideo Summary : " + myVideo.getvideoSummary() + "\nPublish Date : " + myVideo.getpublishDate() + "\nViews : " + myVideo.getnoOfViews() + "\nLikes : " + myVideo.getlikes() + "\nDisLikes : " + myVideo.getdisLikes() + "\nNo of Subscribers : " + myVideo.getnoOfSubscribers() + "\nSubscriber's Details : " + myVideo.getsubscriberDetails() + "\nNo of Comments : " + myVideo.getnoOfComments() + "\nComment details : " + myVideo.getcommentDetails() + "\nRelated Videos : " + myVideo.getrelatedVideos() + "\n";
document.getElementById("id1").innerText = "\nDisplay Details -\n" + DisplayDetails + "\n";
