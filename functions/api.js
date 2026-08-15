export async function onRequest(context) {
  // यह आपका बैकएंड है। यहाँ से आप अपनी एड्स की आईडी कंट्रोल करेंगे
  const data = {
    adId: "ca-app-pub-YOUR_AD_ID_HERE", // यहाँ अपनी असली एड्स आईडी डालना
    status: "active",
    adminEnabled: true
  };

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}

