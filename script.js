const stages = [
  {
    title: "Application Submission",
    description:
      "You have successfully submitted your application including personal and financial details. We're reviewing them to assess your eligibility.",
  },
  {
    title: "Documentation Verification",
    description:
      "We're verifying your documents such as income and bank statements to ensure authenticity and accuracy.",
  },
  {
    title: "Credit Evaluation",
    description:
      "We're analyzing your credit score, repayment history, and debts to assess your creditworthiness.",
  },
  {
    title: "Loan Underwriting",
    description:
      "We're finalizing assessment of your financial profile and collateral to make a final decision.",
  },
  {
    title: "Loan Approval and Disbursement",
    description:
      "Your loan has been approved! Funds are being disbursed as agreed in lump sum or installments.",
  },
  {
    title: "Loan Servicing",
    description:
      "Your loan is now active. We're supporting you through repayments and regular service.",
  },
];

const customerData = {
  "905521888V": 1,
  "876872013v": 2,
  "986032991V": 1,
  "198070003593": 2,
  "821681154V": 1,
  "72661847V": 2,
  "905860283V": 3,
  "852392185V": 4,
  "907150151V": 2,
  "726661847V": 4,
  "198968400622": 4,
  "926421875V": null,
  "853292494V": 2,
  "878300319V": 2,
  "752342199V": 4,
  "856428561V": 2,
  "977741971V": 4,
  "197977102213": 1,
  "196923701917": 2,
  "997280458V": 2,
  "972111821V": 2,
  "89287236": 4,
  "196821102484": 1,
  "740550039V": 2,
  "675881022V": 4,
  "766350968V": 1,
  "867463500V": 2,
  "950790709V": 2,
  "757734524V": 4,
  "199002104294": 2,
  "961441242V": 2,
  "198525305075": 1,
  "198675402868": 2,
  "880065025V": 4,
};

function checkStatus() {
  const nic = document.getElementById("nicInput").value.trim();
  const stageIndex = customerData[nic];
  const resultDiv = document.getElementById("result");
  const greetDiv = document.getElementById("greeting");
  resultDiv.innerHTML = "";
  greetDiv.innerHTML = "";

  if (stageIndex === undefined) {
    greetDiv.innerHTML =
      "<p style='color: red;'>NIC not found in our records. Please check and try again.</p>";
    return;
  }

  // Greeting message
  greetDiv.innerHTML = `<p>Hello ??, your NIC: <strong>${nic}</strong></p>`;

  if (stageIndex === null) {
    resultDiv.innerHTML =
      "<p style='color: orange;'>?? Your loan application is pending. Please wait while we process your details.</p>";
    return;
  }

  stages.forEach((stage, index) => {
    const div = document.createElement("div");
    div.classList.add("stage-item");
    if (index === stageIndex) {
      div.classList.add("highlight");
    }
    div.innerHTML = `<strong>Stage ${index + 1}: ${
      index === stageIndex
        ? `<span style="color:green">${stage.title}</span>`
        : stage.title
    }</strong><br><p>${stage.description}</p>`;
    resultDiv.appendChild(div);
  });
}

// Optional: Download PDF (basic HTML to PDF using print)
function generatePDF() {
  window.print(); // Alternatively, use html2pdf.js or jsPDF for advanced output
}
