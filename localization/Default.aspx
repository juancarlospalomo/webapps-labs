<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="localization_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <meta name="viewport" content="width=device-width, user-scalable=no" />

    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic' />

    <!--  Angulars Material CSS using local bower_components -->
    <link rel="stylesheet" href="../bower_components/angular-material/angular-material.css" />

    <!-- Web app css -->
    <link rel="stylesheet" href="css/applocalization.css" />

    <!-- Angular Material Dependencies -->
    <script src="../bower_components/angular/angular.js"></script>
    <script src="../bower_components/angular-animate/angular-animate.js"></script>
    <script src="../bower_components/angular-aria/angular-aria.js"></script>

    <!-- Angular Material Javscript -->
    <script src="../bower_components/angular-material/angular-material.js"></script>

    <script src="js/app.js"></script>

    <script src="services/translation.js"></script>

    <script src="controllers/location_controller.js"></script>
    
</head>
<body ng-app="numbersApp", ng-controller="location_controller">

    <!-- https://docs.angularjs.org/api/ng/filter/date -->

    <p>{{date | date:'mediumDate'}}</p>

    <p>{{strings.textNumber}} {{quantity | number: 3}}</p>

</body>
</html>
