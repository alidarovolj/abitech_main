import {createStore} from "vuex";
import img1 from '@/assets/img/insights/kazMunaiGaz.png'
import img1AccBg from '@/assets/img/ourAccomplishments/first-bg.png';
import img1Acc from '@/assets/img/ourAccomplishments/first.png'
import img3 from "@/assets/img/indSectors/3.png";
import img2 from "@/assets/img/indSectors/2.png";
import img4 from "@/assets/img/products/fourth.png";
import imgProd1 from '@/assets/img/products/first.png'
import imgProd2 from '@/assets/img/products/second.png'
import imgProd3 from '@/assets/img/products/third.png'
import imgProd4 from '@/assets/img/products/fourth.png'

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
        }, {
            id: 2,
            title: "Asia-Pacific, Asialaw Profiles 2021",
            img: img1Acc,
            img_bg: img1AccBg,
            short_desc: "The team of GRATA International was ranked among the best firms in Kazakhstan and placed in the highest tiers - outstanding and recommended in General Business Law, Energy, Oil&Gas, Construction",
            description: "ABiTech is ranked 4th in the Top 10 Innovative Companies Ranking of Kazakhstan 2018… by the National Agency for\nTechnological Development, together with the MOST Business Incubator, with the support of the Ministry for Investment and Development of the Republic of Kazakhstan, the “Ranking of Innovative Companies of Kazakhstan 2018” was held. Any Kazakh company could take part. The TOP 10 Winning Companies were selected based on the results of an assessment by independent experts and a technological assessment by NATR JSC. The success of ABiTech in introducing innovations in various industries was awarded with a Diploma and was awarded the 4th place in the rating of innovative companies in the Republic of Kazakhstan.",
            acc_pdf: null,
            certificate: null
        }, {
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
                id: 1,
                title: "Oil & Gas",
                description: "Our Oil and Gas team has extensive experience delivering complex projects. We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle.",
                img: img1,
                content: '<p class="mb-5">Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.<br>We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.</p> <p class="mb-5">We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:</p> <ul class="list-disc pl-10"><li>Legal support in obtaining subsoil use rights.</li><li>Advice on subsoil use contracts.</li><li>M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.</li><li>Legal support in establishing and operation of joint ventures.</li><li>Environmental audit and litigation.</li><li>State control and regulation: legal advice and representation.</li><li>Taxation and tax dispute: audit and litigation.</li><li>Transfer pricing: export structuring, audit, litigation.</li><li>Production sharing agreement.</li><li>Joint venture agreement.</li><li>Dispute resolution and much more.</li></ul>"'
            },
            {
                id: 2,
                title: "Industry & Trade",
                description: "Combining the strength of all our industry sectors we have created what we believe is a leading practice for assisting in establishing a strong legal presence and further support in the Industry and Trade business.",
                img: img3,
                content: '<p class="mb-5">Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.<br>We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.</p> <p class="mb-5">We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:</p> <ul class="list-disc pl-10"><li>Legal support in obtaining subsoil use rights.</li><li>Advice on subsoil use contracts.</li><li>M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.</li><li>Legal support in establishing and operation of joint ventures.</li><li>Environmental audit and litigation.</li><li>State control and regulation: legal advice and representation.</li><li>Taxation and tax dispute: audit and litigation.</li><li>Transfer pricing: export structuring, audit, litigation.</li><li>Production sharing agreement.</li><li>Joint venture agreement.</li><li>Dispute resolution and much more.</li></ul>"'
            },
            {
                id: 3,
                title: "Construction & Infrastructure",
                description: "The Construction and Infrastructure team of GRATA International offer a full range of legal services to assist and advise our clients in the area of construction а infrastructure, energy, transport and other facilities in Kazakhstan, Central Asia and the CIS. ",
                img: img2,
                content: '<p class="mb-5">Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.<br>We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.</p> <p class="mb-5">We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:</p> <ul class="list-disc pl-10"><li>Legal support in obtaining subsoil use rights.</li><li>Advice on subsoil use contracts.</li><li>M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.</li><li>Legal support in establishing and operation of joint ventures.</li><li>Environmental audit and litigation.</li><li>State control and regulation: legal advice and representation.</li><li>Taxation and tax dispute: audit and litigation.</li><li>Transfer pricing: export structuring, audit, litigation.</li><li>Production sharing agreement.</li><li>Joint venture agreement.</li><li>Dispute resolution and much more.</li></ul>"'
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
        ],
        products: [
            {
                title: "АСКОУ – ИНВЕНТАРИЗАЦИЯ",
                description: "Обеспечивает инвентаризацию товарно-материальных ценностей, основных средств и прочих активов на Предприятии. Разработка данного решения была вызвана необходимостью учёта и контроля за объектами как в административном офисе, производственном предприятии, так и в любой иной организации, где необходимо вести учет активов. «АСКОУ – Инвентаризация» дает полную картину того, какими активами и в каком количестве располагает организация и её подразделения, хранит историю «жизни» объектов от момента поступления до списания и физического выбытия из организации. Функциональность системы помимо стандартной инвентаризации может включать в себя элементы контроля физического перемещения учитываемых активов с возможностью задать ограничение на их вынос за пределы назначенной территории (из кабинета, из офиса организации), осуществляет учет вноса-выноса контролируемых активов. Также в системе «АСКОУ – Инвентаризация» есть возможность привязки активов к локациям.",
                img: imgProd1,
            },
            {
                title: "АСКОУ – СКЛАД",
                description: "«АСКОУ – Склад» – учет, инвентаризация и отслеживание местоположения объектов ТМЦ на складе. Любая крупная производственная компания имеет много складов, на которых хранится несколько тысяч, а то и десятков тысяч номенклатурных позиций, по каждой из которых может быть много и очень много объектов товарно-материальных ценностей, ТМЦ. Обычно инвентаризация такого огромного количества ТМЦ занимает продолжительное время, исчисляемое месяцами. И в большинстве случаях проводится вручную. Чтобы сократить время инвентаризации практически до одного дня, а сам процесс сделать прозрачным и автоматизированным, был создан комплекс «АСКОУ – Склад». «АСКОУ – Склад» позволяет инвентаризировать, оприходовать и выдавать ТМЦ со Склада на базе RFID технологий, с возможностью интеграции с действующими учетно-финансовыми системами предприятия.",
                img: imgProd2,
            },
            {
                title: "АСКОУ – ОХРАНА ТРУДА И ТЕХНИКА БЕЗОПАСНОСТИ",
                description: "Модуль предназначен для регистрации проведения инструктажей. Модуль предназначен для создания, ведения и регистрации проведения различных инструктажей по ОТТБ (Охраны Труда и Техники Безопасности). При этом на мобильном устройстве регистрируются подпись инструктора и инструктируемого, а также фотография инструктируемого в момент проведения инструктажа. Данная функциональность может, также, использоваться для медицинского освидетельствования и регистрации сотрудника на рабочем месте.",
                img: imgProd3,
            },
            {
                title: "АСКОУ – ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ И РЕМОНТ",
                description: "Автоматизированное планирование технического обслуживания оборудования инфраструктуры, контроля исполнения и оперативный учет работ. Крупные и территориально распределенные компании имеют много оборудования и инфраструктурных объектов, которое надо обслуживать согласно техническим регламентам. Правильное и подконтрольное обслуживание обеспечивает гарантию правильной работы оборудования. В особенности это важно и критично, если оборудование должно обеспечить безопасность движения поездов, самолетов и др. Система позволяет контролировать выполнение запланированных работ вне зависимости от отраслевой специфики предприятия и в режиме реального времени. Сбор данных по отклонениям в работе позволяет анализировать и планировать дальнейшие специальные работы по сокращению сбоев и отказов оборудования.",
                img: imgProd4,
            },
        ]
    }, getters: {
        getNews: (state) => state.news,
        getAccomplishments: (state) => state.accomplishments,
        getIndSectors: (state) => state.indSectors,
        getLocations: (state) => state.locations,
        getProducts: (state) => state.products
    },
});
