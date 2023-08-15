import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
	div
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1 style={{
				color: "red",
				textAlign: "center",
				marginTop: "-50px"
			}}>
				RidX : Make every ride feel like a shortcut
			</h1>
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Our Mission</FooterLink>
						<FooterLink href="#">Testimonials</FooterLink>
						{/* <FooterLink href="#">Careers</FooterLink> */}
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">Ride</FooterLink>
						<FooterLink href="#">Drive</FooterLink>
					</Column>
					<Column>
						<Heading>Help & FAQs</Heading>
						<FooterLink href="#">Contact Us</FooterLink>
						<FooterLink href="#">FAQs</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: "10px" }}>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: "10px" }}>
									Instagram
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>

			</Container>
			<div className="copyright">
				<p>Copyright © 2021 RidX Co. All Rights Reserved. Designed by Peterson Midouin </p>
			</div>
		</Box>
	);
};
export default Footer;
  