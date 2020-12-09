//This program will prompt the user for a list of device makes, their models and the amount in inventory.
function main() {
  //Variable Declaration
  var loop;
  var devices = [];
    
   //Variable assignment
   counter = 0;
    
  //Prompt for deviceMake count and save as loop
  loop = Number(prompt("How many device Makes would you like to enter? Like 'Dell', 'HP', 'ASUS'."));
  
  //Check is input is a number
  if(!IsInputNumber(loop)){
    //Restart function
    main();
  }else{    
    //Get Devices Details
    devices = GetDevices(loop);
    
    //Print Results
    PrintResults(devices);
  } 
  
}

function IsInputNumber(number){
  //Check if input is a mumber and return appropriate boolean
  if(isNaN(number)){
    //Notify user
    alert("Please enter a number.");
    return false;
  }else{
    return true;
  }
}

function GetDevices(loop){
  //Variable Declaration
  var counter = 0;
  var all_items = [];
  
  //Loop and Get Makes
  while (counter < loop){
    //Prompt for deviceMake;
    var make = prompt("Please enter a Device Make: ");
    
    //Get Models for entered make
    var items = GetModels(make);
    
    //Save to array
    all_items.push(items);
    
    //Increment Counter
    counter++;
  }
  //Return device details
  return all_items;
}

function GetModels(make){
  //Variable Declaration and assignments
  var loop;
  var counter = 0; 
  var makes_models_count = {};
  
  //Ask for models count
  loop = Number(prompt("How many models do you have for the device > " + make + " ?"));
  
  //Check input
  if(!IsInputNumber(loop)){    
    //Restart function
    return GetModels(make);
  }else{
    //Save current make to Object
    makes_models_count["Make"] = make;
    makes_models_count["Models"] = [];
    
    //Loop and prompt for models
    while(counter < loop){
      //Varbiable declaration
      var model_name;
      var model_count;
      
      //Prompt User for values
      model_name = prompt("Enter a model name for " + make + ".");
      model_count = prompt("What is the count of " + model_name + "'s?");
      
      //Make sure model count is a number
      while (!IsInputNumber(model_count)){
        model_count = prompt("What is the count of " + model_name + "'s?");
      }
      
      //Save result to object and add to array
      var model = {};
      
      model["ModelName"] = model_name;
      model["ModelCount"] = model_count;
      
      makes_models_count["Models"].push(model);
      
      //Increment Counter
      counter++;
    }
    
    return makes_models_count;
  } 
  
}

function PrintResults(devices){
  //Variable Declaration
  var makes = [];
  var totalCount = 0;
  
  //Get Makes from object and save to array
  for(let make of devices){
    makes.push(make["Make"]);
  }
  
  //Get models for each make
  for (i = 0; i < makes.length; i++){
    //Variable Declaration
    var model_amount = 0;
    var model_count = 0;
    var current_make = makes[i];
    
    //Print Current Make
    document.write("<h2>Device Make : "+ current_make +"</h2>");
    document.write("\n");
    document.write("<h3>Models</h3>");
    
    for(let make of devices){
      //Get Models for Current Make
      if(make["Make"] == makes[i]){
        //Save Current models to variable
        var models = make["Models"];
        
        //same model amount
        model_amount = models.length;
        
        //Get Models for current Make
        for(let model of models){
          var model_name = model["ModelName"];
          var current_model_count = Number(model["ModelCount"]);
          
          //Display Model and Count
          document.write("<strong>Model Name : " + model_name + "</strong>\n");
          document.write("<strong>Model Amount:</strong> " + current_model_count);
          document.write("\n");
          document.write("\n");
          
          //Save count model count
          model_count += current_model_count;
        }
        
        //Print Total Amount for Make
        document.write("<strong>Total Model Count for '" + current_make +"' : </strong> " + model_amount + "\n");
        document.write("<strong>Total Device Count for '" + current_make +"' : </strong> " + model_count);
        document.write("\n\n");
      
        //Save make count to total count
        totalCount += model_count;
      }
    }
  } 

  //Print total of all devices
  document.write("\n\n");
  document.write("<strong>Total Device Count : " + totalCount +"</strong>\n");
  document.write("<strong>Thank You!</strong>");
}

main();