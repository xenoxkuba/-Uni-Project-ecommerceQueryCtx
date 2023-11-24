import React, { useState } from "react";
import ChatbaseChat from "./ChatbaseChatBot";

const FeedAIPanel = () => {
  const [analysisResults, setAnalysisResults] = useState([]);
  const [externalData, setExternalData] = useState("");

  const sampleAnalysisData = [
    { product: "Smartphone A", views: 500, purchases: 100, skips: 50 },
    { product: "Laptop B", views: 300, purchases: 50, skips: 20 },
    // ... inne produkty
  ];

  const performAnalysis = () => {
    // Symulacja analizy danych (do zastąpienia prawdziwą logiką analizy)
    setAnalysisResults(sampleAnalysisData);
  };

  const handleExternalDataChange = (event) => {
    setExternalData(event.target.value);
  };

  const submitExternalData = () => {
    // Tutaj możesz przetworzyć i użyć danych zewnętrznych
    console.log("Dane zewnętrzne:", externalData);
  };

  return (
    <div className="grid grid-cols-1 gap-6 py-5 mt-2  bg-gradient-to-br from-black   via-lime-900 to-green-900 min-h-screen">
      <div className="container mx-auto ml-4 p-4 pl-10 bg-gradient-to-br from-black via-lime-900 to-green-900 text-white pt-12  ">
        <h1 className="text-3xl font-bold mb-4">
          AI Assistant - Sklep Internetowy
        </h1>

        {/* <button
          onClick={performAnalysis}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Wykonaj Analizę
        </button> */}

        {/* <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Wyniki Analizy</h2>
          <table className="min-w-full border bg-white text-black">
            <thead>
              <tr>
                <th className="border p-2">Produkt</th>
                <th className="border p-2">Przeglądane</th>
                <th className="border p-2">Dodane do koszyka</th>
                <th className="border p-2">Usunięte z koszyka</th>
              </tr>
            </thead>
            <tbody>
              {analysisResults.map((result, index) => (
                <tr key={index}>
                  <td className="border p-2">{result.product}</td>
                  <td className="border p-2">{result.views}</td>
                  <td className="border p-2">{result.purchases}</td>
                  <td className="border p-2">{result.skips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        {/* <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Produkty najczęściej dodawane do koszyka:
          </h2>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Produkty najrzadziej dodawane do koszyka
          </h2>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Najczęściej klikane produkty
          </h2>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Najrzadziej klikane produkty
          </h2>
        </div> */}

        <div className="mt-8">
          {/* <h2 className="text-xl font-bold mb-4 text-white">
            Dane Zewnętrzne:
          </h2>
          <input
            type="text"
            value={externalData}
            onChange={handleExternalDataChange}
            className="border p-2 mr-2"
            placeholder="Wprowadź dane zewnętrzne"
          />
          <button
            onClick={submitExternalData}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Zatwierdź Dane Zewnętrzne
          </button> */}
          <h2 className="text-3xl font-bold mb-4">
            Zapytaj AI Assitant o radę:
          </h2>
          <div>
            <ChatbaseChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedAIPanel;
