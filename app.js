const RAW_FACTS = `
Osman Bey: Lakabı Fahrüddin’dir.
Osman Bey: 1288’de Karacahisar, 1299’da Bilecik ve 1300 tarihinde Yundhisar, Yenişehir ve İnegöl alınmıştır.
Osman Bey: Bilecik’in alınmasıyla buradaki demir madeni işlenerek ordunun silah ihtiyacı karşılanmıştır.
Osman Bey: 1302’de Koyunhisar (Bafeus veya Bafeon) Savaşı’nı kazanmıştır.
Osman Bey: İlk defa vergi alınmıştır. (Bac vergisi)
Osman Bey: İlk kadı ataması yapılmıştır. (Karacahisar’a Dursun Fakih atanmıştır.)
Osman Bey: İlk para basılmıştır. (Bakır, Mangır, Akçe olarak isimlendirilmiştir.)
Orhan Bey: 1326’da Bursa fethedilerek başkent yapılmıştır.
Orhan Bey: 1329’da Bizans ile Pelekanon (Maltepe, Eskihisar) Savaşı yapılmış ve kazanılmıştır.
Orhan Bey: 1337’de İzmit alınmıştır.
Orhan Bey: 1345’te Karesioğulları alınmıştır.
Orhan Bey: 1353’te Çimpe Kalesi alınmıştır.
Orhan Bey: 1354’te Gelibolu fethedilmiştir.
Orhan Bey: 1357’de Tekirdağ, Çorlu ve Malkara alınmıştır.
Orhan Bey: İlk tersane açılmıştır. (Karamürsel Tersanesi)
Orhan Bey: İlk saray yapılmıştır. (Bursa Bey Sarayı)
Orhan Bey: İlk medrese açılmıştır. (İznik Medresesi)
Orhan Bey: İlk müderris ataması yapılmıştır. (Davud-u Kayseri)
Orhan Bey: İlk cami yapılmıştır. (İznik Hacı Özbek Camii)
Orhan Bey: İlk defa kul sistemi uygulanmıştır.
Orhan Bey: İlk gümüş para basılmıştır. (Akçe)
Orhan Bey: İlk ordu kurulmuştur. (Yaya ve müsellem)
Orhan Bey: İlk Divan kurulmuştur. (Divan-ı Hümayun)
Orhan Bey: İlk vezir ataması yapılmıştır. (Alaaddin Paşa)
Orhan Bey: İlk defa iskân politikası uygulanmıştır.
Murat: Germiyanoğullarının toprakları çeyizle, Hamitoğullarının toprakları ise parayla satın alınmıştır.
Murat: 1363’te Sazlıdere Savaşı ile Edirne fethedilmiştir.
Murat: 1364’te ilk Osmanlı-Haçlı Savaşı olan Sırpsındığı Savaşı kazanılmıştır. Edirne başkent yapılmıştır.
Murat: 1371’de Sırplar, Çirmen’de mağlup edilmiştir.
Murat: 1387’de Ploşnik’te Osmanlı öncü birliği bozguna uğramıştır.
Murat: 1389’da ilk defa büyük bir Haçlı ordusuna karşı I. Kosova Savaşı kazanılmıştır. I. Murat savaş sonunda Miloş adındaki bir Sırplı tarafından şehit edilmiştir. Osmanlı tarihinde ilk ve son kez bir padişah savaş meydanında şehit olmuştur. Osmanlı tarihinde ilk kez top kullanılmıştır. Türk bayrağının şekli bu savaşta ortaya çıkmıştır. Bu savaşta ilk defa Anadolu beylikleri Osmanlı Devleti’ne asker göndermiştir.
Murat: İlk defa maliye teşkilatı kurulmuştur.
Murat: Kazaskerlik, defterdarlık ve sadrazamlık makamları kurulmuştur.
Murat: Edirne’de ilk defa Kapıkulu Ocağı kurulmuştur. Bu ocağa bağlı Yeniçeri, Topçu ve Acemioğlanlar Ocağı kurulmuştur.
Murat: Pençik Sistemi hayata geçirilmiştir.
Murat: Sistemli şekilde tımar ve iskân politikası uygulanmıştır.
Murat: İlk defa veraset sisteminde değişiklik yapılmıştır.
Murat: Manastır merkezli Rumeli Beylerbeyliği kurulmuştur. Lala Şahin Paşa ilk Rumeli Beylerbeyi olmuştur.
Yıldırım Bayezit: Yıldırım ünvanını Karamanoğulları ile yapılan Frenkyazısı Savaşı’nda elde etmiştir.
Yıldırım Bayezit: Anadolu Türk siyasi birliğini geniş ölçüde sağlayan ilk Osmanlı padişahıdır. (Saruhanoğulları, Aydınoğulları, Candaroğulları, Menteşeoğulları gibi beyliklere son verilmiştir.)
Yıldırım Bayezit: İlk defa Bursa’da hastane açtırmıştır.
Yıldırım Bayezit: İstanbul’u kuşatan ilk Osmanlı padişahıdır. (1391-1401 arası)
Yıldırım Bayezit: Kuşatmaya yardımcı olması için Anadoluhisarı (Güzelcehisar) yaptırılmıştır.
Yıldırım Bayezit: Anadolu Türk siyasi birliği bozulmuştur. (En önemli sonuçtur.)
Yıldırım Bayezit: Aydınoğulları, Karamanoğulları, Menteşeoğulları, Saruhanoğulları ve Hamitoğulları gibi beylikler yeniden kurulmuştur.
Yıldırım Bayezit: Akkoyunlular doğuda güçlenerek Osmanlı Devleti’nin siyasi rakibi olmuşlardır.
Yıldırım Bayezit: İstanbul’un alınması 50 yıl gecikmiştir.
Yıldırım Bayezit: Anadolu tahrip edilmiştir.
Yıldırım Bayezit: İlk defa bir Osmanlı padişahı düşmana esir düşmüştür.
Yıldırım Bayezit: Fetret Devri’ne girilmiştir. (Fasılayı Saltanat) (1402-1413)
Yıldırım Bayezit: Osmanlıların Balkanlar’da yaptığı fetih hareketleri durmuş ve sınırlar 1389’daki hâline geri dönmüştür.
Yıldırım Bayezit: Mustafa Çelebi, Timur tarafından Semerkant’a götürülmüştür.
Mehmet (Çelebi): Fetret Devri’ni sona erdirdiği için “Osmanlı Devleti’nin ikinci kurucusu” olarak adlandırılmıştır.
Mehmet (Çelebi): İlk dinî nitelikli toplumsal ayaklanma olan Şeyh Bedrettin İsyanı çıkmıştır.
Mehmet (Çelebi): Düzmece Mustafa İsyanı çıkmıştır.
II. Murat: Lakabı “Ebu’l-Hayrat”tır. (Hayır Babası)
II. Murat: Anadolu Türk siyasi birliğini geniş ölçüde tekrar sağlamıştır.
II. Murat: Osmanlı Devleti, Macar kralı Ladislas ve Eflak Beyi Hünyadi Yanoş ile 1441-1444 yılları arasında savaşmıştır.
II. Murat: Her iki tarafın çok kayıp vermesi üzerine Osmanlı Devleti ile Macarlar arasında “Edirne-Segedin Antlaşması” imzalanmıştır.
II. Murat: Bu antlaşmaya göre Osmanlı Devleti ile Macaristan arasında on yıl boyunca savaş yapılmayacağı kararı alınmıştır. Bunun üzerine II. Murat tahtı 12 yaşındaki oğlu II. Mehmet’e bırakmıştır. Bu durumu fırsata çevirmek isteyen Papa antlaşmayı kabul etmemiştir.
II. Murat: 1444’te Osmanlı Devleti, Haçlıları Varna Savaşı’nda mağlup etmiştir.
II. Murat: 1446’da ilk yeniçeri isyanı olan Buçuktepe İsyanı çıkmıştır.
II. Murat: 1448’de Osmanlı Devleti Haçlıları II. Kosova Savaşı’nda bir kez daha mağlup etmiştir. Balkanlar kesin olarak Türk yurdu hâline gelmiştir. Türkler 1683’e (II. Viyana Kuşatması) kadar taarruza geçmiş, Avrupalılar ise savunmaya çekilmiştir.
II. Murat: Enderun ilk defa devlet adamı yetiştirmek için Edirne Sarayı’nda açılmıştır.
Fatih Sultan Mehmet: Yedi dil bilmektedir. Avni mahlasıyla şiirler yazmıştır. “Kanun hükümdarı” olarak tarihe geçmiştir. Trabzonlu bilgin Amirutzes’e harita çizdirip yer adlarını Arapça’ya çevirmiştir.
Fatih Sultan Mehmet: Zihniyetiyle, ilim adamlarına gösterdiği sevgi ve fikri özgürlüğü ile “Bir ayağı Şark’ta bir ayağı Garb’ta olan büyük hükümdar” olarak anılmıştır.
Fatih Sultan Mehmet: İstanbul’un Fethi, İslam dünyasında sevinçle karşılanıp “Feth-i Mübin” olarak (Parlak Fetih) nitelendirilmiştir.
Fatih Sultan Mehmet: Candaroğullarından Sinop ve Samsun alınmıştır.
Fatih Sultan Mehmet: Karamanoğullarından Konya ve Karaman alınmıştır.
Fatih Sultan Mehmet: Trabzon Rum İmparatorluğu’na son verilmiştir. (Bizans’ın tekrar dirilme umutları sona ermiştir.)
Fatih Sultan Mehmet: Cenevizlilerden Amasra alınmıştır.
Fatih Sultan Mehmet: Doğu Anadolu Bölgesi alınmıştır.
Fatih Sultan Mehmet: Sırbistan alınmıştır. (Belgrat hariç)
Fatih Sultan Mehmet: Bosna-Hersek alınmıştır.
Fatih Sultan Mehmet: Arnavutluk alınmıştır.
Fatih Sultan Mehmet: Mora Yarımadası alınmıştır.
Fatih Sultan Mehmet: Eflak alınmıştır.
Fatih Sultan Mehmet: Boğdan alınmıştır.
Fatih Sultan Mehmet: Ege Adaları alınmıştır.
Fatih Sultan Mehmet: Yunan Adaları alınmıştır.
Fatih Sultan Mehmet: Bozcaada ve Gökçeada alınmıştır.
Fatih Sultan Mehmet: Rodos kuşatılmış ancak alınamamıştır.
Fatih Sultan Mehmet: Otranto fethedilmiştir. (Kızıl Elma ülküsü)
Fatih Sultan Mehmet: Kırım alınmıştır. (Böylece Karadeniz bir Türk gölü hâline gelmiştir.)
Fatih Sultan Mehmet: İstanbul’u alması ve yaptığı bu seferlerden dolayı “Sultanül Bahreyn ve Hakanül Berreyn” ünvanı verilmiştir. (İki denizin ve iki karanın hükümdarı)
Fatih Sultan Mehmet: Hicaz Su Yolları Sorunu yüzünden Karamanoğulları, Dulkadiroğulları ve Memlükler ile ilişkiler gerilmiştir.
Fatih Sultan Mehmet: Akkoyunluları Otlukbeli Savaşı’nda mağlup ederek Doğu Anadolu’yu egemenliği altına almıştır.
Fatih Sultan Mehmet: Topkapı Sarayı (Yeni Saray) yapılmıştır.
Fatih Sultan Mehmet: Ayasofya Kilisesi, “Fetih Camisi”ne dönüştürülmüştür.
Fatih Sultan Mehmet: İlk altın para (Sikke-i Hasene) basılmıştır.
Fatih Sultan Mehmet: İlk defa iltizam sistemi uygulanmıştır.
Fatih Sultan Mehmet: İlk defa müsadere sistemi uygulanmıştır.
Fatih Sultan Mehmet: Cülus bahşişi vermek yasalaşmıştır.
Fatih Sultan Mehmet: Divana nişancı atanmıştır.
Fatih Sultan Mehmet: Sadrazamlar Divana başkanlık etmeye başlamıştır.
Fatih Sultan Mehmet: Örfi hukuk kuralları yazılı hâle getirilmiştir. (Kanunname-i Ali Osman)
Fatih Sultan Mehmet: Sahn-ı Seman Medreseleri ile Tetimme Medreseleri açılmıştır.
Fatih Sultan Mehmet: Osmanlı Devleti ilk defa 1352’de Ceneviz Cumhuriyeti’ne ilk defa kapitülasyon vermiştir. Daha sonra kapitülasyonlar Venediklilere Çelebi Mehmet, II. Murat ve Fatih tarafından da onaylanmıştır. Osmanlıda ilk elçiliği Venedik açmıştır.
Fatih Sultan Mehmet: İstanbul’daki Venedik elçisine “Balyos” veya “Baylos” denilmiştir.
II. Bayezit: Cem Sultan Olayı döneme damgasını vurmuştur. Osmanlı Devleti’nde ilk defa bir iç sorun bir dış sorun (devletler arası) hâle gelmiştir.
II. Bayezit: Karamanoğulları’na tamamen son verilmiştir.
II. Bayezit: 1511’de Antalya ve dolaylarında Şah Kulu İsyanı çıkmıştır.
II. Bayezit: Fatih Dönemi’nde Hicaz Su Yolları Meselesi yüzünden ilişkilerin bozulmuş olduğu Memlük Devleti’yle bu dönemde ilk defa savaş yapılmıştır. (1485-1491 yılları arası) Ayrıca bu dönemde ilk kez “avarız” vergisi alınmış, ilk kez malların kalitesi ve standartları belli esaslara bağlanmıştır. (Kanunnâme-i İhtisab-ı Bursa)
II. Bayezit: II. Bayezit Dönemi yaşanan sorunlardan dolayı yükselmenin içinde bir Duraklama Dönemi olarak tarihe geçmiştir.
Yavuz Sultan Selim: Tarihçiler tarafından 8 yıla 80 yıllık iş sığdırmış padişah olarak nitelendirilmiştir.
Yavuz Sultan Selim: İlk defa Bozoklu Celal tarafından Tokat’ta Celali İsyanları başlamıştır.
Yavuz Sultan Selim: Yavuz Sultan Selim, Doğu siyaseti için Heşt-Behişt adlı kitabın yazarı İdris-i Bitlisi’yi okutmuştur. İdris-i Bitlisi, özellikle Çaldıran tarafından sonra Cizre, Siirt gibi yirmi beş yerleşim yerinin barış yoluyla Osmanlı idaresine girmesini sağlarken, yine Yavuz’un Memlüklere karşı yürüttüğü Doğu siyasetinde aktif rol alarak Musul ve Urfa’nın Osmanlı idaresine geçmesini sağlamıştır.
Yavuz Sultan Selim: 1514’te İran (Safevi) ile Çaldıran Savaşı yapılmıştır. Savaşın başarılı olmasında tüfekli askerlerin etkisi büyük olmuştur.
Yavuz Sultan Selim: 1515’te Turnadağ Savaşı ile Dulkadiroğulları’na son verilmiştir. Böylece Anadolu Türk siyasi birliği kesin olarak sağlanmıştır.
Yavuz Sultan Selim: 1516’da Memlüklerle Mercidabık Savaşı yapılmıştır. Halife vekili esir alınmıştır. Ayrıca Yavuz Sultan Selim Şam’da Muhyiddin Arabi’nin mezarını buldurup üzerine türbe ve külliye yaptırmıştır.
Yavuz Sultan Selim: 1517’de Memlüklerle Ridaniye Savaşı yapılmıştır. Memlükler Devleti yıkılmıştır. (Suriye, Filistin, Irak, Hicaz ve Mısır Osmanlı’ya geçmiştir.) Halifelik Osmanlı Devleti’ne geçmiştir. Böylece teokratik devlet anlayışı güçlenmiştir. Baharat Yolu Osmanlı Devleti’nin eline geçmiştir. Kutsal Emanetler İstanbul’a getirilmiştir. (Amaç İstanbul’u hilafet merkezi yapmak) Mısır’ın hazineleri İstanbul’a getirilmiştir. Venedik’in Kıbrıs için Memlüklere ödediği verginin Osmanlı Devleti’ne ödenmesine karar verilmiştir.
Yavuz Sultan Selim: Ridaniye Savaşı devam ederken Avrupa’da yaşanan eş gelişme “Reform”dur.
Yavuz Sultan Selim: “Mekke ve Medine’nin hizmetkârı” anlamında “Hâdimü’l Haremeyn-i Şerifeyn” ünvanı verilmiştir.
Yavuz Sultan Selim: “Kim ki torunlarımdan hazineyi benim kadar doldurursa kapılar onun mührüyle, dolduramazsa benim mührümle mühürlenmeye devam etsin.” demiştir.
Kanuni Sultan Süleyman: Osmanlı tarihinin en uzun süre tahta kalan padişahıdır. (46 sene)
Kanuni Sultan Süleyman: Muhibbi mahlasıyla şiirler yazmıştır.
Kanuni Sultan Süleyman: 1521’de Belgrat alındı. Orta Avrupa fetihleri için bir üs elde edilmiştir.
Kanuni Sultan Süleyman: 1522’de Rodos Adası, Saint Jean Şövalyeleri’nden alınmıştır.
Kanuni Sultan Süleyman: 1526’da Osmanlı Devleti, Mohaç Meydan Muharebesi’yle Macaristan’ı mağlup etmiştir. (Dünyanın en kısa süren ova savaşıdır.)
Kanuni Sultan Süleyman: 1529’da Viyana ilk defa kuşatılmıştır.
Kanuni Sultan Süleyman: 1532’de Alman Seferi’ne çıkılmıştır. Ancak Osmanlı Devleti’nin önüne bir kuvvet çıkarılamamıştır. Roma-Germen İmparatoru Şarlken’in elindeki Fransa Kralı I. Fransuva serbest bırakılmıştır.
Kanuni Sultan Süleyman: 1533’te Avusturya Kralı (Arşidük) ile Osmanlı Devleti arasında İstanbul Antlaşması (İbrahim Paşa) imzalanmıştır. Bu antlaşmayla Avusturya Arşidükü Osmanlı Devleti’nin sadrazamına eşit sayılmıştır. Böylece Orta Avrupa’nın siyasi üstünlüğü Osmanlı Devleti’nin eline geçmiştir. (Osmanlı Devleti ile Avusturya arasındaki ilk resmî antlaşma İstanbul Antlaşması’dır.)
Kanuni Sultan Süleyman: 1538’te Haçlılarla Preveze Deniz Savaşı yapılmıştır. Böylece Akdeniz bir Türk gölü hâline gelmiştir. (28 Eylül 1538)
Kanuni Sultan Süleyman: 1538-1553 yılları arasında Hint Deniz Seferleri yapılmıştır. Osmanlı’nın bu seferlerden yeteri kadar kazançlı çıkamamasında; okyanusa dayanıklı gemilerin olmaması, Hint Denizi’nin Osmanlı denizcileri tarafından bilinmemesi, Gücerat Sultanlığı’nın denizcilerimize destek vermemesi ve seferlere gereken önemin verilmemesi etkili olmuştur.
Kanuni Sultan Süleyman: 1560’ta Haçlılarla Kuzey Afrika egemenliğini pekiştiren Cerbe Deniz Savaşı yapılıp kazanılmıştır.
Kanuni Sultan Süleyman: 1565’te Turgut Ali Reis, Malta Kuşatması sırasında şehit olmuştur.
Kanuni Sultan Süleyman: 1566’da Sakız Adası alınmış ve Zigetvar Seferi yapılmıştır. (Kanuni’nin son seferidir.)
Kanuni Sultan Süleyman: 1569’da Venedik kapitülasyonu örnek alınarak Fransa’ya gerçek anlamda kapitülasyon verilmiştir.
Sokullu Mehmet Paşa: 1571’de Kıbrıs alınmıştır. Kıbrıs’ın alınmasına tepki gösteren Haçlılar, İnebahtı’da Osmanlı Devleti’nin donanmasını yakmıştır.
Sokullu Mehmet Paşa: İran ile Meşaleler Savaşı yapılmıştır. Bu savaşın sonunda 1590’da Ferhat Paşa Antlaşması imzalanmıştır.
Sokullu Mehmet Paşa: Don ve Volga Irmaklarını Birleştirme Projesi’nin amaçları; Rusların güneye inmesini engellemek ve Kırım’ı korumak, Orta Asya Türkleriyle bağlantı kurmak, İran’ı kuzeyden kontrol etmek ve İpek Yolu ticaretini canlandırmaktır.
Sokullu Mehmet Paşa: Süveyş Kanalı Projesi’nin amaçları; Kızıldeniz ile Akdeniz’i birleştirmek, Osmanlı donanmasını bu kanaldan geçirerek Hindistan’a ulaştırmak ve Baharat Yolu’na yeniden işlerlik kazandırmaktır.
Sokullu Mehmet Paşa: Marmara-Karadeniz Projesi ile Akdeniz ve Karadeniz birleştirilip donanma için alternatif bir yol amaçlanmıştır. Bu proje gemi yapımı için gerekli kereste ihtiyacını gidermek amacı da taşımaktadır.
`;

