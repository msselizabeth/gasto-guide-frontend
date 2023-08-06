// const section = document.querySelector(".js-section");;
// const continentList = document.querySelector(".js-continent-list");



// function fetchUsers() {
//   return fetch("https://gastro-guide-backend.onrender.com/api/countries/64ce1a83c2560a88fcb26b4e").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUserList(continents) {
//     const markup = continents
//         .map((continent) => {
//             return `<li>
//           <p><b>NameOfContinent</b>: ${continent.countryName}</p>
//           <img src="${continent.image}" alt="chjbsjhcevwej">
//         </li>`;
//         })
//         .join("");
//     continentList.innerHTML = markup;
// }

// fetchUsers()
//     .then((continents) => renderUserList(continents))
//     .catch((error) => console.log(error));




// // fetch("https://gastro-guide-backend.onrender.com/api/continents")
// //     .then((res) => {
// //         if (!res.ok) {
// //             throw new Error(res.status);
// //         }
// //         return res.json();
// //     })
// //     .then((data) => {
// //         data.map
// //     })