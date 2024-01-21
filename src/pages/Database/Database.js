import React from 'react'
import Grid from '@mui/material/Grid';
import lotData from '../../lotData.js';

const Database = () => {
    return (
      <Grid item xs={8}>
        <div style={{marginLeft: '500px'}}>
          <h2>This is the database page</h2>
          <ul>
            {lotData.map(lot => (
              <li key={lot.id}>
                <strong>ID:</strong> {lot.id} <br />
                <strong>Area:</strong> {lot.area} <br />
                <strong>Price:</strong> {lot.price} <br />
                <strong>Revenue:</strong> {lot.revenue} <br />
                <strong>Cadastral Number:</strong> {lot.cadastral_number} <br />
                <strong>State:</strong> {lot.state} <br />
                <strong>Region:</strong> {lot.region} <br />
                <strong>Tenant:</strong> {lot.tenant} <br />
                <strong>Lease Term:</strong> {lot.lease_term} years <br />
                <strong>Lot Status:</strong> {lot.lot_status} <br />
                <strong>Message ID:</strong> {lot.message_id} <br />
                <strong>User ID:</strong> {lot.user_id} <br />
                <strong>User Name:</strong> {lot.user_name} <br />
                <strong>Contact:</strong> {lot.contact} <br />
                <strong>Lot Number:</strong> {lot.lotNumber} <br />
                <strong>Bot ID:</strong> {lot.bot_id} <br />
                <strong>Comment:</strong> {lot.comment} <br />
                <strong>Created At:</strong> {lot.createdAt} <br />
                <strong>Updated At:</strong> {lot.updatedAt} <br />
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    );
  };
  
  export default Database;