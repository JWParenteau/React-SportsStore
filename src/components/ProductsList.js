import React from 'react'

export default function ProductsList() {
    return (
        <section class="items">
        <ul>
            <li>
                <img src="images/soccerball.jpg" alt="Soccer Ball" Height="100" />
                <h3>Soccer Ball</h3>
                <div>$44.00</div>
                <p>The best soccer ball ever</p>
                <button>Add to cart</button>
            </li>
            <li>
                <img src="images/tubingraft.jpg" alt="Soccer Ball" Height="100" />
                <h3>Tubing Raft</h3>
                <div>$624.00</div>
                <p>Have some extreme fun being pulled on this raft!</p>
                <button>Add to cart</button>
            </li>
            <li>
                <img src="images/chessboard.jpg" alt="Soccer Ball" Height="100" />
                <h3>Chessboard and Pieces</h3>
                <div>$276.00</div>
                <p>Hancrafted from the finest wood.</p>
                <button>Add to cart</button>
            </li>
            <li>
                <img src="images/soccerjersey.jpg" alt="Soccer Ball" Height="100" />
                <h3>Soccer Jersey</h3>
                <div>$711.00</div>
                <p>Soccer jersey.</p>
                <button>Add to cart</button>
            </li>
            <li>
                <img src="images/goggles.jpg" alt="Soccer Ball" Height="100" />
                <h3>Goggles</h3>
                <div>$333.00</div>
                <p>Some goggles for when you go swimming.</p>
                <button>Add to cart</button>
            </li>
        </ul>
    </section>
    );
}
