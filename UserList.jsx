import React, { useState } from 'react';

const UserList = ({ users, setUser, setError }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Set jumlah pengguna per halaman

  // Logika untuk menentukan pengguna yang akan ditampilkan
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleUserClick = (user) => {
    setUser(user);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <ul>
          {currentUsers.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user)}>
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      )}
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default UserList;