const stages = [
  {
    title: "Application Submission",
    description:
      "Customer has submitted the loan application including personal and financial details. We are currently reviewing it.",
  },
  {
    title: "Documentation Verification",
    description:
      "Submitted documents such as income proof and ID are being verified for accuracy and authenticity.",
  },
  {
    title: "Credit Evaluation",
    description:
      "Credit history and repayment capability are being evaluated to determine creditworthiness.",
  },
  {
    title: "Loan Underwriting",
    description:
      "A complete financial review is being finalized to approve or reject the loan application.",
  },
  {
    title: "Loan Approval and Disbursement",
    description:
      "Loan has been approved and the disbursement process has been initiated as agreed.",
  },
  {
    title: "Loan Servicing",
    description:
      "Loan is now active and customer is in the repayment phase. Contact us for support if needed.",
  },
];

// NIC ? customer name, loan type, current stage (0-based index)
const customerData = {
  "905521888V": { name: "Nimal Perera", loanType: "Personal Loan", stage: 1 },
  "876872013V": { name: "Suneth Madushanka", loanType: "Home Loan", stage: 2 },
  "986032991V": { name: "Tharushi Silva", loanType: "Education Loan", stage: 1 },
  "198070003593": { name: "Kasun Jayalath", loanType: "Vehicle Loan", stage: 2 },
  "821681154V": { name: "Saman Kumara", loanType: "Business Loan", stage: 1 },
  "72661847V": { name: "Nirosha Jayasinghe", loanType: "Home Loan", stage: 2 },
  "905860283V": { name: "Ruwan Wickramasinghe", loanType: "Agri Loan", stage: 3 },
  "852392185V": { name: "Dilani Herath", loanType: "SME Loan", stage: 4 },
  "907150151V": { name: "Chathura Rathnayake", loanType: "Personal Loan", stage: 2 },
  "198968400622": { name: "Nadeeka Fernando", loanType: "Education Loan", stage: 4 },
};

function checkStatus() {
  const nic = document.getElementById("nicInput").value.trim();
  const customer = customerData[nic];
  const resultDiv = document.getElementById("result");
  const greetDiv = document.getElementById("greeting");
  resultDiv.innerHTML = "";
  greetDiv.innerHTML = "";

  if (!customer) {
    greetDiv.innerHTML =
      "<p style='color: red;'>NIC not found in our records. Please check and try again.</p>";
    return;
  }

  const { name, loanType, stage } = customer;
  const totalStages = stages.length;
  const remainingStages = totalStages - (stage + 1);

  // Greeting and details
  greetDiv.innerHTML = `
    <p>Hello ?? <strong>${name}</strong>!</p>
    <p>Your NIC: <strong>${nic}</strong></p>
    <p>You have applied for a <strong>${loanType}</strong>.</p>
    <p>Currently, you are at <strong style="color: green;">Stage ${stage + 1}: ${stages[stage].title}</strong>.</p>
    <p>You have <strong>${remainingStages}</strong> stage(s) remaining until final disbursement.</p>
  `;

  // All stages with highlight
  stages.forEach((st, index) => {
    const div = document.createElement("div");
    div.classList.add("stage-item");
    if (index === stage) div.classList.add("highlight");

    div.innerHTML = `<strong>Stage ${index + 1}: ${
      index === stage ? `<span style="color:green">${st.title}</span>` : st.title
    }</strong><br><p>${st.description}</p>`;

    resultDiv.appendChild(div);
  });
}
