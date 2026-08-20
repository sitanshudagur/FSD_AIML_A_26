const bookdata = [

    {
        image: "https://tse2.mm.bing.net/th/id/OIP.WyPGTyB7Z1s3KTmJ6Kr6EwHaLG?r=0&pid=Api&P=0&h=180",
        price: 345
    },

    {
        image: "https://tse3.mm.bing.net/th/id/OIP.BR6NLuGdR6fhVui4olGZugHaJI?r=0&pid=Api&P=0&h=180",
        price: 545
    },

    {
        image: "https://tse3.mm.bing.net/th/id/OIP.BR6NLuGdR6fhVui4olGZugHaJI?r=0&pid=Api&P=0&h=180",
        price: 679
    }

];


function Book(props) {

    // Image
    const image = React.createElement(
        "img",
        {
            src: props.image,
            className: "book-image"
        }
    );


    // Price
    const h2 = React.createElement(
        "h2",
        {},
        "Price: ₹" + props.price
    );


    // Button
    const button = React.createElement(
        "button",
        {
            className: "cart-button"
        },
        "Add To Cart"
    );


    // Card
    const card = React.createElement(
        "div",
        {
            className: "card"
        },
        [
            image,
            h2,
            button
        ]
    );


    return card;
}


// Create Book components
const bookstore = bookdata.map((book) => {

    return React.createElement(
        Book,
        {
            image: book.image,
            price: book.price
        }
    );

});


// Get root element
const parent = document.getElementById("root");


// Create React root
const root = ReactDOM.createRoot(parent);


// Render
root.render(
    React.createElement(
        "div",
        {
            className: "book-container"
        },
        bookstore
    )
);