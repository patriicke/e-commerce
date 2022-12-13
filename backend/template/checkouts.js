module.exports.checkoutTemplate = (checkouts) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    
    tr:nth-child(even) {
      background-color: #dddddd;
    }
    .date{
      font-weight: bolder;
    }
    </style>
  </head>
  <body>
    <h1>Pending Checkouts</h1>
    <table>
      <tr>
        <th>&numero;</th>
        <th>Name</th>
        <th>Email</th>
        <th>Created at</th>
        <th>Address</th>
      </tr>
      ${checkouts.map((checkout, index) => {
        return `
      <tr>
        <td>${index + 1}</td>
        <td>${checkout.name}</td>
        <td>${checkout.email}</td>
        <td class="date">${checkout.createdAt}</td>
        <td class="date">${checkout.address}</td>
      </tr>
      `;
      })}
    </table>
  </body>
</html>`;
