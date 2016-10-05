(function(){
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function(){
        this.product = gem;
    });

    var gem = {
        name: 'Dodecahed',
        price: 2.95,
        description: '...adsfasddddddasdfasdfadsfasdf...',
        canPurchase: true,
        soldOut: true,
    }
})();