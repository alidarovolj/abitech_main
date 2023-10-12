import {createStore} from "vuex";
import axios from "@/utils/axios.js";
import router from "@/router";
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
import acc1 from "@/assets/pdfs/1.pdf"

export default createStore({
    modules: {},
    actions: {
        async sendMessage({commit}) {
            const {data} = await axios.post("/branches/all", form);
            commit("updateBranchesList", data);

        }
    },
    mutations: {},
    state: {
        news: [{
            id: 1,
            title: "АСКОУ – ПРОЕКТ ИНВЕНТАРИЗАЦИИ В АО НК «КАЗМУНАЙГАЗ»",
            title_kz: "ASKOU – «ҚАЗМҰНАЙГАЗ» ҰК» АҚ ТҮҚМАЛДЫҚ ЖОБАСЫ",
            title_en: "ASKOU – INVENTORY PROJECT IN JSC NC KAZMUNAYGAS",
            img: img1,
            short_desc: "Национальной компанией «КазМунайГаз» в рамках цифровизации в 2020 году была внедрена система автоматизированного учета основных средств «АСКОУ – Инвентаризация».",
            short_desc_kz: "«ҚазМұнайГаз» ұлттық компаниясы 2020 жылы «АСКОУ – Инвентаризация» негізгі бөлімдерінің автоматтандырылған жүйесіне негізделген.",
            short_desc_en: "The national company \"KazMunayGas\" as part of digitalization in 2020 introduced an automated accounting system for fixed assets \"ASKOU - Inventory\".",
            description: "Национальная компания «КазМунайГаз» в рамках цифровизации в 2020 году внедрила систему автоматизированного учета основных средств «АСКОУ – Инвентаризация». Работа выполнялась «под ключ», включая поставку оборудования, обучение пользователей и бесплатное обслуживание в первый год использования. Все основные средства на балансе АО НК «КазМунайГаз» были оцифрованы RFID-метками различного назначения, проведен внешний осмотр и фотографировано текущее состояние ОС, все данные сохранены в системе. В системе также была создана организационная структура предприятия, введены сотрудники и пользователи основных средств, разграничены права пользователей согласно матрице полномочий. Система АСКОУ – Инвентаризация сократит время инвентаризации в несколько раз, привлекая при этом минимум сотрудников, минимизирует влияние человеческого фактора на результаты инвентаризации, автоматизирует контроль за всеми финансово ответственными лицами/пользователями ОС. Для удобства использования реализована интеграция с ERP-системой предприятия – SAP и с Active Directory.",
            description_kz: "«ҚазМұнайГаз» ұлттық компаниясы цифрландыру аясында 2020 жылы «ASKOU – Inventory» негізгі құралдарды автоматтандырылған есепке алу жүйесін енгізді. Жұмыс «кілтпен» орындалды, оның ішінде жабдықты жеткізу, пайдаланушыларды оқыту және пайдаланудың бірінші жылында тегін техникалық қызмет көрсету. «ҚазМұнайГаз» ҰК АҚ теңгеріміндегі барлық негізгі құралдар әртүрлі мақсаттағы RFID белгілерімен цифрландырылды, сыртқы тексеру жүргізілді және ОЖ-ның ағымдағы жағдайы суретке түсірілді, барлық деректер жүйеде сақталды. Жүйеде кәсіпорынның ұйымдық құрылымы да құрылды, жұмыскерлер мен негізгі құралдарды пайдаланушылар енгізілді, өкілеттік матрицасы бойынша пайдаланушы құқықтары шектелді. ASKOU – Түгендеу жүйесі ең аз қызметкерлерді тарта отырып, түгендеу уақытын бірнеше есе қысқартады, түгендеу нәтижелеріне адам факторының әсерін барынша азайтады, барлық қаржылық жауапты тұлғаларды/ОЖ пайдаланушыларын бақылауды автоматтандырады. Пайдаланудың қарапайымдылығы үшін Enterprise ERP жүйесімен - SAP және Active Directory-мен интеграция жүзеге асырылады.",
            description_en: "The national company \"KazMunayGas\" within the framework of digitalization in 2020 introduced the system of automated accounting of fixed assets \"ASKOU – Inventory\". The work was done \"turnkey\", including the supply of equipment, user training and free maintenance in the first year of use. All fixed assets on the balance sheet of JSC NC KazMunayGas were digitized with RFID tags for various purposes, an external inspection was carried out and the current state of the OS was photographed, all data was stored in the system. The organizational structure of the enterprise was also created in the system, employees and users of fixed assets were introduced, user rights were delimited according to the authority matrix. The ASKOU – Inventory system will reduce the time of inventory several times, while involving a minimum of employees, minimizes the impact of the human factor on the results of inventory, automates control over all financially responsible persons / OS users. For ease of use, integration with the Enterprise ERP system - SAP and with Active Directory is implemented.",
            certificates: [{
                id: 1,
                name: "Printed version of the news",
                name_kz: "Жаңалықтың баспа нұсқасы",
                name_en: "Печатная версия новости",
                file: acc1
            }]
        }],
        accomplishments: [{
            id: 1,
            title: "Asia-Pacific, Asialaw Profiles 2021",
            title_kz: "Asia-Pacific, Asialaw Profiles 2021",
            title_en: "Asia-Pacific, Asialaw Profiles 2021",
            img: img1Acc,
            img_bg: img1AccBg,
            short_desc: "Команда GRATA International вошла в число лучших фирм Казахстана и заняла высшие позиции - выдающиеся и рекомендованные в области общего коммерческого права, энергетики, нефти и газа, строительства.",
            short_desc_kz: "GRATA International командасы Қазақстандағы ең жақсы фирмалардың қатарына қосылды және ең жоғары деңгейге қойылды - жалпы бизнес құқығы, энергетика, мұнай және газ, құрылыс саласында үздік және ұсынылды.",
            short_desc_en: "The team of GRATA International was ranked among the best firms in Kazakhstan and placed in the highest tiers - outstanding and recommended in General Business Law, Energy, Oil&Gas, Construction",
            description: "ABiTech заняла 4-е место в рейтинге «Топ-10 инновационных компаний Казахстана 2018»... по версии Национального агентства по\n" +
                "Технологического развития совместно с Бизнес-инкубатором МОСТ при поддержке Министерства по инвестициям и развитию РК проведен «Рэнкинг инновационных компаний Казахстана 2018». Принять участие могла любая казахстанская компания. ТОП-10 компаний-победителей были выбраны по результатам оценки независимых экспертов и технологической оценки АО «НАТР». Успехи ABiTech во внедрении инноваций в различных отраслях промышленности отмечены Дипломом и присвоено 4 место в рейтинге инновационных компаний Республики Казахстан.",
            description_kz: "ABiTech 2018 жылғы Қазақстанның үздік 10 инновациялық компаниясының рейтингінде 4-ші орынды иеленді…\n" +
                "Технологиялық даму, MOST бизнес-инкубаторымен бірлесіп, Қазақстан Республикасы Инвестициялар және даму министрлігінің қолдауымен «Қазақстанның инновациялық компанияларының рейтингі-2018» өткізілді. Кез келген қазақстандық компания қатыса алады. ТОП 10 жеңімпаз компания тәуелсіз сарапшылардың бағалауы мен «NATR» АҚ технологиялық бағалауының нәтижелері бойынша таңдалды. ABiTech компаниясының әртүрлі салаларға инновацияларды енгізудегі жетістігі Дипломмен марапатталып, Қазақстан Республикасындағы инновациялық компаниялардың рейтингінде 4-орынға ие болды.",
            description_en: "ABiTech is ranked 4th in the Top 10 Innovative Companies Ranking of Kazakhstan 2018… by the National Agency for\nTechnological Development, together with the MOST Business Incubator, with the support of the Ministry for Investment and Development of the Republic of Kazakhstan, the “Ranking of Innovative Companies of Kazakhstan 2018” was held. Any Kazakh company could take part. The TOP 10 Winning Companies were selected based on the results of an assessment by independent experts and a technological assessment by NATR JSC. The success of ABiTech in introducing innovations in various industries was awarded with a Diploma and was awarded the 4th place in the rating of innovative companies in the Republic of Kazakhstan.",
            certificates: [{
                id: 1,
                name: "Свидетельство, удостоверяющее регистрацию лица в качестве участника специальной экономической зоны",
                name_kz: "Тұлғаның арнайы экономикалық аймаққа қатысушы ретінде тіркелгенін куәландыратын куәлік",
                name_en: "Certificate certifying the registration of a person as a participant in a special economic zone",
                file: acc1
            }]
        }, {
            id: 2,
            title: "Asia-Pacific, Asialaw Profiles 2021",
            title_kz: "Asia-Pacific, Asialaw Profiles 2021",
            title_en: "Asia-Pacific, Asialaw Profiles 2021",
            img: img1Acc,
            img_bg: img1AccBg,
            short_desc: "Команда GRATA International вошла в число лучших фирм Казахстана и заняла высшие позиции - выдающиеся и рекомендованные в области общего коммерческого права, энергетики, нефти и газа, строительства.",
            short_desc_kz: "GRATA International командасы Қазақстандағы ең жақсы фирмалардың қатарына қосылды және ең жоғары деңгейге қойылды - жалпы бизнес құқығы, энергетика, мұнай және газ, құрылыс саласында үздік және ұсынылды.",
            short_desc_en: "The team of GRATA International was ranked among the best firms in Kazakhstan and placed in the highest tiers - outstanding and recommended in General Business Law, Energy, Oil&Gas, Construction",
            description: "ABiTech заняла 4-е место в рейтинге «Топ-10 инновационных компаний Казахстана 2018»... по версии Национального агентства по\n" +
                "Технологического развития совместно с Бизнес-инкубатором МОСТ при поддержке Министерства по инвестициям и развитию РК проведен «Рэнкинг инновационных компаний Казахстана 2018». Принять участие могла любая казахстанская компания. ТОП-10 компаний-победителей были выбраны по результатам оценки независимых экспертов и технологической оценки АО «НАТР». Успехи ABiTech во внедрении инноваций в различных отраслях промышленности отмечены Дипломом и присвоено 4 место в рейтинге инновационных компаний Республики Казахстан.",
            description_kz: "ABiTech 2018 жылғы Қазақстанның үздік 10 инновациялық компаниясының рейтингінде 4-ші орынды иеленді…\n" +
                "Технологиялық даму, MOST бизнес-инкубаторымен бірлесіп, Қазақстан Республикасы Инвестициялар және даму министрлігінің қолдауымен «Қазақстанның инновациялық компанияларының рейтингі-2018» өткізілді. Кез келген қазақстандық компания қатыса алады. ТОП 10 жеңімпаз компания тәуелсіз сарапшылардың бағалауы мен «NATR» АҚ технологиялық бағалауының нәтижелері бойынша таңдалды. ABiTech компаниясының әртүрлі салаларға инновацияларды енгізудегі жетістігі Дипломмен марапатталып, Қазақстан Республикасындағы инновациялық компаниялардың рейтингінде 4-орынға ие болды.",
            description_en: "ABiTech is ranked 4th in the Top 10 Innovative Companies Ranking of Kazakhstan 2018… by the National Agency for\nTechnological Development, together with the MOST Business Incubator, with the support of the Ministry for Investment and Development of the Republic of Kazakhstan, the “Ranking of Innovative Companies of Kazakhstan 2018” was held. Any Kazakh company could take part. The TOP 10 Winning Companies were selected based on the results of an assessment by independent experts and a technological assessment by NATR JSC. The success of ABiTech in introducing innovations in various industries was awarded with a Diploma and was awarded the 4th place in the rating of innovative companies in the Republic of Kazakhstan.",
            certificates: [{
                id: 1,
                name: "Свидетельство, удостоверяющее регистрацию лица в качестве участника специальной экономической зоны",
                name_kz: "Тұлғаның арнайы экономикалық аймаққа қатысушы ретінде тіркелгенін куәландыратын куәлік",
                name_en: "Certificate certifying the registration of a person as a participant in a special economic zone",
                file: acc1
            }]
        }, {
            id: 3,
            title: "Asia-Pacific, Asialaw Profiles 2021",
            title_kz: "Asia-Pacific, Asialaw Profiles 2021",
            title_en: "Asia-Pacific, Asialaw Profiles 2021",
            img: img1Acc,
            img_bg: img1AccBg,
            short_desc: "Команда GRATA International вошла в число лучших фирм Казахстана и заняла высшие позиции - выдающиеся и рекомендованные в области общего коммерческого права, энергетики, нефти и газа, строительства.",
            short_desc_kz: "GRATA International командасы Қазақстандағы ең жақсы фирмалардың қатарына қосылды және ең жоғары деңгейге қойылды - жалпы бизнес құқығы, энергетика, мұнай және газ, құрылыс саласында үздік және ұсынылды.",
            short_desc_en: "The team of GRATA International was ranked among the best firms in Kazakhstan and placed in the highest tiers - outstanding and recommended in General Business Law, Energy, Oil&Gas, Construction",
            description: "ABiTech заняла 4-е место в рейтинге «Топ-10 инновационных компаний Казахстана 2018»... по версии Национального агентства по\n" +
                "Технологического развития совместно с Бизнес-инкубатором МОСТ при поддержке Министерства по инвестициям и развитию РК проведен «Рэнкинг инновационных компаний Казахстана 2018». Принять участие могла любая казахстанская компания. ТОП-10 компаний-победителей были выбраны по результатам оценки независимых экспертов и технологической оценки АО «НАТР». Успехи ABiTech во внедрении инноваций в различных отраслях промышленности отмечены Дипломом и присвоено 4 место в рейтинге инновационных компаний Республики Казахстан.",
            description_kz: "ABiTech 2018 жылғы Қазақстанның үздік 10 инновациялық компаниясының рейтингінде 4-ші орынды иеленді…\n" +
                "Технологиялық даму, MOST бизнес-инкубаторымен бірлесіп, Қазақстан Республикасы Инвестициялар және даму министрлігінің қолдауымен «Қазақстанның инновациялық компанияларының рейтингі-2018» өткізілді. Кез келген қазақстандық компания қатыса алады. ТОП 10 жеңімпаз компания тәуелсіз сарапшылардың бағалауы мен «NATR» АҚ технологиялық бағалауының нәтижелері бойынша таңдалды. ABiTech компаниясының әртүрлі салаларға инновацияларды енгізудегі жетістігі Дипломмен марапатталып, Қазақстан Республикасындағы инновациялық компаниялардың рейтингінде 4-орынға ие болды.",
            description_en: "ABiTech is ranked 4th in the Top 10 Innovative Companies Ranking of Kazakhstan 2018… by the National Agency for\nTechnological Development, together with the MOST Business Incubator, with the support of the Ministry for Investment and Development of the Republic of Kazakhstan, the “Ranking of Innovative Companies of Kazakhstan 2018” was held. Any Kazakh company could take part. The TOP 10 Winning Companies were selected based on the results of an assessment by independent experts and a technological assessment by NATR JSC. The success of ABiTech in introducing innovations in various industries was awarded with a Diploma and was awarded the 4th place in the rating of innovative companies in the Republic of Kazakhstan.",
            certificates: [{
                id: 1,
                name: "Свидетельство, удостоверяющее регистрацию лица в качестве участника специальной экономической зоны",
                name_kz: "Тұлғаның арнайы экономикалық аймаққа қатысушы ретінде тіркелгенін куәландыратын куәлік",
                name_en: "Certificate certifying the registration of a person as a participant in a special economic zone",
                file: acc1
            }]
        }],
        indSectors: [
            {
                id: 1,
                title: "Нефть & Газ",
                title_kz: "Мұнай & газ",
                title_en: "Oil & Gas",
                description: "Наша команда в нефтегазовой отрасли имеет большой опыт реализации сложных проектов. Мы поддержим и проведем вас в быстро меняющейся среде рынков и поможем оценить риски и возможности. Наши юристы оказывают полную юридическую поддержку на всех этапах жизненного цикла проекта.",
                description_kz: "Біздің мұнай-газ тобының күрделі жобаларды жүзеге асыруда үлкен тәжірибесі бар. Біз сізге нарықтардың тез өзгеретін ортасы арқылы қолдау көрсетіп, бағыт-бағдар береміз және тәуекелдер мен мүмкіндіктерді бағалауға көмектесеміз. Біздің заңгерлер жобаның өмірлік циклінің барлық кезеңдерінде толық құқықтық қолдау көрсетеді.",
                description_en: "Our Oil and Gas team has extensive experience delivering complex projects. We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle.",
                img: img1,
                content: '<p class="mb-5">Наша команда в нефтегазовой отрасли имеет большой опыт реализации сложных проектов. У нас работают более 250 высококвалифицированных юристов, которые специализируются в различных аспектах права и предлагают полностью комплексные услуги.<br>Мы обладаем более чем 30-летним опытом работы в нефтегазовых сделках, обеспечивая полное юридическое сопровождение на протяжении всей цепочки создания стоимости. .</p> <p class="mb-5">Мы поддержим и проведем вас в быстро меняющейся рыночной среде, а также поможем оценить риски и возможности. Наши юристы оказывают полное юридическое сопровождение на всех этапах жизненного цикла проекта, включая:</p> <ul class="list-disc pl-10"><li>Юридическое сопровождение при получении права недропользования.</li><li >Консультации по контрактам на недропользование.</li><li>M&A в проектах недропользования: юридическая экспертиза, составление договоров купли-продажи, передача активов, получение отказа при приобретении объектов недр от государственных органов.</li><li>Юридическое сопровождение при создании и деятельности совместных предприятий.</li><li>Экологический аудит и судебные споры.</li><li>Государственный контроль и регулирование: юридические консультации и представительство.</li><li>Налогообложение и налоговые споры: аудит и судебные споры.</li><li>Трансфертное ценообразование: структурирование экспорта, аудит, судебные разбирательства.</li><li>Соглашение о разделе продукции.</li><li>Соглашение о совместном предприятии.</li><li>Спор разрешение и многое другое.</li></ul>"',
                content_kz: '<p class="mb-5">Біздің мұнай-газ тобының күрделі жобаларды жүзеге асыруда үлкен тәжірибесі бар. Бізде 250-ден астам жоғары білікті заңгерлер бар, олар заңның әртүрлі аспектілері бойынша толық интеграцияланған қызмет ұсынады.<br>Бізде мұнай және газ операциялары бойынша жұмыс істейтін 30 жылдан астам тәжірибеміз бар, бүкіл құн тізбегі бойынша толық құқықтық қолдау көрсетеді. .</p> <p class="mb-5">Біз сізге нарықтардың тез өзгеретін ортасы арқылы қолдау көрсетіп, бағыт-бағдар береміз және тәуекелдер мен мүмкіндіктерді бағалауға көмектесеміз. Біздің заңгерлер жобаның өмірлік циклінің барлық кезеңдерінде толық құқықтық қолдау көрсетеді, соның ішінде:</p> <ul class="list-disc pl-10"><li>Жер қойнауын пайдалану құқығын алуда құқықтық қолдау.</li><li >Жер қойнауын пайдалануға арналған келісімшарттар бойынша кеңес беру.</li><li>Жер қойнауын пайдалану жобаларындағы M&A: заңды түрде сатып алуды тексеру, келісімдер жасау, активтерді беру, мемлекеттік органдардан жер қойнауы объектілерін сатып алудан бас тарту.</li><li>Құқықтық қолдау. бірлескен кәсіпорындарды құру және олардың жұмысында.</li><li>Экологиялық аудит және сот ісін жүргізу.</li><li>Мемлекеттік бақылау және реттеу: заңгерлік кеңес және өкілдік.</li><li>Салық және салықтық дау: аудит. және сот ісі.</li><li>Трансферттік баға белгілеу: экспортты құрылымдау, аудит, сот ісін жүргізу.</li><li>Өнімді бөлу туралы келісім.</li><li>Бірлескен кәсіпорын туралы келісім.</li><li>Дау. рұқсат және т.б.</li></ul>"',
                content_en: '<p class="mb-5">Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.<br>We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.</p> <p class="mb-5">We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:</p> <ul class="list-disc pl-10"><li>Legal support in obtaining subsoil use rights.</li><li>Advice on subsoil use contracts.</li><li>M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.</li><li>Legal support in establishing and operation of joint ventures.</li><li>Environmental audit and litigation.</li><li>State control and regulation: legal advice and representation.</li><li>Taxation and tax dispute: audit and litigation.</li><li>Transfer pricing: export structuring, audit, litigation.</li><li>Production sharing agreement.</li><li>Joint venture agreement.</li><li>Dispute resolution and much more.</li></ul>"'
            },
            {
                id: 2,
                title: "Промышленность и торговля",
                title_kz: "Өнеркәсіп және сауда",
                title_en: "Industry & Trade",
                description: "Объединив силу всех наших секторов промышленности, мы создали то, что, по нашему мнению, является ведущей практикой для оказания помощи в установлении сильного юридического присутствия и дальнейшей поддержки в сфере промышленности и торговли.",
                description_kz: "Біздің барлық салалық секторларымыздың күшін біріктіре отырып, біз өнеркәсіп пен сауда бизнесінде күшті заңды қатысуды және одан әрі қолдауды орнатуға көмектесетін жетекші тәжірибе деп санаймыз.",
                description_en: "Combining the strength of all our industry sectors we have created what we believe is a leading practice for assisting in establishing a strong legal presence and further support in the Industry and Trade business.",
                img: img3,
                content: '<p class="mb-5">Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.<br>We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.</p> <p class="mb-5">We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:</p> <ul class="list-disc pl-10"><li>Legal support in obtaining subsoil use rights.</li><li>Advice on subsoil use contracts.</li><li>M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.</li><li>Legal support in establishing and operation of joint ventures.</li><li>Environmental audit and litigation.</li><li>State control and regulation: legal advice and representation.</li><li>Taxation and tax dispute: audit and litigation.</li><li>Transfer pricing: export structuring, audit, litigation.</li><li>Production sharing agreement.</li><li>Joint venture agreement.</li><li>Dispute resolution and much more.</li></ul>"',
                content_kz: '<p class="mb-5">Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.<br>We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.</p> <p class="mb-5">We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:</p> <ul class="list-disc pl-10"><li>Legal support in obtaining subsoil use rights.</li><li>Advice on subsoil use contracts.</li><li>M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.</li><li>Legal support in establishing and operation of joint ventures.</li><li>Environmental audit and litigation.</li><li>State control and regulation: legal advice and representation.</li><li>Taxation and tax dispute: audit and litigation.</li><li>Transfer pricing: export structuring, audit, litigation.</li><li>Production sharing agreement.</li><li>Joint venture agreement.</li><li>Dispute resolution and much more.</li></ul>"',
                content_en: '<p class="mb-5">Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.<br>We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.</p> <p class="mb-5">We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:</p> <ul class="list-disc pl-10"><li>Legal support in obtaining subsoil use rights.</li><li>Advice on subsoil use contracts.</li><li>M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.</li><li>Legal support in establishing and operation of joint ventures.</li><li>Environmental audit and litigation.</li><li>State control and regulation: legal advice and representation.</li><li>Taxation and tax dispute: audit and litigation.</li><li>Transfer pricing: export structuring, audit, litigation.</li><li>Production sharing agreement.</li><li>Joint venture agreement.</li><li>Dispute resolution and much more.</li></ul>"'
            },
            {
                id: 3,
                title: "Строительство и инфраструктура",
                title_kz: "Құрылыс және инфрақұрылым",
                title_en: "Construction & Infrastructure",
                description: "Команда строительства и инфраструктуры GRATA International предлагает полный спектр юридических услуг по оказанию помощи и консультированию наших клиентов в области строительства инфраструктурных, энергетических, транспортных и других объектов в Казахстане, Центральной Азии и СНГ.",
                description_kz: "GRATA International компаниясының Құрылыс және инфрақұрылым командасы Қазақстандағы, Орталық Азиядағы және ТМД елдеріндегі құрылыс және инфрақұрылым, энергетика, көлік және басқа да нысандар саласындағы клиенттерімізге көмек көрсету және кеңес беру үшін заң қызметтерінің толық кешенін ұсынады.",
                description_en: "The Construction and Infrastructure team of GRATA International offer a full range of legal services to assist and advise our clients in the area of construction а infrastructure, energy, transport and other facilities in Kazakhstan, Central Asia and the CIS. ",
                img: img2,
                content: '<p class="mb-5">Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.<br>We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.</p> <p class="mb-5">We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:</p> <ul class="list-disc pl-10"><li>Legal support in obtaining subsoil use rights.</li><li>Advice on subsoil use contracts.</li><li>M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.</li><li>Legal support in establishing and operation of joint ventures.</li><li>Environmental audit and litigation.</li><li>State control and regulation: legal advice and representation.</li><li>Taxation and tax dispute: audit and litigation.</li><li>Transfer pricing: export structuring, audit, litigation.</li><li>Production sharing agreement.</li><li>Joint venture agreement.</li><li>Dispute resolution and much more.</li></ul>"',
                content_kz: '<p class="mb-5">Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.<br>We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.</p> <p class="mb-5">We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:</p> <ul class="list-disc pl-10"><li>Legal support in obtaining subsoil use rights.</li><li>Advice on subsoil use contracts.</li><li>M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.</li><li>Legal support in establishing and operation of joint ventures.</li><li>Environmental audit and litigation.</li><li>State control and regulation: legal advice and representation.</li><li>Taxation and tax dispute: audit and litigation.</li><li>Transfer pricing: export structuring, audit, litigation.</li><li>Production sharing agreement.</li><li>Joint venture agreement.</li><li>Dispute resolution and much more.</li></ul>"',
                content_en: '<p class="mb-5">Our Oil and Gas team has extensive experience delivering complex projects. We have more than 250 highly qualified lawyers, who specialise in various aspects of the law to offer a fully integrated service.<br>We have over 30 years of experience working on oil and gas transactions, providing full legal support throughout the entire value chain.</p> <p class="mb-5">We will support and guide you through the rapidly changing environment of markets and help you to evaluate risks as well as opportunities. Our lawyers provide full legal support at all stages of the project lifecycle, including:</p> <ul class="list-disc pl-10"><li>Legal support in obtaining subsoil use rights.</li><li>Advice on subsoil use contracts.</li><li>M&A in subsoil projects: legal due diligence, drafting purchase agreements, transfer of assets, obtaining waiver in purchasing subsoil objects from state authorities.</li><li>Legal support in establishing and operation of joint ventures.</li><li>Environmental audit and litigation.</li><li>State control and regulation: legal advice and representation.</li><li>Taxation and tax dispute: audit and litigation.</li><li>Transfer pricing: export structuring, audit, litigation.</li><li>Production sharing agreement.</li><li>Joint venture agreement.</li><li>Dispute resolution and much more.</li></ul>"'
            }
        ],
        locations: [
            {
                id: 1,
                name: "Алматы",
                name_kz: "Алматы",
                name_en: "Almaty",
                addresses: [
                    {
                        address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                        address_kz: "050052, Алматы, Таугүл шағын ауданы, Мұстай Кәрім көшесі, 13а, 240 каб.",
                        address_en: "050052, Almaty, Taugul microdistrict, Mustai Karim street, 13a, office 240",
                        phone: "+7 (771) 762-22-85",
                        map: "<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Ab608545a9131312c3b29a42631b1d2c452ff7cfe18235f389181997e98526fea&amp;source=constructor\" width=\"100%\" height=\"574\" frameborder=\"0\"></iframe>"
                    }
                ]
            },
            {
                id: 2,
                name: "Астана",
                name_kz: "Астана",
                name_en: "Astana",
                addresses: [
                    {
                        address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                        address_kz: "050052, Алматы, Таугүл шағын ауданы, Мұстай Кәрім көшесі, 13а, 240 каб.",
                        address_en: "050052, Almaty, Taugul microdistrict, Mustai Karim street, 13a, office 240",
                        phone: "+7 (771) 762-22-85",
                        map: "<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Ab608545a9131312c3b29a42631b1d2c452ff7cfe18235f389181997e98526fea&amp;source=constructor\" width=\"100%\" height=\"574\" frameborder=\"0\"></iframe>"
                    }
                ]
            },
            {
                id: 3,
                name: "Ташкент",
                name_kz: "Ташкент",
                name_en: "Tashkent",
                addresses: [
                    {
                        address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                        address_kz: "050052, Алматы, Таугүл шағын ауданы, Мұстай Кәрім көшесі, 13а, 240 каб.",
                        address_en: "050052, Almaty, Taugul microdistrict, Mustai Karim street, 13a, office 240",
                        phone: "+7 (771) 762-22-85",
                        map: "<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Ab608545a9131312c3b29a42631b1d2c452ff7cfe18235f389181997e98526fea&amp;source=constructor\" width=\"100%\" height=\"574\" frameborder=\"0\"></iframe>"
                    }
                ]
            },
            {
                id: 4,
                name: "Москва",
                name_kz: "Москва",
                name_en: "Moscow",
                addresses: [
                    {
                        address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                        address_kz: "050052, Алматы, Таугүл шағын ауданы, Мұстай Кәрім көшесі, 13а, 240 каб.",
                        address_en: "050052, Almaty, Taugul microdistrict, Mustai Karim street, 13a, office 240",
                        phone: "+7 (771) 762-22-85",
                        map: "<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Ab608545a9131312c3b29a42631b1d2c452ff7cfe18235f389181997e98526fea&amp;source=constructor\" width=\"100%\" height=\"574\" frameborder=\"0\"></iframe>"
                    }
                ]
            },
            {
                id: 5,
                name: "Санкт-Петербург",
                name_kz: "Санкт-Петербург",
                name_en: "Saint - Petersburg",
                addresses: [
                    {
                        address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                        address_kz: "050052, Алматы, Таугүл шағын ауданы, Мұстай Кәрім көшесі, 13а, 240 каб.",
                        address_en: "050052, Almaty, Taugul microdistrict, Mustai Karim street, 13a, office 240",
                        phone: "+7 (771) 762-22-85",
                        map: "<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Ab608545a9131312c3b29a42631b1d2c452ff7cfe18235f389181997e98526fea&amp;source=constructor\" width=\"100%\" height=\"574\" frameborder=\"0\"></iframe>"
                    }
                ]
            },
        ],
        products: [
            {
                id: 1,
                title: "АСКОУ – ИНВЕНТАРИЗАЦИЯ",
                title_kz: "ASCOU – ИНВЕНТОРЛЫҚ",
                title_en: "ASCOU – INVENTORY",
                description: "Обеспечивает инвентаризацию товарно-материальных ценностей, основных средств и прочих активов на Предприятии. Разработка данного решения была вызвана необходимостью учёта и контроля за объектами как в административном офисе, производственном предприятии, так и в любой иной организации, где необходимо вести учет активов. «АСКОУ – Инвентаризация» дает полную картину того, какими активами и в каком количестве располагает организация и её подразделения, хранит историю «жизни» объектов от момента поступления до списания и физического выбытия из организации. Функциональность системы помимо стандартной инвентаризации может включать в себя элементы контроля физического перемещения учитываемых активов с возможностью задать ограничение на их вынос за пределы назначенной территории (из кабинета, из офиса организации), осуществляет учет вноса-выноса контролируемых активов. Также в системе «АСКОУ – Инвентаризация» есть возможность привязки активов к локациям.",
                description_kz: "Кәсіпорындағы тауарлы-материалдық құндылықтарды, негізгі құралдарды және басқа да құралдарды түгендеуді қамтамасыз етеді. Бұл шешімді әзірлеу әкімшілік кеңседе де, өндірістік кәсіпорында да, активтердің есебін жүргізу қажет кез келген басқа ұйымда да объектілерді есепке алу және бақылау қажеттілігінен туындады. «ASKOU - түгендеу» ұйымның және оның бөлімшелерінің қандай активтері және қандай көлемдегі бар екендігі туралы толық суретті береді, объектілерді алған сәттен бастап ұйымнан есептен шығаруға және заттай жоюға дейінгі «өмір» тарихын сақтайды. Жүйенің функционалдығы стандартты түгендеуден басқа, оларды белгіленген аумақтан тыс (кеңседен, ұйымның кеңсесінен) шығаруға шектеулер қою мүмкіндігімен есепке алынатын активтердің физикалық қозғалысын бақылау элементтерін және жазбаларды қамтуы мүмкін. бақыланатын активтердің кіруі және шығуы. Сондай-ақ ASCOU - Түгендеу жүйесінде активтерді орындармен байланыстыруға болады.",
                description_en: "Provides inventory of inventory, fixed assets and other assets at the Enterprise. The development of this solution was caused by the need to record and control objects both in an administrative office, a manufacturing enterprise, and in any other organization where it is necessary to keep records of assets. \"ASKOU - Inventory\" gives a complete picture of what assets and in what quantity the organization and its divisions have, stores the history of the “life” of objects from the moment of receipt to write-off and physical disposal from the organization. The functionality of the system, in addition to standard inventory, may include elements of control over the physical movement of accounted assets with the ability to set restrictions on their removal outside the designated territory (from the office, from the organization’s office), and records the entry and exit of controlled assets. Also in the ASCOU - Inventory system it is possible to link assets to locations.",
                img: imgProd1,
                certificates: [{
                    id: 1,
                    file: acc1
                }]
            },
            {
                id: 2,
                title: "АСКОУ – СКЛАД",
                title_kz: "ASCOU – ҚОЙМА",
                title_en: "ASCOU – WAREHOUSE",
                description: "«АСКОУ – Склад» – учет, инвентаризация и отслеживание местоположения объектов ТМЦ на складе. Любая крупная производственная компания имеет много складов, на которых хранится несколько тысяч, а то и десятков тысяч номенклатурных позиций, по каждой из которых может быть много и очень много объектов товарно-материальных ценностей, ТМЦ. Обычно инвентаризация такого огромного количества ТМЦ занимает продолжительное время, исчисляемое месяцами. И в большинстве случаях проводится вручную. Чтобы сократить время инвентаризации практически до одного дня, а сам процесс сделать прозрачным и автоматизированным, был создан комплекс «АСКОУ – Склад». «АСКОУ – Склад» позволяет инвентаризировать, оприходовать и выдавать ТМЦ со Склада на базе RFID технологий, с возможностью интеграции с действующими учетно-финансовыми системами предприятия.",
                description_kz: "«АСКОУ – қойма» – қоймадағы тауарлық-материалдық құндылықтардың орнын есепке алу, түгендеу және қадағалау. Кез келген ірі өндірістік компанияның көптеген қоймалары бар, оларда бірнеше мың, тіпті ондаған мың заттар сақталады, олардың әрқайсысы үшін көптеген, көптеген инвентарлық объектілер, тауарлар мен материалдар болуы мүмкін. Әдетте, мұндай үлкен көлемдегі тауарлық-материалдық құндылықтарды түгендеу айлармен есептелетін ұзақ уақытты алады. Ал көп жағдайда ол қолмен жасалады. Түгендеу уақытын бір күнге дейін қысқарту және процестің өзін ашық және автоматтандыру үшін ASCOU-Warehouse кешені құрылды. «ASKOU - қойма» кәсіпорынның қолданыстағы бухгалтерлік және қаржылық жүйелерімен біріктіру мүмкіндігімен RFID технологиясын қолдана отырып, қоймадан тауарлық-материалдық құндылықтарды түгендеуге, капиталдандыруға және шығаруға мүмкіндік береді.",
                description_en: "“ASKOU – Warehouse” – accounting, inventory and tracking of the location of inventory items in the warehouse. Any large manufacturing company has many warehouses in which several thousand, or even tens of thousands of item items are stored, for each of which there can be many, many objects of inventory, goods and materials. Typically, inventorying such a huge amount of inventory items takes a long time, calculated in months. And in most cases it is done manually. In order to reduce inventory time to almost one day, and to make the process itself transparent and automated, the ASCOU-Warehouse complex was created. \"ASKOU - Warehouse\" allows you to inventory, capitalize and issue inventory items from the Warehouse using RFID technology, with the ability to integrate with existing accounting and financial systems of the enterprise.",
                img: imgProd2,
                certificates: [{
                    id: 1,
                    file: acc1
                }]
            },
            {
                id: 3,
                title: "АСКОУ – ОХРАНА ТРУДА И ТЕХНИКА БЕЗОПАСНОСТИ",
                title_kz: "АСКОУ – ЕҢБЕК ДЕНСАУЛЫҒЫ ЖӘНЕ ҚАУІПСІЗДІК",
                title_en: "ASCOU – OCCUPATIONAL HEALTH AND SAFETY",
                description: "Модуль предназначен для регистрации проведения инструктажей. Модуль предназначен для создания, ведения и регистрации проведения различных инструктажей по ОТТБ (Охраны Труда и Техники Безопасности). При этом на мобильном устройстве регистрируются подпись инструктора и инструктируемого, а также фотография инструктируемого в момент проведения инструктажа. Данная функциональность может, также, использоваться для медицинского освидетельствования и регистрации сотрудника на рабочем месте.",
                description_kz: "Модуль оқу сабақтарын тіркеуге арналған. Модуль еңбекті қорғау (Еңбекті қорғау және қауіпсіздік) бойынша әртүрлі тренингтерді құруға, жүргізуге және тіркеуге арналған. Бұл ретте мобильді құрылғыға нұсқаушы мен нұсқаушының қолы, сондай-ақ нұсқау беру кезінде нұсқаушының фотосуреті жазылады. Бұл функцияны медициналық тексеруден өткізу және қызметкерді жұмыс орнында тіркеу үшін де пайдалануға болады.",
                description_en: "The module is designed to register training sessions. The module is designed for creating, maintaining and registering various OSH (Occupational Health and Safety) trainings. In this case, the signature of the instructor and the person being instructed, as well as a photograph of the person being instructed at the time of the instruction, are recorded on the mobile device. This functionality can also be used for medical examination and registration of an employee at the workplace.",
                img: imgProd3,
                certificates: [{
                    id: 1,
                    file: acc1
                }]
            },
            {
                id: 4,
                title: "АСКОУ – ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ И РЕМОНТ",
                title_kz: "ASCOU – ҚЫЗМЕТ КӨРСЕТУ ЖӘНЕ ЖӨНДЕУ",
                title_en: "ASCOU – MAINTENANCE AND REPAIR",
                description: "Автоматизированное планирование технического обслуживания оборудования инфраструктуры, контроля исполнения и оперативный учет работ. Крупные и территориально распределенные компании имеют много оборудования и инфраструктурных объектов, которое надо обслуживать согласно техническим регламентам. Правильное и подконтрольное обслуживание обеспечивает гарантию правильной работы оборудования. В особенности это важно и критично, если оборудование должно обеспечить безопасность движения поездов, самолетов и др. Система позволяет контролировать выполнение запланированных работ вне зависимости от отраслевой специфики предприятия и в режиме реального времени. Сбор данных по отклонениям в работе позволяет анализировать и планировать дальнейшие специальные работы по сокращению сбоев и отказов оборудования.",
                description_kz: "Инфрақұрылымдық жабдықтарға техникалық қызмет көрсетуді автоматтандырылған жоспарлау, жұмыстардың орындалуын бақылау және жедел есепке алу. Ірі және географиялық тұрғыдан бөлінген компанияларда техникалық регламенттерге сәйкес сақталуы тиіс көптеген жабдықтар мен инфрақұрылымдық нысандар бар. Дұрыс және бақыланатын техникалық қызмет көрсету жабдықтың дұрыс жұмыс істеуін қамтамасыз етеді. Бұл әсіресе маңызды және маңызды, егер жабдық пойыздардың, ұшақтардың және т.б. қауіпсіздігін қамтамасыз етуі керек. Жүйе кәсіпорынның салалық ерекшеліктеріне қарамастан және нақты уақыт режимінде жоспарланған жұмыстардың орындалуын бақылауға мүмкіндік береді. Операциялық ауытқулар туралы деректерді жинау жабдықтың жұмысындағы ақаулар мен ақауларды азайту үшін одан әрі арнайы жұмыстарды талдауға және жоспарлауға мүмкіндік береді.",
                description_en: "Automated planning of maintenance of infrastructure equipment, monitoring of execution and operational accounting of work. Large and geographically distributed companies have a lot of equipment and infrastructure facilities that must be maintained in accordance with technical regulations. Correct and supervised maintenance ensures the correct operation of the equipment. This is especially important and critical if the equipment must ensure the safety of trains, planes, etc. The system allows you to control the implementation of planned work, regardless of the industry specifics of the enterprise, and in real time. Collecting data on operational deviations allows you to analyze and plan further special work to reduce equipment malfunctions and failures.",
                img: imgProd4,
                certificates: [{
                    id: 1,
                    file: acc1
                }]
            },
        ]
    },
    getters: {
        getNews: (state) => state.news,
        getAccomplishments: (state) => state.accomplishments,
        getIndSectors: (state) => state.indSectors,
        getLocations: (state) => state.locations,
        getProducts: (state) => state.products
    },
});
