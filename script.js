function metCal() {
    let age = document.getElementById('metage').value;
    let height = document.getElementById('methgt').value;
    let weight = document.getElementById('metwgt').value;

    let result = weight / ((height / 100) ** 2);

    if (result <= 18.4) {
        document.getElementById('metres').innerHTML = `
        <div class="row mt-2 text-center">
            <h3>Your BMI is</h3>
            <h2 class="text-warning"> ${result.toFixed(2)}</h2>
            <p>You are Underweight</p>
        </div>
        `;
    }
    else if (result> 18.5 && result< 24.9) {
        document.getElementById('metres').innerHTML = `
        <div class="row mt-2 text-center">
            <h3>Your BMI is</h3>
            <h2 class="text-success"> ${result.toFixed(2)}</h2>
            <p>You have Normal BMI</p>
        </div>
        `;

    }
    else if (result> 25.0 && result< 39.9) {
        document.getElementById('metres').innerHTML = `
        <div class="row mt-2 text-center">
            <h3>Your BMI is</h3>
            <h2 class="text-warning"> ${result.toFixed(2)}</h2>
            <p>You are Overweight</p>
        </div>
        `;

    }
    else {
        document.getElementById('metres').innerHTML = `
        <div class="row mt-2 text-center">
            <h3>Your BMI is</h3>
            <h2 class="text-danger"> ${result.toFixed(2)}</h2>
            <p>You are Obese</p>
        </div>
        `;

    }
}


function impCal() {
    let age = document.getElementById('impage').value;
    let feet = document.getElementById('imphgtf').value;
    let inches = document.getElementById('imphgti').value;
    let weight = document.getElementById('impwgt').value;

    let heightInInches = (feet * 12) + parseInt(inches);
    let result = weight / (((heightInInches*2.54)/100) ** 2);

    if (result <= 18.4) {
        document.getElementById('impres').innerHTML = `
        <div class="row mt-2 text-center">
            <h3>Your BMI is</h3>
            <h2 class="text-warning"> ${result.toFixed(2)}</h2>
            <p>You are Underweight</p>
        </div>
        `;
    }
    else if (result> 18.5 && result< 24.9) {
        document.getElementById('impres').innerHTML = `
        <div class="row mt-2 text-center">
            <h3>Your BMI is</h3>
            <h2 class="text-success"> ${result.toFixed(2)}</h2>
            <p>You have Normal BMI</p>
        </div>
        `;

    }
    else if (result> 25.0 && result< 39.9) {
        document.getElementById('impres').innerHTML = `
        <div class="row mt-2 text-center">
            <h3>Your BMI is</h3>
            <h2 class="text-warning"> ${result.toFixed(2)}</h2>
            <p>You are Overweight</p>
        </div>
        `;

    }
    else {
        document.getElementById('impres').innerHTML = `
        <div class="row mt-2 text-center">
            <h3>Your BMI is</h3>
            <h2 class="text-danger"> ${result.toFixed(2)}</h2>
            <p>You are Obese</p>
        </div>
        `;

    }
}

