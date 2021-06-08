import React, { useEffect, useState } from 'react';
import './SuperheroesTable.css';

const SuperheroesTable = () => {
    const [rows, setRows] = useState([]);
  
    useEffect(() => {
      const getSuperheroes = async () => {
        // fetch uses the "proxy" value set in client/package.json
        let response = await fetch('/superhero');
        let data = await response.json();
        setRows(data);
      };
      getSuperheroes();
    }, []);
  
    return (
      <div class="superhero-table">
        <table>
            <tr><th>Name</th><th>Nickname</th><th>Alter Ego</th><th>Sidekick</th></tr>
            {rows.map((row) => (
                <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.nickname}</td>
                    <td>{row.alterego}</td>
                    <td>{row.sidekick}</td>
                </tr>
            ))}                
        </table>
      </div>
    )
  }

export default SuperheroesTable