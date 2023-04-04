<?php include_once 'header.php'
?>
<div class="container py-4 py-xl-5">
    <div class="row">
        <div class="col-md-9">
                <div id="page-content">
                </div>
                <div>
                    <!-- Loader Starts -->
                        <div id="loader" class="d-none loader_section d-flex justify-content-center aligm-items-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        </div>
                    <!-- Loader End -->

                    <div id="displayCat" class="container">
                        
                    </div>

                    <div id="post-not-found" class="d-none mt-5 container">
                        <div class="p-3 mb-2 bg-warning text-dark">No posts Found</div>
                    </div>
                </div>
            
        </div>
        <div class="col-md-3">
            <form class="p-3 p-xl-4" method="GET" action="confirmation.php">
                <h4>Search here</h4>
                <div class="mb-3">
                    <input class="form-control" type="text" id="search" name="search" required>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" type="submit">Send </button>
                </div>
            </form>
            <h5>All Categories</h5>
            <ul>
                <div id="categoryName">
                </div>
            </ul>
        </div>
    </div>
</div>
<?php include_once 'footer.php'
?>