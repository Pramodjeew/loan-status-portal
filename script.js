const loanData = {
  "905521888V": ["personal", "W.M. Isuru Shashi", "Documentation verification - ???? ?????????", 2],
  "876872013v": ["personal", "w.m dinusha pushpa", "Credit evaluation (?? ?????)", 3],
  "986032991V": ["personal", "H.A.Y.H.hettiarachchi", "Documentation verification - ???? ?????????", 2],
  "198070003593": ["personal", "T.A.chamila nishanthi", "Credit evaluation (?? ?????)", 3],
  "821681154V": ["personal", "w.M.Aminda jayalath", "Documentation verification - ???? ?????????", 2],
  "72661847V": ["personal", "W.M.R.Vijesinhe", "Credit evaluation (?? ?????)", 3],
  "905860283V": ["personal", "W.V.T.R.Viyelath", "Loan underwriting (???? ???????? ?????)", 4],
  "852392185V": ["personal", "K.M.R.Gunasekara", "Loan Approval and Disbursement (?? ????? ????? ?? ??? ???)", 5],
  "907150151V": ["personal", "A.G.Kamalavathi  kumarihami", "Credit evaluation (?? ?????)", 3],
  "726661847V": ["personal", "W.M.R.Wiyesinhe", "Loan Approval and Disbursement (?? ????? ????? ?? ??? ???)", 5],
  "198968400622": ["personal", "R.M.Sunethra sanjivani", "Loan Approval and Disbursement (?? ????? ????? ?? ??? ???)", 5],
  "926421875V": ["term", "Nilmini dissanayaka", "", 0],
  "853292494V": ["term", "N.R.M.S.K.Rathnayaka", "Credit evaluation (?? ?????)", 3],
  "878300319V": ["term", "J.M.A.I.Jayasinhe", "Credit evaluation (?? ?????)", 3],
  "752342199V": ["term", "D.M.G.Kumarasiri", "Pending for Approval", 4],
  "856428561V": ["term", "kondaya", "Credit evaluation (?? ?????)", 3],
  "977741971V": ["term", "R.G.C.S.Karunarathna", "Loan Approval and Disbursement (?? ????? ????? ?? ??? ???)", 5],
  "197977102213": ["term", "R.G.Shiromi mala", "Documentation verification - ???? ?????????", 2],
  "196923701917": ["term", "H.G.N.S.K.Gamage", "Credit evaluation (?? ?????)", 3],
  "997280458V": ["term", "K.A.Purnima sewwandi", "Credit evaluation (?? ?????)", 3],
  "972111821V": ["term", "J.Agilan prasanna", "Credit evaluation (?? ?????)", 3],
  "89287236": ["term", "A.M.Chamith eranga", "Loan Approval and Disbursement (?? ????? ????? ?? ??? ???)", 5],
  "196821102484": ["term", "S.R.Rajamuni", "Documentation verification - ???? ?????????", 2],
  "740550039V": ["term", "N.M.Athula senerath", "Credit evaluation (?? ?????)", 3],
  "675881022V": ["term", "D.M.C.Dissanayake", "Loan Approval and Disbursement (?? ????? ????? ?? ??? ???)", 5],
  "766350968V": ["term", "T.G.R.M.Priyanka", "Documentation verification - ???? ?????????", 2],
  "867463500V": ["term", "R.M.Nishanthi hemamali", "Credit evaluation (?? ?????)", 3],
  "950790709V": ["term", "A.H.M.Isuru udaraka", "Credit evaluation (?? ?????)", 3],
  "757734524V": ["term", "K.G.Suwaneetha kumari", "Loan Approval and Disbursement (?? ????? ????? ?? ??? ???)", 5],
  "199002104294": ["term", "K.W.Sahan tharidu", "Credit evaluation (?? ?????)", 3],
  "961441242V": ["term", "E.G.C.Jayamal", "Credit evaluation (?? ?????)", 3],
  "198525305075": ["term", "w.priyankara dinesh", "Documentation verification - ???? ?????????", 2],
  "198675402868": ["pension", "E.D.Damayanthi", "Credit evaluation (?? ?????)", 3],
  "880065025V": ["leasing", "M.R.N.M.Bandare", "Loan Approval and Disbursement (?? ????? ????? ?? ??? ???)", 5]
};

const stageDescriptions = [
  "",
  "Stage 1: Application Submission (????????? ???????? ?????) - You have submitted your application and documents.",
  "Stage 2: Documentation Verification (???? ?????????) - We are reviewing your submitted documents.",
  "Stage 3: Credit Evaluation (?? ?????) - We are assessing your creditworthiness.",
  "Stage 4: Loan Underwriting (???? ???????? ?????) - Detailed review of your credit profile and collateral.",
  "Stage 5: Loan Approval and Disbursement (?? ????? ????? ?? ??? ???) - Your loan is approved and will be disbursed shortly.",
  "Stage 6: Loan Servicing (?? ???? ??????) - Your loan is active and we ensure continuous support."
];

function checkStatus() {
  const nic = document.getElementById('nicInput').value.trim();
  const resultDiv = document.getElementById('result');

  if (loanData[nic]) {
    const [type, name, status, stage] = loanData[nic];
    const remaining = 6 - stage;

    resultDiv.innerHTML = `
      <h3 style="color:#006600;">Hello ${name},</h3>
      <p><strong>Loan Type:</strong> ${type.toUpperCase()}</p>
      <p><strong>Current Status:</strong> <span style="color:green">${status}</span></p>
      <p><strong>Stage Description:</strong> ${stageDescriptions[stage]}</p>
      <p><strong>Completed Stages:</strong> ${stage}/6</p>
      <p><strong>Stages Remaining:</strong> ${remaining}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">NIC number not found. Please check and try again.</p>`;
  }
}
