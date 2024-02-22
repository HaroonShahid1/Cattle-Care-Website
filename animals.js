// SideBar and Navbar Menu 

function generateSidebar() {
    const sidebarContainer = document.getElementById('sidebar-container');
    sidebarContainer.innerHTML = `
        <!-- SIDEBAR -->
        <section id="sidebar">
            <a href="#" class="brand">
                <i class='bx bxs-check-shield'></i>
                <span class="text">Cattle Care</span>
            </a>
            <img src="file:///E:/Cattle%20Care/img/Logo.png" class="responsive-logo">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion" id="sidenavAccordion" style="padding-top: 20px;">
                    <div class="sb-sidenav-menu">
                        <div class="nav">              
                        </div>
                        <div class="nav">
                            <a class="nav-link" id="dashboard-link" href="batch.html">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-bath"></i> &nbsp; Batches</div>
                            </a>                 
                        </div>
                        <div class="nav">
                            <a class="nav-link active-link" id="dashboard-link" href="animals.html">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-hippo"></i>  &nbsp; Animals</div>
                            </a>                
                        </div>
                        <div class="nav">
                            <a class="nav-link" id="dashboard-link" href="feeding.html">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-comment-dollar"></i> &nbsp; Feeding</div>           
                            </a>                 
                        </div>
                        <div class="nav">
                            <a class="nav-link" id="dashboard-link" href="" style="color: rgba(196, 55, 55, 0.953);">
                                <div class="sb-nav-link-icon"><i class='bx bxs-log-out-circle'></i> &nbsp; Log Out</div>           
                            </a>                 
                        </div>
                    </div>
                </nav>
            </div>
        </section>
        <!-- SIDEBAR -->
    `;
}

// Graphs 
function createChart(ctx, type, labels, datasets, chartTitle) {
    return new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: chartTitle,
                    align: 'start',
                    padding: {
                        bottom: 5
                    },
                    
                    color: '#343C6A',
                    font: {
                        size: 18,
                        weight: 'bold',
                    }
                }
            }
        }
    });
}

// Data for Monthly Total Purchase Price Line Chart
const monthlyPurchasePriceCtx = document.getElementById('monthlyPurchasePrice').getContext('2d');
const monthlyPurchasePriceData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [{
        label: 'Monthly Total Purchase Price',
        data: [200000, 100000, 400000, 300000, 500000, 400000, 600000],
        backgroundColor: 'rgba(24, 20, 243, 1)',
        borderColor: 'rgba(24, 20, 243, 1)',
        borderWidth: 1
    }]
};
const monthlyPurchasePriceChart = createChart(monthlyPurchasePriceCtx, 'line', monthlyPurchasePriceData.labels, monthlyPurchasePriceData.datasets, 'Monthly Total Purchase Price');

// Data for Purchase vs Expense Bar Chart
const purchaseVsExpenseCtx = document.getElementById('purchaseVsExpense').getContext('2d');
const purchaseVsExpenseData = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
        label: 'Purchase',
        data: [7500, 11000, 5000, 7000, 6000, 8000, 7500],
        backgroundColor: 'rgba(26, 22, 243, 1)',
    },
    {
        label: 'Expense',
        data: [4500, 5500, 6000, 4000, 6500, 7000, 5000],
        backgroundColor: 'rgba(252, 170, 11, 1)',
    }]
};
const purchaseVsExpenseChart = createChart(purchaseVsExpenseCtx, 'bar', purchaseVsExpenseData.labels, purchaseVsExpenseData.datasets, 'Purchase vs Expense');

