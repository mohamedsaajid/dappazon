import { ethers } from 'ethers'

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <div className='nav__brand'>
                <h1>D-App</h1>
            </div>

            <input
                type="text"
                className="nav__search"
            />

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Link your wallet
                </button>
            )}

            <ul className='nav__links'>
                <li><a href="#Best Sellers">Best Sellers</a></li>
                <li><a href="#Highest Rated">Highest Rated</a></li>
                <li><a href="#Food">Food</a></li>
                <li><a href="#Clothing & Jewelry">Clothing</a></li>
                <li><a href="#Grocery">Grocery</a></li>
                <li><a href="#Gadgets">Gadgets</a></li>
                <li><a href="#Electronics">Electronics</a></li>
                <li><a href="#Toys">Toys</a></li>
                
            </ul>
        </nav>
    );
}

export default Navigation;