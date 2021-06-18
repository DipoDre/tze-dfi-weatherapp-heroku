const Error = ({ data }) => {
    return ( 
        <div className="container">
            <div className="row location">

                <div className="col-10 alert alert-danger mt-3 text-center" role="alert">
                    { data }
                </div>
            </div>
    </div>
    );
}

export default Error;
