function Home() {
    return (
        <div className="homeContainer d-flex flex-column align-items-center justify-content-center">
            <div className="first3rd w-75">
                <h1 className="mt-5">Welcome</h1>
                <h6>This is a demo page for the <a href="https://fakestoreapi.com/">Fake Store API</a></h6>
                <div className="homeText w-100">
                    <p>Use the navigation bar to view products, add a product, or view product details.</p>
                    <p>Click on the "Products" link to see a list of products.</p>
                    <p>Click on the "Add Product" link to add a new product.</p>
                    <p>Click on a product to view its details.</p>
                    <p>Meanwhile, in the background there'll be a series of axios gets, fetches, and nifty React action, with a Bootstrap cherry on top. This should look and perform as smooth as butter.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;