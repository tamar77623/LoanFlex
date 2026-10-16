LoanFlex 🏡💰

LoanFlex is a sleek, modern, and lightweight mortgage and loan calculator built using pure JavaScript, HTML, and Tailwind CSS. It empowers users to instantly calculate their monthly payments, total interest accrued, and total payment amounts based on loan amounts, interest rates, and loan terms.

✨ Features

Accurate Financial Calculations: Implements standard amortization formulas to calculate precise monthly payments.

Detailed Breakdown: Computes and displays the Monthly Payment, Total Interest, and Total Payment.

Responsive UI: Clean, modern interface designed with Tailwind CSS for seamless use across desktop and mobile devices.

Input Validation & Safety: Robust error-handling logic to prevent common calculation errors (NaN, division by zero, etc.).

Zero Dependencies: Pure vanilla JavaScript implementation requiring no heavy frameworks.

🚀 Formulas Used

Monthly Interest Rate ($r$):


$$r = \frac{\text{Annual Interest Rate}}{12 \times 100}$$

Total Months ($n$):


$$n = \text{Years} \times 12$$

Monthly Payment ($M$):


$$M = P \times \frac{r(1 + r)^n}{(1 + r)^n - 1}$$


(Where $P$ is the principal loan amount).

Total Payment:


$$\text{Total Payment} = M \times n$$

Total Interest:


$$\text{Total Interest} = \text{Total Payment} - P$$

🛠️ Built With

HTML5 - Structuring the user interface.

Tailwind CSS - Styling and layout design.

JavaScript (ES6+) - Core business logic and DOM manipulation.

📦 Getting Started

To run this project locally, simply clone the repository and open the index.html file in any modern web browser:

git clone https://github.com/your-username/loanflex.git
cd loanflex
# Open index.html in your browser


💡 Usage

Enter your Loan Amount ($P$).

Enter the Annual Interest Rate (e.g., 6 for 6%).

Enter the Loan Term in Years (e.g., 30).

Click calculate to view your instant financial breakdown!

📄 License

This project is open-source and available under the MIT License
