const file = require("file");
file.readFile("Jsonfile.json",(err,Jsonfile) => {
    if(err){
        console.log("Error in reading from folder",err);
        return;
    }
    else{
        try{
         let OData = JSON.parse(Jsonfile);
         console.table(OData);
         var n = OData.length();
         if(OData[n-1].TNoOverWeight === undefined){
             OData.push({"TNoOverWeight": 0});
         }
             for(let i=0;i<n-1;i++){
                      let H = OData[i].HeightCm;    
                       let W = OData[i].WeightKg;             
                       let BMI = W / ((H / 100) * (H / 100));
                             OData[i].BMIrange = BMI;
                      let BMIText = OData[i].BMIcategory;
                      let BMIT = OData[i].HealthRisk;
                        if (BMI <= 18.4) {
                            BMIText = "Underweight";
                            BMIT = "Malnutrition Risk";
                            }
                        else if (BMI >= 18.5 && BMI <= 24.9) {
            BMIText = "Normal Weight";
            BMIT = "Low Risk";
                            } 
                      else if (BMI >= 25 && BMI <= 29.9) {
            BMIText = "Overweight";
            BMIT = "Enhanced Risk";
 
                            }
          else if (BMI >= 30 && BMI <= 34.9) {
            BMIText = "Moderately obese";
            BMIT = "Medium Risk";
         } 
          else if (BMI >= 35 && BMI <= 39.9) {
            BMIText = "Severely obese";
            BMIT = "High Risk";
         }   
          else if (BMI <= 40) {
            BMIText = "Very Severely obese";
            BMIT = "Very High Risk";
    
         } 
      }
     }