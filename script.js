const customerData = [
    { nic: "905521888V", name: "W.M. Isuru Shashi", status: "Documentation Verification" },
    { nic: "876872013v", name: "w.m dinusha pushpa", status: "Credit Evaluation" },
    { nic: "986032991V", name: "H.A.Y.H.hettiarachchi", status: "Documentation Verification" },
    { nic: "198070003593", name: "T.A.chamila nishanthi", status: "Credit Evaluation" },
    { nic: "821681154V", name: "w.M.Aminda jayalath", status: "Documentation Verification" },
    { nic: "72661847V", name: "W.M.R.Vijesinhe", status: "Credit Evaluation" },
    { nic: "905860283V", name: "W.V.T.R.Viyelath", status: "Loan Underwriting" },
    { nic: "852392185V", name: "K.M.R.Gunasekara", status: "Loan Approval and Disbursement" },
    { nic: "907150151V", name: "A.G.Kamalavathi kumarihami", status: "Credit Evaluation" },
    { nic: "726661847V", name: "W.M.R.Wiyesinhe", status: "Loan Approval and Disbursement" },
    { nic: "198968400622", name: "R.M.Sunethra sanjivani", status: "Pending for Approval" },

    { nic: "926421875V", name: "Nilmini dissanayaka", status: "" },
    { nic: "853292494V", name: "N.R.M.S.K.Rathnayaka", status: "Credit Evaluation" },
    { nic: "878300319V", name: "J.M.A.I.Jayasinhe", status: "Credit Evaluation" },
    { nic: "752342199V", name: "D.M.G.Kumarasiri", status: "Loan Approval and Disbursement" },
    { nic: "856428561V", name: "kondaya", status: "Credit Evaluation" },
    { nic: "977741971V", name: "R.G.C.S.Karunarathna", status: "Pending for Approval" },
    { nic: "197977102213", name: "R.G.Shiromi mala", status: "Documentation Verification" },
    { nic: "196923701917", name: "H.G.N.S.K.Gamage", status: "Credit Evaluation" },
    { nic: "997280458V", name: "K.A.Purnima sewwandi", status: "Credit Evaluation" },
    { nic: "972111821V", name: "J.Agilan prasanna", status: "Credit Evaluation" },
    { nic: "89287236", name: "A.M.Chamith eranga", status: "Loan Approval and Disbursement" },
    { nic: "196821102484", name: "S.R.Rajamuni", status: "Documentation Verification" },
    { nic: "740550039V", name: "N.M.Athula senerath", status: "Credit Evaluation" },
    { nic: "675881022V", name: "D.M.C.Dissanayake", status: "Loan Approval and Disbursement" },
    { nic: "766350968V", name: "T.G.R.M.Priyanka", status: "Documentation Verification" },
    { nic: "867463500V", name: "R.M.Nishanthi hemamali", status: "Credit Evaluation" },
    { nic: "950790709V", name: "A.H.M.Isuru udaraka", status: "Credit Evaluation" },
    { nic: "757734524V", name: "K.G.Suwaneetha kumari", status: "Loan Approval and Disbursement" },
    { nic: "199002104294", name: "K.W.Sahan tharidu", status: "Credit Evaluation" },
    { nic: "961441242V", name: "E.G.C.Jayamal", status: "Credit Evaluation" },
    { nic: "198525305075", name: "w.priyankara dinesh", status: "Documentation Verification" },
    { nic: "198675402868", name: "E.D.Damayanthi", status: "Credit Evaluation" },
    { nic: "880065025V", name: "M.R.N.M.Bandare", status: "Loan Approval and Disbursement" }
];

document.getElementById('searchBtn').addEventListener('click', () => {
    const nic = document.getElementById('nicInput').value.trim();
    const resultDiv = document.getElementById('result');
    const stagesList = document.querySelectorAll('#stagesList li');

    // Clear previous highlights
    stagesList.forEach(li => li.classList.remove('highlight'));

    if (!nic) {
        resultDiv.textContent = "Please enter your NIC number.";
        return;
    }

    // Search customer by NIC (case insensitive)
    const customer = customerData.find(c => c.nic.toLowerCase() === nic.toLowerCase());

    if (!customer) {
        resultDiv.textContent = "NIC number not found. Please check and try again.";
        return;
    }

    // Display customer info
    resultDiv.textContent = `Hello ${customer.name}, your loan is currently at stage: ${customer.status || "Application Submission"}`;

    // Highlight the current stage in the list
    let stageToHighlight = customer.status || "Application Submission";

    // Handle "Pending for Approval" or empty status to map properly
    if (stageToHighlight.toLowerCase().includes("pending")) {
        stageToHighlight = "Loan Approval and Disbursement";
    }

    stagesList.forEach(li => {
        if (li.dataset.stage.toLowerCase() === stageToHighlight.toLowerCase()) {
            li.classList.add('highlight');
        }
    });
});
