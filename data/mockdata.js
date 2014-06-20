// mock data object
exports.data = {
    "status": "muck",
    "accounts": [
        {"liquid": true, "type": "cash", "penalty": false, "balance": 17000},
        {"liquid": true, "type": "savings", "penalty": false, "balance": 500},
        {"liquid": true, "type": "checking", "penalty": false, "balance": 15000},
        {"liquid": false, "type": "investment", "subtype": "individual brokerage acct", "penalty": false, "balance": {"cash": 3000, "positions": 65000}},
        {"liquid": false, "type": "investment", "subtype": "roth individual ira acct", "penalty": true, "balance": {"cash": 0, "positions": 90000}},
        {"liquid": false, "type": "investment", "subtype": "traditional ira acct", "penalty": true, "balance": {"cash": 0, "positions": 120000}},
        {"liquid": false, "type": "other", "penalty": true, "balance": 12000}
    ],
    
    "getLiquidBalanceTtl": function(balances) {
        var _bal;
        _bal = 0;
        if (typeof balances == 'object') {
            balances.forEach(function(item) {
                // sum only liquid item balances
                if (item.liquid == true) {
                    _bal += item.balance;
                }
            })
        } else {
            _bal = NaN;
        }
        return _bal;
    },
    
    "last": "property"
};