const SULTAN_ORDER = [
  "Osman Bey",
  "Orhan Bey",
  "Murat",
  "Yıldırım Bayezit",
  "Mehmet (Çelebi)",
  "II. Murat",
  "Fatih Sultan Mehmet",
  "II. Bayezit",
  "Yavuz Sultan Selim",
  "Kanuni Sultan Süleyman",
  "Sokullu Mehmet Paşa",
];

const KEY_LABELS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Q"];

const COLORS = [
  "#0f766e",
  "#3155a4",
  "#c47714",
  "#b4233a",
  "#177245",
  "#7c3aed",
  "#be123c",
  "#0e7490",
  "#a16207",
  "#4338ca",
  "#9f1239",
];

const DISPLAY_NAMES = {
  Murat: "I. Murat",
  "Mehmet (Çelebi)": "Çelebi Mehmet",
  "Sokullu Mehmet Paşa": "Sokullu Mehmet Paşa Dönemi",
};

function slugify(text) {
  return text
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const SULTANS = SULTAN_ORDER.map((name, index) => ({
  id: slugify(name),
  sourceName: name,
  key: KEY_LABELS[index],
  name: DISPLAY_NAMES[name] ?? name,
  color: COLORS[index],
}));

const sultanIdBySourceName = new Map(SULTANS.map((sultan) => [sultan.sourceName, sultan.id]));

const FACTS = RAW_FACTS.trim().split("\n").map((line, index) => {
  const separatorIndex = line.indexOf(": ");
  const sourceName = line.slice(0, separatorIndex);
  const text = line.slice(separatorIndex + 2);

  return {
    id: index + 1,
    sultan: sultanIdBySourceName.get(sourceName),
    text,
  };
});

const state = {
  remaining: [],
  currentId: null,
  selectedId: null,
  placed: new Map(),
  checked: false,
};

const els = {
  columns: document.querySelector("#columns"),
  choiceBar: document.querySelector("#choiceBar"),
  currentCardSlot: document.querySelector("#currentCardSlot"),
  drawButton: document.querySelector("#drawButton"),
  finishButton: document.querySelector("#finishButton"),
  hintToggleButton: document.querySelector("#hintToggleButton"),
  hintPanel: document.querySelector("#hintPanel"),
  hintSearch: document.querySelector("#hintSearch"),
  hintContent: document.querySelector("#hintContent"),
  selectedHint: document.querySelector("#selectedHint"),
  resetButton: document.querySelector("#resetButton"),
  placedCount: document.querySelector("#placedCount"),
  totalCount: document.querySelector("#totalCount"),
  statusText: document.querySelector("#statusText"),
  resultsPanel: document.querySelector("#resultsPanel"),
};

const factById = new Map(FACTS.map((fact) => [fact.id, fact]));
const sultanById = new Map(SULTANS.map((sultan) => [sultan.id, sultan]));

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function createColumn(sultan) {
  const column = document.createElement("article");
  column.className = "sultan-column";
  column.style.setProperty("--column-color", sultan.color);

  const title = document.createElement("div");
  title.className = "column-title";
  title.innerHTML = `
    <div class="sultan-heading">
      <span class="key-badge">${sultan.key}</span>
      <h2>${sultan.name}</h2>
    </div>
    <span class="column-count" data-count-for="${sultan.id}">0</span>
  `;

  const zone = document.createElement("div");
  zone.className = "drop-zone";
  zone.dataset.sultan = sultan.id;

  column.addEventListener("click", (event) => {
    if (event.target.closest(".fact-card")) {
      return;
    }
    assignSelectedToSultan(sultan.id);
  });

  column.append(title, zone);
  return column;
}

function createChoiceButton(sultan) {
  const button = document.createElement("button");
  button.className = "choice-button";
  button.type = "button";
  button.dataset.sultan = sultan.id;
  button.style.setProperty("--choice-color", sultan.color);
  button.innerHTML = `
    <span class="choice-key">${sultan.key}</span>
    <span class="choice-name">${sultan.name}</span>
  `;
  button.addEventListener("click", () => assignSelectedToSultan(sultan.id));
  return button;
}

function createCard(fact) {
  const card = document.createElement("div");
  card.className = "fact-card";
  card.dataset.id = String(fact.id);
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", fact.text);
  card.setAttribute("aria-pressed", "false");

  const text = document.createElement("p");
  text.className = "fact-text";
  text.textContent = fact.text;

  card.append(text);
  card.addEventListener("click", (event) => {
    event.stopPropagation();
    selectCard(card);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectCard(card);
    }
  });
  return card;
}

