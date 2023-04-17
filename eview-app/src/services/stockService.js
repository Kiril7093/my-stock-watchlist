import { requestFactory } from './requester';

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3030'
  : 'http://localhost:3030'; // TODO: Add server url when deployed

export const stockServiceFactory = (token, userId) => {
  const url = `${baseUrl}/data/${userId}`;
  const request = requestFactory(token, userId);

  const getAll = async () => {
    const result = await request.get(url);
    const stocks = Object.values(result);

    return stocks;
  };

  const getOne = async (stockSymbolId) => {
    const result = await request.get(`${url}/${stockSymbolId}`);

    return result;
  };

  const create = async (stockData) => {
    const result = await request.post(url, stockData);

    // console.log(result);

    return result;
  };

  const edit = (stockSymbolId, data) => request.put(`${url}/${stockSymbolId}`, data);

  const deleteStock = (stockId) => request.delete(`${url}/${stockId}`);

  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteStock,
  };
};
