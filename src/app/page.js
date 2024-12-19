"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [number, setNumber] = useState("");
  const [sequence, setSequence] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaRequired, setCaptchaRequired] = useState(false);
  const [captchaSolution, setCaptchaSolution] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://b82b1763d1c3.eu-west-3.captcha-sdk.awswaf.com/b82b1763d1c3/jsapi.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const N = parseInt(number);
    if (isNaN(N) || N < 1 || N > 1000) {
      alert("Veuillez entrer un nombre valide entre 1 et 1000.");
      return;
    }

    setSequence([]);
    setIsLoading(true);
    setCaptchaRequired(false);

    for (let i = 1; i <= N; i++) {
      try {
        const response = await fetch("https://api.prod.jcloudify.com/whoami", {
          headers: { "Content-Type": "application/json" },
        });

        if (response.status === 403) {
          // Handle CAPTCHA requirement
          setCaptchaRequired(true);
          return;
        }

        const result = await response.text(); // Parse response if needed
        setSequence((prev) => [...prev, `${i}. Forbidden`]);
      } catch (error) {
        setSequence((prev) => [...prev, `${i}. Error: ${error.message}`]);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    }

    setIsLoading(false);
  };

  const handleCaptchaSubmit = () => {
    // Handle CAPTCHA submission logic
    setCaptchaRequired(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {!sequence.length && !isLoading && !captchaRequired && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Entrez un nombre entre 1 et 1000 :</label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            min="1"
            max="1000"
            required
          />
          <button type="submit">Soumettre</button>
        </form>
      )}

      {captchaRequired && (
        <div>
          <p>Un CAPTCHA est requis. Veuillez le résoudre :</p>
          <input
            type="text"
            value={captchaSolution}
            onChange={(e) => setCaptchaSolution(e.target.value)}
            placeholder="Entrez la solution CAPTCHA"
          />
          <button onClick={handleCaptchaSubmit}>Valider CAPTCHA</button>
        </div>
      )}

      <ul>
        {sequence.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>

      {isLoading && <p>Chargement...</p>}
    </div>
  );
}
