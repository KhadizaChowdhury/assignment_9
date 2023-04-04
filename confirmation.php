<?php include_once 'header.php'
?>
<?php
if ( $_SERVER['REQUEST_METHOD'] == "POST" ) {
    // Validate form inputs
    $name = trim( $_POST['name'] );
    $email = trim( $_POST['email'] );
    $subject = trim( $_POST['subject'] );
    $message = trim( $_POST['message'] );

    if ( empty( $name ) || empty( $email ) || empty( $subject ) || empty( $message )) {
        echo "Please fill out all fields";
        exit;
    }

    if ( !filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
        echo "Invalid email format";
        exit;
    }

    ?>
    <div class="container py-4 py-xl-5">
        <div class="alert alert-success" role="alert">
            <span>Thank you for contacting us, <strong> <?php echo $name ;?></strong>. We will get back to you as soon as possible!</span>
        </div>
    </div>
    <?php
    exit;
}
?>