export const projectTranslations: Record<string, { title: string; subtitle: string; desc: string }> = {
  '13': {
    title: 'Kira ve Alacak Yönetim Platformu',
    subtitle: 'UÇTAN UCA GELİŞTİRME · KİRA TAKİBİ · ALACAK YÖNETİMİ',
    desc: 'Mülkiyet paylarına göre finansal işlemleri takip etmek için geliştirilen kira ve alacak yönetim platformu. Taşınmazları, paydaşları, kira gelirlerini, alacakları, borçları, tahsilatları ve ödeme dağılımlarını tanımlanan pay oranlarına göre yönetir. Bakiye takibi, işlem geçmişi, filtreleme, raporlama ve merkezi finans yönetimi sunar.',
  },
  '12': {
    title: 'İş Başvurusu Yönetim Platformu',
    subtitle: 'UÇTAN UCA GELİŞTİRME · YÖNETİM PANELİ · İŞE ALIM SİSTEMİ',
    desc: 'İşe alım süreçlerini kolaylaştırmak için geliştirilen iş başvurusu yönetim platformu. Adaylar başvurularını iletirken yöneticiler iş ilanlarını, departmanları, yetkinlikleri ve aday değerlendirmelerini rol tabanlı bir panelden yönetir. Filtreleme, raporlama ve ölçeklenebilir mimari içerir.',
  },
  '11': {
    title: 'Çalışan Görev ve Performans Takip Sistemi',
    subtitle: 'ROL TABANLI YÖNETİM PANELİ · ANALİZ',
    desc: 'Kurum içi görev takibi ve çalışan performansı yönetim sistemi. Kullanıcılar günlük görevlerini iş türüne göre kaydeder; sistem performans puanlarını otomatik hesaplar. Rol tabanlı erişim kontrolü, kullanıcı yönetimi, analiz paneli ve kategori bazlı raporlama içerir.',
  },
  '01': {
    title: 'KargoLife — ERP Entegrasyonu',
    subtitle: 'KURUMSAL YAZILIM · CLEAN ARCHITECTURE',
    desc: 'ERP ile entegre, çok katmanlı kargo takip sistemi. Kullanıcılar gönderilerini gerçek zamanlı takip eder; müşteri sorunları WhatsApp ve e-posta otomasyonlarıyla ele alınır. Alan, uygulama, altyapı ve sunum katmanları Clean Architecture yaklaşımıyla ayrılır. Durum yönetiminde Redux kullanılır.',
  },
  '02': {
    title: 'Pazaryeri Entegrasyon API’si',
    subtitle: 'TRENDYOL · HEPSİBURADA · N11 · KOÇTAŞ',
    desc: 'Türkiye’deki dört büyük pazaryerini bir araya getiren merkezi entegrasyon sistemi. REST ve SOAP XML API’leri üzerinden siparişleri belirli aralıklarla alır, verileri eşleyip standartlaştırır, MySQL’e kaydeder ve olağan dışı durumları izler. Kanallar paralel görevlerle işlenir; mimari yüksek işlem hacmi ve hata toleransı gözetilerek tasarlanmıştır.',
  },
  '03': {
    title: 'ModaLife Teklif Entegrasyonu',
    subtitle: 'QR KOD · ROL TABANLI ONAY',
    desc: 'Tekliflerin QR kod ve e-posta ile müşterilere iletilmesini sağlayan teklif oluşturma sistemi. Yönetici onayları için hiyerarşik, rol tabanlı bir iş akışı sunar. Redux ile durum yönetimi ve Clean Architecture yaklaşımı kullanılır.',
  },
  '04': {
    title: 'Yapay Zekâ ile Cilt Kanseri Tespiti',
    subtitle: 'CNN · DERİN ÖĞRENME · WEB UYGULAMASI',
    desc: 'Dermoskopi görüntülerini CNN ile sınıflandıran, cilt kanseri tespitine yönelik yapay zekâ web uygulaması. React arayüzü ve Python/Flask sunucu tarafı kullanır. Model, kötü huylu ve iyi huylu vakaları ayırt etmek üzere eğitilmiştir.',
  },
  '05': {
    title: 'Satın Alma Yönetim Paneli',
    subtitle: 'KURUM İÇİ ARAÇ · ROL TABANLI YETKİLENDİRME',
    desc: 'Satın alma taleplerini kaydeden ve çok adımlı iş akışlarının durumunu takip eden kurum içi yönetim paneli. Rol tabanlı yetkilendirme sayesinde farklı erişim düzeylerindeki kullanıcılar kendilerine uygun ekranları ve işlemleri görür.',
  },
  '06': {
    title: 'Şikayetvar Yönetim Paneli',
    subtitle: 'MÜŞTERİ GERİ BİLDİRİMİ · YÖNETİM PANELİ',
    desc: 'Şikayetvar.com şikayetlerini yönetmek için geliştirilen panel. Filtreleme, durum güncelleme, kullanıcı bazlı etkileşim geçmişi ve işlem takibi sunar. Yapılan işlemlerin denetim kayıtlarını tutar.',
  },
  '07': {
    title: 'Derin Öğrenme ile Stok Kontrolü',
    subtitle: 'YOLOV5 · NESNE TESPİTİ · GERÇEK ZAMANLI TAKİP',
    desc: 'YOLOv5 ile nesne tespiti kullanan stok kontrol sistemi. Kamera, depo raflarındaki ürünleri gerçek zamanlı tanır ve veritabanını otomatik günceller; böylece manuel stok sayımı ihtiyacını ortadan kaldırır.',
  },
  '08': {
    title: 'Şablon Tabanlı Not Uygulaması',
    subtitle: 'FLUTTER · BLOC · MOBİL UYGULAMA',
    desc: 'Video, fotoğraf, ses ve metni birleştiren şablonlarla not oluşturmayı sağlayan Flutter uygulaması. Metin tanıma için ML Kit; durum yönetimi için Bloc/Cubit kullanır. Dinamik tema ve Lottie animasyonları içerir.',
  },
  '09': {
    title: 'Çok İş Parçacıklı Büyük Veri Uygulaması',
    subtitle: 'PYTHON · MASAÜSTÜ · PERFORMANS',
    desc: 'Büyük veri kümelerini birden fazla iş parçacığıyla analiz eden Python masaüstü uygulaması. Kullanıcı benzerlik eşiğini belirler; uygulama sütunları karşılaştırır, eşleşmeleri listeler ve her iş parçacığının çalışma ölçümlerini gösterir.',
  },
  '10': {
    title: 'Laboratuvar Yönetim Paneli',
    subtitle: 'PHP · RAPOR OLUŞTURMA',
    desc: 'Test sonuçlarını kaydeden, biçimlendirilmiş raporlar oluşturan ve raporların doğrudan indirilmesini sağlayan laboratuvar yönetim paneli. Kurum içi kullanım için geliştirilmiş, amaca odaklı bir araçtır.',
  },
}
