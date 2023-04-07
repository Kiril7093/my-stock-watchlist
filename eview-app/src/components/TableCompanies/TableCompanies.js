
import { useContext } from "react";
import InputContext from "../../context/inputContext";








export const TableCompanies = () => {


  const { input, setInput }= useContext(InputContext);


  function updateInput(event){

    const companySymbol=event.target.textContent;

;

    setInput(companySymbol)


  }






  return (
    <table>
      <tbody>
        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}

            onClick={updateInput}
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
            onClick={updateInput}
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
            onClick={updateInput}
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
            onClick={updateInput}
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
            onClick={updateInput}
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
            onClick={updateInput}
          >
            FB
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Facebook Inc.
          </td>
        </tr>
        <tr>
          <td
            className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
            style={{ perspective: "1000px" }}
            onClick={updateInput}
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
            onClick={updateInput}
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
            onClick={updateInput}
          >
            JPM
          </td>
          <td className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform`}
          style={{ perspective: "1000px" }}
          onClick={updateInput}
          >
            JPMorgan Chase & Co.
          </td>
        </tr>

        <tr>
          <td className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer`}
          style={{ perspective: "1000px" }}
          onClick={updateInput}

          >
            JNJ
          </td>
          <td className={"px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform"}
          style={{ perspective: "1000px" }}
          onClick={updateInput}
          >
            Johnson & Johnson
          </td>
        </tr>

        <tr>
          <td className={"px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"}
                    style={{ perspective: "1000px" }}
                    onClick={updateInput}
          >
            V
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            Visa Inc.
          </td>
        </tr>
        <tr>
          <td className={"px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"}
                    style={{ perspective: "1000px" }}
                    onClick={updateInput}
          >
            MA
          </td>
          <td className={"px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform"}
          >
            Mastercard Incorporated
          </td>
        </tr>
        <tr>
          <td className={"px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"}
                              style={{ perspective: "1000px" }}
                              onClick={updateInput}
          >
            PG
          </td>
          <td className={`px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform`}>
            The Procter & Gamble Company
          </td>
        </tr>
        <tr>
          <td className={"px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"}
          style={{ perspective: "1000px" }}
          onClick={updateInput}
          >
            HD
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            The Home Depot, Inc.
          </td>
        </tr>
        <tr>
          <td className={"px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"}
                                        style={{ perspective: "1000px" }}
                                        onClick={updateInput}>
            DIS
          </td>
          <td className={"px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform"}
                                        style={{ perspective: "1000px" }}
                                        onClick={updateInput}
          >
            The Walt Disney Company
          </td>
        </tr>
        <tr>
          <td className={"px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"}
                                        style={{ perspective: "1000px" }}
                                        onClick={updateInput}
          >
            KO
          </td>
          <td className="px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform">
            The Coca-Cola Company
          </td>
        </tr>
        <tr>

          <td className={"px-4 py-2 text-2xl text-zinc-700 font-semibold transform transition-transform hover:-translate-y-1 hover:scale-110 hover:text-zinc-500 cursor-pointer"}
                                        style={{ perspective: "1000px" }}
                                        onClick={updateInput}
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
