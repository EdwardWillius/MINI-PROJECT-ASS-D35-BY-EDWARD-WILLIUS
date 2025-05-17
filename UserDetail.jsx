import React from 'react';

const UserDetail = ({ user }) => {
  if (!user) {
    return null; // Jangan render jika tidak ada pengguna yang dipilih
  }

  return (
    <div>
      <h2>Detail Pengguna</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nama:</strong> {user.first_name} {user.last_name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Telepon:</strong> {user.phone || 'N/A'}</p> {/* Tambahkan detail telepon */}
      <p><strong>Alamat:</strong> {user.address || 'N/A'}</p> {/* Tambahkan detail alamat */}
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    </div>
  );
};

export default UserDetail;