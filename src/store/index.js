import {createStore} from "vuex";
import axios from "@/utils/axios.js";
import img1AccBg from '@/assets/img/ourAccomplishments/first-bg.png';
import img1Acc from '@/assets/img/ourAccomplishments/11.jpg'
import img2Acc from '@/assets/img/ourAccomplishments/22.jpg'
import img3Acc from '@/assets/img/ourAccomplishments/33.png'
import img1 from '@/assets/img/clients/1.png'
import img2 from '@/assets/img/clients/2.png'
import img3 from '@/assets/img/clients/3.png'
import img4 from '@/assets/img/clients/4.png'
import img5 from '@/assets/img/clients/5.png'
import imgInds1 from "@/assets/img/indSectors/1.jpg";
import imgInds2 from "@/assets/img/indSectors/2.jpg";
import imgInds3 from "@/assets/img/indSectors/3.jpg";
import imgInds4 from "@/assets/img/indSectors/4.jpg";
import imgProd1 from '@/assets/img/products/first.png'
import imgProd2 from '@/assets/img/products/second.png'
import imgProd3 from '@/assets/img/products/third.jpg'
import imgProd4 from '@/assets/img/products/fourth.jpg'
import acc1 from "@/assets/pdfs/1.pdf"
import prodPDF1 from "@/assets/pdfs/1.pdf"
import prodPDF2 from "@/assets/pdfs/2.pdf"
import prodPDF3 from "@/assets/pdfs/3.pdf"
import prodPDF4 from "@/assets/pdfs/4.pdf"
import part1 from '@/assets/img/partners/1.png'
import part2 from '@/assets/img/partners/2.png'
import part3 from '@/assets/img/partners/3.png'
import part4 from '@/assets/img/partners/4.png'
import part5 from '@/assets/img/partners/5.svg'
import part6 from '@/assets/img/partners/6.png'
import part7 from '@/assets/img/partners/7.png'
import part8 from '@/assets/img/partners/8.png'
import part9 from '@/assets/img/partners/9.png'
import part10 from '@/assets/img/partners/10.png'
import part11 from '@/assets/img/partners/11.png'
import part12 from '@/assets/img/partners/12.png'
import part13 from '@/assets/img/partners/13.png'
import part14 from '@/assets/img/partners/14.svg'
import part15 from '@/assets/img/partners/1-1.png'

