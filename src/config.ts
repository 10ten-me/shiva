export class Config {
    public port: string = process.env.PORT || '3001';
    public ziwoAdminToken: string = process.env.ZIWO_ADMIN_TOKEN || '';
    public ziwoApiUrl: string = process.env.ZIWO_API_URL || '';
}
