<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><%= htmlWebpackPlugin.options.title %></title>
  <meta name="description" content="<%= htmlWebpackPlugin.options.title %>">
  <!-- base url -->
  <base href="<%= htmlWebpackPlugin.options.metadata.baseUrl %>">
  <% if (webpackConfig.htmlElements.headTags) { %>
  <!-- Configured Head Tags  -->
  <%= webpackConfig.htmlElements.headTags %>
  <% } %>


  <%= htmlWebpackPlugin.files.webpackManifest %>

  <% if (htmlWebpackPlugin.options.metadata.isDevServer && htmlWebpackPlugin.options.metadata.HMR !== true) { %>
  <!-- Webpack Dev Server reload -->
  <script src="/webpack-dev-server.js"></script>
  <% } %>

  <!-- Async Google Analytics: change UA-71073175-1 to be your site's ID -->
  <script>
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    ga('create', 'UA-71073175-1', 'auto');
    ga('send', 'pageview');
  </script>
  <script async src="https://www.google-analytics.com/analytics.js"></script>
  <!-- End Google Analytics -->

  <!-- CSS will be injected by webpack here -->
  <!-- Preload link tags will be injected by webpack here -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>

  <app>
    Loading...
  </app>

  <!-- Scripts will be injected by webpack here -->
</body>
</html>