function renderColumns() {
  els.columns.innerHTML = "";
  SULTANS.forEach((sultan) => els.columns.append(createColumn(sultan)));
}

function renderChoices() {
  els.choiceBar.innerHTML = "";
  SULTANS.forEach((sultan) => els.choiceBar.append(createChoiceButton(sultan)));
}

function setCurrentEmpty() {
  els.currentCardSlot.innerHTML = '<p class="empty-state">Kart bekliyor</p>';
}

function drawFact() {
  if (state.currentId !== null || state.remaining.length === 0 || state.checked) {
    return;
  }

  const nextId = state.remaining.pop();
  state.currentId = nextId;
  els.currentCardSlot.innerHTML = "";
  const card = createCard(factById.get(nextId));
  els.currentCardSlot.append(card);
  selectCard(card, { preventScroll: true });
  updateUi();
}

function selectCard(card, options = {}) {
  if (state.checked) {
    return;
  }

  document.querySelectorAll(".fact-card.is-selected").forEach((selectedCard) => {
    selectedCard.classList.remove("is-selected");
    selectedCard.setAttribute("aria-pressed", "false");
  });

  card.classList.add("is-selected");
  card.setAttribute("aria-pressed", "true");
  state.selectedId = Number(card.dataset.id);
  card.focus({ preventScroll: Boolean(options.preventScroll) });
  updateUi();
}

