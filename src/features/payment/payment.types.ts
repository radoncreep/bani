interface PageCreatorDetails {
    tribe_account_id: number;
    account_logo_url?: any;
    account_trade_name: string;
    account_website_url: string;
    account_twitter_handle: string;
    account_fb_handle: string;
    account_instagram_handle: string;
    account_whatsapp_num?: any;
    pub_date: Date;
    modified_date: Date;
    account_pub_key: string;
}

interface Data {
    page_ref: string;
    page_title: string;
    page_slug: string;
    page_description: string;
    page_amount: string;
    page_currency: string;
    page_status: string;
    page_first_image?: any;
    page_second_image?: any;
    page_redirect_url: string;
    page_website_url: string;
    page_twitter_handle: string;
    page_fb_handle: string;
    page_instagram_handle: string;
    pub_date: Date;
    modified_date: Date;
    page_creator_details: PageCreatorDetails;
    page_tag_name: string;
    page_whatsapp_phone?: any;
}

export interface PaymentResponse {
    data: Data;
    status: boolean;
    message: string;
    status_code: number;
}

export {}