import InstagramIcon from "./assets/instagramIcon.png";
import FacebookIcon from "./assets/facebookIcon.png";
import TwitterIcon from "./assets/twitterIcon.png";
import WhatsappIcon from "./assets/whatsappIcon.png";


type IconsObject = {
    instagram: string;
    facebook: string;
    twitter: string;
    whatsapp: string;
}

const ICONS: IconsObject = { 
    instagram: InstagramIcon, 
    facebook: FacebookIcon, 
    twitter: TwitterIcon, 
    whatsapp: WhatsappIcon 
};

export const APP_CONSTANTS = { 
    ICONS
}