export default createStore({
    modules: {}, actions: {
        async sendMessage({commit}) {
            const {data} = await axios.post("/branches/all", form);
            commit("updateBranchesList", data);

        }
    }, mutations: {}, state: {
        clients: [{
            id: 1,
            title: "АЛМАЛЫКСКИЙ ГОРНО-МЕТАЛЛУРГИЧЕСКИЙ КОМБИНАТ",
            title_kz: "АЛМАЛЫҚ ТЕН-МЕТАЛЛУРГИЯ КОМБИНАТЫ",
            title_en: "ALMALYK MINING AND METALLURGICAL COMBINE",
            img: img5,
            short_desc: "Оцифровано и зарегистрировано более 4500 колесных пар, более 500 грузовых вагонов, более 50 тяговых агрегатов",
            short_desc_kz: "4500+ доңғалақ жұптары, 500+ жүк вагондары, 50+ тартқыш қондырғылар цифрланған және тіркелген",
            short_desc_en: "4,500+ wheelsets, 500+ freight cars, 50+ traction units digitized and registered",
            description: ['4,500+ колесных пар, 500+ грузовых вагонов, 50+ тяговых устройств цифровизированы и зарегистрированы', 'Мониторинг и запись пробега подвижного состава на железнодорожной сети на 26 станциях', 'Задачи по техническому обслуживанию автоматически отправляются на 100+ смартфонов инженеров', 'Снижение затрат на обслуживание и ремонт на 10%'],
            description_kz: ['4,500+ wheelsets, 500+ freight cars, 50+ traction units digitized and registered', 'Monitoring and recording the mileage of rolling stocks on the railway network at 26 stations', 'Maintenance tasks automatically sent to 100+ engineers\' smartphones', 'Reduction of cost in maintenance and repair by 10%'],
            description_en: ['4,500+ wheelsets, 500+ freight cars, 50+ traction units digitized and registered', 'Monitoring and recording the mileage of rolling stocks on the railway network at 26 stations', 'Maintenance tasks automatically sent to 100+ engineers\' smartphones', 'Reduction of cost in maintenance and repair by 10%'],
        }, {
            id: 2,
            title: "КАЗАЭРОНАВИГАЦИЯ",
            title_kz: "ҚАЗАЭРОНАВИГАЦИЯ",
            title_en: "KAZAERONAVIGATION",
            img: img4,
            short_desc: "15 филиалов по Казахстану 4500+ оборудования оцифровано и зарегистрировано",
            short_desc_kz: "Қазақстан бойынша 15 филиал 4500-ден астам жабдық цифрландырылған және тіркелген",
            short_desc_en: "15 branches across Kazakhstan 4,500+ equipment digitized and registered",
            description: ['15 филиалов по всему Казахстану, где цифровизированы и зарегистрированы 4,500+ оборудования', 'Задачи по техническому обслуживанию автоматически отправляются на 450+ смартфонов инженеров', 'Более 100 задач планируются и мониторятся ежемесячно в каждом филиале', 'Оборудование надежно работает более 5 лет'],
            description_kz: ['Қазақстанда 15 филиал, жағымдыландырылды және тіркеуге 4,500+ жабдықтық', 'Техникашыларға арналған жасау және жағдайлар автоматты түрде жіберілді 450+ смартфонға', 'Филиалдар бойынша ай сайын 100-ден астам іс-шараны кестеледі және бақылау жасайды', 'Жабдықтық 5 жылдан астам уақыт бойы жағдайды жұмыс істейді'],
            description_en: ['15 branches across Kazakhstan 4,500+ equipment digitized and registered', 'Maintenance tasks automatically sent to 450+ engineers\' smartphones', 'Over 100 tasks scheduled and monitored monthly per branch', 'Equipment has reliably operating for over 5 years'],
        }, {
            id: 3,
            title: "КАЗМУНАЙГАЗ",
            title_kz: "ҚАЗМҰНАЙГАЗ",
            title_en: "KAZMUNAYGAZ",
            img: img3,
            short_desc: "Более 20 000 основных средств и оборудования оцифрованы и зарегистрированы",
            short_desc_kz: "20 000+ негізгі құралдар мен жабдықтар цифрландырылды және тіркелді",
            short_desc_en: "20,000+ fixed assets and equipment digitized and registered",
            description: ['20,000+ основных средств и оборудования цифровизированы и зарегистрированы', 'Инвентаризация и время отслеживания сокращены с 2 месяцев до 1 недели', 'Инвентаризация надежно функционирует более 3 лет'],
            description_kz: ['20,000+ нысан тауарлар және жабдықтарды сандырады және тіркеуде', 'Тауарларды жасау мен уақытты көрсету уақыты 2 айдан 1 аптаға көшірілді', 'Тауарларды жасау 3 жылдан астам жағдайды ажырату'],
            description_en: ['20,000+ fixed assets and equipment digitized and registered', 'Inventory and tracking time reduced from 2 months to 1 week', 'Inventory has been reliably operating for over 3 years'],
        }, {
            id: 4,
            title: "ШАТЫР",
            title_kz: "ШАТЫР",
            title_en: "SHATYR ENTERPRISE",
            img: img2,
            short_desc: "800 000+ постельного белья и мягкой съемной техники оцифрованы и зарегистрированы",
            short_desc_kz: "800 000+ төсек-орын және жұмсақ алынбалы жабдық цифрланған және тіркелген",
            short_desc_en: "800,000+ bed linen and soft detachable equipment digitized and registered",
            description: ['800,000+ постельного белья и мягкого съемного оборудования цифровизированы и зарегистрированы', 'Ежедневное мониторинга инвентаря и отслеживание каждой единицы на этапах стирки, хранения и передачи', 'Инвентаризация надежно работает более 3 лет'],
            description_kz: ['800,000+ жаттығу материалдары мен жумыс жасауға бағытталған мягкі жабыс құрылымдары цифрландырылды және тіркеуге тұжырылды', 'Күнделікті инвентарларды мониторлау және жуықтау, сақтау және аудару адамдарының өткенін көру', 'Инвентарлар 3 жылдан астам уақыт аштықтармен жұмыс істейді'],
            description_en: ['800,000+ bed linen and soft detachable equipment digitized and registered', 'Daily monitoring of inventory and tracking for each item through washing, storage, and transfer stages', 'Inventory has been reliably operating for over 3 years'],
        }, {
            id: 5,
            title: "КАЗТРАНСОЙЛ",
            title_kz: "ҚАЗТРАНСОЙЛ",
            title_en: "KAZTRANSOIL",
            img: img1,
            short_desc: "7500+ основных средств и оборудования оцифрованы и зарегистрированы",
            short_desc_kz: "7 500+ негізгі құралдар мен жабдықтар цифрландырылды және тіркелді",
            short_desc_en: "7,500+ fixed assets and equipment digitized and registered",
            description: ['7,500+ основных средств и оборудования цифровизированы и зарегистрированы', 'Инвентаризация и время отслеживания сокращены с 2 месяцев до 1 недели', 'Инвентаризация надежно работает более 3 лет'],
            description_kz: ['7,500+ нысандық мүлдемдер мен жабдықтарды цифрландырып жаздап алынды', 'Инвентаризация және бақылау уақыты 2 айдан 1 аптаға көмейтілді', 'Инвентаризация 3 жылдан астам уақыт барысында сенімді жұмыс істейді'],
            description_en: ['7,500+ fixed assets and equipment digitized and registered', 'Inventory and tracking time reduced from 2 months to 1 week', 'Inventory has been reliably operating for over 3 years'],
        }], accomplishments: [{
            id: 1,
            title: "KazAeroNavigation - (USA, Orlando 2018, RFID Journal)",
            title_kz: "KazAeroNavigation - (USA, Orlando 2018, RFID Journal)",
            title_en: "KazAeroNavigation - (USA, Orlando 2018, RFID Journal)",
            img: img1Acc,
            img_bg: img1AccBg,
            short_desc: "Награда за лучшее внедрение технологии RFID",
            short_desc_kz: "RFID технологиясын ең жақсы енгізу үшін марапат",
            short_desc_en: "Award for the best implementation of RFID technology \n",
            description: "Награда за лучшее внедрение технологии RFID",
            description_kz: "RFID технологиясын ең жақсы енгізу үшін марапат",
            description_en: "Award for the best implementation of RFID technology \n",
            certificates: [{
                id: 1,
                name: "Свидетельство, удостоверяющее регистрацию лица в качестве участника специальной экономической зоны",
                name_kz: "Тұлғаның арнайы экономикалық аймаққа қатысушы ретінде тіркелгенін куәландыратын куәлік",
                name_en: "Certificate certifying the registration of a person as a participant in a special economic zone",
                file: acc1
            }]
        }, {
            id: 2,
            title: "KazMunayGas ( USA, Las Vegas 2022, RFID Journal) ",
            title_kz: "KazMunayGas ( USA, Las Vegas 2022, RFID Journal) ",
            title_en: "KazMunayGas ( USA, Las Vegas 2022, RFID Journal) ",
            img: img3Acc,
            img_bg: img1AccBg,
            short_desc: "Награда за лучшее внедрение технологии RFID",
            short_desc_kz: "RFID технологиясын ең жақсы енгізу марапаты",
            short_desc_en: "Award for the best implementation of RFID technology",
            description: "Награда за лучшее внедрение технологии RFID",
            description_kz: "rfid технологиясын ең жақсы енгізу марапаты",
            description_en: "Award for the best implementation of RFID technology",
            certificates: [{
                id: 1,
                name: "Свидетельство, удостоверяющее регистрацию лица в качестве участника специальной экономической зоны",
                name_kz: "Тұлғаның арнайы экономикалық аймаққа қатысушы ретінде тіркелгенін куәландыратын куәлік",
                name_en: "Certificate certifying the registration of a person as a participant in a special economic zone",
                file: acc1
            }]
        }, {
            id: 3,
            title: "ТОП-4 ИННОВАЦИОННЫХ КОМПАНИЙ КАЗАХСТАНА",
            title_kz: "ҚАЗАҚСТАНДАҒЫ ТОП 4 ИННОВАЦИЯЛЫҚ КОМПАНИЯЛАР",
            title_en: "TOP 4 INNOVATIVE COMPANIES IN KAZAKHSTAN",
            img: img2Acc,
            img_bg: img1AccBg,
            short_desc: "",
            short_desc_kz: "",
            short_desc_en: "",
            description: "",
            description_kz: "",
            description_en: "",
            certificates: [{
                id: 1,
                name: "Свидетельство, удостоверяющее регистрацию лица в качестве участника специальной экономической зоны",
                name_kz: "Тұлғаның арнайы экономикалық аймаққа қатысушы ретінде тіркелгенін куәландыратын куәлік",
                name_en: "Certificate certifying the registration of a person as a participant in a special economic zone",
                file: acc1
            }]
        }], indSectors: [{
            id: 1,
            title: "Нефть и Газ / Энергетика",
            title_kz: "Мұнай және газ / Энергетика",
            title_en: "Oil & Gas / Energy",
            description: "Технология RFID нашла ценное применение в нефтегазовой промышленности. Оно обеспечивает отслеживание и управление активами в режиме реального времени, от оборудования до персонала, улучшая протоколы безопасности и процедуры реагирования на чрезвычайные ситуации. Кроме того, RFID помогает в управлении запасами, логистике цепочки поставок, мониторинге окружающей среды и соблюдении нормативных требований. Он играет решающую роль в мониторинге состояния трубопроводов, обеспечении технического обслуживания оборудования и повышении безопасности посредством контроля доступа. Более того, системы RFID облегчают регистрацию данных и отчетность, повышая эффективность и соответствие отраслевым стандартам. Несмотря на многочисленные преимущества, успешное внедрение технологии RFID требует тщательного планирования и постоянного управления.",
            description_kz: "RFID технологиясы мұнай-газ саласында құнды қолданбаларды тапты. Ол жабдықтан бастап персоналға дейін активтерді нақты уақыт режимінде бақылауға және басқаруға, қауіпсіздік хаттамалары мен төтенше жағдайларға әрекет ету процедураларын жақсартуға мүмкіндік береді. Сонымен қатар, RFID инвентарлық қорларды басқаруға, жеткізу тізбегін логистикаға, қоршаған ортаны бақылауға және нормативтік талаптарға сәйкестікке көмектеседі. Ол құбыр жағдайларын бақылауда, жабдыққа техникалық қызмет көрсетуді қамтамасыз етуде және қол жеткізуді басқару арқылы қауіпсіздікті күшейтуде шешуші рөл атқарады. Сонымен қатар, RFID жүйелері тиімділікті арттыру және салалық стандарттарға сәйкестік үшін деректерді тіркеуді және есептілікті жеңілдетеді. Көптеген артықшылықтарына қарамастан, RFID технологиясын сәтті енгізу мұқият жоспарлауды және тұрақты басқаруды талап етеді.",
            description_en: "RFID technology has found valuable applications in the oil and gas industry. It enables real-time tracking and management of assets, from equipment to personnel, enhancing safety protocols and emergency response procedures. Additionally, RFID aids in inventory management, supply chain logistics, environmental monitoring, and regulatory compliance. It plays a crucial role in monitoring pipeline conditions, ensuring equipment maintenance, and bolstering security through access control. Moreover, RFID systems facilitate data logging and reporting for improved efficiency and compliance with industry standards. Despite its numerous benefits, successful implementation of RFID technology requires careful planning and ongoing management.",
            img: imgInds1,
            content: '<p class="mb-5">Технология RFID нашла ценное применение в нефтегазовой отрасли. Оно обеспечивает отслеживание и управление активами в режиме реального времени, от оборудования до персонала, улучшая протоколы безопасности и процедуры реагирования на чрезвычайные ситуации. Кроме того, RFID помогает в управлении запасами, логистике цепочки поставок, мониторинге окружающей среды и соблюдении нормативных требований. Он играет решающую роль в мониторинге состояния трубопроводов, обеспечении технического обслуживания оборудования и повышении безопасности посредством контроля доступа. Более того, системы RFID облегчают регистрацию данных и отчетность, повышая эффективность и соответствие отраслевым стандартам. Несмотря на многочисленные преимущества, успешное внедрение технологии RFID требует тщательного планирования и постоянного управления.</p>',
            content_kz: '<p class="mb-5">RFID технологиясы мұнай-газ саласында құнды қолданбаларды тапты. Ол жабдықтан персоналға дейін активтерді нақты уақыт режимінде бақылауға және басқаруға, қауіпсіздік хаттамалары мен төтенше жағдайларға әрекет ету процедураларын жақсартуға мүмкіндік береді. Сонымен қатар, RFID инвентарлық қорларды басқаруға, жеткізу тізбегін логистикаға, қоршаған ортаны бақылауға және нормативтік талаптарға сәйкестікке көмектеседі. Ол құбыр жағдайларын бақылауда, жабдыққа техникалық қызмет көрсетуді қамтамасыз етуде және қол жеткізуді басқару арқылы қауіпсіздікті күшейтуде шешуші рөл атқарады. Сонымен қатар, RFID жүйелері тиімділікті арттыру және салалық стандарттарға сәйкестік үшін деректерді тіркеуді және есептілікті жеңілдетеді. Көптеген артықшылықтарына қарамастан, RFID технологиясын сәтті енгізу мұқият жоспарлауды және үздіксіз басқаруды қажет етеді.</p>',
            content_en: '<p class="mb-5">RFID technology has found valuable applications in the oil and gas industry. It enables real-time tracking and management of assets, from equipment to personnel, enhancing safety protocols and emergency response procedures. Additionally, RFID aids in inventory management, supply chain logistics, environmental monitoring, and regulatory compliance. It plays a crucial role in monitoring pipeline conditions, ensuring equipment maintenance, and bolstering security through access control. Moreover, RFID systems facilitate data logging and reporting for improved efficiency and compliance with industry standards. Despite its numerous benefits, successful implementation of RFID technology requires careful planning and ongoing management.</p>',
            works: [part1, part4]
        }, {
            id: 2,
            title: "Горнодобывающая промышленность",
            title_kz: "Тау-кен",
            title_en: "Mining",
            description: "Технология RFID произвела революцию в горнодобывающей промышленности. Используя RFID-метки, компании могут эффективно отслеживать и управлять широким спектром активов, включая оборудование, инструменты и транспортные средства, гарантируя, что их местоположение и статус будут известны в режиме реального времени. Эта технология также упрощает управление запасами, особенно запасными частями и расходными материалами. Персонал может быть оснащен бейджами RFID, позволяющими точно отслеживать местоположение на горнодобывающих объектах, что повышает меры безопасности и возможности реагирования на чрезвычайные ситуации. RFID играет жизненно важную роль в цепочке поставок и логистике, регулируя движение материалов от добычи до переработки. Он также играет важную роль в планировании технического обслуживания и проверок, гарантируя соответствие оборудования стандартам безопасности. Внедрение RFID требует стратегического планирования и постоянного управления, но его преимущества с точки зрения безопасности, эффективности и соблюдения требований неоценимы для горнодобывающей промышленности.",
            description_kz: "RFID технологиясы тау-кен өнеркәсібіндегі операцияларда төңкеріс жасады. RFID тегтерін қолдану арқылы компаниялар активтердің кең ауқымын, соның ішінде жабдықтарды, құралдарды және көліктерді тиімді бақылап, басқара алады, олардың орны мен күйі нақты уақытта белгілі болуын қамтамасыз етеді. Бұл технология сонымен қатар инвентарлық қорларды, әсіресе қосалқы бөлшектер мен шығын материалдарын басқаруды жеңілдетеді. Персонал RFID бейджиктерімен жабдықталуы мүмкін, бұл тау-кен өндірісі объектілерінде орналасқан жерді дәл бақылауға мүмкіндік береді, бұл қауіпсіздік шаралары мен төтенше жағдайларды жою мүмкіндіктерін арттырады. RFID жеткізу тізбегі мен логистикада маңызды рөл атқарады, материалдардың өндіруден өңдеуге дейінгі қозғалысын реттейді. Ол сондай-ақ техникалық қызмет көрсету мен тексерулерді жоспарлауда маңызды рөл атқарады, жабдықтың қауіпсіздік стандарттарына сәйкестігіне кепілдік береді. RFID енгізу стратегиялық жоспарлауды және тұрақты басқаруды талап етеді, бірақ оның қауіпсіздік, тиімділік және сәйкестік бойынша артықшылықтары тау-кен өнеркәсібі үшін баға жетпес құнды болып табылады.",
            description_en: "RFID technology has revolutionized operations in the mining industry. By employing RFID tags, companies can effectively track and manage a wide array of assets, including equipment, tools, and vehicles, ensuring their location and status are known in real-time. This technology also streamlines inventory management, particularly for spare parts and consumables. Personnel can be equipped with RFID badges, enabling precise location tracking within mining facilities, which enhances safety measures and emergency response capabilities. RFID plays a vital role in supply chain and logistics, regulating the movement of materials from extraction to processing. It is also instrumental in scheduling maintenance and inspections, guaranteeing equipment compliance with safety standards. Implementing RFID requires strategic planning and ongoing management, but its benefits in terms of safety, efficiency, and compliance are invaluable to the mining industry.",
            img: imgInds2,
            content: '<p class="mb-5">Технология RFID произвела революцию в горнодобывающей промышленности. Используя RFID-метки, компании могут эффективно отслеживать и управлять широким спектром активов, включая оборудование, инструменты и транспортные средства, гарантируя, что их местоположение и статус будут известны в режиме реального времени. Эта технология также упрощает управление запасами, особенно запасными частями и расходными материалами. Персонал может быть оснащен бейджами RFID, позволяющими точно отслеживать местоположение на горнодобывающих объектах, что повышает меры безопасности и возможности реагирования на чрезвычайные ситуации. RFID играет жизненно важную роль в цепочке поставок и логистике, регулируя движение материалов от добычи до переработки. Он также играет важную роль в планировании технического обслуживания и проверок, гарантируя соответствие оборудования стандартам безопасности. Внедрение RFID требует стратегического планирования и постоянного управления, но его преимущества с точки зрения безопасности, эффективности и соблюдения требований неоценимы для горнодобывающей промышленности.</p>',
            content_kz: '<p class="mb-5">RFID технологиясы тау-кен өнеркәсібіндегі операцияларда төңкеріс жасады. RFID тегтерін қолдану арқылы компаниялар активтердің кең ауқымын, соның ішінде жабдықтарды, құралдарды және көліктерді тиімді бақылап, басқара алады, олардың орны мен күйі нақты уақытта белгілі болуын қамтамасыз етеді. Бұл технология сонымен қатар инвентарлық қорларды, әсіресе қосалқы бөлшектер мен шығын материалдарын басқаруды жеңілдетеді. Персонал RFID бейджиктерімен жабдықталуы мүмкін, бұл тау-кен өндірісі объектілерінде орналасқан жерді дәл бақылауға мүмкіндік береді, бұл қауіпсіздік шаралары мен төтенше жағдайларды жою мүмкіндіктерін арттырады. RFID жеткізу тізбегі мен логистикада маңызды рөл атқарады, материалдардың өндіруден өңдеуге дейінгі қозғалысын реттейді. Ол сондай-ақ техникалық қызмет көрсету мен тексерулерді жоспарлауда маңызды рөл атқарады, жабдықтың қауіпсіздік стандарттарына сәйкестігіне кепілдік береді. RFID енгізу стратегиялық жоспарлауды және тұрақты басқаруды талап етеді, бірақ оның қауіпсіздік, тиімділік және сәйкестік бойынша артықшылықтары тау-кен өнеркәсібі үшін баға жетпес құнды болып табылады.</p>',
            content_en: '<p class="mb-5">RFID technology has revolutionized operations in the mining industry. By employing RFID tags, companies can effectively track and manage a wide array of assets, including equipment, tools, and vehicles, ensuring their location and status are known in real-time. This technology also streamlines inventory management, particularly for spare parts and consumables. Personnel can be equipped with RFID badges, enabling precise location tracking within mining facilities, which enhances safety measures and emergency response capabilities. RFID plays a vital role in supply chain and logistics, regulating the movement of materials from extraction to processing. It is also instrumental in scheduling maintenance and inspections, guaranteeing equipment compliance with safety standards. Implementing RFID requires strategic planning and ongoing management, but its benefits in terms of safety, efficiency, and compliance are invaluable to the mining industry.</p>',
            works: [part15]
        }, {
            id: 3,
            title: "Транспорт и логистика",
            title_kz: "Көлік және логистика",
            title_en: "Transport and Logistics",
            description: "Технология RFID стала незаменимым инструментом в транспортно-логистическом секторе. Оно обеспечивает точное отслеживание и управление активами, включая товары, транспортные средства и контейнеры, обеспечивая легкий доступ к их местонахождению и статусу в режиме реального времени. Эта технология упрощает управление запасами, предоставляя точные данные об уровне запасов и улучшая процессы выполнения заказов. RFID-метки используются для идентификации и контроля отдельных предметов в поставках, повышая прозрачность и уменьшая количество ошибок в цепочке поставок. Кроме того, персонал может быть оснащен бейджами RFID, позволяющими эффективно отслеживать сотрудников, что помогает контролировать рабочее время и обеспечивать соблюдение протоколов безопасности. Кроме того, технология RFID облегчает автоматический сбор данных для целей отчетности, анализа и обеспечения соответствия, оптимизации операций и принятие решений. Его реализация требует тщательного планирования и постоянного управления, но преимущества с точки зрения эффективности, точности и безопасности неоценимы для транспортно-логистической отрасли.",
            description_kz: "RFID технологиясы көлік және логистика секторында таптырмас құралға айналды. Ол активтерді, соның ішінде тауарларды, көліктерді және контейнерлерді нақты бақылауға және басқаруға мүмкіндік береді, олардың нақты уақыттағы орналасқан жері мен күйіне оңай қол жеткізуді қамтамасыз етеді. Бұл технология тауарлық-материалдық қорларды басқаруды оңтайландырады, қор деңгейлері туралы нақты деректерді қамтамасыз етеді және тапсырыстарды орындау процестерін жақсартады. RFID тегтері жеткізілімдердегі жеке элементтерді анықтау және бақылау, көрінуді жақсарту және жеткізу тізбегіндегі қателерді азайту үшін қолданылады. Сонымен қатар, қызметкерлер жұмыс уақытын бақылауға және қауіпсіздік хаттамаларының сақталуын қамтамасыз етуге көмектесетін қызметкерлерді тиімді қадағалауға мүмкіндік беретін RFID бейдждерімен жабдықталуы мүмкін. Сонымен қатар, RFID технологиясы есеп беру, талдау және сәйкестік мақсаттары үшін деректерді автоматтандырылған түсіруді жеңілдетеді, операцияларды оңтайландырады және шешім қабылдау. Оны жүзеге асыру мұқият жоспарлауды және тұрақты басқаруды талап етеді, бірақ тиімділік, дәлдік және қауіпсіздік тұрғысынан артықшылықтар көлік және логистика саласы үшін баға жетпес құнды болып табылады.",
            description_en: "RFID technology has become an indispensable tool in the transportation and logistics sector. It enables precise tracking and management of assets, including goods, vehicles, and containers, ensuring their real-time location and status are readily accessible. This technology streamlines inventory management, providing accurate data on stock levels and improving order fulfillment processes. RFID tags are used to identify and monitor individual items within shipments, enhancing visibility and reducing errors in the supply chain. Additionally, personnel can be equipped with RFID badges, allowing for efficient tracking of employees, which aids in monitoring work hours and ensuring compliance with safety protocols.Moreover, RFID technology facilitates automated data capture for reporting, analysis, and compliance purposes, optimizing operations and decision-making. Its implementation requires careful planning and ongoing management, but the benefits in terms of efficiency, accuracy, and security are invaluable to the transportation and logistics industry.\n",
            img: imgInds3,
            content: '<p class="mb-5">Технология RFID стала незаменимым инструментом в секторе транспорта и логистики. Оно обеспечивает точное отслеживание и управление активами, включая товары, транспортные средства и контейнеры, обеспечивая легкий доступ к их местонахождению и статусу в режиме реального времени. Эта технология упрощает управление запасами, предоставляя точные данные об уровне запасов и улучшая процессы выполнения заказов. RFID-метки используются для идентификации и контроля отдельных предметов в поставках, повышая прозрачность и уменьшая количество ошибок в цепочке поставок. Кроме того, персонал может быть оснащен бейджами RFID, позволяющими эффективно отслеживать сотрудников, что помогает контролировать рабочее время и обеспечивать соблюдение протоколов безопасности.Кроме того, технология RFID облегчает автоматический сбор данных для целей отчетности, анализа и соблюдения требований, оптимизации операций и принятие решений. Его реализация требует тщательного планирования и постоянного управления, но преимущества с точки зрения эффективности, точности и безопасности неоценимы для транспортно-логистической отрасли.</p>',
            content_kz: '<p class="mb-5">RFID технологиясы көлік және логистика секторында таптырмас құралға айналды. Ол активтерді, соның ішінде тауарларды, көліктерді және контейнерлерді нақты бақылауға және басқаруға мүмкіндік береді, олардың нақты уақыттағы орналасқан жері мен күйіне оңай қол жеткізуді қамтамасыз етеді. Бұл технология тауарлық-материалдық қорларды басқаруды оңтайландырады, қор деңгейлері туралы нақты деректерді қамтамасыз етеді және тапсырыстарды орындау процестерін жақсартады. RFID тегтері жеткізілімдердегі жеке элементтерді анықтау және бақылау, көрінуді жақсарту және жеткізу тізбегіндегі қателерді азайту үшін қолданылады. Сонымен қатар, қызметкерлер жұмыс уақытын бақылауға және қауіпсіздік хаттамаларының сақталуын қамтамасыз етуге көмектесетін қызметкерлерді тиімді қадағалауға мүмкіндік беретін RFID бейдждерімен жабдықталуы мүмкін. Сонымен қатар, RFID технологиясы есеп беру, талдау және сәйкестік мақсаттары үшін деректерді автоматтандырылған түсіруді жеңілдетеді, операцияларды оңтайландырады және шешім қабылдау Оны жүзеге асыру мұқият жоспарлауды және үздіксіз басқаруды талап етеді, бірақ тиімділік, дәлдік және қауіпсіздік тұрғысынан артықшылықтар көлік және логистика саласы үшін баға жетпес.</p>',
            content_en: '<p class="mb-5">RFID technology has become an indispensable tool in the transportation and logistics sector. It enables precise tracking and management of assets, including goods, vehicles, and containers, ensuring their real-time location and status are readily accessible. This technology streamlines inventory management, providing accurate data on stock levels and improving order fulfillment processes. RFID tags are used to identify and monitor individual items within shipments, enhancing visibility and reducing errors in the supply chain. Additionally, personnel can be equipped with RFID badges, allowing for efficient tracking of employees, which aids in monitoring work hours and ensuring compliance with safety protocols.Moreover, RFID technology facilitates automated data capture for reporting, analysis, and compliance purposes, optimizing operations and decision-making. Its implementation requires careful planning and ongoing management, but the benefits in terms of efficiency, accuracy, and security are invaluable to the transportation and logistics industry.</p>',
            works: [part3, part11, part6, part14]
        }, {
            id: 4,
            title: "Розничная торговля и гостиничный бизнес",
            title_kz: "Бөлшек сауда және қонақжайлылық",
            title_en: "Retail and Hospitality",
            description: "Технология RFID произвела революцию в сфере розничной торговли и гостиничного бизнеса. Используя RFID-метки, предприятия могут эффективно отслеживать и управлять своими запасами, от одежды и потребительских товаров до постельного белья и предметов личной гигиены, обеспечивая точный контроль над уровнем запасов и минимизируя потери из-за усадки. Эта технология упрощает процесс оформления заказа, обеспечивая более быстрые и точные транзакции, что в конечном итоге повышает удовлетворенность клиентов. RFID-метки можно прикреплять к отдельным товарам, что позволяет розничным продавцам отслеживать перемещение товаров, оптимизировать выкладку на полках. В гостиничном секторе RFID-карты изменили управление ключами, обеспечив безопасный доступ к номерам и удобствам для гостей. Это не только повышает безопасность, но и улучшает общее впечатление гостя. Кроме того, технология RFID используется для идентификации персонала и учета рабочего времени, оптимизации организации труда и обеспечения соблюдения трудового законодательства. Более того, RFID облегчает сбор данных для отчетности, анализа и управления взаимоотношениями с клиентами, позволяя предприятиям принимать обоснованные решения и предоставлять индивидуальный опыт. Хотя внедрение RFID требует стратегического планирования и постоянного управления, его преимущества с точки зрения операционной эффективности, удовлетворенности клиентов и безопасности неоценимы для предприятий розничной торговли и гостиничного бизнеса.",
            description_kz: "RFID технологиясы бөлшек сауда және қонақжайлылық салаларындағы операцияларда төңкеріс жасады. RFID тегтерін қолдана отырып, кәсіпорындар киім-кешек пен тұтыну тауарларынан бастап, төсек-орын және тұрмыстық бұйымдарға дейін қорларды тиімді бақылап, басқара алады, қор деңгейін дәл бақылауды қамтамасыз етеді және қысқарудан болатын шығындарды азайтады. Бұл технология тезірек және дәлірек транзакцияларды жүргізуге мүмкіндік беретін, сайып келгенде, тұтынушылардың қанағаттануын жақсарта отырып, шығу процесін жеңілдетеді. RFID тегтерін жеке элементтерге бекітуге болады, бұл бөлшек саудагерлерге өнімнің қозғалысын бақылауға, сөре дисплейлерін оңтайландыруға мүмкіндік береді. Қонақжайлылық секторында RFID карталары қонақ бөлмелері мен ыңғайлылыққа қауіпсіз қол жеткізуді қамтамасыз ететін негізгі басқаруды өзгертті. Бұл қауіпсіздікті арттырып қана қоймайды, сонымен қатар қонақтардың жалпы тәжірибесін жақсартады. Сонымен қатар, RFID технологиясы қызметкерлерді сәйкестендіру және уақытты бақылау, еңбекті басқаруды оңтайландыру және еңбек ережелерінің сақталуын қамтамасыз ету үшін қолданылады. Сонымен қатар, RFID есеп беру, талдау және тұтынушылармен қарым-қатынасты басқару үшін деректерді жинауды жеңілдетеді, бұл бизнеске негізделген шешімдер қабылдауға және бейімделген тәжірибені қамтамасыз етуге мүмкіндік береді. RFID енгізу стратегиялық жоспарлауды және тұрақты басқаруды қажет еткенімен, оның операциялық тиімділік, тұтынушылардың қанағаттанушылығы және қауіпсіздік тұрғысынан артықшылықтары бөлшек сауда және қонақжайлылық индустриясы үшін баға жетпес құнды болып табылады.",
            description_en: "RFID technology has revolutionized operations in the retail and hospitality industries. By leveraging RFID tags, businesses can efficiently track and manage their inventory, from clothing and consumer goods to linens and amenities, ensuring precise control over stock levels and minimizing losses due to shrinkage. This technology streamlines the check-out process, allowing for faster and more accurate transactions, ultimately improving customer satisfaction. RFID tags can be attached to individual items, enabling retailers to monitor product movement, optimize shelf displays.. In the hospitality sector, RFID cards have transformed key management, providing secure access to guest rooms and amenities. This not only enhances security but also improves the overall guest experience. Additionally, RFID technology is employed for staff identification and time tracking, streamlining labor management and ensuring compliance with labor regulations. Moreover, RFID facilitates data capture for reporting, analysis, and customer relationship management, enabling businesses to make informed decisions and provide tailored experiences. While the implementation of RFID requires strategic planning and ongoing management, its benefits in terms of operational efficiency, customer satisfaction, and security are invaluable to the retail and hospitality industries.",
            img: imgInds4,
            content: '<p class="mb-5">Технология RFID произвела революцию в сфере розничной торговли и гостиничного бизнеса. Используя RFID-метки, предприятия могут эффективно отслеживать и управлять своими запасами, от одежды и потребительских товаров до постельного белья и предметов личной гигиены, обеспечивая точный контроль над уровнем запасов и минимизируя потери из-за усадки. Эта технология упрощает процесс оформления заказа, обеспечивая более быстрые и точные транзакции, что в конечном итоге повышает удовлетворенность клиентов. RFID-метки можно прикреплять к отдельным товарам, что позволяет розничным продавцам отслеживать перемещение товаров, оптимизировать выкладку на полках. В гостиничном секторе RFID-карты изменили управление ключами, обеспечив безопасный доступ к номерам и удобствам для гостей. Это не только повышает безопасность, но и улучшает общее впечатление гостя. Кроме того, технология RFID используется для идентификации персонала и учета рабочего времени, оптимизации организации труда и обеспечения соблюдения трудового законодательства. Более того, RFID облегчает сбор данных для отчетности, анализа и управления взаимоотношениями с клиентами, позволяя предприятиям принимать обоснованные решения и предоставлять индивидуальный опыт. Хотя внедрение RFID требует стратегического планирования и постоянного управления, его преимущества с точки зрения операционной эффективности, удовлетворенности клиентов и безопасности неоценимы для предприятий розничной торговли и гостиничного бизнеса.</p>',
            content_kz: '<p class="mb-5">RFID технологиясы бөлшек сауда және қонақжайлылық салаларындағы операцияларда төңкеріс жасады. RFID тегтерін қолдана отырып, кәсіпорындар киім-кешек пен тұтыну тауарларынан бастап, төсек-орын және тұрмыстық бұйымдарға дейін қорларды тиімді бақылап, басқара алады, қор деңгейін дәл бақылауды қамтамасыз етеді және қысқарудан болатын шығындарды азайтады. Бұл технология тезірек және дәлірек транзакцияларды жүргізуге мүмкіндік беретін, сайып келгенде, тұтынушылардың қанағаттануын жақсарта отырып, шығу процесін жеңілдетеді. RFID тегтерін жеке элементтерге бекітуге болады, бұл бөлшек саудагерлерге өнімнің қозғалысын бақылауға, сөре дисплейлерін оңтайландыруға мүмкіндік береді. Қонақжайлылық секторында RFID карталары қонақ бөлмелері мен ыңғайлылыққа қауіпсіз қол жеткізуді қамтамасыз ететін негізгі басқаруды өзгертті. Бұл қауіпсіздікті арттырып қана қоймайды, сонымен қатар қонақтардың жалпы тәжірибесін жақсартады. Сонымен қатар, RFID технологиясы қызметкерлерді сәйкестендіру және уақытты бақылау, еңбекті басқаруды оңтайландыру және еңбек ережелерінің сақталуын қамтамасыз ету үшін қолданылады. Сонымен қатар, RFID есеп беру, талдау және тұтынушылармен қарым-қатынасты басқару үшін деректерді жинауды жеңілдетеді, бұл бизнеске негізделген шешімдер қабылдауға және бейімделген тәжірибені қамтамасыз етуге мүмкіндік береді. RFID енгізу стратегиялық жоспарлауды және тұрақты басқаруды қажет етсе де, оның операциялық тиімділік, тұтынушылардың қанағаттануы және қауіпсіздік тұрғысынан артықшылықтары бөлшек сауда және қонақжайлылық индустриясы үшін баға жетпес құнды болып табылады.</p>',
            content_en: '<p class="mb-5">RFID technology has revolutionized operations in the retail and hospitality industries. By leveraging RFID tags, businesses can efficiently track and manage their inventory, from clothing and consumer goods to linens and amenities, ensuring precise control over stock levels and minimizing losses due to shrinkage. This technology streamlines the check-out process, allowing for faster and more accurate transactions, ultimately improving customer satisfaction. RFID tags can be attached to individual items, enabling retailers to monitor product movement, optimize shelf displays.. In the hospitality sector, RFID cards have transformed key management, providing secure access to guest rooms and amenities. This not only enhances security but also improves the overall guest experience. Additionally, RFID technology is employed for staff identification and time tracking, streamlining labor management and ensuring compliance with labor regulations. Moreover, RFID facilitates data capture for reporting, analysis, and customer relationship management, enabling businesses to make informed decisions and provide tailored experiences. While the implementation of RFID requires strategic planning and ongoing management, its benefits in terms of operational efficiency, customer satisfaction, and security are invaluable to the retail and hospitality industries.</p>',
            works: [part12, part5]
        }], locations: [{
            id: 1, name: "Алматы", name_kz: "Алматы", name_en: "Almaty", addresses: [{
                address: "050052, г. Алматы, микрорайон Таугуль, улица Мустай Карим, д.13а, офис 240",
                address_kz: "050052, Алматы, Таугүл шағын ауданы, Мұстай Кәрім көшесі, 13а, 240 каб.",
                address_en: "050052, Almaty, Taugul microdistrict, Mustai Karim street, 13a, office 240",
                phone: "+7 (771) 762-22-85",
                map: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.9834251224374!2d76.85627007664084!3d43.209836980992705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836830b210f111%3A0x11c14c21ab78baed!2sABiTech!5e0!3m2!1sru!2skz!4v1698696989863!5m2!1sru!2skz\" width=\"100%\" height=\"574\" style=\"border:0;\" allowFullScreen=\"\" loading=\"lazy\" className=\"px-4 sm:px-0\" referrerPolicy=\"no-referrer-when-downgrade\"></iframe>"
            }]
        }, {
            id: 2, name: "Астана", name_kz: "Астана", name_en: "Astana", addresses: [{
                address: "Республика Казахстан, г. Астана , пр. Кабанбай Батыра, 11, офис 3",
                address_kz: "Қазақстан Республикасы, Астана қаласы, Қабанбай батыр даңғылы, 11, 3-кабинет",
                address_en: "Republic of Kazakhstan, Astana, Kabanbai Batyr Ave., 11, office 3",
                phone: "+7 (771) 762-22-85",
                map: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.2724352719465!2d71.41255777705925!3d51.140327037452415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586bd7b789913%3A0x3e826265a96c6da6!2z0L_RgNC-0YHQvy4g0JrQsNCx0LDQvdCx0LDQuSDQkdCw0YLRi9GA0LAgMTEsINCQ0YHRgtCw0L3QsCAwMjAwMDA!5e0!3m2!1sru!2skz!4v1698743883162!5m2!1sru!2skz\" width=\"100%\" height=\"574\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
            }]
        }, {
            id: 3, name: "Ташкент", name_kz: "Ташкент", name_en: "Tashkent", addresses: [{
                address: "Город Ташкент Шайхантаурский район Массив Лабзак, дом 1 кВ 28",
                address_kz: "Ташкент қаласы Шайхантаур ауданы Лабзақ массиві 1 үй 28 пәтер",
                address_en: "Tashkent city Shaykhantaur district Labzak massif, building 1 apartment 28",
                phone: "+7 (771) 762-22-85",
                map: "<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Ab608545a9131312c3b29a42631b1d2c452ff7cfe18235f389181997e98526fea&amp;source=constructor\" width=\"100%\" height=\"574\" frameborder=\"0\"></iframe>"
            }]
        }, {
            id: 4, name: "Москва", name_kz: "Мәскеу", name_en: "Moscow", addresses: [{
                address: "Россия, г. Видное, 432072 Московская обл., г. Видное, пр-т, Ленинского Комсомола, 41, офис 206",
                address_kz: "Ресей, Видное, 432072 Мәскеу облысы, Видное қ., Ленинский комсомол даңғылы, 41, 206 каб.",
                address_en: "Russia, Vidnoye, 432072 Moscow region, Vidnoye, Leninsky Komsomol Ave., 41, office 206",
                phone: "+7 (771) 762-22-85",
                map: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.3258679083374!2d37.698442477254616!3d55.54411070804549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aafd2b15cb085%3A0x90c8dfd5312a4c0d!2z0L_RgNC-0YHQvy4g0JvQtdC90LjQvdGB0LrQvtCz0L4g0JrQvtC80YHQvtC80L7Qu9CwLCA0MSwg0JLQuNC00L3QvtC1LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDE0MjcwMQ!5e0!3m2!1sru!2skz!4v1698743929891!5m2!1sru!2skz\" width=\"100%\" height=\"574\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
            }]
        }, {
            id: 5, name: "Дубай", name_kz: "Дубай", name_en: "Dubai", addresses: [{
                address: "Dubai Hills Estate Park Ridge Tower C Dubai, UAE",
                address_kz: "Dubai Hills Estate Park Ridge Tower C Dubai, UAE",
                address_en: "Dubai Hills Estate Park Ridge Tower C Dubai, UAE",
                phone: "+7 (771) 762-22-85",
                map: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6976101799564!2d55.24626747621318!3d25.112095535140913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6949f8b0bcf3%3A0x3d76a11f9f13a24d!2sPark%20Ridge%20Tower%20C!5e0!3m2!1sru!2skz!4v1698743954510!5m2!1sru!2skz\" width=\"100%\" height=\"574\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
            }]
        }], products: [{
            id: 1,
            title: "АСКОУ – ИНВЕНТАРИЗАЦИЯ",
            title_kz: "ASCOA – ИНВЕНТОРЛЫҚ",
            title_en: "ASCOA - INVENTORY",
            description: "ASCOA - Inventory — комплексное решение, предназначенное для проведения тщательной оценки активов предприятия, включая товарно-материальные запасы, основные средства и другие ресурсы. Разработка этой системы была мотивирована острой необходимостью точного учета и эффективного управления объектами в различных организационных средах, начиная от административных офисов и заканчивая производственными помещениями. ASCOA - Inventory обеспечивает комплексный обзор активов организации и их количества в различных отделах, а также ведет подробный учет жизненного цикла каждого объекта - от приобретения до утилизации. Помимо стандартного управления запасами, система предлагает расширенные функциональные возможности, позволяющие отслеживать физическое перемещение активов и налагать ограничения на их вывоз из определенных зон, таких как офисы или организационные помещения. Он также тщательно регистрирует вход и выход контролируемых активов. Более того, ASCOA - Inventory предлагает возможность связывать активы с конкретными местоположениями, повышая точность управления и отслеживания активов.",
            description_kz: "ASCOA – Түгендеу – бұл кәсіпорынның активтерін мұқият бағалауға арналған, түгендеу қорларын, негізгі құралдарды және басқа ресурстарды қамтитын кешенді шешім. Бұл жүйенің дамуы әкімшілік кеңселерден бастап өндірістік нысандарға дейінгі әртүрлі ұйымдық орталардағы объектілерді дәл жазу және тиімді басқарудың маңызды қажеттілігінен туындады. ASCOA - Түгендеу ұйымның активтері мен олардың әртүрлі бөлімшелердегі санының жан-жақты шолуын қамтамасыз етеді, сонымен қатар әрбір объектінің өмірлік циклінің егжей-тегжейлі жазбасын сақтайды - сатып алудан бастап шығаруға дейін. Стандартты түгендеуді басқарудан басқа, жүйе активтердің физикалық қозғалысын бақылауға және оларды кеңселер немесе ұйымдық үй-жайлар сияқты белгілі бір аумақтардан шығаруға шектеулер енгізуге мүмкіндік беретін жетілдірілген функцияларды ұсынады. Ол сондай-ақ бақыланатын активтердің кіруі мен шығуын мұқият журналдайды. Сонымен қатар, ASCOA - Түгендеу активтерді басқару мен қадағалаудағы дәлдікті арттыра отырып, белгілі бір орындармен активтерді байланыстыру мүмкіндігін ұсынады.",
            description_en: "ASCOA - Inventory is a comprehensive solution designed to conduct a thorough assessment of an enterprise's assets, encompassing inventory, fixed assets, and other resources. The development of this system was motivated by the critical need for accurate recording and effective management of objects in various organizational environments, ranging from administrative offices to manufacturing facilities. ASCOA - Inventory provides a comprehensive overview of the organization's assets and their quantities across different departments, while also maintaining a detailed record of each object's lifecycle - from acquisition to disposal. In addition to standard inventory management, the system offers advanced functionalities, enabling the monitoring of physical movements of assets and the imposition of restrictions on their removal from specified areas, such as offices or organizational premises. It also meticulously logs the entry and exit of controlled assets. Moreover, ASCOA - Inventory offers the capability to associate assets with specific locations, enhancing precision in asset management and tracking.",
            img: imgProd1,
            certificates: [{
                id: 1, name: "ASCOA - INVENTORY", file: prodPDF1
            }]
        }, {
            id: 2,
            title: "АСКОУ – УПРАВЛЕНИЕ СКЛАДОМ",
            title_kz: "ASCOA – ҚОЙМА БАСҚАРУ",
            title_en: "ASCOA – WAREHOUSE MANAGEMENT",
            description: "ASCOA – Управление складом – это сложная система, предназначенная для учета, управления запасами и точного отслеживания товарных запасов на огромных складских объектах. На крупных производственных предприятиях, где на складах хранятся тысячи, а часто и десятки тысяч отдельных предметов, каждый из них может дополнительно включать в себя множество отдельных объектов запасов, товаров и материалов. Традиционно проведение инвентаризации такого обширного набора товаров является трудоемким процессом, часто занимающим несколько месяцев и преимущественно выполняемым вручную. Чтобы ускорить эту операцию практически до одного дня или даже часа, одновременно обеспечив прозрачность и автоматизацию, был разработан комплекс управления «АСКОА-Склад». Благодаря интеграции технологии RFID ASCOA - Управление складом облегчает быструю инвентаризацию, оприходование и выдачу товарно-материальных запасов, обеспечивая при этом полную совместимость с существующими учетными и финансовыми системами предприятия. Такая интеграция оптимизирует операции, повышает точность и значительно ускоряет общий процесс управления запасами.",
            description_kz: "ASCOA – Қойманы басқару – бұл кең қоймалардағы тауарлық-материалдық қорларды есепке алуға, басқаруға және нақты қадағалауға арналған күрделі жүйе. Қоймаларда мыңдаған, көбінесе ондаған мың түрлі заттар бар ірі өндірістік кәсіпорындарда олардың әрқайсысы тауарлық-материалдық қорлардың, тауарлардың және материалдардың көптеген жеке объектілерін қамтуы мүмкін. Дәстүрлі түрде мұндай кең ауқымды элементтерді түгендеу көп уақытты қажет ететін жұмыс, көбінесе бірнеше айға созылады және негізінен қолмен орындалатын процестерге тәуелді. Бұл операцияны шамамен бір тәулікке немесе тіпті сағатқа дейін жеделдету үшін, сонымен бірге бір мезгілде ашықтық пен автоматтандыруды қамтамасыз ету үшін ASCOA-Warehouse басқару кешені әзірленді. RFID технологиясын біріктіру арқылы ASCOA - қойманы басқару кәсіпорынның қолданыстағы бухгалтерлік және қаржылық жүйелерімен үздіксіз үйлесімділікті ұсына отырып, тауарлық-материалдық құндылықтарды жылдам түгендеуді, капиталдандыруды және шығаруды жеңілдетеді. Бұл біріктіру операцияларды жеңілдетеді, дәлдікті арттырады және жалпы қорларды басқару процесін айтарлықтай жылдамдатады.",
            description_en: "ASCOA – Warehouse management is a sophisticated system tailored for the accounting, inventory management, and precise tracking of inventory items within vast warehouse facilities. In sizeable manufacturing enterprises, where warehouses house thousands, and often tens of thousands, of distinct items, each of these may further encompass numerous individual objects of inventory, goods, and materials. Traditionally, conducting inventory for such an extensive array of items is a time-consuming endeavour, often extending over several months and predominantly reliant on manual processes. To expedite this operation to nearly one day or even hours, while simultaneously ensuring transparency and automation, the ASCOA-Warehouse management complex was developed. Through the integration of RFID technology, ASCOA - Warehouse management facilitates swift inventorying, capitalization, and issuance of inventory items, all while offering seamless compatibility with the existing accounting and financial systems of the enterprise. This integration streamlines operations, enhances accuracy, and significantly expedites the overall inventory management process.",
            img: imgProd2,
            certificates: [{
                id: 1, name: "ASCOA - WAREHOUSE", file: prodPDF2
            }]
        }, {
            id: 3,
            title: "АСКОУ – охрана труда и безопасность",
            title_kz: "АСКОУ – еңбекті қорғау және қауіпсіздік",
            title_en: "ASCOA – OCCUPATIONAL HEALTH AND SAFETY",
            description: "Модуль ASCOA по охране труда и технике безопасности предоставляет комплексную платформу для отслеживания и документирования учебных занятий по охране труда, а также позволяет легко управлять записями с помощью подписей и фотографий на мобильных устройствах. Эта универсальная система распространяется на медицинские осмотры и регистрацию сотрудников. Кроме того, система охраны труда на основе RFID обеспечивает отслеживание персонала в режиме реального времени, проверку защитного оборудования, отчеты об инцидентах и мониторинг соответствия требованиям. Хотя внедрение требует тщательного планирования, преимущества в области безопасности, соответствия требованиям и операционной эффективности делают его ценной инвестицией в благополучие на рабочем месте.",
            description_kz: "ASCOA Еңбекті қорғау және қауіпсіздік модулі мобильді құрылғылардағы қолтаңбалар мен фотосуреттер арқылы жазбаларды үздіксіз басқару, еңбекті қорғау бойынша оқу сабақтарын қадағалау және құжаттау үшін жан-жақты платформаны ұсынады. Бұл әмбебап жүйе медициналық тексерулер мен қызметкерлерді тіркеуді қамтиды. Сонымен қатар, RFID негізіндегі OHS жүйесі нақты уақыт режимінде персоналды қадағалауды, қауіпсіздік жабдығын тексеруді, оқиға туралы есеп беруді және сәйкестікті бақылауды ұсынады. Іске асыру мұқият жоспарлауды қажет еткенімен, қауіпсіздік, сәйкестік және операциялық тиімділіктегі артықшылықтар оны жұмыс орнының әл-ауқаты үшін құнды инвестицияға айналдырады.",
            description_en: "The ASCOA Occupational Health and Safety module provides a comprehensive platform for tracking and documenting OSH training sessions, seamlessly managing records through signatures and photos on mobile devices. This versatile system extends to include medical examinations and employee registration. Additionally, an RFID-based OHS system offers real-time personnel tracking, safety equipment verification, incident reporting, and compliance monitoring. While implementation requires careful planning, the benefits in safety, compliance, and operational efficiency make it a valuable investment for workplace well-being.",
            img: imgProd3,
            certificates: [{
                id: 1, name: "ASCOA - OCCUPATIONAL HEALTH AND SAFETY", file: prodPDF3
            }]
        }, {
            id: 4,
            title: "АСКОУ – ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ И РЕМОНТ",
            title_kz: "ASCOA – ҚЫЗМЕТ КӨРСЕТУ ЖӘНЕ ЖӨНДЕУ",
            title_en: "ASCOA – MAINTENANCE AND REPAIR",
            description: "Система технического обслуживания и ремонта ASCOA обеспечивает бесперебойную работу инфраструктуры и оборудования, особенно на крупных, географически рассредоточенных предприятиях. Автоматизированное планирование и выполнение технического обслуживания, а также тщательный оперативный учет играют решающую роль в обеспечении оптимальной производительности. Это особенно важно, когда оборудование отвечает за соблюдение стандартов безопасности на транспорте, например, в поездах и самолетах. Интегрируя передовые системы, такие как ASCOA – Maintenance and Repair, компании могут осуществлять контроль в режиме реального времени над плановыми задачами по техническому обслуживанию, независимо от отраслевой специфики. Кроме того, возможность собирать и анализировать данные об операционных расхождениях позволяет предприятиям активно решать проблемы и принимать специализированные меры по снижению сбоев и отказов оборудования.",
            description_kz: "ASCOA Maintenance and Repair жүйесі инфрақұрылым мен жабдықтың, әсіресе ірі, географиялық тұрғыдан шашыраңқы кәсіпорындар үшін үздіксіз жұмыс істеуін қамтамасыз етеді. Техникалық қызмет көрсетуді автоматтандырылған жоспарлау және орындау, мұқият операциялық есеппен қатар, оңтайлы өнімділікті қамтамасыз етуде шешуші рөл атқарады. Бұл әсіресе жабдыққа пойыздар мен ұшақтар сияқты тасымалдаудағы қауіпсіздік стандарттарын сақтау міндеті қойылған кезде өте маңызды. ASCOA - Maintenance and Repair сияқты жетілдірілген жүйелерді біріктіру арқылы компаниялар саланың ерекшеліктеріне қарамастан жоспарланған техникалық қызмет көрсету тапсырмаларын нақты уақытта бақылауды жүзеге асыра алады. Сонымен қатар, операциялық сәйкессіздіктер туралы деректерді жинау және талдау мүмкіндігі бизнеске мәселелерді белсенді түрде шешуге және жабдықтың ақаулары мен ақауларын азайту үшін арнайы шараларды жүзеге асыруға мүмкіндік береді.",
            description_en: "ASCOA Maintenance and Repair system ensures seamless functioning of infrastructure and equipment, particularly for large, geographically dispersed enterprises. The automated planning and execution of maintenance, along with diligent operational accounting, play a pivotal role in ensuring optimal performance. This is especially crucial when equipment is tasked with upholding safety standards in transportation, such as for trains and planes. By integrating advanced systems, like ASCOA - Maintenance and Repair, companies can exercise real-time control over planned maintenance tasks, regardless of industry specifics. Additionally, the ability to collect and analyse data on operational discrepancies empowers businesses to proactively address issues and implement specialised measures to reduce equipment malfunctions and failures.",
            img: imgProd4,
            certificates: [{
                id: 1, name: "ASCOA - MAINTENANCE AND REPAIR", file: prodPDF4
            }]
        },]
    }, getters: {
        getClients: (state) => state.clients,
        getAccomplishments: (state) => state.accomplishments,
        getIndSectors: (state) => state.indSectors,
        getLocations: (state) => state.locations,
        getProducts: (state) => state.products
    },
});
