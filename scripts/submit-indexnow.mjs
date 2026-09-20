const HOST = "www.romain-ecarnot.com";
const KEY = "e8c4a90f1d7b4256a938c11e74f329de";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/contact`,
  `https://${HOST}/claude-marketplace`,
];

async function submitIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  console.log("🚀 Soumission à IndexNow (Bing, Naver, Seznam, etc.)...");
  console.log("Payload:", JSON.stringify(payload, null, 2));

  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      console.log(`Endpoint ${endpoint}: Status ${response.status} (${response.statusText || "OK"})`);
    } catch (err) {
      console.error(`Erreur sur ${endpoint}:`, err.message);
    }
  }

  console.log("✅ Soumission terminée.");
}

submitIndexNow();
