import SubsidiarySection from "./subsidiary_section";

const images = [
  ['resources/edu_img_1.png', 'resources/edu_img_2.png', 'resources/edu_img_3.png','resources/edu_img_2.png', 'resources/edu_img_2.png'],
  ['resources/rhen_img_1.png', 'resources/rhen_img_2.png', 'resources/rhen_img_3.png', 'resources/rhen_img_2.png', 'resources/rhen_img_2.png'],
  ['resources/as_img_1.png',  'resources/as_img_2.png', 'resources/as_img_3.png', 'resources/as_img_4.png', 'resources/rhen_img_2.png'],
  ['resources/md_img_1.png',  'resources/md_img_2.png', 'resources/md_img_3.png', 'resources/md_img_2.png', 'resources/md_img_2.png'],
  ['resources/st_img_1.png',  'resources/st_img_2.png', 'resources/st_img_3.png', 'resources/st_img_4.png'],           // ← this line was fine
  ['resources/pn_img_1.png',  'resources/pn_img_2.png', 'resources/pn_img_3.png'],                                      // ← make sure the comma above and the closing ] here are both present
];
const logos = ['resources/education_section_logo.png', 'resources/rhenum_section_logo.png', 'resources/ascendio_section_logo.png', 'resources/medienhaus_section_logo.png', 'resources/staffify_section_logo.png', 'resources/PINSS_section_logo.svg']
const text = ['SPEEEX Education is an educational institution specializing in workforce training and development for the BPO/ICT sector. Its comprehensive training curricula include:', 'Rhenum is a specialized software development agency dedicated to crafting products and digital platforms that automate enterprise processes. Its core focus areas include:', 'Asendio is a Learning Experience Platform (LXP), specializing in the delivery of AI-powered, gamified learning experiences that transform the way frontline teams acquire and apply knowledge. Our next-generation SaaS platform creates personalized, engaging, and interactive learning journeys designed to boost knowledge retention, enhance performance, and drive measurable business results.', 'SPEEEX Medienhaus specializes in creating impactful digital advertising solutions tailored to meet the unique needs of our clients. With a focus on cutting-edge technology and creative strategies, we design compelling campaigns that maximize brand visibility and engagement across digital platforms. Our expertise includes targeted audience segmentation, data-driven campaign optimization, and comprehensive analytics to ensure measurable results and ROI for our partners.', 'Staffify is a specialized recruitment process outsourcing company that excels in providing remote recruiters through through staff leasing, and facilitating the formation of customized teams based in the Republic of Kosova.', 'PINSS LLC is a digital consulting firm specialized in advising clients on strategy, process optimization and IT IT transformation. Our focus lays on provision of tailored SAP Consulting solutions to meet the diverse needs of businesses across the Western Europe & United States']
const labels = [['Language Modules', 'Technical Modules', 'Soft Skills & Communication', 'Customer Service', 'Sales'], ['App Development', 'IT Counseling', 'Information Security Audits', 'Web Development'], ['Leraning Management System Software', 'Customized Content Creation'], ['Digital Advertisement', 'Digital Marketing', 'SEO', 'Social Media Marketing', 'UI/UX Design'], ['Recruitment Process Outsourcing', 'Remote Recruiters', 'Staff Leasing'], ['SAP Consulting Solutions', 'Remote Recruiters', 'Staff Leasing']]
const bgColor = ["resources/s_bg_education.png", "resources/s_bg_rhenum.png", "resources/ascendio_bg_color.png", "resources/md_bg_color.png", "resources/st_bg_color.png", "resources/pn_bg_color.png"]
const AllSubsidiaries = () =>{
    return (
        <div className="flex flex-col bg-black bg-cover">
            {images.map((srcs, i) => (
                <SubsidiarySection
                    key={i}
                    srcs={srcs}
                    num_imgs={srcs.length}
                    logo={logos[i]}
                    text={text[i]}
                    btn_labels={labels[i]}
                    num_btns={labels[i].length}
                    bg_color={bgColor[i]}/>
            ))}
        </div>
    );
}
export default AllSubsidiaries