function getSelectedCard() {
  const selectedId = state.selectedId ?? state.currentId;
  if (selectedId === null) {
    return null;
  }
  return document.querySelector(`.fact-card[data-id="${selectedId}"]`);
}

function assignSelectedToSultan(sultanId) {
  if (state.checked) {
    return;
  }

  const card = getSelectedCard();
  const zone = document.querySelector(`.drop-zone[data-sultan="${sultanId}"]`);
  if (!card || !zone) {
    return;
  }

  moveCard(card, zone);
}

function moveCard(card, zone) {
  const id = Number(card.dataset.id);
  const previousZone = card.closest(".drop-zone");
  const wasCurrentCard = state.currentId === id;

  removeResultNote(card);
  card.classList.remove("correct", "wrong");
  card.classList.remove("is-selected");
  card.setAttribute("aria-pressed", "false");
  zone.append(card);
  state.placed.set(id, zone.dataset.sultan);
  state.selectedId = null;

  if (wasCurrentCard) {
    state.currentId = null;
    setCurrentEmpty();
  }

  if (wasCurrentCard && state.remaining.length > 0 && !state.checked) {
    drawFact();
    return;
  }

  if (previousZone !== zone) {
    updateUi();
  }
}

function updateColumnCounts() {
  SULTANS.forEach((sultan) => {
    const zone = document.querySelector(`.drop-zone[data-sultan="${sultan.id}"]`);
    const count = zone ? zone.querySelectorAll(".fact-card").length : 0;
    const badge = document.querySelector(`[data-count-for="${sultan.id}"]`);
    if (badge) {
      badge.textContent = String(count);
    }
  });
}

