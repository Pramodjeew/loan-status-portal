const stages = [
  {
    title: "Application Submission",
    description:
      "You have successfully submitted your application including your personal information, financial statements, credit history, and details about the loan purpose. We are reviewing this information to assess your eligibility.",
  },
  {
    title: "Documentation Verification",
    description:
      "We are verifying your documents such as income statements, bank statements, and IDs to ensure authenticity and accuracy.",
  },
  {
    title: "Credit Evaluation",
    description:
      "We are analyzing your credit score, payment history, outstanding debts, and existing loans to determine risk.",
  },
  {
    title: "Loan Underwriting",
    description:
      "We are thoroughly assessing your financial profile, collateral, and repayment capacity before final decision.",
  },
  {
    title: "Loan Approval and Disbursement",
    description:
      "Your loan has been approved. Funds are being disbursed as per agreed terms, either as a lump sum or in installments.",
  },
  {
    title: "Loan Servicing",
    description:
      "Loan has been granted and is now in servicing. We're monitoring repayments and offering ongoing support.",
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
  resultDiv.innerHTML = "";

  if (stageIndex === undefined) {
    resultDiv.innerHTML =
      "<p style='color: red;'>NIC not found in our records. Please check and try again.</p>";
    return;
  }

  if (stageIndex === null) {
    resultDiv.innerHTML =
      "<p style='color: orange;'>Your loan application is pending. Please wait while we process your details.</p>";
    return;
  }

  stages.forEach((stage, index) => {
    const div = document.createElement("div");
    div.classList.add("stage-item");
    if (index === stageIndex) {
      div.classList.add("highlight");
    }
    div.innerHTML = `<strong>Stage ${index + 1}: ${stage.title}</strong><br><p>${stage.description}</p>`;
    resultDiv.appendChild(div);
  });
}
