// document.addEventListener('DOMContentLoaded', async function () {
//   const userList = document.getElementById('userList');
//   const searchInput = document.getElementById('searchInput');
//   let displayedusers = [];

//   const fetchData = async () => {
//       try {
//           const response = await fetch('https://jsonplaceholder.typicode.com/users');
//           const data = await response.json();
//           return data;
//       } catch (error) {
//           console.error('Error fetching data:', error);
//       }
//   };

//   const displayusers = async () => {
//       const users = await fetchData();
//       if (users) {
//           displayedusers = users;
//           renderusers(displayedusers);
//       }
//   };

//   const renderusers = (users) => {
//       userList.innerHTML = '';
//       const headerRow = document.createElement('tr');
//       userList.appendChild(headerRow);

//       const usersToDisplay = users.slice(0, 10); // Menampilkan hanya 10 produk

//       usersToDisplay.forEach(users => {
//           const row = document.createElement('tr');
//           row.innerHTML = `
//               <td>${users.id}</td>
//               <td>${users.name}</td>
//               <td>${users.username}</td>
//               <td>$${users.phone}</td>
//               <td>${users.email}</td>
//           `;
//           userList.appendChild(row);
//       });
//   };

//   displayusers();

//   searchInput.addEventListener('input', function () {
//       const searchValue = this.value.toLowerCase();
//       const filteredusers = displayedusers.filter(user =>
//           user.title.toLowerCase().includes(searchValue)
//       );
//       renderusers(filteredusers);
//   });
// });


// // function fetchData() {
// //   var apiUrl = 'https://dekontaminasi.com/api/id/covid19/hospitals'; // Ganti dengan URL REST API yang sesuai

// //   $.ajax({
// //     url: apiUrl,
// //     type: 'GET',
// //     dataType: 'json',
// //     success: function (data) {
// //       displayData(data);
// //     },
// //     error: function (error) {
// //       console.log('Error:', error);
// //     }
// //   });
// // }

// // function displayData(data) {
// //   var tableBody = $('#tableBody');
// //   tableBody.empty(); // Mengosongkan tabel sebelum menambahkan data baru

// //   // Menambahkan data rumah sakit ke dalam tabel
// //   data.forEach(function (hospital) {
// //     var row = '<tr><td>' + hospital.name + '</td><td>' + hospital.address + '</td><td>' + hospital.phone + '</td></tr>';

// //     tableBody.append(row);
// //   });
// // }

// // function searchData() {
// //   var searchInput = $('#searchInput').val().toLowerCase();
// //   var table = $('#hospitalTable');

// //   // Menyembunyikan semua baris tabel
// //   $('tr', table).each(function() {
// //     $(this).hide();
// //   });

// //   // Menampilkan baris tabel yang sesuai dengan pencarian
// //   $('tr:contains(' + searchInput + ')', table).each(function() {
// //     $(this).show();
// //   });
// // }

// // // Membuat fungsi contains untuk melakukan pencarian teks dalam elemen
// // jQuery.expr[':'].contains = function(a, i, m) {
// //   return jQuery(a).text().toLowerCase()
// //     .indexOf(m[3].toLowerCase()) >= 0;
// // };

// // // Fetch data saat halaman dimuat
// // fetchData();

document.addEventListener('DOMContentLoaded', async function () {
    const userList = document.getElementById('userList');
    const searchInput = document.getElementById('searchInput');
    let displayedusers = [];
  
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
  
    const displayusers = async () => {
        const users = await fetchData();
        if (users) {
            displayedusers = users;
            renderusers(displayedusers);
        }
    };
  
    const renderusers = (users) => {
        userList.innerHTML = '';
        const headerRow = document.createElement('tr');
        userList.appendChild(headerRow);
  
        const usersToDisplay = users.slice(0, 10);
  
        usersToDisplay.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.phone}</td>
                <td>${user.email}</td>
            `;
            userList.appendChild(row);
        });
    };
  
    displayusers();
  
    searchInput.addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();
        const filteredusers = displayedusers.filter(user =>
            user.name.toLowerCase().includes(searchValue) ||
            user.username.toLowerCase().includes(searchValue) ||
            user.phone.toLowerCase().includes(searchValue) ||
            user.email.toLowerCase().includes(searchValue)
        );
        renderusers(filteredusers);
    });
  });
  