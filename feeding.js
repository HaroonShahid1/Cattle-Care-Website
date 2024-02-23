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
                            <a class="nav-link" id="dashboard-link" href="animals.html">
                                <div class="sb-nav-link-icon"><i class="fa-solid fa-hippo"></i>  &nbsp; Animals</div>
                            </a>                
                        </div>
                        <div class="nav">
                            <a class="nav-link active-link" id="dashboard-link" href="feeding.html">
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

// Pop Up Of Adding New Feed and Button
function generateNewFeed() {
    const sidebarContainer = document.getElementById('add-new-feed');
    sidebarContainer.innerHTML = `
        <div class="modal fade" id="addAccountModal" tabindex="-1" role="dialog" aria-labelledby="addAccountModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addAccountModalLabel">Add New Feed</h5>
                    </div>
                    <div class="modal-body">
                        <form class="row" id="feedForm">
                        <div class="col-md-4 mb-3">
                        <label for="newParentAccount" class="col-form-label">Feed</label>
                        <div class="input-group">
                            <select class="form-control" id="newParentAccount" required>
                                <option selected disabled>Select Feed</option>
                                <option value="option1">Potatoes</option>
                                <option value="option2">Wheat Straw</option>
                                <option value="option3">Silage</option>
                                <option value="option4">Beet Pulp</option>
                                <option value="option5">Green Fodder</option>
                                <option value="option6">Wanda</option>
                                <option value="option7">Choker</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-2 mb-3">
                        <label for="stock" class="col-form-label">Stock</label>
                        <input type="text" class="form-control" id="stock" readonly>
                    </div>
                    <div class="col-md-2 mb-3">
                        <label for="value" class="col-form-label">Value</label>
                        <input type="text" class="form-control" id="value">
                    </div>
                    <div class="col-md-2 mb-3">
                        <label for="rate" class="col-form-label">Rate</label>
                        <input type="text" class="form-control" id="rate">
                    </div>
                    <div class="col-md-2 mb-3">
                        <label for="totalPrice" class="col-form-label">Total Price</label>
                        <input type="text" class="form-control" id="totalPrice" readonly>
                    </div>

                    <div class="form-group col-md-12">
                        <button type="button" class="btn btn-primary add-feed">Add New Feed</button>
                    </div>

                    <div class="mb-3">
                        <label for="creationDate" class="col-form-label">Creation Date:</label>
                        <input type="date" class="form-control" id="creationDate" readonly>
                    </div>

                    <div class="col-md-12 mt-3" style = "text-align: end;">
                        <button type="submit" class="btn btn-primary">Save Feed</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;

    const addButton = document.querySelector('.add-feed');
    const feedForm = document.getElementById('feedForm');
    const initialColumns = feedForm.querySelectorAll('.col-md-4, .col-md-2');
    
    addButton.addEventListener('click', addNewFeed);
    
    // Function to add a new feed section
    function addNewFeed() {
        const clonedRow = document.createElement('div');
        clonedRow.className = 'row cloned-row';
    
        initialColumns.forEach(column => {
            const clonedColumn = column.cloneNode(true);
            clonedRow.appendChild(clonedColumn);
        });
    
        const deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = '<i class="fas fa-trash-alt delete-row" style="color: red;" ></i>';
        deleteIcon.addEventListener('click', function () {
            clonedRow.remove();
        });
    
        const lastColumn = clonedRow.lastElementChild;
        lastColumn.appendChild(deleteIcon);
        feedForm.insertBefore(clonedRow, addButton.parentNode);
    }
    


}

// Feed Table
function generateFeedTable() {
    const sidebarContainer = document.getElementById('feed-table');
    sidebarContainer.innerHTML = `
        <div class="table-head">
            <table class="table table-bordered mt-3">
                <colgroup>
                    <col style="width: 12.5%;" />
                    <col style="width: 12.5%;" />
                </colgroup>
                <thead class="head_table">
                    <tr>
                        <th>Date</th>
                        <th>No. of Animals</th>
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
                </colgroup>
                <tbody class="table-1">
                    ${generateTableRows()}
                </tbody>
            </table>
        </div>
    `;
}

function generateTableRows() {
    let rows = '';
    for (let i = 1; i <= 9; i++) {
        rows += `
            <tr>
                <td>20-12-2023</td>
                <td>200</td>
            </tr>
        `;
    }
    return rows;
}

function generateCategoryTableRows() {
    let rows = '';
    for (let i = 1; i <= 9; i++) {
        rows += `
        <tr>
            <td>2012</td>
            <td>200</td>
            <td class = "col3" >27800</td>
        </tr>
        `;
    }
    return rows;
}

function generateFeedTable2() {
    const sidebarContainer = document.getElementById('feed-table2');
    sidebarContainer.innerHTML = `

        <div class="table-head">
        <table class="table table-bordered mt-3">
            <colgroup>
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
            </colgroup>
            <thead class="head_table">
                <!-- First Row in Header -->
                <tr class = "pot" >
                    <th colspan="3" >Potatoes</th>
                </tr>
                <!-- Second Row in Header -->
                <tr>
                    <th>Potatoes KG</th>
                    <th>Rate Per KG</th>
                    <th>Total 1</th>
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
            </colgroup>
            <tbody class="table-2">
                ${generateCategoryTableRows()}
            </tbody>
        </table>
    </div>
        
    `;
}

function generateFeedTable3() {
    const sidebarContainer = document.getElementById('feed-table3');
    sidebarContainer.innerHTML = `

        <div class="table-head">
        <table class="table table-bordered mt-3">
            <colgroup>
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
            </colgroup>
            <thead class="head_table">
                <!-- First Row in Header -->
                <tr class = "pot" >
                    <th colspan="3" >Beet Plup</th>
                </tr>
                <!-- Second Row in Header -->
                <tr>
                    <th>Beet Plup KG</th>
                    <th>Rate Per KG</th>
                    <th>Total 2</th>
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
            </colgroup>
            <tbody class="table-2">
                ${generateCategoryTableRows()}
            </tbody>
        </table>
    </div>
        
    `;
}

function generateFeedTable4() {
    const sidebarContainer = document.getElementById('feed-table4');
    sidebarContainer.innerHTML = `

        <div class="table-head">
        <table class="table table-bordered mt-3">
            <colgroup>
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
            </colgroup>
            <thead class="head_table">
                <!-- First Row in Header -->
                <tr class = "pot" >
                    <th colspan="3" >Silage</th>
                </tr>
                <!-- Second Row in Header -->
                <tr>
                    <th>Silage KG</th>
                    <th>Rate Per KG</th>
                    <th>Total 3</th>
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
            </colgroup>
            <tbody class="table-2">
                ${generateCategoryTableRows()}
            </tbody>
        </table>
    </div>
        
    `;
}

function generateFeedTable5() {
    const sidebarContainer = document.getElementById('feed-table5');
    sidebarContainer.innerHTML = `

        <div class="table-head">
        <table class="table table-bordered mt-3">
            <colgroup>
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
            </colgroup>
            <thead class="head_table">
                <!-- First Row in Header -->
                <tr class = "pot" >
                    <th colspan="3" >Wheat Straw</th>
                </tr>
                <!-- Second Row in Header -->
                <tr>
                    <th>Wheat Straw KG</th>
                    <th>Rate Per KG</th>
                    <th>Total 4</th>
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
            </colgroup>
            <tbody class="table-2">
                ${generateCategoryTableRows()}
            </tbody>
        </table>
    </div>
        
    `;
}

function generateFeedTable6() {
    const sidebarContainer = document.getElementById('feed-table6');
    sidebarContainer.innerHTML = `

        <div class="table-head">
        <table class="table table-bordered mt-3">
            <colgroup>
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
            </colgroup>
            <thead class="head_table">
                <!-- First Row in Header -->
                <tr class = "pot" >
                    <th colspan="3" >Wanda</th>
                </tr>
                <!-- Second Row in Header -->
                <tr>
                    <th>Wanda KG</th>
                    <th>Rate Per KG</th>
                    <th>Total 5</th>
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
            </colgroup>
            <tbody class="table-2">
                ${generateCategoryTableRows()}
            </tbody>
        </table>
    </div>
        
    `;
}

function generateFeedTable7() {
    const sidebarContainer = document.getElementById('feed-table7');
    sidebarContainer.innerHTML = `

        <div class="table-head">
        <table class="table table-bordered mt-3">
            <colgroup>
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
            </colgroup>
            <thead class="head_table">
                <!-- First Row in Header -->
                <tr class = "pot" >
                    <th colspan="3" >Green Fodder</th>
                </tr>
                <!-- Second Row in Header -->
                <tr>
                    <th>Green Fodder KG</th>
                    <th>Rate Per KG</th>
                    <th>Total 6</th>
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
            </colgroup>
            <tbody class="table-2">
                ${generateCategoryTableRows()}
            </tbody>
        </table>
    </div>
        
    `;
}

function generateFeedTable8() {
    const sidebarContainer = document.getElementById('feed-table8');
    sidebarContainer.innerHTML = `

        <div class="table-head">
        <table class="table table-bordered mt-3">
            <colgroup>
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
            </colgroup>
            <thead class="head_table">
                <!-- First Row in Header -->
                <tr class = "pot" >
                    <th colspan="3" >Choker</th>
                </tr>
                <!-- Second Row in Header -->
                <tr>
                    <th>Choker KG</th>
                    <th>Rate Per KG</th>
                    <th>Total 7</th>
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
            </colgroup>
            <tbody class="table-2">
                ${generateCategoryTableRows()}
            </tbody>
        </table>
    </div>
        
    `;
}

function generateFeedTable9() {
    const sidebarContainer = document.getElementById('feed-table9');
    sidebarContainer.innerHTML = `

        <div class="table-head">
        <table class="table table-bordered mt-3">
            <colgroup>
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
                <col style="width: 12.5%;" />
            </colgroup>
            <thead class="head_table">
                <!-- First Row in Header -->
                <tr class = "pot" >
                    <th colspan="3" >Overall Total</th>
                </tr>
                <!-- Second Row in Header -->
                <tr>
                    <th>Total7</th>
                    <th>Overall Total</th>
                    <th>Total Feed Cost Per Animal</th>
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
            </colgroup>
            <tbody class="table-2">
                ${generateCategoryTableRows()}
            </tbody>
        </table>
    </div>
        
    `;
}

