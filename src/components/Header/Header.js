import "./Header.scss";
import Button from "../UploadButton/UploadButton";
import SearchBar from "../SearchBar/SearchBar";
import IconImage from "../IconImage/IconImage";
import Upload from "../../assets/icons/upload.svg";
import DefaultIcon from "../../assets/images/Mohan-muruge.jpg";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav className="nav">
			<div className="nav__logo">
				<Link to={"/"}>
					<img src={Logo} alt="BrainStation Logo"></img>
				</Link>
			</div>
			<div className="nav__rightbox">
				<div className="nav__search">
				<SearchBar></SearchBar>
					<IconImage src={DefaultIcon} className="nav__icon"></IconImage>
				</div>
				<Link to={"/upload"}>
					<Button icon={Upload}>Upload</Button>
				</Link>
				<IconImage src={DefaultIcon} className="nav__icon--tablet"></IconImage>
			</div>
		</nav>
	);
}

export default Nav;
