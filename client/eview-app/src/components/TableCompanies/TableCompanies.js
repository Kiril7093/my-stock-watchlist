import React from 'react';

export const TableCompanies = () => {
  const companies = [
    {
      name: 'Tesla Inc.',
      stockSymbol: 'TSLA',
      companyProfile:
        'Tesla is an American electric vehicle and clean energy company that designs and manufactures electric cars, battery energy storage, and solar panels.',
    },
    {
      name: 'Johnson & Johnson',
      stockSymbol: 'JNJ',
      companyProfile:
        'Johnson & Johnson is an American multinational corporation that develops medical devices, pharmaceuticals, and consumer health products.',
    },
    {
      name: 'Apple Inc.',
      stockSymbol: 'AAPL',
      companyProfile:
        'Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.',
    },
    {
      name: 'Microsoft Corporation',
      stockSymbol: 'MSFT',
      companyProfile:
        'Microsoft Corporation is an American multinational technology company that develops, licenses, and sells computer software, consumer electronics, personal computers, and related services.',
    },
    {
      name: 'Amazon.com Inc.',
      stockSymbol: 'AMZN',
      companyProfile:
        'Amazon.com Inc. is an American multinational technology company based in Seattle that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    },
    {
      name: 'Facebook Inc.',
      stockSymbol: 'FB',
      companyProfile:
        'Facebook is an American social media conglomerate corporation based in Menlo Park, California.',
    },
    {
      name: 'Alphabet Inc.',
      stockSymbol: 'GOOGL',
      companyProfile:
        'Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California.',
    },
    {
      name: 'Berkshire Hathaway Inc.',
      stockSymbol: 'BRK.A',
      companyProfile:
        'Berkshire Hathaway Inc. is an American multinational conglomerate holding company headquartered in Omaha, Nebraska.',
    },
    {
      name: 'JP Morgan Chase & Co.',
      stockSymbol: 'JPM',
      companyProfile:
        'JPMorgan Chase & Co. is an American multinational investment bank and financial services holding company headquartered in New York City.',
    },
  ];

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Company Name</th>
          <th className="border px-4 py-2">Stock Symbol</th>
          <th className="border px-4 py-2">Company Profile</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => (
          <tr key={company.stockSymbol}>
            <td className="border px-4 py-2">{company.name}</td>
            <td className="border px-4 py-2">
              <a href={`https://finance.yahoo.com/quote/${company.stockSymbol}`} target="_blank" rel="noreferrer">{company.stockSymbol}</a>
            </td>
            <td className="border px-4 py-2">{company.companyProfile}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


