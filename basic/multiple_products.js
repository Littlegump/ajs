(function(){
    var app = angular.module("store", []);

    app.controller("StoreController", function(){
        this.products = gem;
    });

    var gem =[
        {
            name: "pro1",
            price: 2.95,
            description: "Thsi is a good products.",
            speci: "None yet1",
            canPurchase: true,
            images: [
                {
                    full: 'bd_logo1.png',
                    thumb: 'index.jpeg',
                },
            ],
        },
        {
            name: "pro2",
            price: 5.95,
            description: "good",
            speci: "None yet",
            canPurchase: false,
            images: [
                {
                    full: 'bd_logo1.png',
                    thumb: 'index.jpeg',
                },
            ],
        },
    ];

})();
