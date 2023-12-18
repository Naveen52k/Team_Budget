/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("// app.js\r\nclass TeamBudget {\r\n    constructor() {\r\n      this.budget = 0;\r\n      this.deals =[];\r\n    }\r\n  \r\n    addDeal(vendor, expense, description, date) {\r\n        const deal = {\r\n          vendor,\r\n          expense,\r\n          description,\r\n          date,\r\n        };\r\n    \r\n        // Add the deal to the deals array\r\n        this.deals.push(deal);\r\n    \r\n        // Update the budget\r\n        this.budget += expense;\r\n      }\r\n    \r\n      getBudget() {\r\n        return this.budget;\r\n      }\r\n    \r\n      getDeals() {\r\n        return this.deals;\r\n      }\r\n    }\r\n\r\n  \r\n  const teamBudget = new TeamBudget();\r\n  \r\n  // Handle form submission\r\n  document.getElementById('dealForm').addEventListener('submit', function (event) {\r\n    event.preventDefault();\r\n  \r\n    const vendor = document.getElementById('vendor').value;\r\n    const expense = parseFloat(document.getElementById('expense').value);\r\n  \r\n    // Validate input\r\n    if (vendor && !isNaN(expense)) {\r\n      teamBudget.addDeal(vendor, expense);\r\n      updateBudgetDisplay();\r\n    } else {\r\n      alert('Please provide valid deal details');\r\n    }\r\n  \r\n    // Clear form fields\r\n    this.reset();\r\n  });\r\n  \r\n  function updateBudgetDisplay() {\r\n    const budgetDisplay = document.getElementById('budgetDisplay');\r\n    const budgetSpan = document.getElementById('annualBudget');\r\n    const dealsList = document.createElement('ul');\r\n  \r\n    // Update budget value\r\n    budgetSpan.textContent = teamBudget.getBudget().toFixed(2);\r\n  \r\n    // Display list of deals\r\n    dealsList.innerHTML = '<p>Deals:</p>';\r\n    teamBudget.getDeals().forEach(deal => {\r\n      const listItem = document.createElement('li');\r\n      listItem.textContent = `${deal.vendor} - $${deal.expense.toFixed(2)} - ${deal.description} - ${deal.date}`;\r\n      dealsList.appendChild(listItem);\r\n    });\r\n  \r\n    // Clear previous content and append the updated content\r\n    budgetDisplay.innerHTML = '';\r\n    budgetDisplay.appendChild(budgetSpan);\r\n    budgetDisplay.appendChild(dealsList);\r\n  }\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;