function normalizeSearch(text) {
  return text
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i");
}

function renderSelectedHint() {
  const selectedId = state.selectedId ?? state.currentId;
  if (selectedId === null) {
    els.selectedHint.innerHTML = "<span>Seçili kart</span> Kart seçilince cevabı burada görünür.";
    return;
  }

  const fact = factById.get(selectedId);
  const sultan = sultanById.get(fact.sultan);
  els.selectedHint.innerHTML = `<span>Seçili kartın cevabı</span> ${sultan.name}`;
}

function createHintGroup(sultan, facts) {
  const group = document.createElement("article");
  group.className = "hint-group";
  group.style.setProperty("--hint-color", sultan.color);

  const title = document.createElement("h3");
  title.innerHTML = `${sultan.name}<span>${facts.length}</span>`;

  const list = document.createElement("ol");
  list.className = "hint-list";
  facts.forEach((fact) => {
    const item = document.createElement("li");
    item.textContent = fact.text;
    list.append(item);
  });

  group.append(title, list);
  return group;
}

function renderHints() {
  const query = normalizeSearch(els.hintSearch.value.trim());
  els.hintContent.innerHTML = "";

  let visibleGroupCount = 0;
  SULTANS.forEach((sultan) => {
    const sultanMatches = normalizeSearch(sultan.name).includes(query) || normalizeSearch(sultan.sourceName).includes(query);
    const facts = FACTS.filter((fact) => {
      if (fact.sultan !== sultan.id) {
        return false;
      }
      return sultanMatches || normalizeSearch(fact.text).includes(query);
    });

    if (facts.length > 0) {
      visibleGroupCount += 1;
      els.hintContent.append(createHintGroup(sultan, facts));
    }
  });

  if (visibleGroupCount === 0) {
    const empty = document.createElement("p");
    empty.className = "hint-empty";
    empty.textContent = "Eşleşen ipucu yok.";
    els.hintContent.append(empty);
  }
}

