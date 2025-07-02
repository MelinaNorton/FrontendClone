import SubsidiarySection from "./subsidiary_section";

interface ISubsidiaries {images:string[] , logo:string, text:string, labels:string[], bgColor:string}

const subsidiaries:ISubsidiaries[] = [
    {
        images:['resources/edu_img_1.png', 'resources/edu_img_2.png', 'resources/edu_img_3.png','resources/edu_img_2.png', 'resources/edu_img_2.png'],
        logo:'resources/education_section_logo.png',
        text:"SPEEEX Education is an educational institution specializing in workforce training and development for the BPO/ICT sector. Its comprehensive training curricula include:",
        labels:['Language Modules', 'Technical Modules', 'Soft Skills & Communication', 'Customer Service', 'Sales'],
        bgColor: "resources/s_bg_education.png",
    },
    {
        images: ['resources/rhen_img_1.png', 'resources/rhen_img_2.png', 'resources/rhen_img_3.png', 'resources/rhen_img_2.png', 'resources/rhen_img_2.png'],
        logo: 'resources/rhenum_section_logo.png',
        text: 'Rhenum is a specialized software development agency dedicated to crafting products and digital platforms that automate enterprise processes. Its core focus areas include:',
        labels:  ['App Development', 'IT Counseling', 'Information Security Audits', 'Web Development'],
        bgColor: "resources/s_bg_rhenum.png"
    },
    {
        images: ['resources/as_img_1.png',  'resources/as_img_2.png', 'resources/as_img_3.png', 'resources/as_img_4.png', 'resources/rhen_img_2.png'],
        logo: 'resources/ascendio_section_logo.png',
        text: 'Asendio is a Learning Experience Platform (LXP), specializing in the delivery of AI-powered, gamified learning experiences that transform the way frontline teams acquire and apply knowledge. Our next-generation SaaS platform creates personalized, engaging, and interactive learning journeys designed to boost knowledge retention, enhance performance, and drive measurable business results.',
        labels: ['Leraning Management System Software', 'Customized Content Creation'],
        bgColor: "resources/ascendio_bg_color.png"
    },
    {
        images: ['resources/md_img_1.png',  'resources/md_img_2.png', 'resources/md_img_3.png', 'resources/md_img_2.png', 'resources/md_img_2.png'],
        logo: 'resources/medienhaus_section_logo.png',
        text:'SPEEEX Medienhaus specializes in creating impactful digital advertising solutions tailored to meet the unique needs of our clients. With a focus on cutting-edge technology and creative strategies, we design compelling campaigns that maximize brand visibility and engagement across digital platforms. Our expertise includes targeted audience segmentation, data-driven campaign optimization, and comprehensive analytics to ensure measurable results and ROI for our partners.',
        labels: ['Digital Advertisement', 'Digital Marketing', 'SEO', 'Social Media Marketing', 'UI/UX Design'],
        bgColor:"resources/md_bg_color.png"
    },
    {
        images: ['resources/st_img_1.png',  'resources/st_img_2.png', 'resources/st_img_3.png', 'resources/st_img_4.png'],
        logo: 'resources/staffify_section_logo.png',
        text: 'Staffify is a specialized recruitment process outsourcing company that excels in providing remote recruiters through through staff leasing, and facilitating the formation of customized teams based in the Republic of Kosova.',
        labels: ['Recruitment Process Outsourcing', 'Remote Recruiters', 'Staff Leasing'],
        bgColor: "resources/st_bg_color.png",
    },
    {
        images: ['resources/pn_img_1.png',  'resources/pn_img_2.png', 'resources/pn_img_3.png'],
        logo: 'resources/PINSS_section_logo.svg',
        text: 'PINSS LLC is a digital consulting firm specialized in advising clients on strategy, process optimization and IT IT transformation. Our focus lays on provision of tailored SAP Consulting solutions to meet the diverse needs of businesses across the Western Europe & United States',
        labels: ['SAP Consulting Solutions', 'Remote Recruiters', 'Staff Leasing'],
        bgColor: "resources/pn_bg_color.png",
    }
]

//5 objects that have all the fields for each subsidiary
//-> one array
//
const AllSubsidiaries = () =>{
    return (
        <div className="flex flex-col bg-black bg-cover">
            {subsidiaries.map((subsidiary, i) => (
                <SubsidiarySection
                    key={i}
                    srcs={subsidiary.images}
                    num_imgs={subsidiary.images.length}
                    logo={subsidiary.logo}
                    text={subsidiary.text}
                    btn_labels={subsidiary.labels}
                    num_btns={subsidiary.labels.length}
                    bg_color={subsidiary.bgColor}/>
            ))}
        </div>
    );
}
export default AllSubsidiaries