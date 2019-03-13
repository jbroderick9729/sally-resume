function App() {
    return (
        <div>
            <header>
                <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="picture of sally"></img>
                <h1>Sally Somename</h1>
            </header>
            
            <section>
                <h2>About me</h2>
                <p>I'm a food and travel enthusiast, traveling the globe and noshing on it all.</p>
            </section>
            
            <section>
                <h2>Experience</h2>
                <ul>
                    <li>
                        <h3>Bazzfeed | Video editor</h3>
                        
                    </li>
                    <li>
                        <h3>Tastemode | Video editing Intern</h3>
                    </li>    
                </ul>
            </section>

            <section>
                <h2>Education</h2>
                    <li>
                        <h3>Le Kordon Blu | Food Cookery</h3>
                    </li>
                    <li>
                        <h3>Worthless University | Expensive Degree</h3>
                    </li>
            </section>

            <section>
                <h2>Contact Info</h2>
                <address> 123 Fake Street Bananatown, Bananastate, Bananacountry | sallyeatsandtravels@juno.com </address>
            </section>

        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));