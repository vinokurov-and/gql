class OrganizationResolver {
    constructor(organizationService){
        this.organizationService = organizationService;
    }

    getAllOganizations(authToken, search, page, count)
    {
        return this.organizationService.getOganizations()
    }
}