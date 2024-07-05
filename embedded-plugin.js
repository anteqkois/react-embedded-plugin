// (function () {
//   const script = document.createElement('script');
//   // script.src = 'https://your-deployed-domain/plugin.js';
//   script.src = './out/_next/btSlag4_0mHzz7dKV-b5L';
//   script.onload = function () {
//     // Assuming Plugin component is exposed globally
//     const config = {
//       exampleOption: 'value',
//       // Other configuration options
//     };

//     const container = document.createElement('div');
//     container.id = 'plugin-container';
//     document.body.appendChild(container);

//     ReactDOM.render(
//       React.createElement(MyPlugin, { config }),
//       container
//     );
//   };
//   document.head.appendChild(script);
// })();

(function () {
  // const pluginUrl = "http://127.0.0.1:3001/plugin.html";
  // const pluginUrl = "http://127.0.0.1:3001/main.js";
  const jsFiles = [
    "https://unpkg.com/react@16/umd/react.production.min.js",
    "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",

    // "http://127.0.0.1:3001/main.js",
    "http://127.0.0.1:3001/react-webplugin.js",
    // './out/_next/static/3fexzXcoWAwt0gyijxJ7v/pages/_app.js',
    // './out/_next/static/3fexzXcoWAwt0gyijxJ7v/pages/_error.js',
    // './out/_next/static/chunks/app/plugin/layout-3fexzXcoWAwt0gyijxJ7v.js',
    // './out/_next/static/chunks/app/plugin/page-3fexzXcoWAwt0gyijxJ7v.js'
  ];

  // Load the JS files
  jsFiles.forEach((file) => {
    const script = document.createElement("script");
    script.src = file;
    script.type = "module";
    document.head.appendChild(script);
  });

  // // Load the plugin HTML
  // fetch(pluginUrl)
  //   .then((response) => response.text())
  //   .then((html) => {
  //     const container = document.createElement("div");
  //     container.id = "plugin-container";
  //     container.innerHTML = html;
  //     document.body.appendChild(container);

  //     // Load the JS files
  //     // jsFiles.forEach(file => {
  //     //   const script = document.createElement('script');
  //     //   script.src = file;
  //     //   document.head.appendChild(script);
  //     // });
  //   })
  //   .catch((err) => console.error("Failed to load plugin:", err));
})();
