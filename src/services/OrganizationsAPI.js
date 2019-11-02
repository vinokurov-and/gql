import network from '../sources/Network';

const baseURL = `https://test.ofd.astralnalog.ru/api/v4.2/`

export default class OrganizationAPI {
    constructor()
    {
        this.baseUrl = baseURL
    }

    async getAllCars(data) {
        return network.post('organization.list', {page: 1, count: 10, ...data}); 
    }
} 