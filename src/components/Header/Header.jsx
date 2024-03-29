import avatar from '../../assets/images/avatar.png'
const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Chefs Table</a>
                </div>
                <div className="text-xl gap-2 flex-1">
                    <p>Home</p>
                    <p>Recipes</p>
                    <p>About</p>
                    <p>Search</p>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>

                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={avatar} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;