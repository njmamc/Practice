import './Register.css'

function Register() {
    return (
        <div>
            <form className="row g-3 mainForm">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">First Name</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>

                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Last Name</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>

                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>

                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">User Name</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>


                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>

                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>

                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>

                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>

                <div className="col-md-6">
                    <label for="inputZip" className="form-label">PinCode</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
}


export default Register;