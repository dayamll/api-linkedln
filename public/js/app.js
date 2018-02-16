// Configure un detector de eventos para realizar una llamada API una vez que se complete la autenticación
// function onLinkedInLoad() {
//   IN.Event.on(IN, 'auth', getProfileData);
// }

// Use the API call wrapper to request the member's profile data
// function getProfileData() {
//   IN.API.Profile('me')
//     .fields([
//       'firstName', 'lastName', 'headline', 'positions:(company,title,summary,startDate,endDate,isCurrent)', 'industry',
//       'location:(name,country:(code))', 'pictureUrl', 'publicProfileUrl', 'emailAddress',
//       'educations', 'dateOfBirth'
//     ])
//     .result(displayProfileData).error(onError);
// }

// const getProfileData = function () {
//   IN.API.Profile('me').fields('id,firstName,lastName,email-address,picture-urls::(original),public-profile-url,location:(name)').result(function (me) {
//     let id = profile.id;
//     let profile = me.values[0];
//     let firstName = profile.firstName;
//     let emailAddress = profile.emailAddress;
//     let lastName = profile.lastName;
//     let pictureUrl = profile.pictureUrls.values[0];
//     let profileUrl = profile.publicProfileUrl;
//     let country = profile.location.name;

//   });
// };

// function onError(error) {
//   console.log(error);
// }