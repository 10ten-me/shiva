export class Config {
    public port:string = process.env.PORT || "3001";
    public ziwo_admin_token:string = process.env.ZIWO_ADMIN_TOKEN || '';
    public ziwo_api_url:string = process.env.ZIWO_API_URL || '';
}
