import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import footerBanner from "@/assets/footer/footerBanner.png";
const footerLinks = {
	jobs: {
		title: "Jobs",
		links: ["Jobs by locations"],
	},
	profileCV: {
		title: "Profile & CV",
		links: ["Edit profile", "Build CV", "Guides & tutorials"],
	},
	companies: {
		title: "Companies",
		links: ["Top companies"],
	},
	about: {
		title: "About us",
		links: ["Contact us", "Terms & privacy"],
	},
	blog: {
		title: "Blog",
		links: [],
	},
};

const Footer = () => {
	return (
		<footer
			className="pb-4 pt-20 flex flex-col md:flex-row mt-10"
			style={{
				backgroundImage: `url(${footerBanner})`, //footerBanner
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="container mx-auto px-8 pt-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
					{/* Logo and Description */}
					<div className="lg:col-span-4">
						<img
							src="/src/assets/orgLogo/interntext.png"
							alt="InternHub Logo Text"
							className="w-[150px] h-[100px] mb-3"
						/>
						<p className="text-[#f7f7ee] text-sm  leading-[25px]">
							Internhub connects students with both large
							companies and smaller businesses or startups,
							offering more diverse opportunities for those
							seeking dynamic environments and rapid skill
							development.
						</p>
					</div>

					{/* Navigation Links */}
					<div className="lg:col-span-5">
						<div className="grid grid-cols-3 gap-8">
							{Object.entries(footerLinks).map(
								([key, section]) => (
									<div
										key={key}
										className="flex flex-col gap-4"
									>
										<h3 className="text-white font-bold text-lg">
											{section.title}
										</h3>
										{section.links.map((link) => (
											<a
												key={link}
												href="#"
												className="text-white text-base hover:underline"
											>
												{link}
											</a>
										))}
									</div>
								)
							)}
						</div>
					</div>

					{/* CTA Section */}
					<div className="lg:col-span-2">
						<Card className="bg-transparent border-none">
							<CardContent className="flex flex-col gap-3">
								<h2 className="text-white font-bold text-2xl">
									Try It Today
								</h2>
								<p className="text-white">
									Get started for free.
								</p>
								<Button className="bg-[#df44a7] hover:bg-[#df44a7]/90 text-white w-full">
									Start today
									<ArrowRight className="ml-1 h-4 w-4" />
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Contact and Mobile App */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
					<div className="flex flex-col gap-2">
						<h3 className="text-white font-bold text-lg">
							Contact
						</h3>
						<p className="text-white">
							Email: internhub.kalocs@gmail.com
						</p>
						<p className="text-white">
							Location: Lot E2a-7, Road D1, Long Thanh My, Thu Duc
							City, Ho Chi Minh City
						</p>
					</div>
					{/* <div className="flex flex-col gap-2">
						<h3 className="text-white font-bold text-lg">
							Mobile App
						</h3>
						<div className="flex gap-4">
							<img
								src=""
								alt="App Store"
								className="h-[38px] w-[131px]"
							/>
							<img
								src=""
								alt="Google Play"
								className="h-[38px] w-[131px]"
							/>
						</div>
					</div> */}
				</div>

				<Separator className="my-6 bg-white/20" />

				{/* Company Info */}
				<div className="flex flex-col gap-2">
					{/* <h2 className="text-white font-bold italic text-xl">
						Limited Liability Company KALOCS
					</h2> */}
					<p className="text-white text-sm">
						Copyright © Limited Liability Company KALOCS
					</p>
					<p className="text-white text-sm">
						Sử dụng nội dung ở trang này và dịch vụ tại&nbsp;
						<a
							href="https://www.internhub.com"
							className="underline text-pink-400"
						>
							InternHub
						</a>
						&nbsp;có nghĩa là bạn đồng ý với&nbsp;
						<a
							href="/terms-of-service"
							className="underline text-pink-400"
						>
							Thoả thuận sử dụng
						</a>
						&nbsp;và&nbsp;
						<a
							href="/privacy-policy"
							className="underline text-pink-400"
						>
							Chính sách bảo mật
						</a>
						&nbsp;của chúng tôi
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
