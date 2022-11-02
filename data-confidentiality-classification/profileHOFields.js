function profileHOFields() {
    const fs = require('fs');
    
    var hsi_num = 0;
    var si_num = 0;
    var qsi_num = 0;
    var lsi_num = 0;
    var total_num = 0;
    var financial_num = 0;
    var financial_hsi = 0;
    var financial_si = 0;
    var financial_qsi = 0;
    var financial_lsi = 0;

    fs.readFile('taggedhomeowners.json', 'utf8', (err, data) => {
        let customers = JSON.parse(data);
        for (let i = 0; i < customers.length; i++) {
            var obj = customers[i];
            for (var key in obj) {
                var value = obj[key];
                if (value.search("-hsi") != -1) {
                    hsi_num++;
                }
                if (value.search("-si") != -1) {
                    si_num++;
                }
                if (value.search("-qsi") != -1) {
                    qsi_num++;
                }
                if (value.search("-lsi") != -1) {
                    lsi_num++;
                }
                if (value.search("-financial") != -1) {
                    financial_num++;
                }
                
                if (value.search("-hsi-financial") != -1) {
                    financial_hsi++;
                }
                if (value.search("-si-financial") != -1) {
                    financial_si++;
                }
                if (value.search("-qsi-financial") != -1) {
                    financial_qsi++;
                }
                if (value.search("-lsi-financial") != -1) {
                    financial_lsi++;
                }
            }
        }
        console.log("read successfully");

        let total_num = hsi_num + si_num + qsi_num + lsi_num;
        let hsi_rate = hsi_num / total_num;
        let si_rate = si_num / total_num;

        console.log("hsi number:" + hsi_num);
        console.log("si number:" + si_num);
        console.log("qsi number:" + qsi_num);
        console.log("lsi number:" + lsi_num);
        console.log("hsi proportion:" + hsi_rate);
        console.log("si proportion:" + si_rate);
        
        console.log("financial hsi proportion:" + financial_hsi/financial_num);
        console.log("financial si proportion:" + financial_si/financial_num);
        console.log("financial qsi proportion:" + financial_qsi/financial_num);
        console.log("financial lsi proportion:" + financial_lsi/financial_num);

    });
}

profileHOFields();