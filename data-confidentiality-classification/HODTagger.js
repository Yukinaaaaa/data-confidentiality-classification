function tagHOFields() {
    const fs = require('fs');

    saved = [];

    data = fs.readFileSync('homeowners.json', 'utf8');
    
    let customers = JSON.parse(data);
    
    for (let i = 0; i < customers.length; i++){
        var obj = customers[i];
        for (var key in obj) {
            var value = obj[key];
            if (key.search("employer") != -1) {
                var employer_value = value + "-lsi-demographic";
            }
            if (key.search("employmentstatus") != -1) {
                var employmentstatus_value = value + "-lsi-demographic";
            }
            if (key.search("payslip") != -1) {
                var payslip_value = value + "-hsi-financial";
            }
            if (key.search("gender") != -1) {
                var gender_value = value + "-qsi-demographic";
            }
            if (key.search("nationalinsurancenumber") != -1) {
                var nationalinsurancenumber_value = value + "-hsi-healthcare";
            }
            if (key.search("currentaddress") != -1) {
                var currentaddress_value = value + "-qsi-house";
            }
            if (key.search("previousaddress") != -1) {
                var previousaddress_value = value + "-qsi-house";
            }
            if (key.search("existingloans") != -1) {
                var existingloans_value = value + "-qsi-financial";
            }
            if (key.search("ageofproperty") != -1) {
                var ageofproperty_value = value + "-lsi-house";
            }
            if (key.search("energyrating") != -1) {
                var energyrating_value = value + "-lsi-house";
            }
            if (key.search("counciltaxband") != -1) {
                var counciltaxband_value = value + "-qsi-financial";
            }
            if (key.search("student") != -1) {
                var student_value = value + "-qsi-demographic";
            }
            if (key.search("healthstatus") != -1) {
                var healthstatus_value = value + "-qsi-healthcare";
            }
            if (key.search("yearlyenergycost") != -1) {
                var yearlyenergycost_value = value + "-lsi-house";
            }
            if (key.search("passportno") != -1) {
                var passportno_value = value + "-hsi-demographic";
            }
            if (key.search("phoneno") != -1) {
                var phoneno_value = value + "-si-demographic";
            }
            if (key.search("married") != -1) {
                var married_value = value + "-qsi-demographic";
            }
            if (key.search("city") != -1) {
                var city_value = value + "-qsi-demographic";
            }
            if (key.search("ethnicity") != -1) {
                var ethnicity_value = value + "-qsi-demographic";
            }
            if (key.search("propertytype") != -1) {
                var propertytype_value = value + "-lsi-house";
            }
            if (key.search("norooms") != -1) {
                var norooms_value = value + "-lsi-house";
            }
            if (key.search("nochildren") != -1) {
                var nochildren_value = value + "-qsi-demographic";
            }
            if (key.search("fullname") != -1) {
                var fullname_value = value + "-si-demographic";
            }
            if (key.search("dateofbirth") != -1) {
                var dateofbirth_value = value + "-qsi-demographic";
            }
            if (key.search("bankaccountno") != -1) {
                var bankaccountno_value = value + "-hsi-financial";
            }
            if (key.search("creditcardno") != -1) {
                var creditcardno_value = value + "-hsi-financial";
            }
            if (key.search("accountbalance") != -1) {
                var accountbalance_value = value + "-qsi-financial";
            }
            if (key.search("disabilityallowance") != -1) {
                var disabilityallowance_value = value + "-hsi-financial";
            }
            if (key.search("citizenship") != -1) {
                var citizenship_value = value + "-qsi-demographic";
            }
            if (key.search("email") != -1) {
                var email_value = value + "-si-demographic";
            }
            if (key.search("spousalmaintenanceincome") != -1) {
                var spousalmaintenanceincome_value = value + "-si-financial";
            }
            if (key.search("socialtenant") != -1) {
                var socialtenant_value = value + "-lsi-house";
            }
            if (key.search("pensioner") != -1) {
                var pensioner_value = value + "-qsi-financial";
            }
            if (key.search("totalfloorarea") != -1) {
                var totalfloorarea_value = value + "-lsi-house";
            }
            if (key.search("carer") != -1) {
                var carer_value = value + "-qsi-healthcare";
            }
            if (key.search("tenant") != -1) {
                var tenant_value = value + "-qsi-house";
            }
            if (key.search("drivinglicence") != -1) {
                var drivinglicence_value = value + "-hsi-demographic";
            }
            if (key.search("livingwithpartner") != -1) {
                var livingwithpartner_value = value + "-qsi-demographic";
            }
            if (key.search("fostercarer") != -1) {
                var fostercarer_value = value + "-qsi-healthcare";
            }
            if (key.search("totalamountinbank") != -1) {
                var totalamountinbank_value = value + "-qsi-financial";
            }
        }

        let new_object = {
            employer: employer_value,
            employmentstatus: employmentstatus_value,
            payslip: payslip_value,
            gender: gender_value,
            nationalinsurancenumber: nationalinsurancenumber_value,
            currentaddress: currentaddress_value,
            previousaddress: previousaddress_value,
            existingloans: existingloans_value,
            existingloans: existingloans_value,
            ageofproperty: ageofproperty_value,
            energyrating: energyrating_value,
            counciltaxband: counciltaxband_value,
            student: student_value,
            healthstatus: healthstatus_value,
            yearlyenergycost: yearlyenergycost_value,
            passportno: passportno_value,
            phoneno: phoneno_value,
            married: married_value,
            city: city_value,
            carer:carer_value,
            ethnicity: ethnicity_value,
            propertytype: propertytype_value,
            norooms: norooms_value,
            nochildren: nochildren_value,
            fullname: fullname_value,
            bankaccountno: bankaccountno_value,
            dateofbirth: dateofbirth_value,
            creditcardno: creditcardno_value,
            accountbalance: accountbalance_value,
            disabilityallowance: disabilityallowance_value,
            citizenship: citizenship_value,
            email: email_value,
            yearlyenergycost: yearlyenergycost_value,
            spousalmaintenanceincome: spousalmaintenanceincome_value,
            socialtenant: socialtenant_value,
            pensioner: pensioner_value,
            totalfloorarea: totalfloorarea_value,
            tenant: tenant_value,
            drivinglicence: drivinglicence_value,
            livingwithpartner: livingwithpartner_value,
            fostercarer: fostercarer_value,
            totalamountinbank: totalamountinbank_value
        }
        saved.push(new_object);
    }
    fs.writeFileSync("taggedhomeowners.json", JSON.stringify(saved));
    console.log("write successfully");
}


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

    data = fs.readFileSync('taggedhomeowners.json', 'utf8');
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

    total_num = hsi_num + si_num + qsi_num + lsi_num;
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
}

tagHOFields();

profileHOFields();


