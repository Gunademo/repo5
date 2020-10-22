function validate() {

    var email = document.getElementsByName('email')[0].value;
    var pass = document.getElementsByName('password')[0].value;
    var dob = document.getElementsByName('dob')[0].value;
    var ssid = document.getElementsByName('ssid')[0].value;
    var b;

    if (email != "") {

        if (email == "demo1c@cts.com" || email == "demo2c@cts.com" || email == "demo1i@ibm.com" || email == "demo2i@ibm.com") {
            alert("valid User");
            id_var = email.split("@");
            var id = id_var[0];

            // Account details
            if (email == "demo1c@cts.com" || email == "demo2c@cts.com") {
                var acc_id = "CTS";
                var acc_name = "Cognizant Technologies Ltd";
            }

            if (email == "demo1i@ibm.com" || email == "demo2i@ibm.com") {
                var acc_id = "IBM";
                var acc_name = "International Business Machine";
            }



            //passing user and account objects:
            /*   aptrinsic("identify", {
                   //User Fields
                   "id": id, // Required for logged in app users
                   "email": email,
                   "DOB": dob,
                   "SSID": ssid,
               }, {
                   //Account Fields

                   "id": acc_id, //Required
                   "name": acc_name,
               });
               */

            alert("Logged in user id :" + id + "  from  " + id_var[1]);
            window.location = "https://gunademo.github.io/repo5/index.html";


        } else
            alert("Invalid User,enter demo1c@cts.com or demo2c@cts.com or demo1i@ibm.com or demo2i@ibm.com");

    } else {
        alert("Please enter demo1c@cts.com or demo2c@cts.com or demo1i@ibm.com or demo2i@ibm.com");
    }

    // if (email == "") {
    //     alert("Login in with demo@gs.com");
    // } else {
    //     if (email == "demo@gs.com") {
    //         location.replace("index.html");
    //     } else {
    //         alert("Email or password provided is incorrect");
    //     }
    // }

}