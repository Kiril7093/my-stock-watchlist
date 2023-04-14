import { useContext } from "react";

import StockDataContext from "../../context/StockDataContext";

export const TableCompanies = () => {
  
  const {
    setSymbol,
  } = useContext(StockDataContext);

  
  function updateSymbol(event) {
    const companySymbol = event.target.textContent;

    setSymbol(companySymbol);
  }

  return (
    <table>
      <tbody>
        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            AAPL
          </td>

          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Apple Inc.
          </td>
        </tr>

        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            TSLA
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Tesla Inc.
          </td>
        </tr>
        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            AMZN
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Amazon.com Inc.
          </td>
        </tr>
        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            MSFT
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Microsoft Corporation
          </td>
        </tr>
        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            GOOG
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Alphabet Inc.
          </td>
        </tr>
        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
         META
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Facebook Inc.
          </td>
        </tr>
        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            NVDA
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            NVIDIA Corporation
          </td>
        </tr>

        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            BABA
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Alibaba Group Holding Limited
          </td>
        </tr>

        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            JPM
          </td>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            JPMorgan Chase & Co.
          </td>
        </tr>

        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            JNJ
          </td>
          <td
            className={
              "px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform"
            }
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            Johnson & Johnson
          </td>
        </tr>

        <tr>
          <td
            className={
              "px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"
            }
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            V
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Visa Inc.
          </td>
        </tr>
        <tr>
          <td
            className={
              "px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"
            }
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            MA
          </td>
          <td
            className={
              "px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform"
            }
          >
            Mastercard Incorporated
          </td>
        </tr>
        <tr>
          <td
            className={
              "px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"
            }
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            PG
          </td>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform`}
          >
            The Procter & Gamble Company
          </td>
        </tr>
        <tr>
          <td
            className={
              "px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"
            }
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            HD
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            The Home Depot, Inc.
          </td>
        </tr>

        <tr>
          <td
            className={
              "px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"
            }
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            DIS
          </td>

          <td
            className={
              "px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform"
            }
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            The Walt Disney Company
          </td>
        </tr>

        <tr>
          <td
            className={
              "px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"
            }
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            KO
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            The Coca-Cola Company
          </td>
        </tr>
        <tr>
          <td
            className={
              "px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"
            }
            style={{ perspective: "1000px" }}
            onClick={updateSymbol}
          >
            PFE
          </td>

          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Pfizer Inc.
          </td>
        </tr>
      </tbody>
    </table>
  );
};
