function Home() {
    return (
        <div className="homeContainer d-flex flex-column align-items-center justify-content-center">
            <div className="first3rd w-75">
                <h1 className="mt-5">Welcome</h1>
                <h6>This is a demo page for the <a href="https://fakestoreapi.com/">Fake Store API</a></h6>
                <div className="homeText w-100">
                    <p>
                        Use the navigation bar to view products, add a product, or view product details.
                        <br />Click on the "Products" link to see a list of products.
                        <br />Click on the "Add Product" link to add a new product.
                        <br />Click on a product to view its details. From there you can edit and update or delete the product.
                        <br />- add to cart button also available, currently w/o functionality.
                    </p>
                    <p>Meanwhile, in the background there'll be a series of axios gets, fetches, and nifty React action, with a Bootstrap cherry on top. This should look and perform as smooth as butter.</p>
                    <p>There's also an obligatory message in the footer. The main point is, do whatever you'd like with this. You won't ruin anything.</p>
                    <p>I didn't bother adding a sort or filter function. Maybe next time...</p>
                </div>
            </div>
        </div>
    )
}

export default Home;