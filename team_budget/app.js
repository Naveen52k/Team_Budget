// app.js
class TeamBudget {
    constructor() {
      this.budget = 0;
      this.deals =[];
    }
  
    addDeal(vendor, expense, description, date) {
        const deal = {
          vendor,
          expense,
          description,
          date,
        };
    
        // Add the deal to the deals array
        this.deals.push(deal);
    
        // Update the budget
        this.budget += expense;
      }
    
      getBudget() {
        return this.budget;
      }
    
      getDeals() {
        return this.deals;
      }
    }

  
  const teamBudget = new TeamBudget();
  
  // Handle form submission
  document.getElementById('dealForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const vendor = document.getElementById('vendor').value;
    const expense = parseFloat(document.getElementById('expense').value);
    const description = document.getElementById('description').value; // Added line
    const date = document.getElementById('date').value; // Added line
  
    // Validate input
    if (vendor && !isNaN(expense) && description && date) {
        teamBudget.addDeal(vendor, expense, description, date); // Make sure the order is correct
        updateBudgetDisplay();
      } else {
        alert('Please provide valid deal details');
      }
  
    // Clear form fields
    this.reset();
  });

  
  function updateBudgetDisplay() {
    const budgetDisplay = document.getElementById('budgetDisplay');
    const budgetSpan = document.getElementById('annualBudget');
    const dealsList = document.createElement('ul');
  
    // Update budget value
    budgetSpan.textContent = teamBudget.getBudget().toFixed(2);
  
    // Display list of deals
    dealsList.innerHTML = '<p>Deals:</p>';
    teamBudget.getDeals().forEach(deal => {
      const listItem = document.createElement('li');
      listItem.textContent = `${deal.vendor} - $${deal.expense.toFixed(2)} - ${deal.description} - ${deal.date}`;
      dealsList.appendChild(listItem);
    });
  
    // Clear previous content and append the updated content
    budgetDisplay.innerHTML = '';
    budgetDisplay.appendChild(budgetSpan);
    budgetDisplay.appendChild(dealsList);
  }