import { OrganizationAPI } from "./services";
import { ErrorHandlingAPI } from "./utils/ErrorHandling";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Organization {
    activeCount: String
    actualApartment: String
    actualAreaCode: String
    actualAreaName: String
    actualBuilding: String
    actualCity: String
    actualDistrict: String
    actualHouse: String
    actualIndex: String
    actualPostIndex: String
    actualStreet: String
    actualTown: String
    blockedCount: String
    contractFnsSend: String
    dateCreate: String
    email: String
    expireFnCount: String
    expireLicenseCount: String
    fnsStatus: String
    fullTitle: String
    full_title: String
    guid: String
    id: String
    inn: String
    irudAction: String
    irudDate: String
    irudId: String
    irudMessage: String
    irudStatus: String
    kpp: String
    legalApartment: String
    legalAreaCode: String
    legalAreaName: String
    legalBuilding: String
    legalCity: String
    legalDistrict: String
    legalHouse: String
    legalIndex: String
    legalPostIndex: String
    legalStreet: String
    legalTown: String
    name: String
    ogrn: String
    patronymic: String
    position: String
    removed: String
    secondName: String
    shortTitle: String
    short_title: String
    smsCount: String
    snils: String
    statusContract: String
    surname: String
    telephone: String
    totalCount: String
    user_id: String
  }
  type Query {
    organization(number: String!): Organization
    organizations: [Organization]
    test: String
    authenticationError: String
  }
`;

const resolvers = {
  Query: {
    organizations: (root, args, { dataSources }) =>
      ErrorHandlingAPI(dataSources.OrganizationService.getAllCars())
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    OrganizationService: new OrganizationAPI()
  }),
  formatError: err => {
    return {
      ok: false,
      description: err.extensions.description,
      error_code: err.extensions.code
    };
    console.log("ERROR", err);
    return err;
  },
  formatResponse: response => {
    //console.log("formatResponse", response);
    return response;
  },
  debug: false
});

server.listen(5001).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
