function tagHOFields(){
    const fs = require('fs');
    fs.readFile('homeowners.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        
        var saved = "[";
        let customers = JSON.parse(data);

        for (let i = 0; i < customers.length; i++){
            var obj = customers[i];
            for (var key in obj) {
                var value = obj[key];
                if (key.search("employer") != -1) {
                    var employer_value = value + "-qsi";
                }
                if (key.search("employment status") != -1) {
                    var employmentstatus_value = value + "-qsi";
                }
                if (key.search("payslip") != -1) {
                    var payslip_value = value + "-qsi";
                }
                if (key.search("gender") != -1) {
                    var gender_value = value + "-qsi";
                }
                if (key.search("nationalinsurancenumber") != -1) {
                    var nationalinsurancenumber_value = value + "-hsi";
                }
                if (key.search("currentaddress") != -1) {
                    var currentaddress_value = value + "-si";
                }
                if (key.search("previousaddress") != -1) {
                    var previousaddress_value = value + "-si";
                }
                if (key.search("existingloans") != -1) {
                    var existingloans_value = value + "-qsi";
                }
                if (key.search("existingloans") != -1) {
                    var existingloans_value = value + "-qsi";
                }
                if (key.search("ageofproperty") != -1) {
                    var ageofproperty_value = value + "-qsi";
                }
                if (key.search("energyrating") != -1) {
                    var energyrating_value = value + "-lsi";
                } 
                if (key.search("counciltaxband") != -1) {
                    var counciltaxband_value = value + "-qsi";
                } 
                if (key.search("student") != -1) {
                    var student_value = value + "-qsi";
                } 
                if (key.search("healthstatus") != -1) {
                    var healthstatus_value = value + "-qsi";
                } 
                if (key.search("yearlyenergycost") != -1) {
                    var yearlyenergycost_value = value + "-qsi";
                } 
                if (key.search("passportno") != -1) {
                    var passportno_value = value + "-hsi";
                } 
                if (key.search("phoneno") != -1) {
                    var phoneno_value = value + "-si";
                } 
                if (key.search("married") != -1) {
                    var married_value = value + "-qsi";
                } 
                if (key.search("city") != -1) {
                    var city_value = value + "-qsi";
                } 
                if (key.search("ethnicity") != -1) {
                    var ethnicity_value = value + "-qsi";
                } 
                if (key.search("propertytype") != -1) {
                    var propertytype_value = value + "-lsi";
                } 
                if (key.search("norooms") != -1) {
                    var norooms_value = value + "-lsi";
                } 
                if (key.search("nochildren") != -1) {
                    var nochildren_value = value + "-qsi";
                } 
                if (key.search("fullname") != -1) {
                    var fullname_value = value + "-hsi";
                } 
                if (key.search("fullname") != -1) {
                    var fullname_value = value + "-qsi";
                } 
                if (key.search("dateofbirth") != -1) {
                    var dateofbirth_value = value + "-qsi";
                } 
                if (key.search("bankaccountno") != -1) {
                    var bankaccountno_value = value + "-hsi";
                } 
                if (key.search("dateofbirth") != -1) {
                    var dateofbirth_value = value + "-qsi";
                } 
                if (key.search("creditcardno") != -1) {
                    var creditcardno_value = value + "-hsi";
                } 
                if (key.search("accountbalance") != -1) {
                    var accountbalance_value = value + "-qsi";
                } 
                if (key.search("disabilityallowance") != -1) {
                    var disabilityallowance_value = value + "-qsi";
                } 
                if (key.search("citizenship") != -1) {
                    var citizenship_value = value + "-qsi";
                } 
                if (key.search("email") != -1) {
                    var email_value = value + "-si";
                } 
                if (key.search("yearlyenergycost") != -1) {
                    var yearlyenergycost_value = value + "-qsi";
                } 
                if (key.search("spousalmaintenanceincome") != -1) {
                    var spousalmaintenanceincome_value = value + "-qsi";
                } 
                if (key.search("socialtenant") != -1) {
                    var socialtenant_value = value + "-lsi";
                } 
                if (key.search("pensioner") != -1) {
                    var pensioner_value = value + "-qsi";
                } 
                if (key.search("totalfloorarea") != -1) {
                    var totalfloorarea_value = value + "-lsi";
                } 
                if (key.search("carer") != -1) {
                    var carer_value = value + "-qsi";
                } 
                if (key.search("tenant") != -1) {
                    var tenant_value = value + "-qsi";
                } 
                if (key.search("drivinglicence") != -1) {
                    var drivinglicence_value = value + "-hsi";
                } 
                if (key.search("livingwithpartner") != -1) {
                    var livingwithpartner_value = value + "-qsi";
                } 
                if (key.search("fostercarer") != -1) {
                    var fostercarer_value = value + "-qsi";
                } 

            let new_object = {
                employer:employer_value,
                employmentstatus: employmentstatus_value,
                payslip: payslip_value,
                gender: gender_value,
                nationalinsurancenumber: nationalinsurancenumber_value,
                currentaddress:currentaddress_value,
                previousaddress: previousaddress_value,
                existingloans:existingloans_value,
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
                ethnicity: ethnicity_value,
                propertytype: propertytype_value,
                norooms: norooms_value,
                nochildren: nochildren_value,
                fullname: fullname_value,
                fullname: fullname_value,
                dateofbirth: dateofbirth_value,
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
                tenant: tenant_value = value,
                drivinglicence: drivinglicence_value,
                livingwithpartner: livingwithpartner_value,
                fostercarer: fostercarer_value
            }
                for(var j=0;j<new_object.length-1;j++){
                    saved+=JSON.stringify(new_object[j],null,4)+",";
                }
                saved+=JSON.stringify(new_object[new_object.length-1],null,4)+"]";
            }
        }

        fs.writeFile("test.json", saved, (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
            }
          });
    });
}

tagHOFields();