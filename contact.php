<?php include_once 'header.php'
?>
    <section>
        <section class="py-4 py-xl-5">
            <div class="container">
                <div class="row">
                    <div class="col"><iframe allowfullscreen="" frameborder="0" src="https://cdn.bootstrapstudio.io/placeholders/map.html" width="100%" height="100%"></iframe></div>
                    <div class="col-md-6 col-xl-4">
                        <div>
                            <form class="p-3 p-xl-4" method="POST" action="confirmation.php">
                                <h4>Contact us</h4>
                                <p class="text-muted">Eros ligula lobortis elementum amet commodo ac nibh ornare, eu lobortis.</p>
                                <div class="mb-3">
                                    <label class="form-label" for="name">Name</label>
                                    <input class="form-control" type="text" id="name" name="name" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="email">Email</label>
                                    <input class="form-control" type="email" id="email" name="email" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="subject">Subject</label>
                                    <input class="form-control" type="text" id="subject" name="subject" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="message">Message</label>
                                    <textarea class="form-control" id="message" name="message" rows="6" required></textarea>
                                </div>
                                <div class="mb-3">
                                    <button class="btn btn-primary" type="submit">Send </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
<?php include_once 'footer.php'
?>