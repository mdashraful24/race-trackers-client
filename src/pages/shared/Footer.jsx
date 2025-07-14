import siteLogo from "../../../src/assets/logo.png"

const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="container mx-auto text-base-content px-8 md:px-10 lg:px-24 pt-10 pb-10 flex flex-col justify-center items-center gap-3">
                <div className="flex items-center gap-2">
                    <img src={siteLogo} alt="siteLogo" className="w-12" />
                    <h2 className="text-3xl font-extrabold text-gray-300">RaceTrackers</h2>
                </div>
                <p className="lg:w-2/3 mx-auto text-gray-400 text-center">RaceTrackers hosts exciting marathons, offering a well-organized race experience with top-notch support. Join us for a memorable journey, whether you're a seasoned runner or a first-timer!</p>
            </footer>
            <footer className="footer container mx-auto grid grid-cols-2 md:grid-cols-4 justify-items-center gap-8 px-8 text-gray-400">
                <nav>
                    <h6 className="text-lg uppercase font-bold text-gray-300">Club</h6>
                    <a className="link link-hover text-base">About Us</a>
                    <a className="link link-hover text-base">Contact</a>
                    <a className="link link-hover text-base">Blog</a>
                </nav>
                <nav>
                    <h6 className="text-lg uppercase font-bold text-gray-300">Services</h6>
                    <a className="link link-hover text-base">Events</a>
                    <a className="link link-hover text-base">Workout</a>
                    <a className="link link-hover text-base">Training</a>
                </nav>
                <nav>
                    <h6 className="text-lg uppercase font-bold text-gray-300">Media</h6>
                    <a className="link link-hover text-base" href='https://www.facebook.com/ashraful.islam.ratul.455820?mibextid=ZbWKwL'
                        target="_blank">Facebook</a>
                    <a className="link link-hover text-base" href="https://x.com/?lang=en" target="_blank">Twitter</a>
                    <a className="link link-hover text-base" href="https://www.instagram.com/" target="_blank">Instagram</a>
                </nav>
                <nav>
                    <h6 className="text-lg uppercase font-bold text-gray-300">Legal</h6>
                    <a className="link link-hover text-base">Terms of use</a>
                    <a className="link link-hover text-base">Privacy policy</a>
                    <a className="link link-hover text-base">Cookie policy</a>
                </nav>
            </footer>
            <p className="text-center text-gray-400 pt-10">&copy; {new Date().getFullYear()} RaceTrackers. All rights reserved.</p>
            <p className="text-center text-gray-400 pb-3">Designed, Developed and Maintained by Ashraful Islam.</p>
        </div>
    );
};

export default Footer;