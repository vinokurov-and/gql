import network from '../sources/Network';

const baseURL = `https://test.ofd.astralnalog.ru/api/v4.2/`

export default class OrganizationAPI {
    constructor()
    {
        this.baseUrl = baseURL
    }

    async getAllCars(apiKey="5cfc802d2ebb375a4b05500a430659dd", page=1, count=10) {
        const data = {api_key: apiKey, page, count};
        return network.post('organization.list', data); 
    }
} 