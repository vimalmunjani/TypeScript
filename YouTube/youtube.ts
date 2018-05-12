
class YouTube {

    private channelName: string;
    private videoTitle: string;
    private videoSummary: string;
    private videoLength: number;    //in min.sec
    private noOfViews: number;
    private likes: number;
    private disLikes: number;
    private publishDate: Date;
    private noOfSubscribers: number;
    private subscriberDetails: string[];
    private noOfComments: number;
    private commentDetails: string[];
    private relatedVideos: string[];

    constructor(channelName: string, videoTitle: string, videoSummary: string, videoLength: number) {

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
        this.relatedVideos =['video1','video2','video3','video4'];
    }

    getchannelName = (): string => {
        return this.channelName;
    }

    setchannelName = (channelName: string) => {
        this.channelName = channelName;
    }

    getvideoTitle = (): string => {
        return this.videoTitle;
    }

    setvideoTitle = (videoTitle: string) => {
        this.videoTitle = videoTitle;
    }

    getvideoSummary = (): string => {
        return this.videoSummary;
    }

    setvideoSummary = (videoSummary: string) => {
        this.videoSummary = videoSummary;
    }

    getvideoLength = (): number => {
        return this.videoLength;
    }

    setvideoLength = (videoLength: number) => {
        this.videoLength = videoLength;
    }

    getnoOfViews = (): number => {
        return this.noOfViews;
    }

    setnoOfViews = (noOfViews: number) => {
        this.noOfViews = noOfViews;
    }

    getlikes = (): number => {
        return this.likes;
    }

    setlikes = (likes: number) => {
        this.likes = likes;
    }

    getdisLikes = (): number => {
        return this.disLikes;
    }

    setdisLikes = (disLikes: number) => {
        this.disLikes = disLikes;
    }

    getpublishDate = (): string => {
        return this.publishDate.toString();
    }


    getnoOfSubscribers = (): number => {
        return this.noOfSubscribers;
    }

    getnoOfComments = (): number => {
        return this.noOfComments;
    }


    getsubscriberDetails = (): string[] => {
        return this.subscriberDetails;
       
    }

    setsubscriberDetails = (subscriberDetails: string) => {
        this.subscriberDetails.push(subscriberDetails);
        this.noOfSubscribers++;
    }

    getcommentDetails = (): string[] => {
        return this.commentDetails;
    }

    setcommentDetails = (commentDetails: string) => {
        this.commentDetails.push(commentDetails);
        this.noOfComments++;
    }

    getrelatedVideos = ()=>{
        return this.relatedVideos;
    }
}

let videoSummary: string = `Namaskaar Dosto, 
is video mein maine aapse Largest possible File Size ke baare mein baat ki hai, ki aakhir aap maximum kitne size ki file create kar sakte hai? 
Storage toh hamare paas bahut saari hai aur tarah tarah ke options hai, lekin khair aap ek file ko kis size tak create kar sakte hai?
Mujhe umeed hai ki aapko File Systems aur File Size ke baare mein yeh video pasand aayegi.`

let myVideo = new YouTube(`Technical Guruji`, `Largest Possible File Size? Terabytes? Gigabytes?`, videoSummary, 6.42);

myVideo.setnoOfViews(61211);

myVideo.setlikes(6500);
myVideo.setdisLikes(284);

myVideo.setcommentDetails(`Very Informative Video!!`);
myVideo.setcommentDetails(`Superrr useful.....`);
myVideo.setcommentDetails(`very nice..`);
myVideo.setcommentDetails(`bullshit.........`);
myVideo.setcommentDetails(`really helpful`);

myVideo.setsubscriberDetails(`Vimal Munjani`);
myVideo.setsubscriberDetails(`Mr X`);
myVideo.setsubscriberDetails(`Mr Y`);
myVideo.setsubscriberDetails(`Mr Z`);
myVideo.setsubscriberDetails(`Mr bluff`);
myVideo.setsubscriberDetails(`Mr xing`);

console.log(`--------------------------------------My Video Details-------------------------------------
Channel Name : ${myVideo.getchannelName()}
Video Title : ${myVideo.getvideoTitle()}
Video Length : ${myVideo.getvideoLength()}
Video Summary : ${myVideo.getvideoSummary()}
Publish Date : ${myVideo.getpublishDate()}
Views : ${myVideo.getnoOfViews()}
Likes : ${myVideo.getlikes()}
DisLikes : ${myVideo.getdisLikes()}
No of Subscribers : ${myVideo.getnoOfSubscribers()}
Subscriber's Details : ${myVideo.getsubscriberDetails()}
No of Comments : ${myVideo.getnoOfComments()}
Comment details : ${myVideo.getcommentDetails()}
Related Videos : ${myVideo.getrelatedVideos()}`);

let DisplayDetails =`
Channel Name : ${myVideo.getchannelName()}
Video Title : ${myVideo.getvideoTitle()}
Video Length : ${myVideo.getvideoLength()}
Video Summary : ${myVideo.getvideoSummary()}
Publish Date : ${myVideo.getpublishDate()}
Views : ${myVideo.getnoOfViews()}
Likes : ${myVideo.getlikes()}
DisLikes : ${myVideo.getdisLikes()}
No of Subscribers : ${myVideo.getnoOfSubscribers()}
Subscriber's Details : ${myVideo.getsubscriberDetails()}
No of Comments : ${myVideo.getnoOfComments()}
Comment details : ${myVideo.getcommentDetails()}
Related Videos : ${myVideo.getrelatedVideos()}
`;

document.getElementById("id1").innerText = `
Display Details -
${DisplayDetails}
`;






