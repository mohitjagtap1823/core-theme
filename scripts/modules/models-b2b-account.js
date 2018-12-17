define(["underscore", "modules/backbone-mozu", "modules/models-product"], function (_, Backbone, ProductModels) {

    var b2bUser = Backbone.MozuModel.extend({
        mozuType: 'b2buser'
    });

    var b2bAccount = Backbone.MozuModel.extend({
        mozuType: 'b2baccount',
        relations: {
            users: Backbone.Collection.extend({
                model: b2bUser
            })
        }
    });

    var b2bAccounts = Backbone.MozuModel.extend({
        mozuType: 'b2baccounts',
        relations: {
            items: Backbone.Collection.extend({
                model: b2bAccount
            })
        }
    });

    return {
        'b2bUser': b2bUser,
        'b2bAccount': b2bAccount,
        'b2bAccounts': b2bAccounts
    };
});