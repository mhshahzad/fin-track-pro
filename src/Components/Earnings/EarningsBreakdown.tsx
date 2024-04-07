import { Table } from "@mui/joy";

export const EarningsBreakdown = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Month</th>
            <th>Hours Worked</th>
            <th>Rate</th>
            <th>Earnings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>January</td>
            <td>80</td>
            <td>$25</td>
            <td>$2000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
