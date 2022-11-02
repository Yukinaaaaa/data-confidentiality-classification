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

function createNewDatawarehouse() {
    const fs = require('fs');
    data = fs.readFileSync('taggedhomeowners.json', 'utf8');
    
    let medical = [];
    let home = [];
    let financial_f = [];
    let medical_a_d = [];
    let customers = JSON.parse(data);
    for (let i = 0; i < customers.length; i++) {
        var obj = customers[i];
        var none;

        let new_object_m = {
            employer: none,employmentstatus: none,payslip: none,gender: none,nationalinsurancenumber: none,currentaddress: none,previousaddress: none,existingloans: none,existingloans: none,ageofproperty: none,energyrating: none, counciltaxband: none,student: none,healthstatus: none,yearlyenergycost: none,passportno: none,phoneno: none,married: none,city: none,carer:none,ethnicity: none,propertytype: none,norooms: none,nochildren: none,fullname: none,bankaccountno: none,dateofbirth: none,creditcardno: none,accountbalance: none,disabilityallowance: none,citizenship: none,email: none,yearlyenergycost: none,spousalmaintenanceincome: none,socialtenant: none,pensioner: none,totalfloorarea: none,tenant: none,drivinglicence: none,livingwithpartner: none,fostercarer: none,totalamountinbank: none
        }
        let new_object_f_f = {
            employer: none,employmentstatus: none,payslip: none,gender: none,nationalinsurancenumber: none,currentaddress: none,previousaddress: none,existingloans: none,existingloans: none,ageofproperty: none,energyrating: none, counciltaxband: none,student: none,healthstatus: none,yearlyenergycost: none,passportno: none,phoneno: none,married: none,city: none,carer:none,ethnicity: none,propertytype: none,norooms: none,nochildren: none,fullname: none,bankaccountno: none,dateofbirth: none,creditcardno: none,accountbalance: none,disabilityallowance: none,citizenship: none,email: none,yearlyenergycost: none,spousalmaintenanceincome: none,socialtenant: none,pensioner: none,totalfloorarea: none,tenant: none,drivinglicence: none,livingwithpartner: none,fostercarer: none,totalamountinbank: none
        }
        let new_object_h = {
            employer: none,employmentstatus: none,payslip: none,gender: none,nationalinsurancenumber: none,currentaddress: none,previousaddress: none,existingloans: none,existingloans: none,ageofproperty: none,energyrating: none, counciltaxband: none,student: none,healthstatus: none,yearlyenergycost: none,passportno: none,phoneno: none,married: none,city: none,carer:none,ethnicity: none,propertytype: none,norooms: none,nochildren: none,fullname: none,bankaccountno: none,dateofbirth: none,creditcardno: none,accountbalance: none,disabilityallowance: none,citizenship: none,email: none,yearlyenergycost: none,spousalmaintenanceincome: none,socialtenant: none,pensioner: none,totalfloorarea: none,tenant: none,drivinglicence: none,livingwithpartner: none,fostercarer: none,totalamountinbank: none
        }
        let new_object_m_a_d = {
            employer: none,employmentstatus: none,payslip: none,gender: none,nationalinsurancenumber: none,currentaddress: none,previousaddress: none,existingloans: none,existingloans: none,ageofproperty: none,energyrating: none, counciltaxband: none,student: none,healthstatus: none,yearlyenergycost: none,passportno: none,phoneno: none,married: none,city: none,carer:none,ethnicity: none,propertytype: none,norooms: none,nochildren: none,fullname: none,bankaccountno: none,dateofbirth: none,creditcardno: none,accountbalance: none,disabilityallowance: none,citizenship: none,email: none,yearlyenergycost: none,spousalmaintenanceincome: none,socialtenant: none,pensioner: none,totalfloorarea: none,tenant: none,drivinglicence: none,livingwithpartner: none,fostercarer: none,totalamountinbank: none
        }

        for (var key in obj) {
            var value = obj[key];
           //   m
            if (value.search("-healthcare") != -1) {
                {
                    if (key.search("nationalinsurancenumber") != -1) { 
                        new_object_m.nationalinsurancenumber = value;
                    }
                    if (key.search("healthstatus") != -1) { 
                        new_object_m.healthstatus = value;
                    }
                    if (key.search("carer") != -1) { 
                        new_object_m.carer = value;
                    }
                    if (key.search("fostercarer") != -1) { 
                        new_object_m.fostercarer = value;
                    }
                }             
            }         
            //   h
            if (value.search("-house") != -1) {
                if (key.search("currentaddress") != -1) { 
                    new_object_h.currentaddress = value;
                }
                if (key.search("previousaddress") != -1) { 
                    new_object_h.previousaddress = value;
                }
                if (key.search("energyrating") != -1) { 
                    new_object_h.energyrating = value;
                }
                if (key.search("propertytype") != -1) { 
                    new_object_h.propertytype = value;
                }
                if (key.search("norooms") != -1) { 
                    new_object_h.norooms = value;
                }
                if (key.search("totalfloorarea") != -1) { 
                    new_object_h.totalfloorarea = value;
                }
                if (key.search("ageofproperty") != -1) { 
                    new_object_h.ageofproperty = value;
                }
                if (key.search("yearlyenergycost") != -1) { 
                    new_object_h.yearlyenergycost = value;
                }
                if (key.search("socialtenant") != -1) { 
                    new_object_h.socialtenant = value;
                }
                if (key.search("tenant") != -1) { 
                    new_object_h.tenant = value;
                }
            }         
            //    ff
            if (value.search("-financial") != -1) {
                if (key.search("payslip") != -1) { 
                    new_object_f_f.payslip = value;
                }
                if (key.search("existingloans") != -1) { 
                    new_object_f_f.existingloans = value;
                }
                if (key.search("counciltaxband") != -1) { 
                    new_object_f_f.counciltaxband = value;
                }
                if (key.search("bankaccountno") != -1) { 
                    new_object_f_f.bankaccountno = value;
                }
                if (key.search("creditcardno") != -1) { 
                    new_object_f_f.creditcardno = value;
                }
                if (key.search("accountbalance") != -1) { 
                    new_object_f_f.accountbalance = value;
                }
                if (key.search("disabilityallowance") != -1) { 
                    new_object_f_f.disabilityallowance = value;
                }
                if (key.search("spousalmaintenanceincome") != -1) { 
                    new_object_f_f.spousalmaintenanceincome = value;
                }
                if (key.search("pensioner") != -1) { 
                    new_object_f_f.pensioner = value;
                }
                if (key.search("totalamountinbank") != -1) { 
                    new_object_f_f.totalamountinbank = value;
                }
            }        
            if (key.search("fullname") != -1) {
                    new_object_f_f.fullname = value;       
            }    
            //   mad
            if (value.search("-healthcare") != -1) {
                
                if (key.search("nationalinsurancenumber") != -1) { 
                    new_object_m_a_d.nationalinsurancenumber = value;
                }
                if (key.search("healthstatus") != -1) { 
                    new_object_m_a_d.healthstatus = value;
                }
                if (key.search("carer") != -1) { 
                    new_object_m_a_d.carer = value;
                }
                if (key.search("fostercarer") != -1) { 
                    new_object_m_a_d.fostercarer = value;
                }
                            
            }   
            if (key.search("previousaddress") != -1) {
                new_object_m_a_d.previousaddress = value;
            }         
            if (key.search("currentaddress") != -1) {
                new_object_m_a_d.currentaddress = value;
            }         
            if (value.search("-demographic") != -1) {
                if (key.search("employer") != -1) { 
                    new_object_m_a_d.employer = value;
                }
                if (key.search("employmentstatus") != -1) { 
                    new_object_m_a_d.employmentstatus = value;
                }
                if (key.search("gender") != -1) { 
                    new_object_m_a_d.gender = value;
                }
                if (key.search("student") != -1) { 
                    new_object_m_a_d.student = value;
                }
                if (key.search("passportno") != -1) { 
                    new_object_m_a_d.passportno = value;
                }
                if (key.search("phoneno") != -1) { 
                    new_object_m_a_d.phoneno = value;
                }
                if (key.search("married") != -1) { 
                    new_object_m_a_d.married = value;
                }
                if (key.search("city") != -1 && key.search("ethnicity") == -1) { 
                    new_object_m_a_d.city = value;
                }
                if (key.search("ethnicity") != -1) { 
                    new_object_m_a_d.ethnicity = value;
                }
                if (key.search("nochildren") != -1) { 
                    new_object_m_a_d.nochildren = value;
                }
                if (key.search("fullname") != -1) { 
                    new_object_m_a_d.fullname = value;
                }
                if (key.search("dateofbirth") != -1) { 
                    new_object_m_a_d.dateofbirth = value;
                }
                if (key.search("citizenship") != -1) { 
                    new_object_m_a_d.citizenship = value;
                }
                if (key.search("email") != -1) { 
                    new_object_m_a_d.email = value;
                }
                if (key.search("drivinglicence") != -1) { 
                    new_object_m_a_d.drivinglicence = value;
                }
                if (key.search("livingwithpartner") != -1) { 
                    new_object_m_a_d.livingwithpartner = value;
                }
            }      
        }
        medical.push(new_object_m);
        home.push(new_object_h);
        financial_f.push(new_object_f_f);
        medical_a_d.push(new_object_m_a_d);
    }

    fs.writeFileSync("homeowner-m.json", JSON.stringify(medical));
    console.log("write homeowner-m.json successfully");
    fs.writeFileSync("homeowner-h.json", JSON.stringify(home));
    console.log("write homeowner-h.json successfully");
    fs.writeFileSync("homeowner-f-f.json", JSON.stringify(financial_f));
    console.log("write homeowner-f-f.json successfully");
    fs.writeFileSync("homeowner-m-a-d.json", JSON.stringify(medical_a_d));
    console.log("write homeowner-m-a-d.json successfully");
}
//tagHOFields();

// profileHOFields();

createNewDatawarehouse();
