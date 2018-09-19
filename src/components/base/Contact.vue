<template>
    <main id="content">
        <div class="container">
            <h1 class="display-4 mb-5 py-5 text-center">Contact</h1>
        </div>
        <div class="bg-skew bg-skew-light">
            <div class="container">
                <div class="row justify-content-lg-center">
                    <div class="col-lg-9">
                        <p>Please fill out the form below and we will get back to you as soon as possible.</p>
                        <p class="small">Fields marked with an * are required.</p>
                        <form class="py-4">
                            <div class="form-group">
                                <label for="inputName" class="small text-uppercase">Name *</label>
                                <input type="text" class="form-control" id="inputName" placeholder="Enter your name" required="">
                            </div>
                            <div class="form-group">
                                <label for="inputEmail" class="small text-uppercase">Email *</label>
                                <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email address" required="">
                            </div>
                            <div class="form-group">
                                <label for="messageTetxarea" class="small text-uppercase">Message *</label>
                                <textarea class="form-control rounded" id="messageTetxarea" rows="9" placeholder="Enter your message" required=""></textarea>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="inputCheck">
                                <label class="form-check-label small" for="inputCheck">I agree with the <a href="#">terms and conditions</a> </label>
                            </div>
                            <button type="submit" class="btn btn-pill btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div><!-- end bg-skew -->
    </main>
</template>
