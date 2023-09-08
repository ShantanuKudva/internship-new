> Functionality/Description
>
> **Providing a detailed explanation of each page and its
> functionalities.Lets start off with our first page.**
>
> Desktop9/Customer-Info
>
> This page is the first step towards developing your license and
> accepts all basic customer information.This page includes four input
> fields
>
> which take the customers name,email,contact info and the organization
> to which he belongs.
>
> **Validation**
>
> The unit testing is done on each input field using the error attribute
> provided by the mui module
>
> To keep track of the various validations we used a state object called
> formErrors which has been described before.

+-----------------------------------+-----------------------------------+
| > 1\ | > const handleNameBlur = () =\> |
| > 2\ | > {\ |
| > 3\ | > if (!formData.name) {\ |
| > 4\ | > setFormErrors({ \...formErrors, |
| > 5\ | > name1: \"name is required\" }); |
| > 6\ | > } else {\ |
| > 7 | > setFormErrors({ \...formErrors, |
| | > name1: \"\" });\ |
| | > }\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 8\ | > const handleOrgsBlur = () =\> |
| > 9\ | > {\ |
| > 10\ | > if (!formData.organization) {\ |
| > 11\ | > setFormErrors({ \...formErrors, |
| > 12\ | > orgs: \"organisation is |
| > 13\ | > required\" }); } else {\ |
| > 14\ | > setFormErrors({ \...formErrors, |
| > 15 | > orgs: \"\" });\ |
| | > }\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 16\ | > const handlePhoneNumberBlur = |
| > 17\ | > () =\> {\ |
| > 18\ | > if (!formData.phone) {\ |
| > 19\ | > setFormErrors({ \...formErrors, |
| > 20\ | > phone: \"contact info is |
| > 21\ | > required\" }); } else if |
| > 22\ | > (!/\ |
| > 23\ | ^\\d{10}\$/.test(formData.phone)) |
| > 24\ | > {\ |
| > 25\ | > setFormErrors({\ |
| > 26\ | > \...formErrors,\ |
| > 27\ | > phone: \"please enter valid ten |
| > 28\ | > digit phone number\",\ |
| > 29\ | > });\ |
| > 30\ | > } else {\ |
| > 31\ | > setFormErrors({ \...formErrors, |
| > 32\ | > phone: \"\" });\ |
| > 33\ | > }\ |
| > 34\ | > };\ |
| > 35\ | > const handleEmailBlur = () =\> |
| > 36\ | > {\ |
| > 37\ | > if (!formData.email) {\ |
| > 38 | > setFormErrors({ \...formErrors, |
| | > email: \"email is required\" |
| | > });\ |
| | > } else if (\ |
| | > !/\^\[a-zA-Z0-9. |
| | \_%+-\]+@\[a-zA-Z0-9.-\]+\\.\[a-z |
| | A-Z\]{2,}\$/.test(formData.email) |
| | > ) {\ |
| | > setFormErrors({ \...formErrors, |
| | > email: \"please enter valid |
| | > email\" }); } else {\ |
| | > setFormErrors({ \...formErrors, |
| | > email: \"\" });\ |
| | > } |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 1\. handleNameBlur
> Function:![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image16.png){width="1.1111111111111112in"
> height="0.1527777777777778in"}
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image1.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is called when the
> \"name\" input field loses focus (on blur).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image2.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It checks if the formData.name field
> is empty (falsy) and sets an error message in the formErrors state
> object if it is.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image3.png){width="1.0555555555555556in"
> height="0.1527777777777778in"}If formData.name is not empty, it clears
> the error message by setting it to an empty string in the formErrors
> state.
>
> 2\. handleOrgsBlur Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image4.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is called when the
> \"organization\" input field loses focus (on blur).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image5.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Similar to handleNameBlur , it checks
> if the formData.organization field is empty and sets an error message
> in formErrors if it is
>
> empty.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image6.png){width="1.5277777777777777in"
> height="0.1527777777777778in"}If formData.organization is not empty,
> it clears the error message by setting it to an empty string in
> formErrors .
>
> 3\. handlePhoneNumberBlur Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image7.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is called when the
> \"phone\" input field loses focus (on blur).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image8.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It first checks if the formData.phone
> field is empty and sets an error message in formErrors if it is.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image9.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Next, it checks if the formData.phone
> value is a valid ten-digit phone number using a regular expression (
> /\^\\d{10}\$/ ).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image10.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If the value is not a valid ten-digit
> phone number, it sets a different error message in formErrors .
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image11.png){width="1.1111111111111112in"
> height="0.1527777777777778in"}If formData.phone is not empty and is a
> valid ten-digit phone number, it clears the error message by setting
> it to an empty string in
>
> formErrors .
>
> 4\. handleEmailBlur Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image12.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is called when the
> \"email\" input field loses focus (on blur).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image13.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It first checks if the formData.email
> field is empty and sets an error message in formErrors if it is empty.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image14.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Next, it validates the formData.email
> value using a regular expression that checks if it\'s a valid email
> address.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image15.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If the value is not a valid email
> address, it sets a different error message in formErrors .
>
> If formData.email is not empty and is a valid email address, it clears
> the error message by setting it to an empty string in
>
> formErrors .
>
> **Navigation Restriction**
>
> The user is restricted navigation abilities based on the required
> input field values and is denied access to the following pages based
> on
>
> whether the inputted information is validated or not.

+-----------------------------------+-----------------------------------+
| 1\ | > const handleNextButtonSubmit = |
| 2\ | > () =\> {\ |
| 3\ | > if (\ |
| 4\ | > formErrors.name1 === \"\" &&\ |
| 5\ | > formErrors.orgs === \"\" &&\ |
| 6\ | > formErrors.phone === \"\" &&\ |
| 7\ | > formErrors.email === \"\"\ |
| 8\ | > ) {\ |
| 9\ | > // Show alert if any of the |
| 10 11 12 13 14 15 16 17 18 19 20 | > fields are empty\ |
| 21 22 23 | > navigate(\"/license-type\");\ |
| | > } else {\ |
| | > alert(\"Please fill all |
| | > required fields correctly .\"); |
| | > // Replace with your actual |
| | > next page URL }\ |
| | > };\ |
| | > const handlePage2ButtonSubmit = |
| | > () =\> {\ |
| | > if (\ |
| | > formErrors.name1 === \"\" &&\ |
| | > formErrors.orgs === \"\" &&\ |
| | > formErrors.phone === \"\" &&\ |
| | > formErrors.email === \"\"\ |
| | > ) {\ |
| | > // Show alert if any of the |
| | > fields are empty\ |
| | > navigate(\"/license-type\");\ |
| | > } else { |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 24\ | > alert(\"Please fill all |
| > 25\ | > required fields correctly .\"); |
| > 26\ | > // Replace with your actual |
| > 27\ | > next page URL }\ |
| > 28 | > };\ |
| | > const handlePage3ButtonSubmit = |
| | > () =\> {\ |
| | > // console.log(formData); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 29\ | > if (\ |
| > 30\ | > formErrors.name1 === \"\" &&\ |
| > 31\ | > formErrors.orgs === \"\" &&\ |
| > 32\ | > formErrors.phone === \"\" &&\ |
| > 33\ | > formErrors.email === \"\" &&\ |
| > 34\ | > activeLink !== null\ |
| > 35\ | > ) {\ |
| > 36\ | > // Show alert if any of the |
| > 37\ | > fields are empty\ |
| > 38\ | > |
| > 39\ | navigate(\"/license-details\");\ |
| > 40\ | > } else {\ |
| > 41\ | > alert(\"Please filll previous |
| > 42\ | > page deatils first.\"); // |
| > 43\ | > Replace with your actual next |
| > 44\ | > page URL }\ |
| > 45\ | > };\ |
| > 46\ | > const handlePage4ButtonSubmit = |
| > 47\ | > () =\> {\ |
| > 48\ | > if (\ |
| > 49\ | > formErrors.name1 === \"\" &&\ |
| > 50\ | > formErrors.orgs === \"\" &&\ |
| > 51\ | > formErrors.phone === \"\" &&\ |
| > 52\ | > formErrors.email === \"\" &&\ |
| > 53\ | > activeLink !== null\ |
| > 54\ | > ) {\ |
| > 55 | > // Show alert if any of the |
| | > fields are empty\ |
| | > navigate(\"/preview\");\ |
| | > } else {\ |
| | > alert(\"Please fill previous |
| | > page details first .\"); // |
| | > Replace with your actual next |
| | > page URL } |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 1\. handleNextButtonSubmit Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image17.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is triggered when the
> user clicks a \"Next\" button to proceed to the next step of a
> multi-step form.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image18.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It checks if there are no validation
> errors in the form fields by examining the formErrors object.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image19.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If all fields ( name1 , orgs , phone
> , and email ) have no errors (i.e., their corresponding properties in
> formErrors are empty strings), the user is navigated to the next
> step,\"/license-type\".
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image20.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If there are validation errors in any
> of the fields, an alert is displayed, asking the user to fill in all
> required fields correctly.
>
> 2\. handlePage2ButtonSubmit , handlePage3ButtonSubmit , and
> handlePage4ButtonSubmit Functions:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image21.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} These functions are similar to
> handleNextButtonSubmit but are meant for different steps of the
> multi-step form (e.g., second, third, and fourth steps).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image22.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} They check for validation errors in
> the same way as the handleNextButtonSubmit function.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image23.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Additionally, the
> handlePage3ButtonSubmit and handlePage4ButtonSubmit functions check if
> an activeLink variable is not null before allowing navigation.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image24.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If all conditions are met (no
> validation errors and, for page 3 and 4, an activeLink is not null),
> the user is navigated to the next step (e.g., \"/license-details\" or
> \"/preview\").
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image25.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If there are validation errors or the
> activeLink condition is not met, an alert is displayed, indicating
> that the user should fill in previous page details or take a specific
> action first.
>
> Desktop10/License-Type
>
> This page is the second step towards developing your license and
> allows you to choose the preferred license type of your choice.
>
> **Validation/Navigation Restriction**

The activeLink state described before is used to keep track of the users
choice and update it.The onclick property of any of the four license

> types will assign this state to the said license type.
>
> The user is restricted navigation abilities based on the whether the
> activeLink field contains a value or not required is denied access to
> the
>
> following pages based on whether the inputted information is validated
> or not.

+-----------------------------------+-----------------------------------+
| > 1\ | > const handleNextButtonSubmit = |
| > 2\ | > () =\> {\ |
| > 3\ | > if (activeLink === null) {\ |
| > 4\ | > alert(\"Please select a type |
| > 5\ | > .\");\ |
| > 6\ | > } else {\ |
| > 7\ | > if (activeLink === \"demo\") {\ |
| > 8\ | > setFormData({\ |
| > 9\ | > \...formData,\ |
| > 10\ | > licenseType: \"Demo\",\ |
| > 11\ | > noOfDays: 7,\ |
| > 12\ | > moduleSelected: |
| > 13\ | > Object.keys(data),\ |
| > 14\ | > });\ |
| > 15\ | > }\ |
| > 16\ | > if (activeLink === \"trial\") |
| > 17\ | > {\ |
| > 18\ | > setFormData({\ |
| > 19\ | > \...formData,\ |
| > 20\ | > licenseType: \"Trial\",\ |
| > 21\ | > noOfDays: 30,\ |
| > 22\ | > moduleSelected: |
| > 23\ | > Object.keys(data),\ |
| > 24\ | > });\ |
| > 25\ | > }\ |
| > 26\ | > if (activeLink === |
| > 27\ | > \"perpetual\") {\ |
| > 28\ | > setFormData({\ |
| > 29\ | > \...formData,\ |
| > 30\ | > licenseType: \"Perpetual\",\ |
| > 31\ | > noOfDays: 1,\ |
| > 32\ | > moduleSelected: \[\],\ |
| > 33\ | > });\ |
| > 34\ | > }\ |
| > 35\ | > if (activeLink === |
| > 36 | > \"production\") {\ |
| | > setFormData({\ |
| | > \...formData,\ |
| | > licenseType: \"Production\",\ |
| | > noOfDays: 1,\ |
| | > moduleSelected: \[\],\ |
| | > });\ |
| | > } |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 37
>
> 38 navigate(\"/license-details\");
>
> 39 }
>
> 40 };

+-----------------------------------+-----------------------------------+
| > 41\ | > const handlePage3ButtonSubmit = |
| > 42\ | > () =\> { if (activeLink === |
| > 43\ | > null) {\ |
| > 44\ | > alert(\"Please select a type |
| > 45\ | > .\"); } else {\ |
| > 46\ | > if (activeLink === \"demo\") {\ |
| > 47\ | > setFormData({\ |
| > 48 | > \...formData, |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 49\ | > licenseType: \"Demo\",\ |
| > 50\ | > noOfDays: 7,\ |
| > 51\ | > });\ |
| > 52\ | > } else if (activeLink === |
| > 53\ | > \"trial\") {\ |
| > 54\ | > setFormData({ \...formData, |
| > 55\ | > licenseType: \"Trial\", |
| > 56\ | > noOfDays: 30 }); } else if |
| > 57\ | > (activeLink === \"perpetual\") |
| > 58\ | > {\ |
| > 59\ | > setFormData({\ |
| > 60\ | > \...formData,\ |
| > 61\ | > licenseType: \"Perpetual\",\ |
| > 62\ | > noOfDays: 1,\ |
| > 63\ | > });\ |
| > 64\ | > } else if (activeLink === |
| > 65\ | > \"production\") {\ |
| > 66 | > setFormData({\ |
| | > \...formData,\ |
| | > licenseType: \"Production\",\ |
| | > noOfDays: 1,\ |
| | > });\ |
| | > } |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 67\ | > |
| > 68\ | navigate(\"/license-details\");\ |
| > 69\ | > }\ |
| > 70\ | > };\ |
| > 71\ | > const handlePage4ButtonSubmit = |
| > 72\ | > () =\> {\ |
| > 73\ | > // console.log(formData);\ |
| > 74\ | > if (activeLink === null \|\| |
| > 75\ | > formData.licenseRestrictions |
| > 76\ | > === \"\") { alert(\"Please fill |
| > 77\ | > all previous pages\");\ |
| > 78\ | > } else {\ |
| > 79\ | > if (activeLink === \"demo\") {\ |
| > 80\ | > setFormData({\ |
| > 81\ | > \...formData,\ |
| > 82\ | > licenseType: \"Demo\",\ |
| > 83\ | > noOfDays: 7,\ |
| > 84\ | > });\ |
| > 85\ | > } else if (activeLink === |
| > 86\ | > \"trial\") {\ |
| > 87\ | > setFormData({ \...formData, |
| > 88\ | > licenseType: \"Trial\", |
| > 89\ | > noOfDays: 30 }); } else if |
| > 90\ | > (activeLink === \"perpetual\") |
| > 91\ | > {\ |
| > 92\ | > setFormData({\ |
| > 93\ | > \...formData,\ |
| > 94\ | > licenseType: \"Perpetual\",\ |
| > 95\ | > noOfDays: 1,\ |
| > 96 | > });\ |
| | > } else if (activeLink === |
| | > \"production\") {\ |
| | > setFormData({\ |
| | > \...formData,\ |
| | > licenseType: \"Production\",\ |
| | > noOfDays: 1,\ |
| | > });\ |
| | > } |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 97\ | > navigate(\"/preview\");\ |
| > 98\ | > }\ |
| > 99\ | > };\ |
| > 100\ | > const handlePage1ButtonSubmit = |
| > 101\ | > () =\> { // |
| > 102\ | > console.log(formData.name);\ |
| > 103\ | > if (activeLink === null) {\ |
| > 104\ | > alert(\"Please select a type |
| > 105\ | > .\"); } else {\ |
| > 106 | > if (activeLink === \"demo\") { |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image42.png){width="1.3055555555555556in"
height="0.1527777777777778in"}![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image43.png){width="1.3055555555555556in"
height="0.1527777777777778in"}

+-----------------------------------+-----------------------------------+
| > 107\ | > setFormData({\ |
| > 108\ | > \...formData,\ |
| > 109\ | > licenseType: \"Demo\",\ |
| > 110\ | > noOfDays: 7,\ |
| > 111\ | > });\ |
| > 112\ | > } else if (activeLink === |
| > 113\ | > \"trial\") {\ |
| > 114\ | > setFormData({ \...formData, |
| > 115\ | > licenseType: \"Trial\", |
| > 116\ | > noOfDays: 30 }); } else if |
| > 117\ | > (activeLink === \"perpetual\") |
| > 118\ | > {\ |
| > 119\ | > setFormData({\ |
| > 120\ | > \...formData,\ |
| > 121\ | > licenseType: \"Perpetual\",\ |
| > 122\ | > noOfDays: 1,\ |
| > 123\ | > });\ |
| > 124\ | > } else if (activeLink === |
| > 125\ | > \"production\") {\ |
| > 126 | > setFormData({\ |
| | > \...formData,\ |
| | > licenseType: \"Production\",\ |
| | > noOfDays: 1,\ |
| | > });\ |
| | > } |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 127 128 129 130 | > navigate(\"/customer-info\");\ |
| | > }\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 1\. handleNextButtonSubmit Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image26.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is triggered when the
> user clicks a \"Next\" button, typically on the first step of the
> form.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image27.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It checks if activeLink is null ,
> indicating that the user has not selected a license type.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image28.png){width="1.3055555555555556in"
> height="0.1527777777777778in"}If activeLink is null , an alert is
> displayed, prompting the user to select a license type.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image29.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If a license type is selected (
> activeLink is not null ), it updates the formData state with the
> selected license type, sets the
>
> number of days, and selects all available modules (assuming data
> contains module information).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image30.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} After updating the state, the user is
> navigated to the \"/license-details\" page.
>
> 2\. handlePage3ButtonSubmit Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image31.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is typically used on
> the third step of the form.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image32.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It checks if activeLink is null ,
> indicating that the user has not selected a license type.
>
> If activeLink is null , an alert is displayed, prompting the user to
> select a license type.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image33.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If a license type is selected (
> activeLink is not null ), it updates the formData state with the
> selected license type and sets the
>
> number of days.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image34.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} After updating the state, the user is
> navigated to the \"/license-details\" page.
>
> 3\. handlePage4ButtonSubmit Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image35.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is typically used on
> the fourth step of the form.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image36.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It checks if activeLink is null or if
> formData.licenseRestrictions is empty, indicating that the user has
> not filled in all the
>
> required information on previous pages.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image37.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If any of these conditions are met,
> an alert is displayed, prompting the user to fill in all previous
> pages.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image38.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If all required information is
> provided, it updates the formData state with the selected license type
> and sets the number of days.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image39.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} After updating the state, the user is
> navigated to the \"/preview\" page.
>
> 4\. handlePage1ButtonSubmit Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image40.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is typically used on
> the first step of the form (customer information).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image41.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It checks if activeLink is null ,
> indicating that the user has not selected a license type.
>
> If activeLink is null , an alert is displayed, prompting the user to
> select a license type.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image44.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} If a license type is selected (
> activeLink is not null ), it updates the formData state with the
> selected license type and sets the number of days.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image45.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} After updating the state, the user is
> navigated to the \"/customer-info\" page.

Desktop11/License-Details

This page is the third step towards developing your license and has the
following

> 1\. Button to redirect you to Desktop 14/Module-Selector .

+-----------------------------------+-----------------------------------+
| 1\ | > {formData.licenseType === |
| 2\ | > \"Demo\" \|\|\ |
| 3\ | > formData.licenseType === |
| 4\ | > \"Trial\" ? (\ |
| 5\ | > \<span\>All modules have been |
| 6\ | > seected\</span\>\ |
| 7\ | > ) : (\ |
| 8\ | > \<Link\ |
| 9\ | > cla |
| 10 11 12 13 14 15 | ssName=\"\[text-decoration:none\] |
| | > text-white\"\ |
| | > to=\"/module-selector\"\ |
| | > \>\ |
| | > \<div className=\"relative |
| | > rounded-xl bg-dimgray-200 |
| | > w-\[341px\] h-\[62px\]\"\> |
| | > \<div className=\"absolute |
| | > top-3 left-14 text-5xl \"\>\ |
| | > Click here to select\ |
| | > \</div\>\ |
| | > \</div\>\ |
| | > \</Link\>\ |
| | > )} |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> a\. The button has been disabled on selection of demo or trial type
> license\
> b. Conditional Rendering:\
> This code is wrapped in a conditional statement that checks the value
> of formData.licenseType .
>
> The condition is as follows: If formData.licenseType is equal to
> \"Demo\" or \"Trial,\" then one set of content is displayed;
> otherwise, another set of content is displayed.
>
> c\. Conditional Content for \"Demo\" or \"Trial\" License Types:\
> If formData.licenseType is \"Demo\" or \"Trial,\" the code renders a
> \<span\> element with the text \"All modules have been selected.\"\
> This suggests that if the user has selected either of these license
> types, there is no need for additional module selection.
>
> d\. Conditional Content for Other License Types:\
> If formData.licenseType is not \"Demo\" or \"Trial,\" the code renders
> a \<Link\> component that wraps a \<div\> element.
>
> The \<Link\> component is used to create a link to the
> \"/module-selector\" page.
>
> The \<div\> element is styled with a background color, dimensions, and
> rounded corners to create a clickable button-like appearance.
>
> 2\. Input field to enter the number of days the license would be
> required for\
> a. The default days has been set to 1\
> b. Validation has been done to set the number of days to 7 and 30 on
> click of demo type license and trial type license respectively and
> also have the field disabled.
>
> 3\. Two input fileds to take in the license restriction "valid from
> date" and "valid from time" (the license cannot be used before the
> specified date and time).
>
> a\. The unit testing of the following two fields has been done using
> the following functions b. handleDateBlur Function:\
> This function is called when the \"licenseRestrictionsDate\" input
> field loses focus (on blur).
>
> It checks if the formData.licenseRestrictionsDate field is empty
> (falsy) and sets an error message in the restrictions state object if
> it is
> empty.![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image54.png){width="1.5972222222222223in"
> height="0.1527777777777778in"}
>
> If formData.licenseRestrictionsDate is not empty, it clears the error
> message by setting it to an empty string in the restrictions state.
>
> c\. handleTimeBlur Function:\
> This function is called when the \"licenseRestrictionsTime\" input
> field loses focus (on blur).
>
> Similar to handleDateBlur , it checks if the
> formData.licenseRestrictionsTime field is empty and sets an error
> message in the restrictions state if it is empty.
>
> If formData.licenseRestrictionsTime is not empty, it clears the error
> message by setting it to an empty string in the restrictions state.

+-----------------------------------+-----------------------------------+
| > 1\ | > const handleDateBlur = () =\> |
| > 2\ | > {\ |
| > 3\ | > if |
| > 4\ | > (! |
| > 5\ | formData.licenseRestrictionsDate) |
| > 6\ | > {\ |
| > 7 | > setRestrictions({ |
| | > \...restrictions, date: \"Date |
| | > is required\" }); } else {\ |
| | > setRestrictions({ |
| | > \...restrictions, date: \"\" |
| | > });\ |
| | > }\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 8\ | > const handleTimeBlur = () =\> |
| > 9\ | > {\ |
| > 10\ | > if |
| > 11\ | > (! |
| > 12\ | formData.licenseRestrictionsTime) |
| > 13\ | > {\ |
| > 14\ | > setRestrictions({ |
| > 15 | > \...restrictions, time: \"Time |
| | > is required\" }); } else {\ |
| | > setRestrictions({ |
| | > \...restrictions, time: \"\" |
| | > });\ |
| | > }\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> d\. Access restriction has also been taken care of using the following
> function based on the input of the restriction fields and has been
> assigned to the various navigation buttons present on the page.
>
> i\. handleSubmit Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image46.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}This function is executed when the
> user attempts to submit a form, presumably to proceed to the next page
> of the application.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image47.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}It begins with a comment that
> suggests that the function may include logging ( console.log(formData)
> ), but this line is currently commented out.
>
> ii\. Validation:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image48.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}Inside the function, there is an if
> statement that checks two conditions:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image49.png){width="1.5972222222222223in"
> height="0.1527777777777778in"}restrictions.date === \"\" : This
> condition checks if the error message for the \"date\" field in the
> restrictions state is an empty string, indicating that there are no
> validation errors for the date input.
>
> restrictions.time === \"\" : Similarly, this condition checks if the
> error message for the \"time\" field in the restrictions state is an
> empty string, indicating that there are no validation errors for the
> time input.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image50.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}If both conditions are met, it means
> that there are no validation errors for the date and time fields.
>
> iii\. Navigation:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image51.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}If there are no validation errors,
> the user is navigated to the next page by using the navigate function
> redirecting to \"/preview\" or another URL specified in the navigate
> function.
>
> iv\. Error Alert:

+-----------------------+-----------------------+-----------------------+
| ![](vertopa | > If either of the | |
| l_b6e3d2941e8546d9b64 | > conditions is not | |
| 6400caafcb8f4/media/i | > met, it implies | |
| mage52.png){width="5. | > that there are | |
| 555555555555555e-2in" | > validation errors, | |
| height="4.16 | > and the function | |
| 66666666666664e-2in"} | > displays an alert | |
| | > to the user. The | |
| ![](vertopa | > alert message | |
| l_b6e3d2941e8546d9b64 | > states: \"Please | |
| 6400caafcb8f4/media/i | > fill previous page | |
| mage53.png){width="5. | > details first.\" | |
| 555555555555555e-2in" | | |
| height="5.5 | | |
| 55555555555555e-2in"} | | |
+=======================+=======================+=======================+
| | 1 | > const handleSubmit |
| | | > = () =\> { |
+-----------------------+-----------------------+-----------------------+
| | 2 | > // |
| | | > c |
| | | onsole.log(formData); |
+-----------------------+-----------------------+-----------------------+

+-----------------------------------+-----------------------------------+
| > 3\ | > if (restrictions.date === \"\" |
| > 4\ | > && restrictions.time === \"\") |
| > 5 | > { // Replace with your actual |
| | > next page URL |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| 6\ | +------------------------------+ |
| 7\ | | > navigate(\"/preview\"); | |
| 8\ | +==============================+ |
| 9\ | +------------------------------+ |
| 10\ | |
| 11 | +------------------------------+ |
| | | > } else { | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > // Show alert if any of | |
| | | > the fields are empty | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > alert(\"Please fill | |
| | | > previous page details | |
| | | > first.\"); | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > } | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > }; | |
| | +==============================+ |
| | +------------------------------+ |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> e\. These three attributes of the MUI field help with the same

+-----------------------------------+-----------------------------------+
| > 1\ | > error={!!restrictions.time}\ |
| > 2\ | > helperText={restrictions.time}\ |
| > 3 | > onBlur={handleTimeBlur} |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 4\. A text area field to add any aditional comments if need be.
>
> Desktop12/Preview
>
> This page is the final step of the process and is basically a preview
> page where the user can view all the details he has inputted and cross
>
> check them before proceeding to download his license key.
>
> The page contains the following
>
> 1\. handleDownload button functionality
>
> a\. A mock API to encrypt the data to create a license

b\. A "blob" URL creator that downloads the file which contains the
timestamp, description and the encrypted data that represents the

> license.
>
> c\. An API that stores this data to a local instance mongoDB database

+-----------------------------------+-----------------------------------+
| > 1\ | > const handleDownload = async () |
| > 2\ | > =\> {\ |
| > 3\ | > //first the licsnse will be |
| > 4\ | > encrypted\ |
| > 5\ | > try {\ |
| > 6 | > const response = await |
| | > axios.post(API_BASE + |
| | > \"/encrypt\", { data: |
| | > JSON.stringify(formData),\ |
| | > }); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 7\ | > const updatedEncryptedData = {\ |
| > 8\ | > timestamp: new |
| > 9\ | > Date().toISOString(),\ |
| > 10\ | > description:\ |
| > 11\ | > \"This JSON file contains an |
| > 12\ | > encrypted license for the |
| > 13 | > software product you have |
| | > applied for. It c |
| | > encryptedLicense: |
| | > response.data.encryptedData,\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 14\ | > // Update the state with the |
| > 15\ | > new encrypted data |
| > 16 | > setEnc |
| | ryptedData(updatedEncryptedData); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 17\ | > // Convert the updated data to |
| > 18\ | > JSON string\ |
| > 19 | > const licenseData = |
| | > JSON |
| | .stringify(updatedEncryptedData); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 20\ | > // Create a blob and initiate |
| > 21\ | > download\ |
| > 22\ | > const blob = new |
| > 23 | > Blob(\[licenseData\], { type: |
| | > \"application/json\" }); const |
| | > blobURL = |
| | > URL.createObjectURL(blob); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 24\ | > const link = |
| > 25\ | > document.createElement(\"a\"); |
| > 26\ | > link.href = blobURL;\ |
| > 27 | > link.download = |
| | > \"license.json\"; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| 28 | > link.click(); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 29\ | > //to store in the database\ |
| > 30\ | > const toStoreLicense = {\ |
| > 31\ | > \...updatedEncryptedData,\ |
| > 32\ | > name: formData.name,\ |
| > 33\ | > }; |
| > 34 | |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 35\ | > const res = await |
| > 36\ | > axios.post(API_BASE + |
| > 37\ | > \"/api/licenses\", |
| > 38\ | > toStoreLicense); // Clean up |
| > 39\ | > after download\ |
| > 40\ | > alert(\"License generated and |
| > 41\ | > downloaded successfully!\");\ |
| > 42\ | > setTimeout(() =\> {\ |
| > 43\ | > URL.revokeObjectURL(blobURL);\ |
| > 44\ | > }, 100);\ |
| > 45\ | > } catch (error) {\ |
| > 46 | > console.error(\"Encryption |
| | > error:\", error);\ |
| | > alert(\"Error generating the |
| | > license.\");\ |
| | > }\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> i\. handleDownload Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image55.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}This function is executed when the
> user initiates the download of a license file.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image56.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}It begins with a comment that
> describes the high-level steps it will perform.
>
> ii\. Encryption and Server Interaction:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image57.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}Inside a try-catch block, the
> function performs the following tasks:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image58.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"}It makes an asynchronous POST request
> to a specified API endpoint ( API_BASE + \"/encrypt\" ).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image59.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"}The request sends the form data (
> formData ) as JSON data to be encrypted on the server.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image60.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"}The encrypted data is received as a
> response ( response.data.encryptedData ) from the server.
>
> iii\. Data Transformation and Blob Creation:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image61.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"}The function creates an updated data
> object ( updatedEncryptedData ) that includes the timestamp, a
> description of the
>
> encrypted license, and the actual encrypted license data.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image47.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}The state variable encryptedData is
> updated with the new encrypted data.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image62.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}The updated data is then converted to
> a JSON string ( licenseData ) for download.
>
> iv\. Blob Creation and Download:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image63.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}A Blob (Binary Large Object) is
> created from the JSON data with the MIME type set to
> \"application/json.\"
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image64.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"}A temporary URL ( blobURL ) is
> generated for the Blob.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image65.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}An anchor ( \<a\> ) element is
> created and configured to initiate the download.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image66.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}The link.click() method
> programmatically triggers the download of the license file.
>
> v\. Database Storage:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image67.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}The function sends another POST
> request to an API endpoint ( API_BASE + \"/api/licenses\" ) to store
> the encrypted license
>
> data in a database.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image68.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}The request includes the encrypted
> data along with the user\'s name extracted from the form data.
>
> vi\. Cleanup and User Alert:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image69.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"}After the download is completed, the
> Blob URL is revoked to release resources.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image70.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}An alert is displayed to inform the
> user that the license has been generated and downloaded successfully.
>
> vii\. Error Handling:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image71.png){width="5.555555555555555e-2in"
> height="4.1666666666666664e-2in"}In case of any errors during
> encryption or server communication, the function catches the error and
> displays an error alert.
>
> d\. The following state object is being initialized on generating the
> license in order to store metadata

+-----------------------------------+-----------------------------------+
| 1\ | +------------------------------+ |
| 2 | | > const \[encryptedData, | |
| | | > setEncryptedData\] = | |
| | | > useState({ | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > timestamp: \"\", | |
| | +==============================+ |
| | +------------------------------+ |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image75.png){width="0.375in"
height="0.1527777777777778in"}![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image76.png){width="0.7777777777777778in"
height="0.1527777777777778in"}

+-----------------------------------+-----------------------------------+
| > 3\ | +------------------------------+ |
| > 4\ | | > encryptedLicense: \"\", | |
| > 5\ | +==============================+ |
| > 6 | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > description: \"\", | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > name: \"\" | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > }); | |
| | +==============================+ |
| | +------------------------------+ |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> Desktop14/Module-Selector
>
> This page is a destination page to select modules.Implementing the
> component "TableComponent" which contains a dataGrid imported from the
> Material UI docs.The dataGrid contains the modules which have already
> been defined in a json file called newData.json present in the pages
> folder.
>
> The dataGrid provides us with an inbuilt checkbox functionality to let
> the user toggle modules based on his preference.
>
> It also contains additional featureures like filter,column/row
> manipulation,and additional export features which prove to be
> efficient.
>
> The table component has been invoked along with multiple props passed
> and filter functionality added

+-----------------------------------+-----------------------------------+
| 1\ | > \<TableComponent\ |
| 2\ | > formData={formData}\ |
| 3\ | > setFormData={setFormData}\ |
| 4\ | > ids={ids}\ |
| 5\ | > setIds={setIds}\ |
| 6\ | > components={{\                  |
| 7\                                | > Toolbar: GridToolbar, // To     |
| 8\                                | > display the search bar }}\ |
| 9\ | > onFilterModelChange={(model) |
| 10 11 12 13 14 15 16 | > =\> {\ |
| | > if (model.items.length \> 0) {\ |
| | > setSea |
| | rchText(model.items\[0\].value);\ |
| | > } else {\ |
| | > setSearchText(\"\");\ |
| | > }\ |
| | > }}\ |
| | > /\> |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 1\. \<TableComponent\> Usage:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image72.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This code snippet renders an instance
> of the \<TableComponent\> component, passing various props and
> configurations.
>
> 2\. Prop Passings:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image73.png){width="0.6666666666666666in"
> height="0.1527777777777778in"}formData and setFormData : These are
> props used to pass form data and a function to update the form data to
> the \<TableComponent\> . This suggests that the table may be related
> to form data or interact with it in some way.
>
> ids and setIds : These props are used to pass selected IDs and a
> function to update the selected IDs within the \<TableComponent\> . It
> implies that the table may support row selection.
>
> components : This prop includes configuration options for the table,
> specifically for the toolbar. It sets the Toolbar component to
> GridToolbar , indicating that a search bar will be displayed in the
> table\'s toolbar.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image74.png){width="1.3055555555555556in"
> height="0.1527777777777778in"}onFilterModelChange : This prop is a
> callback function that handles changes in the filter model. The
> function receives the filter model as a parameter ( model ) and
> updates the searchText state based on the filter value. If the filter
> model contains items, it sets the searchText to the value of the first
> item; otherwise, it clears the searchText .
>
> The table component has the following functions

+-----------------------------------+-----------------------------------+
| > 1\ | +------------------------------+ |
| > 2\ | | > const \[searchText, | |
| > 3\ | | > setSearchText\] = | |
| > 4\ | | > useState(\"\"); | |
| > 5\ | +==============================+ |
| > 6 | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > const rows = data; | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > const columns = \[ | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > { | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > field: \"id\", | |
| | +==============================+ |
| | +------------------------------+ |
| | |
| | +------------------------------+ |
| | | > headerName: \"ID\", | |
| | +==============================+ |
| | +------------------------------+ |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image83.png){width="0.4305555555555556in"
height="0.1527777777777778in"}

+-----------------------------------+-----------------------------------+
| 7\ | > width: 150,\ |
| 8\ | > headerClassName: |
| 9\ | > \"bold-header\",\ |
| 10\ | > },\ |
| 11\ | > {\ |
| 12\ | > field: \"module\",\ |
| 13\ | > headerName: \"Module\",\ |
| 14\ | > width: 600,\ |
| 15\ | > headerClassName: |
| 16 | > \"bold-header\",\ |
| | > },\ |
| | > \]; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 17\
> 18 const handleRowSelectionModelChange = (selectionModel) =\> { 19\
> 20\
> 21 setIds(selectionModel); // Update the ids state

+-----------------------------------+-----------------------------------+
| > 22\ | > const selectedModules = |
| > 23\ | > selectionModel.map((id) =\> { |
| > 24\ | > const selectedRow = |
| > 25\ | > rows.find((row) =\> row.id === |
| > 26 | > id); return selectedRow ? |
| | > selectedRow.module : null;\ |
| | > }); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 27\ | > const handleSearchTextChange = |
| > 28\ | > (event) =\> { |
| > 29\ | > se |
| > 30 | tSearchText(event.target.value);\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 31\ | > setFormData({\ |
| > 32\ | > \...formData,\ |
| > 33\ | > moduleSelected: |
| > 34\ | > selectedModules.filter((module) |
| > 35\ | > =\> module !== null), });\ |
| > 36 | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 37\ | > const handlePageChange = |
| > 38\ | > (params) =\> {\ |
| > 39\ | > const selectedIdsForPage = |
| > 40\ | > ids.filter((id) =\> |
| > 41 | > rows.map((row) =\> |
| | > row.id).includes(id)\ |
| | > ); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 42\
> 43\
> 44 };\
> 45
>
> 1\. State Initialization:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image77.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} The code initializes a state variable
> searchText using the useState hook. This state variable is used to
> store the text entered in a search input field.
>
> rows is assigned the value of the data variable, which contains
> modules
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image78.png){width="0.5972222222222222in"
> height="0.1527777777777778in"}columns is an array of objects, each
> representing a column in the table. It includes properties like field
> , headerName , width , and headerClassName for each column
>
> 2\. handleRowSelectionModelChange Function:

+-----------------------------------+-----------------------------------+
| ![](vertopal_b6e3d2941e8546d9 | > This function is called when |
| b646400caafcb8f4/media/image79.pn | > the selection of rows in the |
| g){width="5.555555555555555e-2in" | > table changes. |
| height="5.555555555555555e-2in"} | > |
| | > It takes selectionModel as its |
| ![](vertopal_b6e3d2941e8546d9 | > parameter, which is an array |
| b646400caafcb8f4/media/image80.pn | > containing the IDs of the |
| g){width="5.555555555555555e-2in" | > selected rows. It updates the |
| height="5.555555555555555e-2in"} | > state variable ids with the |
| | > selected IDs using the setIds |
| ![](vertopal_b6e3d2941e8546d9 | > function. |
| b646400caafcb8f4/media/image81.pn | > |
| g){width="5.555555555555555e-2in" | > It then extracts the module |
| height="5.555555555555555e-2in"} | > values for the selected rows |
| | > and stores tem in the |
| ![](vertopal_b6e3d2941e8546d9 | > selectedModules array. |
| b646400caafcb8f4/media/image82.pn | |
| g){width="5.555555555555555e-2in" | |
| height="5.555555555555555e-2in"} | |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image91.png){width="0.4305555555555556in"
height="0.1527777777777778in"}![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image92.png){width="0.5972222222222222in"
height="0.1527777777777778in"}![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image93.png){width="0.7777777777777778in"
height="0.1527777777777778in"}

> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image84.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Inside the function, there is a
> nested handleSearchTextChange function that updates the searchText
> state when the search input field value changes.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image85.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Finally, it updates the form data
> with the selected modules by filtering out any null values.
>
> 3\. handlePageChange Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image86.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is called when the page
> of the table changes (e.g., when navigating to a different page of
> results).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image87.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It filters the ids array to only
> include IDs that are present in the current page\'s data.

Desktop15/Selected-Modules

This page is a destination page to view the selected modules.
Implementing a dataGrid imported from the Material UI docs.The dataGrid
contains the modules which have been toggled by the user so he can cross
check them.

It also contains additional featureures like filter,column/row
manipulation,and additional export features which prove to be efficient.

The dataGrid component has been invoked along with multiple props passed
and filter functionality added

+-----------------------------------+-----------------------------------+
| 1\ | > \<DataGrid\ |
| 2\ | > rows={selectedModulesWithIds}\ |
| 3\ | > columns={columns}\ |
| 4\ | > rowHeight={50}\ |
| 5\ | > components={{\                  |
| 6\                                | > Toolbar: GridToolbar, // To     |
| 7\                                | > display the search bar }}\ |
| 8\ | > onFilterModelChange={(model) |
| 9\ | > =\> {\ |
| 10 11 12 13 14 15 | > if (model.items.length \> 0) {\ |
| | > setSea |
| | rchText(model.items\[0\].value);\ |
| | > } else {\ |
| | > setSearchText(\"\");\ |
| | > }\ |
| | > }}\ |
| | > /\> |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 1\. \<DataGrid\> Component:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image88.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} The code snippet utilizes the
> \<DataGrid\> component, presumably imported from a library like
> Material-UI or a custom implementation.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image89.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This component is used to render a
> table with the specified configuration.
>
> 2\. Properties and Configuration\
> rows : The rows prop specifies the data to be displayed in the table.
> It is passed the selectedModulesWithIds data, which contains all the
> ids toggled by the user
>
> columns : The columns prop defines the structure of the table,
> including column names and other properties. This configuration is
> provided by the columns variable defined elsewhere in the code.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image90.png){width="0.7222222222222222in"
> height="0.1527777777777778in"}rowHeight : The rowHeight prop sets the
> height of each row in the table to 50 pixels.
>
> components : The components prop allows you to customize certain parts
> of the grid. In this case, it uses the GridToolbar component to
> display a toolbar, to implement various search functionalities.
>
> 3\. onFilterModelChange Event Handler:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image94.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} The onFilterModelChange prop
> specifies an event handler function that is executed when the filter
> model (e.g., search bar) within the grid changes.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image95.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Inside the event handler, it checks
> if the filter model has items (criteria for filtering). If items are
> present, it sets the searchText state to the value of the first item
> in the filter model. If no items are present, it clears the searchText
> by setting it to an empty string.

The table component has the following functions

+-----------------------------------+-----------------------------------+
| 1\ | > const \[searchText, |
| 2\ | > setSearchText\] = |
| 3\ | > useState(\"\");\ |
| 4\ | > const rows = data;\ |
| 5\ | > const columns = \[\ |
| 6\ | > {\ |
| 7\ | > field: \"id\",\ |
| 8\ | > headerName: \"ID\",\ |
| 9\ | > width: 150,\ |
| 10 11 12 13 14 15 16 | > headerClassName: |
| | > \"bold-header\",\ |
| | > },\ |
| | > {\ |
| | > field: \"module\",\ |
| | > headerName: \"Module\",\ |
| | > width: 600,\ |
| | > headerClassName: |
| | > \"bold-header\",\ |
| | > },\ |
| | > \]; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 17\
> 18 const handleRowSelectionModelChange = (selectionModel) =\> { 19\
> 20\
> 21 setIds(selectionModel); // Update the ids state

+-----------------------------------+-----------------------------------+
| > 22\ | > const selectedModules = |
| > 23\ | > selectionModel.map((id) =\> { |
| > 24\ | > const selectedRow = |
| > 25\ | > rows.find((row) =\> row.id === |
| > 26 | > id); return selectedRow ? |
| | > selectedRow.module : null;\ |
| | > }); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 27\ | > const handleSearchTextChange = |
| > 28\ | > (event) =\> { |
| > 29\ | > se |
| > 30 | tSearchText(event.target.value);\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 31 32 33 34 35 36 | > setFormData({\ |
| | > \...formData,\ |
| | > moduleSelected: |
| | > selectedModules.filter((module) |
| | > =\> module !== null), });\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 37 38 39 40 41 | > const handlePageChange = |
| | > (params) =\> {\ |
| | > const selectedIdsForPage = |
| | > ids.filter((id) =\> |
| | > rows.map((row) =\> |
| | > row.id).includes(id)\ |
| | > ); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 42\
> 43\
> 44 };\
> 45
>
> 1\. State Initialization:

![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image106.png){width="0.4305555555555556in"
height="0.1527777777777778in"}

> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image96.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} The code initializes a state variable
> searchText using the useState hook. This state variable is used to
> store the text entered in a
>
> search input field.
>
> rows is assigned the value of the data variable, which contains
> modules
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image97.png){width="0.5972222222222222in"
> height="0.1527777777777778in"}columns is an array of objects, each
> representing a column in the table. It includes properties like field
> , headerName , width , and
>
> headerClassName for each column
>
> 2\. handleRowSelectionModelChange Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image98.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is called when the
> selection of rows in the table changes.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image99.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It takes selectionModel as its
> parameter, which is an array containing the IDs of the selected rows.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image100.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It updates the state variable ids
> with the selected IDs using the setIds function.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image101.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It then extracts the module values
> for the selected rows and stores tem in the selectedModules array.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image102.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Inside the function, there is a
> nested handleSearchTextChange function that updates the searchText
> state when the search input
>
> field value changes.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image103.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Finally, it updates the form data
> with the selected modules by filtering out any null values.
>
> 3\. handlePageChange Function:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image104.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This function is called when the page
> of the table changes (e.g., when navigating to a different page of
> results).
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image105.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It filters the ids array to only
> include IDs that are present in the current page\'s data.

History

This page is used to view all historical license data .

+-----------------------------------+-----------------------------------+
| > 1\ | > const getHistory = async () =\> |
| > 2\ | > {\ |
| > 3\ | > const res = await |
| > 4 | > axios.get(API_BASE + |
| | > \"/history\");\ |
| | > setData(res.data);\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| 5\ | > const rows = data;\ |
| 6\ | > const columns = \[\ |
| 7\ | > {\ |
| 8\ | > field: \"\_id\",\ |
| 9\ | > headerName: \"Mongo ID\",\ |
| 10 11 12 13 14 15 16 17 18 19 20 | > width: 300,\ |
| 21 22 23 24 25 26 | > headerClassName: |
| | > \"bold-header\",\ |
| | > },\ |
| | > {\ |
| | > field: \"name\",\ |
| | > headerName: \"Name\",\ |
| | > width: 200,\ |
| | > headerClassName: |
| | > \"bold-header\",\ |
| | > },\ |
| | > {\ |
| | > field: \"timestamp\",\ |
| | > headerName: \"Timestamp\",\ |
| | > width: 200,\ |
| | > headerClassName: |
| | > \"bold-header\",\ |
| | > },\ |
| | > { |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 27\ | > field: \"encryptedLicense\",\ |
| > 28\ | > headerName: \"Encrypted |
| > 29\ | > License\",\ |
| > 30\ | > width: 200,\ |
| > 31\ | > headerClassName: |
| > 32\ | > \"bold-header\",\ |
| > 33\ | > },\ |
| > 34\ | > {\ |
| > 35\ | > field: \"download\",\ |
| > 36\ | > headerName: \"Download File\",\ |
| > 37\ | > width: 200,\ |
| > 38\ | > sortable: false,\ |
| > 39\ | > headerClassName: |
| > 40\ | > \"bold-header\",\ |
| > 41\ | > filterable: false,\ |
| > 42\ | > renderCell: (params) =\> (\ |
| > 43\ | > \<Button\ |
| > 44\ | > // sx={{ height: }}\ |
| > 45\ | > className=\"cursor-pointer |
| > 46\ | > bg-tomato text-white m-10 \" |
| > 47\ | > variant=\"contained\"\ |
| > 48\ | > color=\"secondary\"\ |
| > 49\ | > onClick={() =\> |
| > 50\ | > |
| > 51 | handleDownloadClick(params.row)} |
| | > \>\ |
| | > Download\ |
| | > \</Button\>\ |
| | > ),\ |
| | > },\ |
| | > \]; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 52\ | > const handleDownloadClick = |
| > 53\ | > (rowData) =\> {\ |
| > 54\ | > const jsonData = |
| > 55\ | > JSON.stringify(rowData);\ |
| > 56\ | > const blob = new |
| > 57 | > Blob(\[jsonData\], { type: |
| | > \"application/json\" }); |
| | > FileSaver.saveAs(blob, |
| | > \ |
| | `data\_\${rowData.\_id}.json\`);\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 58\ | > const handlePageChange = |
| > 59\ | > (route) =\> {\ |
| > 60\ | > navigate(route);\ |
| > 61 | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 1\. **Data Fetching**: The getHistory function uses the Axios library
> to make an asynchronous GET request to an API endpoint, likely
> fetching historical data. The retrieved data is stored in a variable
> called data .
>
> 2\. **Table Configuration**: It sets up the configuration for
> displaying a table with various columns. Each column is defined with
> properties like field name, header name, width, and style classes. The
> data to be displayed in the table rows is assumed to be in the data
> variable.
>
> 3\. **Download Button**: One of the columns in the table is a
> \"Download File\" column, which contains a button for downloading
> data. The button is configured with styles and a click event handler.
>
> 4\. **Download Handling**: When the \"Download\" button is clicked,
> the handleDownloadClick function is triggered. This function converts
> the data associated with the clicked row into a JSON format and
> creates a Blob with the appropriate MIME type. The FileSaver library
> is then used to initiate a file download with the JSON data. The
> downloaded file is named based on the \_id field of the row.
>
> 5\. **Navigation**: The handlePageChange function is used for handling
> navigation within the web application. It takes a route as an argument
> and performs the navigation action, which is not fully shown in the
> provided code but is likely part of a larger application.
>
> Decrypt
>
> This page allows the user to decrypt the encrypted license key and
> view all the license details

+-----------------------------------+-----------------------------------+
| > 1\ | > const handleDecrypt = async () |
| > 2\ | > =\> {\ |
| > 3\ | > if (password == \"\" \|\| |
| > 4\ | > license == \"\") alert(\"Fill |
| > 5\ | > all the fields\"); try {\ |
| > 6\ | > const response = await |
| > 7 | > axios.post(API_BASE + |
| | > \"/decrypt\", { data: license,\ |
| | > password: password,\ |
| | > }); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| 8\ | > // |
| 9\ | > setDecryptedDa |
| 10\ | ta(response.data.decryptedData);\ |
| 11\ | > const res = await |
| 12\ | > JSON.pa |
| 13\ | rse(response.data.decryptedData); |
| 14\ | > setDecryptedData(res);\ |
| 15 | > } catch (error) {\ |
| | > console.log(\`An error has |
| | > occurred: \${error}\`);\ |
| | > }\ |
| | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 16\ | > const handlePageChange = |
| > 17\ | > (route) =\> {\ |
| > 18\ | > navigate(route);\ |
| > 19 | > }; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 1\. **Data Decryption**: The handleDecrypt function is responsible for
> decrypting data using the Axios library to make an asynchronous

POST request to an API endpoint ( API_BASE + \"/decrypt\" ). It sends
the \'license\' and \'password\' as data to the API for decryption. If

> either the \'password\' or \'license\' fields are empty, it displays
> an alert. Once the response is received, it parses the decrypted data

(assuming it\'s in JSON format) and sets it in the component\'s state as
\'DecryptedData\'. Any errors during this process are caught and

> logged to the console.
>
> 2\. **Navigation**: The handlePageChange function is used for handling
> navigation within the web application. It takes a \'route\' as an

argument and performs the navigation action. The exact navigation
implementation is not shown in this code but is presumably part of

> the larger application\'s routing mechanism.
>
> Left Navbar(not a page but a navbar which is rendered on all pages)

+-----------------------------------+-----------------------------------+
| > 1\ | > const handlePageChange = |
| > 2 | > (route) =\> {\ |
| | > route !== \"/\"; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 3\ | > // Replace \'current-page\' |
| > 4\ | > with the current page\'s route\ |
| > 5\ | > const confirmed = |
| > 6\ | > window.confirm(\ |
| > 7\ | > \"You are in the midst of |
| > 8\ | > completing the license details. |
| > 9\ | > Navigating to a different page |
| > 10\ | > at this point will );\ |
| > 11\ | > if (!confirmed) {\ |
| > 12\ | > // User chose to stay on the |
| > 13\ | > page, prevent navigation and do |
| > 14\ | > nothing. |
| > 15\ | > |
| > 16\ | > return false;\ |
| > 17\ | > } else {\ |
| > 18 | > // User chose to leave the |
| | > page, clear form data. |
| | > |
| | > setFormData({\ |
| | > id: \"\",\ |
| | > name: \"\",\ |
| | > email: \"\",\ |
| | > phone: \"\",\ |
| | > organization: \"\", |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 19\ | > licenseType: \"\",\ |
| > 20\ | > startDate: new |
| > 21\ | > Date().toISOString().substr(0, |
| > 22\ | > 10),\ |
| > 23\ | > endDate: \"\",\ |
| > 24\ | > noOfDays: 1,\ |
| > 25\ | > moduleSelected: \[\],\ |
| > 26\ | > licenseRestrictionsDate: \"\",\ |
| > 27\ | > licenseRestrictionsTime: \"\",\ |
| > 28\ | > comments: \"\",\ |
| > 29 | > activeLink: \"\",\ |
| | > });\ |
| | > } |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 30\ | > navigate(route);\ |
| > 31\ | > }; |
| > 32 | |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 1\. **Page Navigation Handling**: The handlePageChange function is
> used to handle navigation to different pages within the application
>
> based on the provided \'route\' parameter.

2\. **Progress Confirmation**: It checks if the requested route is not
the root route (\'/\'). If it\'s not the root route, it displays a
confirmation dialog

> to warn the user about potentially losing progress on the current
> page.
>
> 3\. **User Choice**: If the user chooses to stay on the current page
> by canceling the confirmation dialog, it prevents the navigation and
> takes
>
> no further action.
>
> 4\. **Data Clearing**: If the user chooses to leave the current page,
> it clears form data by resetting various fields to default values,
> essentially
>
> resetting the form.
>
> 5\. **Navigation**: Finally, regardless of the user\'s choice or if
> the route is the root route, it navigates to the requested route using
> the
>
> navigate function, which is not shown in this code but is likely part
> of the application\'s routing mechanism.
>
> Server.js
>
> This page sets up an Express.js server with various endpoints to
> handle encryption, decryption, and database interactions related to

licenses. It connects to a MongoDB database using Mongoose and provides
APIs for creating, retrieving, encrypting, and decrypting license

> data. Additionally, it handles CORS for cross-origin requests and
> error handling for potential issues during database operations.

+-----------------------------------+-----------------------------------+
| > 1\ | > import express from |
| > 2\ | > \"express\";\ |
| > 3\ | > import cors from \"cors\";\ |
| > 4\ | > import CryptoJS from |
| > 5\ | > \"crypto-js\";\ |
| > 6 | > import mongoose from |
| | > \"mongoose\";\ |
| | > import bodyParser from |
| | > \"body-parser\";\ |
| | > import License from |
| | > \"./models/License.js\"; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 7\ | > const app = express(); |
| > 8 | |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 9\ | > app.use(express.json());\ |
| > 10\ | > app.use(cors());\ |
| > 11\ | > app.use(bodyParser.json()); |
| > 12 | |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 13\ | > const PORT = 3002; |
| > 14 | |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 15\ | > mongoose\ |
| > 16\ | > .connect(\"mongodb://1 |
| > 17\ | 27.0.0.1:27017/licenseDatabase\", |
| > 18\ | > { useNewUrlParser: true,\ |
| > 19 | > useUnifiedTopology: true, |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 20\ | > })\ |
| > 21\ | > .then(() =\> {\ |
| > 22\ | > console.log(\"Connected to |
| > 23\ | > Database\");\ |
| > 24\ | > })\ |
| > 25\ | > .catch((e) =\> {\ |
| > 26 | > console.log(\`Could not Connect |
| | > to the Database. Error Message: |
| | > \${e}\`); }); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 27
>
> 28 app.listen(PORT, () =\> {
>
> 29 console.log(\`Server started on port \${PORT}\`);
>
> 30 });

+-----------------------------------+-----------------------------------+
| > 31 32 33 34 35 36 37 38 | > app.post(\"/encrypt\", (req, |
| | > res) =\> {\ |
| | > const { data } = req.body;\ |
| | > const secretKey = |
| | > \"your-secret-key\"; // Replace |
| | > with your secret key\ |
| | > const encryptedData = |
| | > CryptoJS.AES.encrypt(data, |
| | > secretKey).toString(); |
| | > console.log(\"generated |
| | > license\");\ |
| | > res.json({ encryptedData }); // |
| | > Send back the encrypted code in |
| | > the response }); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 39
>
> 40 app.post(\"/decrypt\", (req, res) =\> {
>
> 41 const { data, password } = req.body;

+-----------------------------------+-----------------------------------+
| > 42\ | > try {\ |
| > 43\ | > const decryptedData = |
| > 44\ | > CryptoJS.AES.decrypt(data, |
| > 45\ | > password).toString( |
| > 46\ | > CryptoJS.enc.Utf8\ |
| > 47\ | > );\ |
| > 48\ | > res.json({ decryptedData });\ |
| > 49\ | > } catch (error) {\ |
| > 50\ | > console.log(\`An error has |
| > 51\ | > occurred: \${error}\`);\ |
| > 52\ | > res.status(500).json({ error: |
| > 53\ | > \"An error occurred during |
| > 54\ | > decryption\" }); }\ |
| > 55 | > });\ |
| | > app.post(\"/api/licenses\", |
| | > async (req, res) =\> {\ |
| | > try {\ |
| | > const { timestamp, description, |
| | > encryptedLicense, name } = |
| | > req.body; |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 56\ | > // Create a new license object |
| > 57\ | > and save it to the database |
| > 58\ | > const licenseToBeStored = new |
| > 59\ | > License({\ |
| > 60\ | > name,\ |
| > 61\ | > timestamp,\ |
| > 62\ | > description,\ |
| > 63\ | > encryptedLicense,\ |
| > 64 | > });\ |
| | > await licenseToBeStored.save(); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 65\ | > res.status(201).json({ message: |
| > 66\ | > \"License saved successfully\" |
| > 67\ | > }); } catch (error) {\ |
| > 68\ | > console.error(\"Error saving |
| > 69\ | > license:\", error);\ |
| > 70\ | > res\ |
| > 71\ | > .status(500)\ |
| > 72\ | > .json({ error: \"An error |
| > 73 | > occurred while saving the |
| | > license\" }); }\ |
| | > }); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 74\ | > app.get(\"/history\", async |
| > 75\ | > (req, res) =\> { //find the |
| > 76\ | > list and store it as json const |
| > 77 | > history = await License.find(); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| 78 79 | > res.json(history);\ |
| | > }); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------------------------------------------+
| > 80 |
+=======================================================================+
+-----------------------------------------------------------------------+

> 1\. **Import Statements**:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image107.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} The code begins by importing
> necessary Node.js modules and packages using ES6 import statements.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image108.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Key modules/packages include express
> for creating the web server, cors for handling Cross-Origin Resource
> Sharing, CryptoJS for cryptographic operations, mongoose for MongoDB
> interaction, body-parser for parsing JSON request bodies, and a custom
> License model.
>
> 2\. **Express Application Setup**:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image109.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} An instance of the Express
> application is created and stored in the app variable.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image110.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} Middlewares are applied to the
> Express app using app.use() :\
> express.json() for parsing JSON request bodies.
>
> cors() to enable Cross-Origin Resource Sharing, allowing client-side
> code to make requests to this server. body-parser.json() for
> additional JSON body parsing (deprecated with Express 4.16+).
>
> 3\. **MongoDB Connection**:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image111.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} The code connects to a MongoDB
> database using mongoose.connect() . It specifies the database\'s URI (
> \"mongodb://127.0.0.1:27017/licenseDatabase\" ), enabling
> useNewUrlParser and useUnifiedTopology options.

+-----------------------+-----------------------+-----------------------+
| ![](vertopal | > The Schema for the | |
| \_b6e3d2941e8546d9b646 | > database is stored | |
| 400caafcb8f4/media/im | > in | |
| age112.png){width="5. | > /models/License.js | |
| 555555555555555e-2in" | > and the code is | |
| height="5.5 | > provided below | |
| 55555555555555e-2in"} | | |
+=======================+=======================+=======================+
| | 1 | > import mongoose |
| | | > from \"mongoose\"; |
+-----------------------+-----------------------+-----------------------+

+-----------------------------------+-----------------------------------+
| > 2\ | > const licenseSchema = new |
| > 3\ | > mongoose.Schema({ name: |
| > 4\ | > String,\ |
| > 5\ | > timestamp: String,\ |
| > 6\ | > description: String,\ |
| > 7\ | > encryptedLicense: String,\ |
| > 8 | > }); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 9\ | > const License = |
| > 10 | > mongoose.model(\"License\", |
| | > licenseSchema); |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 11\ | > export default License; |
| > 12 | |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> 4\. **Server Listening**:
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image113.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} The Express app listens on a
> specified port (in this case, PORT is set to 3002 ) using app.listen()
> . It logs a message when the server starts.
>
> 5\. **Endpoint:** /encrypt :
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image114.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This endpoint handles HTTP POST
> requests.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image115.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It encrypts data received in the
> request body using AES encryption with a secret key and responds with
> the encrypted data. 6. **Endpoint:** /decrypt :
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image116.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This endpoint handles HTTP POST
> requests.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image117.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It decrypts data received in the
> request body using AES decryption with a provided password and
> responds with the decrypted data. 7. **Endpoint:** /api/licenses :
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image118.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This endpoint handles HTTP POST
> requests.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image119.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It receives data such as timestamp ,
> description , encryptedLicense , and name in the request body.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image120.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It creates a new License document
> using the Mongoose model and saves it to the MongoDB database. 8.
> **Endpoint:** /history :
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image121.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} This endpoint handles HTTP GET
> requests.
>
> ![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image122.png){width="5.555555555555555e-2in"
> height="5.555555555555555e-2in"} It retrieves a list of license
> documents from the MongoDB database using License.find() .

![](vertopal_b6e3d2941e8546d9b646400caafcb8f4/media/image123.png){width="5.555555555555555e-2in"
height="5.555555555555555e-2in"} The retrieved data is sent back as a
JSON response to the client.
