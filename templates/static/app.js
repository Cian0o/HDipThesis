
class Record {
    constructor(field0, field1, field2, field3, field4, field5) {
        this.field0 = field0;
        this.field1 = field1;
        this.field2 = field2;
        this.field3 = field3;
        this.field4 = field4;
        this.field5 = field5;
    }
}

class UI {
    addBookToList(record) {
        const list = document.getElementById('dynamicTableRows');
        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
					  <td>${record.field0}</td>
					  <td>${record.field1}</td>
					  <td>${record.field2}</td>
					  <td>${record.field3}</td>
					  <td>${record.field4}</td>
					  <td>${record.field5}</td>
					  <td style="color: #65db61;"><a href="#" class="delete">X<a></td>
					`;

        list.appendChild(row);
    }

    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const confirmInput = document.querySelector('.confirmInput');
        // Get form
        const form = document.querySelector('#bodyForms');
        // Insert alert
        // confirmInput.insertBefore(div, form);

        // Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteRecord(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('field0').value = '';
        document.getElementById('field1').value = '';
        document.getElementById('field2').value = '';
        document.getElementById('field3').value = '';
        document.getElementById('field4').value = '';
        document.getElementById('field5').value = '';
    }
}

// Event Listener for add record
document.getElementById('bodyForms').addEventListener('submit', function(e){
    // Get form values
    const 	field0 = document.getElementById('field0').value,
            field1 = document.getElementById('field1').value,
            field2 = document.getElementById('field2').value
            field3 = document.getElementById('field3').value
            field4 = document.getElementById('field4').value
            field5 = document.getElementById('field5').value

    // Instantiate book
    const record = new Record(field0, field1, field2, field3, field4, field5);

    // Instantiate UI
    const ui = new UI();

    console.log(ui);

    // Validate
    if(field0 === '' || field1 === '' || field2 === '' || field3 === '' || field4 === '' || field5 === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(record);

        // Show success
        ui.showAlert('Record Added!', 'success');

        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event Listener for delete
document.getElementById('dynamicTableRows').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();

    // Delete book
    ui.deleteRecord(e.target);

    // Show message
    ui.showAlert('Record Removed!', 'success');

    e.preventDefault();
});



//Write prescription submission with rendering of table into UI along with a clear and confirm/submit button!