function toggleHintPanel() {
  const willOpen = els.hintPanel.hidden;
  els.hintPanel.hidden = !willOpen;
  els.hintToggleButton.classList.toggle("is-active", willOpen);
  els.hintToggleButton.setAttribute("aria-expanded", String(willOpen));

  if (willOpen) {
    renderSelectedHint();
    renderHints();
    els.hintPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function updateUi() {
  const placedCount = state.placed.size;
  const totalCount = FACTS.length;
  const allPlaced = placedCount === totalCount && state.currentId === null;

  els.placedCount.textContent = String(placedCount);
  els.totalCount.textContent = String(totalCount);
  els.drawButton.disabled = state.currentId !== null || state.remaining.length === 0 || state.checked;
  els.finishButton.disabled = !allPlaced || state.checked;

  const hasAssignableCard = (state.selectedId !== null || state.currentId !== null) && !state.checked;
  els.choiceBar.querySelectorAll(".choice-button").forEach((button) => {
    button.disabled = !hasAssignableCard;
  });

  if (state.checked) {
    els.statusText.textContent = "Sonuçlar işaretlendi.";
  } else if (allPlaced) {
    els.statusText.textContent = "Tüm bilgiler yerleştirildi.";
  } else if (state.selectedId !== null) {
    els.statusText.textContent = "Kart seçili.";
  } else if (state.currentId !== null) {
    els.statusText.textContent = "Kart hazır.";
  } else {
    els.statusText.textContent = `${state.remaining.length} bilgi kaldı.`;
  }

  updateColumnCounts();
  if (!els.hintPanel.hidden) {
    renderSelectedHint();
  }
}

function removeResultNote(card) {
  card.querySelector(".result-note")?.remove();
}

function finishRound() {
  if (state.placed.size !== FACTS.length || state.currentId !== null) {
    updateUi();
    return;
  }

  let correctCount = 0;
  const perSultan = new Map(SULTANS.map((sultan) => [sultan.id, { correct: 0, total: 0 }]));
  state.selectedId = null;

  document.querySelectorAll(".drop-zone .fact-card").forEach((card) => {
    const fact = factById.get(Number(card.dataset.id));
    const chosenSultan = card.closest(".drop-zone").dataset.sultan;
    const expectedSultan = fact.sultan;
    const stat = perSultan.get(expectedSultan);
    const isCorrect = chosenSultan === expectedSultan;

    stat.total += 1;
    card.classList.remove("is-selected");
    card.setAttribute("aria-pressed", "false");
    card.classList.add(isCorrect ? "correct" : "wrong");
    removeResultNote(card);

    const note = document.createElement("div");
    note.className = "result-note";
    note.textContent = isCorrect ? "Doğru" : `Cevap: ${sultanById.get(expectedSultan).name}`;
    card.append(note);

    if (isCorrect) {
      correctCount += 1;
      stat.correct += 1;
    }
  });

  state.checked = true;
  renderResults(correctCount, perSultan);
  updateUi();
}

function renderResults(correctCount, perSultan) {
  const totalCount = FACTS.length;
  const stats = SULTANS.map((sultan) => {
    const stat = perSultan.get(sultan.id);
    return `
      <div class="result-stat">
        <strong>${sultan.name}</strong>
        <span>${stat.correct} / ${stat.total}</span>
      </div>
    `;
  }).join("");

  els.resultsPanel.hidden = false;
  els.resultsPanel.innerHTML = `
    <h2>Sonuç: ${correctCount} / ${totalCount}</h2>
    <div class="results-grid">${stats}</div>
  `;
  els.resultsPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function resetRound() {
  state.remaining = shuffle(FACTS.map((fact) => fact.id));
  state.currentId = null;
  state.selectedId = null;
  state.placed.clear();
  state.checked = false;
  els.resultsPanel.hidden = true;
  els.resultsPanel.innerHTML = "";
  renderColumns();
  renderChoices();
  setCurrentEmpty();
  updateUi();
}

function handleKeyboardAssign(event) {
  if (event.target.matches("input, textarea, select")) {
    return;
  }

  const key = event.key.toLocaleUpperCase("tr-TR");
  const sultan = SULTANS.find((item) => item.key === key);
  if (!sultan) {
    return;
  }

  event.preventDefault();
  assignSelectedToSultan(sultan.id);
}

els.drawButton.addEventListener("click", drawFact);
els.finishButton.addEventListener("click", finishRound);
els.hintToggleButton.addEventListener("click", toggleHintPanel);
els.hintSearch.addEventListener("input", renderHints);
els.resetButton.addEventListener("click", resetRound);
document.addEventListener("keydown", handleKeyboardAssign);

resetRound();