// Pop Up Of Adding New Animal and Button
function generateNewAnimal() {
    const sidebarContainer = document.getElementById('add-new-animal');
    sidebarContainer.innerHTML = `
        <div class="modal fade" id="addAccountModal" tabindex="-1" role="dialog" aria-labelledby="addAccountModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addAccountModalLabel">Add New Animal</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="newParentAccount" class="col-form-label">TAG</label>
                                    <select class="form-control" id="newParentAccount" required>
                                        <option value="option1">SN 1</option>
                                        <option value="option2">SN 2</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="numberOfAnimals" class="col-form-label">Expense:</label>
                                    <input type="text" class="form-control" id="numberOfAnimals" required>
                                </div>
                                <!-- Add more fields here if needed -->
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="numberOfAnimals" class="col-form-label">Purchase Price:</label>
                                    <input type="text" class="form-control" id="numberOfAnimals" required>
                                </div>
                                <div class="mb-3">
                                    <label for="newTitle" class="col-form-label">Weight KG:</label>
                                    <input type="text" class="form-control" id="newTitle" required>
                                </div>
                                <!-- Add more fields here if needed -->
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="numberOfAnimals" class="col-form-label">Price / KG</label>
                            <input type="text" class="form-control" id="numberOfAnimals" required>
                        </div>
                        <div class="mb-3">
                            <label for="totalExpense" class="col-form-label">Total Price:</label>
                            <input type="text" class="form-control" id="totalprice" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="totalExpense" class="col-form-label">Current Price:</label>
                            <input type="text" class="form-control" id="currentprice" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="creationDate" class="col-form-label">Creation Date:</label>
                            <input type="date" class="form-control" id="creationDate" readonly>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Add Animal</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Animals Table
function generateAnimalTable() {
    const sidebarContainer = document.getElementById('animal-table');
    sidebarContainer.innerHTML = `
            <div class="table-head">
            <table class="table table-bordered mt-3">
                <colgroup>
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                </colgroup>
                <thead class="head_table">
                    <tr>
                        <th>TAG</th>
                        <th>Purchase Price</th>
                        <th>Expense</th>
                        <th>Weight KG</th>
                        <th>Price / KG</th>
                        <th>Total Price</th>
                        <th>Current Price</th>
                        <th>Date</th>
                    </tr>
                </thead>
            </table>
        </div>

        <!-- Table Body -->
        <div class="table-body">
            <table class="table table-bordered mt-3">
                <colgroup>
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                </colgroup>
                <tbody>
                    <tr class="sn">
                        <td class="highlight">SN-1</td>
                        <td>250000</td>
                        <td>3000</td>
                        <td>200</td>
                        <td>1265.00</td>
                        <td>253000</td>
                        <td>68340</td>
                        <td>20-12-2023</td>
                    </tr>
                        <tr class="sn">
                        <td class="highlight">SN-1</td>
                        <td>250000</td>
                        <td>3000</td>
                        <td>200</td>
                        <td>1265.00</td>
                        <td>253000</td>
                        <td>68340</td>
                        <td>20-12-2023</td>
                    </tr>
                        <tr class="sn">
                        <td class="highlight">SN-1</td>
                        <td>250000</td>
                        <td>3000</td>
                        <td>200</td>
                        <td>1265.00</td>
                        <td>253000</td>
                        <td>68340</td>
                        <td>20-12-2023</td>
                    </tr>
                    </tr>
                        <tr class="sn">
                        <td class="highlight">SN-1</td>
                        <td>250000</td>
                        <td>3000</td>
                        <td>200</td>
                        <td>1265.00</td>
                        <td>253000</td>
                        <td>68340</td>
                        <td>20-12-2023</td>
                    </tr>
                    </tr>
                        <tr class="sn">
                        <td class="highlight">SN-1</td>
                        <td>250000</td>
                        <td>3000</td>
                        <td>200</td>
                        <td>1265.00</td>
                        <td>253000</td>
                        <td>68340</td>
                        <td>20-12-2023</td>
                    </tr>
                    </tr>
                        <tr class="sn">
                        <td class="highlight">SN-1</td>
                        <td>250000</td>
                        <td>3000</td>
                        <td>200</td>
                        <td>1265.00</td>
                        <td>253000</td>
                        <td>68340</td>
                        <td>20-12-2023</td>
                    </tr>
                    </tr>
                        <tr class="sn">
                        <td class="highlight">SN-1</td>
                        <td>250000</td>
                        <td>3000</td>
                        <td>200</td>
                        <td>1265.00</td>
                        <td>253000</td>
                        <td>68340</td>
                        <td>20-12-2023</td>
                    </tr>
                    </tr>
                        <tr class="sn">
                        <td class="highlight">SN-1</td>
                        <td>250000</td>
                        <td>3000</td>
                        <td>200</td>
                        <td>1265.00</td>
                        <td>253000</td>
                        <td>68340</td>
                        <td>20-12-2023</td>
                    </tr>
            
                </tbody>
            </table>
        </div>
    `;
}

