"use strict";

var _services = require("./src/services");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    type Organization {\n        activeCount: String\n        actualApartment: String\n        actualAreaCode: String\n        actualAreaName: String  \n        actualBuilding: String\n        actualCity: String\n        actualDistrict: String\n        actualHouse: String \n        actualIndex: String\n        actualPostIndex: String\n        actualStreet: String\n        actualTown: String\n        blockedCount: String\n        contractFnsSend: String\n        dateCreate: String\n        email: String\n        expireFnCount: String\n        expireLicenseCount: String\n        fnsStatus: String\n        fullTitle: String\n        full_title: String\n        guid: String\n        id: String\n        inn: String\n        irudAction: String\n        irudDate: String\n        irudId: String\n        irudMessage: String\n        irudStatus: String\n        kpp: String\n        legalApartment: String\n        legalAreaCode: String\n        legalAreaName: String\n        legalBuilding: String\n        legalCity: String\n        legalDistrict: String\n        legalHouse: String\n        legalIndex: String\n        legalPostIndex: String\n        legalStreet: String\n        legalTown: String\n        name: String\n        ogrn: String\n        patronymic: String\n        position: String\n        removed: String\n        secondName: String\n        shortTitle: String\n        short_title: String\n        smsCount: String\n        snils: String   \n        statusContract: String\n        surname: String\n        telephone: String\n        totalCount: String\n        user_id: String\n    }\n    type Query {\n        organization(number: String!): Organization\n        organizations: [Organization]\n        test: String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

var typeDefs = gql(_templateObject());
var resolvers = {
  Query: {
    test: function test() {
      return "Asdads";
    },
    organizations: function organizations(root, args, _ref) {
      var dataSources = _ref.dataSources;
      return dataSources.OrganizationService.getAllCars();
    }
  }
};
var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  dataSources: function dataSources() {
    return {
      OrganizationService: new _services.OrganizationAPI()
    };
  },
  formatError: function formatError(err) {
    // console.log(err);
    return err;
  }
});
server.listen(4000).then(function (_ref2) {
  var url = _ref2.url;
  console.log("Server ready at ".concat(url));
});