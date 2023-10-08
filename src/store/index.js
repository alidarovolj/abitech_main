import {createStore} from "vuex";
import img1 from '@/assets/img/insights/kazMunaiGaz.png'
import img1AccBg from '@/assets/img/ourAccomplishments/first-bg.png';
import img1Acc from '@/assets/img/ourAccomplishments/first.png'
import img3 from "@/assets/img/indSectors/3.png";
import img2 from "@/assets/img/indSectors/2.png";

export default createStore({
    modules: {}, actions: {}, mutations: {}, state: {
        news: [{
            id: 1,
            title: "ASKOU – INVENTORY PROJECT IN JSC NC KAZMUNAYGAS",
            img: img1,
            short_desc: "Национальной компанией «КазМунайГаз» в рамках цифровизации в 2020 году была внедрена система автоматизированного учета основных средств «АСКОУ – Инвентаризация».",
            description: "The national company \"KazMunayGas\" within the framework of digitalization in 2020 introduced the system of automated accounting of fixed assets \"ASKOU – Inventory\". The work was done \"turnkey\", including the supply of equipment, user training and free maintenance in the first year of use. All fixed assets on the balance sheet of JSC NC KazMunayGas were digitized with RFID tags for various purposes, an external inspection was carried out and the current state of the OS was photographed, all data was stored in the system. The organizational structure of the enterprise was also created in the system, employees and users of fixed assets were introduced, user rights were delimited according to the authority matrix. The ASKOU – Inventory system will reduce the time of inventory several times, while involving a minimum of employees, minimizes the impact of the human factor on the results of inventory, automates control over all financially responsible persons / OS users. For ease of use, integration with the Enterprise ERP system - SAP and with Active Directory is implemented.",
            pdf: null
        }],
        accomplishments: [{
            id: 1,
            title: "Asia-Pacific, Asialaw Profiles 2021",
            img: img1Acc,
            img_bg: img1AccBg,
            short_desc: "The team of GRATA International was ranked among the best firms in Kazakhstan and placed in the highest tiers - outstanding and recommended in General Business Law, Energy, Oil&Gas, Construction",
            description: "ABiTech is ranked 4th in the Top 10 Innovative Companies Ranking of Kazakhstan 2018… by the National Agency for\nTechnological Development, together with the MOST Business Incubator, with the support of the Ministry for Investment and Development of the Republic of Kazakhstan, the “Ranking of Innovative Companies of Kazakhstan 2018” was held. Any Kazakh company could take part. The TOP 10 Winning Companies were selected based on the results of an assessment by independent experts and a technological assessment by NATR JSC. The success of ABiTech in introducing innovations in various industries was awarded with a Diploma and was awarded the 4th place in the rating of innovative companies in the Republic of Kazakhstan.",
            acc_pdf: null,
            certificate: null
        },{
            id: 2,
            title: "Asia-Pacific, Asialaw Profiles 2021",
            img: img1Acc,
            img_bg: img1AccBg,
            short_desc: "The team of GRATA International was ranked among the best firms in Kazakhstan and placed in the highest tiers - outstanding and recommended in General Business Law, Energy, Oil&Gas, Construction",
            description: "ABiTech is ranked 4th in the Top 10 Innovative Companies Ranking of Kazakhstan 2018… by the National Agency for\nTechnological Development, together with the MOST Business Incubator, with the support of the Ministry for Investment and Development of the Republic of Kazakhstan, the “Ranking of Innovative Companies of Kazakhstan 2018” was held. Any Kazakh company could take part. The TOP 10 Winning Companies were selected based on the results of an assessment by independent experts and a technological assessment by NATR JSC. The success of ABiTech in introducing innovations in various industries was awarded with a Diploma and was awarded the 4th place in the rating of innovative companies in the Republic of Kazakhstan.",
            acc_pdf: null,
            certificate: null
        },{
            id: 3,
            title: "Asia-Pacific, Asialaw Profiles 2021",
            img: img1Acc,
            img_bg: img1AccBg,
            short_desc: "The team of GRATA International was ranked among the best firms in Kazakhstan and placed in the highest tiers - outstanding and recommended in General Business Law, Energy, Oil&Gas, Construction",
            description: "ABiTech is ranked 4th in the Top 10 Innovative Companies Ranking of Kazakhstan 2018… by the National Agency for\nTechnological Development, together with the MOST Business Incubator, with the support of the Ministry for Investment and Development of the Republic of Kazakhstan, the “Ranking of Innovative Companies of Kazakhstan 2018” was held. Any Kazakh company could take part. The TOP 10 Winning Companies were selected based on the results of an assessment by independent experts and a technological assessment by NATR JSC. The success of ABiTech in introducing innovations in various industries was awarded with a Diploma and was awarded the 4th place in the rating of innovative companies in the Republic of Kazakhstan.",
            acc_pdf: null,
            certificate: null
        }],
        indSectors: [
            {
                title: "Oil & Gas",
                description: "Our Oil and Gas team has extensive experience delivering complex projects. We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle.",
                img: img1,
                content: "Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.\n" +
                    "We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.\n" +
                    "\n" +
                    "We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:\n" +
                    "\n" +
                    "Legal support in obtaining subsoil use rights.\n" +
                    "Advice on subsoil use contracts.\n" +
                    "M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.\n" +
                    "Legal support in establishing and operation of joint ventures.\n" +
                    "Environmental audit and litigation.\n" +
                    "State control and regulation: legal advice and representation.\n" +
                    "Taxation and tax dispute: audit and litigation.\n" +
                    "Transfer pricing: export structuring, audit, litigation.\n" +
                    "Production sharing agreement.\n" +
                    "Joint venture agreement.\n" +
                    "Dispute resolution and much more."
            },
            {
                title: "Industry & Trade",
                description: "Combining the strength of all our industry sectors we have created what we believe is a leading practice for assisting in establishing a strong legal presence and further support in the Industry and Trade business.",
                img: img3,
                content: "Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.\n" +
                    "We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.\n" +
                    "\n" +
                    "We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:\n" +
                    "\n" +
                    "Legal support in obtaining subsoil use rights.\n" +
                    "Advice on subsoil use contracts.\n" +
                    "M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.\n" +
                    "Legal support in establishing and operation of joint ventures.\n" +
                    "Environmental audit and litigation.\n" +
                    "State control and regulation: legal advice and representation.\n" +
                    "Taxation and tax dispute: audit and litigation.\n" +
                    "Transfer pricing: export structuring, audit, litigation.\n" +
                    "Production sharing agreement.\n" +
                    "Joint venture agreement.\n" +
                    "Dispute resolution and much more."
            },
            {
                title: "Construction & Infrastructure",
                description: "The Construction and Infrastructure team of GRATA International offer a full range of legal services to assist and advise our clients in the area of construction а infrastructure, energy, transport and other facilities in Kazakhstan, Central Asia and the CIS. ",
                img: img2,
                content: "Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.\n" +
                    "We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.\n" +
                    "\n" +
                    "We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:\n" +
                    "\n" +
                    "Legal support in obtaining subsoil use rights.\n" +
                    "Advice on subsoil use contracts.\n" +
                    "M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.\n" +
                    "Legal support in establishing and operation of joint ventures.\n" +
                    "Environmental audit and litigation.\n" +
                    "State control and regulation: legal advice and representation.\n" +
                    "Taxation and tax dispute: audit and litigation.\n" +
                    "Transfer pricing: export structuring, audit, litigation.\n" +
                    "Production sharing agreement.\n" +
                    "Joint venture agreement.\n" +
                    "Dispute resolution and much more."
            }
        ],
        locations: [
            {
                id: 1,
                name: "Almaty",
                addresses: [
                    {
                        address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                        phone: "+7 (771) 762-22-85"
                    }
                ]
            },
            {
                id: 2,
                name: "Astana",
                addresses: [
                    {
                        address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                        phone: "+7 (771) 762-22-85"
                    }
                ]
            },
            {
                id: 3,
                name: "Tashkent",
                addresses: [
                    {
                        address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                        phone: "+7 (771) 762-22-85"
                    }
                ]
            },
            {
                id: 4,
                name: "Moskow",
                addresses: [
                    {
                        address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                        phone: "+7 (771) 762-22-85"
                    }
                ]
            },
            {
                id: 5,
                name: "Saint - Petersburg",
                addresses: [
                    {
                        address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                        phone: "+7 (771) 762-22-85"
                    }
                ]
            },
        ]
    }, getters: {
        getNews: (state) => state.news,
        getAccomplishments: (state) => state.accomplishments,
        getIndSectors: (state) => state.indSectors,
        getLocations: (state) => state.locations
    },
});
