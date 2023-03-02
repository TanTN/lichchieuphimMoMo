const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const openBtnMenu = $('.open-app')
const openElmOnMenu = $$('.content-right-list-item')
const selectorElm = $$('.content-right-list-rap')
const blogContainer = $('.blog-container') 
const newsContainer = $('.tintuc-container')
const addBlogBtn = $('.btn-addBlog')
const addNewsBtn = $('.btn-addNews')
const iconAnimate = $('.icon-reload')
const iconAnimate1 = $('.icon-reload1')
const buyTicket = $$('.cachmuave-list-item')
const imgPhone = $$('.img-giaodienmomo')
const slideMain = $('.slide-main')
const slideItem = $('.slide-img')
const nextBtn = $('.icon-slide-right')
const prevBtn = $('.icon-slide-left')
const movies = $$('.link-phim')
const movieContainer = $('.phimsapchieu-list-movie')
const listMovie = $('.phimsapchieu-container-list')
const nextBtnMovie = $('.movie-next')
const prevBtnMovie = $('.movie-prev')
const addMain = $$('.open-main')

const listMovesWidth = listMovie.offsetWidth
const openApp = {
    listMovieOnRap:[
        {
            href:'https://momo.vn/cinema/antman-and-the-wasp-quantumania-851',
            img:'https://img.cdn.vncdn.io/cinema/img/86928996225187344-2uxNnsL4tCK2c4d9FuiCoea4ku7.jpg',
            address:'13+',
            name:'Người Kiến và Chiến Binh Ong: Thế Giới Lượng Tử',
            subName:'Hài,Khoa Học Viễn Tưởng,Phiêu Lưu',
            time:'23:20 - 01:20'
        },
        {
            href:'https://momo.vn/cinema/consecration-934',
            img:'https://img.cdn.vncdn.io/cinema/img/1778168236319347-5.jpg',
            address:'18+',
            name:'Thánh Vật Của Quỷ',
            subName:'Kinh Dị, Gay Cấn',
            time:'22:55 - 00:25'
        },
        {
            href:'https://momo.vn/cinema/the-house-of-no-man-879',
            img:'https://img.cdn.vncdn.io/cinema/img/90230048152521353-kOvKHespgDEfzbYpq1cas2i8EZn.jpg',
            address:'16+',
            name:'Nhà Bà Nữ',
            subName:'Chính Kịch',
            time:'23:25 - 01:07'
        },
    ],
    Rap:[
        {
            link:'https://momo.vn/cinema/rap/beta-cinemas/beta-quang-trung-209',
            imgLogo:'https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png',
            nameRap:'Beta Quang Trung',
            address:'Số 645 Quang Trung. Phường 11, Quận Gò Vấp, Thành phỏ Hó Chí Minh',

        },
        {
            link:'https://momo.vn/cinema/rap/bhd-star/bhd-star-3-thang-2-57',
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star 3 tháng 2',
            address:'Tầng 5 | Vincom Plaza, số 3C đường 3 Tháng 2, phường 11, quận 10, thành phố Hồ Chí Minh',

        },
        {
            link:'https://momo.vn/cinema/rap/bhd-star/bhd-star-bitexco-58',
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star Bitexco',
            address:'Tâng 3 & 4 | Tòa nhà tài chính Bitexco, số 2 đường Hải Triểu, phường Bến Nghé, quận 1, thành phố Hồ Chí Minh',

        },
        {
            link:'https://momo.vn/cinema/rap/bhd-star/bhd-star-le-van-viet-61',
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star Lê Văn Viêt',
            address:'Tâng 4 | Vincom Plaza Lê Văn Việt, số 50 đường Lê Văn Việt, Quân 9, thành phố Hồ Chí Minh',

        },
        {
            link:'https://momo.vn/cinema/rap/bhd-star/bhd-star-pham-hung-88',
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star Phạm Hùng',
            address:'Tầng 4 | Trung tâm thương mại Satra Phạm Hùng, số C6/27 đường Pham Hùng, huyện Bình Chánh',

        },
        {
            link:'https://momo.vn/cinema/rap/bhd-star/bhd-star-quang-trung-59',
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star Quang Trung',
            address:'Tâng B1 & B2 | Vincom Plaza Quang Trung, số 190 đường Quang Trung, quận Gò Vấp, thành phố Hồ Chí Minh',

        },
        {
            link:'https://momo.vn/cinema/rap/bhd-star/bhd-star-thao-dien-60',
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star Thảo Điền',
            address:'Tầng 5 | Vincom Mega Mall Thảo Điển, số 159 đường Xa Lô Hà Nội, Quận 2, thành phố Hồ Chí Minh',

        },
        {
            link:'https://momo.vn/cinema/rap/cgv/cgv-aeon-binh-tan-27',
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Aeon Bình Tân',
            address:'Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, phường Bình Trị Đông B, quận Bình Tân,',

        },
        {
            link:'https://momo.vn/cinema/rap/cgv/cgv-aeon-tan-phu-24',
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Aeon Tân Phú',
            address:'Lầu 3, Aeon Mall 30 Bờ Bao Tân Thắng. P. Sơn Kỳ Quận Tân Phú TP. Hồ Chí Minh',

        },
        {
            link:'https://momo.vn/cinema/rap/cgv/cgv-crescent-mall-71',
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Crescent Mal',
            address:'Tâng 5 | Crescent Mall, số 101 đường Tôn Dật Tiên, phường Tân Phú, quận 7, thành phổ Hồ Chí Minh',

        },
        {
            link:'https://momo.vn/cinema/rap/cgv/cgv-giga-mall-thu-duc-56',
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Giga Mall Thủ Đức',
            address:'Tâng 6 | [Gigamall, số 240-242 đường Phạm Văn Đồng, phường Hiệp Bình Chánh, quận Thủ Đức',

        },
        {
            link:'https://momo.vn/cinema/rap/cgv/cgv-hoang-van-thu-26',
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Hoàng Văn Thu',
            address:'Tâng 1 và 2, Gala Center, ső 415, Hoàng Văn Thụ, Phường 2, Quân Tân Bình, TPHCM',

        },
        {
            link:'https://momo.vn/cinema/rap/cgv/cgv-hung-vuong-plaza-22',
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Hùng Vương Plaza',
            address:'Tầng 7 | Hùng Vương Plaza 126 Hùng Vương Quận 5 Tp. Hồ Chí Minh',

        },
        {
            link:'https://momo.vn/cinema/rap/cgv/cgv-imc-tran-quang-khai-79',
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV IMC Trần Quang Khải',
            address:'Tâng 2 & 3 | Trung Tâm Văn Hóa Đa Năng iMC, số 62 đường Trần Quang Khải, phường Tân Định, quận 1, thành phố Hồ Chí Minh',

        },
    ],
    listRap:[
        {
            imgLogo:'https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png',
            nameRap:'Beta Quang Trung',
        },
        {
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star 3 tháng 2',

        },
        {
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star Bitexco',

        },
        {
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star Lê Văn Viêt',

        },
        {
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star Phạm Hùng',

        },
        {
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star Quang Trung',

        },
        {
            imgLogo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            nameRap:'BHD Star Thảo Điền',

        },
        {
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Aeon Bình Tân',

        },
        {
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Aeon Tân Phú',

        },
        {
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Crescent Mal',

        },
        {
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Giga Mall Thủ Đức',

        },
        {
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Hoàng Văn Thu',

        },
        {
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV Hùng Vương Plaza',

        },
        {
            imgLogo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            nameRap:'CGV IMC Trần Quang Khải',

        },
        
    ],
    listLogoRap:[
        {
            logo:'./img/sao.jpg',
            name:'Tất cả',
        },
        {
            logo:'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
            name:'CGV',
        },
        {
            logo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png',
            name:'Lotte Cinema',
        },
        {
            logo:'https://static.mservice.io/cinema/momo-upload-api-211123095138-637732578984425272.png',
            name:'Galaxy Cinema',
        },
        {
            logo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170453-637584230934981809.png',
            name:'BHD Star',
        },
        {
            logo:'https://static.mservice.io/cinema/momo-upload-api-210813104719-637644484394328824.png',
            name:'Beta Cinemas',
        },
        {
            logo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170530-637584231309495829.png',
            name:'Cinestar',
        },
        {
            logo:'https://static.mservice.io/blogscontents/momo-upload-api-210604170511-637584231119272266.png',
            name:'Mega GS',
        },
        {
            logo:'https://img.mservice.io/momo_app_v2/new_version/img/THAO.MAI/DcineLogo.png',
            name:'DCINE',
        },
        {
            logo:'https://static.mservice.io/cinema/momo-upload-api-221108100132-638034984925107129.png',
            name:'Cinemax',
        },
    ],
    listMoves:[
        {
            href:'https://momo.vn/cinema/consecration-934',
            img:'https://img.cdn.vncdn.io/cinema/img/1778168236319347-5.jpg',
            nameMovie:'Thánh Vật Của Quỷ',
            contentMovie:'Kinh Dị, Gay Cấn',
            ageLimit:'18+',
        },
        {
            href:'https://momo.vn/cinema/final-cut-940',
            img:'https://img.cdn.vncdn.io/cinema/img/1868644912903193-zLwrZgQdkHcS7Jw2pxpScuFeA23.jpg',
            nameMovie:'Cú Máy Chết Cười',
            contentMovie:'Hài, Kinh Dị',
            ageLimit:'16+',
        },
        {
            href:'https://momo.vn/cinema/missing-939',
            img:'https://img.cdn.vncdn.io/cinema/img/1869846529858043-fH3cVWMV5Dcks34blOUnSIBOBVL.jpg',
            nameMovie:'Mất Tích',
            contentMovie:'Gây Cấn, Chính Kịch',
            ageLimit:'13+',
        },
        {
            href:'https://momo.vn/cinema/sieu-lua-gap-sieu-lay-891',
            img:'https://img.cdn.vncdn.io/cinema/img/90579154820471367-HO01WswBGMg0B3quND3mYZxNHN.jpg',
            nameMovie:'Siêu Lừa Gặp Siêu Lầy',
            contentMovie:'Hài',
            ageLimit:'16+',
        },
        {
            href:'https://momo.vn/cinema/sieu-lua-gap-sieu-lay-891',
            img:'https://img.cdn.vncdn.io/cinema/img/582075347249058-yAwJA1Y2Kt1XdbX72cL4MKtIDs3.jpg',
            nameMovie:'Tiếng Thét 6',
            contentMovie:'Kinh Dị, Bí Ẩn',
            ageLimit:'18+',
        },
        {
            href:'https://momo.vn/cinema/scream-vi-921',
            img:'https://img.cdn.vncdn.io/cinema/img/88914590564785473-4uNyhvsjsN8AjBUQQW5Ubuu7YVY.jpg',
            nameMovie:'Tay Đấm Huyền Thoại 3',
            contentMovie:'Chính Kịch',
            ageLimit:'16+',
        },
        {
            href:'https://momo.vn/cinema/creed-iii-866',
            img:'https://img.cdn.vncdn.io/cinema/img/1942230700177970-5.jpg',
            nameMovie:'Khóa Chặt Cửa Nào Suzume',
            contentMovie:'Hoạt Hình, Phiêu Lưu',
            ageLimit:'13+',
        },
        {
            href:'https://momo.vn/cinema/suzume-no-tojimari-941',
            img:'https://img.cdn.vncdn.io/cinema/img/78933142651798299-vrFVPBprPlKKmIcpuLVu8SluI9j.jpg',
            nameMovie:'Shazam! Cơn Thịnh Nộ Của Các Vị Thần',
            contentMovie:'Hài, Hành Động',
            ageLimit:'13+',
        },
        {
            href:'https://momo.vn/cinema/the-super-mario-bros-movie-884',
            img:'https://img.cdn.vncdn.io/cinema/img/90491023749644835-9xv2PnPV1UWdIRbpa2olHuN4FCX.jpg',
            nameMovie:'Anh Em Super Mario',
            contentMovie:'Hài, Hoạt Hình',
            ageLimit:'P',
        },
        {
            href:'https://momo.vn/cinema/renfield-907',
            img:'https://img.cdn.vncdn.io/cinema/img/93258279569651451-jWanRvR7xL6Iolm70iSjJhr1VCO.jpg',
            nameMovie:'Renfield: Tay Sai Của Quỷ',
            contentMovie:'Hài, Kinh Dị',
            ageLimit:'18+',
        },
        
        
    ],
    blogMovies: [
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-221010113447-638009984874034688.jpg',
            content: 'One Piece: RED - Siêu phẩm anime không thể bỏ lỡ năm 2022',
            view:'6,9k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220131203141-637792579015243080.jpg',
            content: 'Phim Hàn Quốc 2022 đầy hứa hẹn với đủ thể loại hấp dẫn',
            view:'191,1k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220614113939-637908035797577305.jpg',
            content: 'Em và Trịnh: Nhẹ nhàng và đậm chất lãng mạn',
            view:'61,6k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220607210130-637902324900234426.jpg',
            content: 'Top phim xã hội đen Thái Lan cực mãn nhãn',
            view:'11,9k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220607134938-637902065784846992.jpg',
            content: 'Những tác phẩm điện ảnh về La Mã cổ đại không thể bỏ lỡ',
            view:'6,4k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220602101731-637897618513827056.jpg',
            content: 'Review Fantastic Beasts: The Secrets of Dumbledore sinh động hóa thế giới phù thủy',
            view:'13,7k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220601104733-637896772532818780.jpg',
            content: 'Review Sonic 2: hài hước, duyên dáng không kém phần đầu',
            view:'20,4k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220531150301-637896061816285843.jpg',
            content: 'Hướng dẫn xem phim Marvel dành cho người mới bắt đầu',
            view:'66,8k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220531091446-637895852867636350.jpg',
            content: 'Review Jujutsu Kaisen 0: Bom tấn Anime 2022 bùng nổ',
            view:'29,7k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220518103522-637884669228758838.jpg',
            content: 'Nghề Siêu Dễ: bộ phim remake “xàm mà không nhảm”',
            view:'44,3k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220517092729-637883764493378233.jpg',
            content: 'Doctor Strange: Đa Vũ Trụ Điên Loạn - Những sự kiện sẽ diễn ra trong phim',
            view:'38,2k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220405135228-637847635481096183.jpg',
            content: 'Review Morbius: Bộ phim siêu anh hùng - ma cà rồng đầy tính giải trí',
            view:'25,3k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220329094318-637841437983196976.jpg',
            content: 'Án mạng trên sông Nile: bộ phim trinh thám cổ điển hấp dẫn',
            view:'1,5k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220327134214-637839853348438047.jpg',
            content: 'Thành Phố Mất Tích: Cười như được mùa với Sandra Bullock và Channing Tatum',
            view:'1,9k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220316121128-637830294882378239.jpg',
            content: 'Top phim về trí tuệ nhân tạo đáng xem nhất',
            view:'4,5k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220309092212-637824145321717725.jpg',
            content: 'Review The Batman - ‘Bom tấn’ gai góc, đen tối nhất  của Warner Bros. trong năm 2022',
            view:'16,7k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220303223255-637819435755878284.jpg',
            content: 'Top phim về sát nhân hàng loạt khiến bạn rùng rợn',
            view:'18,1k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220227210930-637815929708943600.jpg',
            content: 'Top phim hay nhất của Stephen King bạn nên xem ngay',
            view:'2,6k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220315105814-637829386948842072.jpg',
            content: 'Danh sách phim hay Netflix tháng 3/2022',
            view:'17,1k lượt xem',
        },
        {
            img: 'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220217205009-637807278097169716.jpg',
            content: 'Top phim TVB cung đấu gây cấn trên màn ảnh',
            view:'5,6k lượt xem',
        },

    ],
    blogMoviesLast:[
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-200304105650-637189162109030736.jpg',
            content:'Danh sách phim bộ Hàn Quốc hay được yêu thích nhất tại Việt Nam',
            view:'1079,0k lượt xem'
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-200213144103-637172016639933742.jpg',
            content:'Phim hay 2020 chiếu rạp gây ấn tượng',
            view:'997,6k lượt xem'
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-211016152932-637699949728655396.jpg',
            content:'25 phim Trung Quốc cổ trang hay đáng xem nhất hiện nay',
            view:'990,4k lượt xem'
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-210422175157-637547107178601689.jpg',
            content:'Phim Hàn Quốc 2021 hay gây chấn động màn ảnh',
            view:'990,2k lượt xem'
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-210326143727-637523662479216901.jpg',
            content:'Top 22 phim chiếu rạp 2021 hay đáng mong chờ nhất',
            view:'746,0k lượt xem'
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-210419171227-637544491479614449.jpg',
            content:'25 phim hay chiếu rạp 2022 đáng kỳ vọng nhất năm',
            view:'535,6k lượt xem'
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-200603161145-637267975050546961.jpg',
            content:'Phim TVB Hong Kong đáng xem nhất đã trở thành huyền thoại',
            view:'483,2k lượt xem'
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-210709145016-637614390160263400.jpg',
            content:'Top 12 phim ngôn tình Trung Quốc hay không nên bỏ qua',
            view:'438,2k lượt xem'
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220210082104-637800780642859395.jpg',
            content:'Top phim Trung Quốc 2022 đáng hứa hẹn nhất hiện nay',
            view:'303,1k lượt xem',
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-210822095507-637652229074395690.jpg',
            content:'Top 18 phim hình sự Hàn Quốc về tội phạm nhất định phải xem',
            view:'272,1k lượt xem',
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-210609142130-637588452902108365.jpg',
            content:'12 phim kiếm hiệp hay Trung Quốc được nhiều người xem nhất',
            view:' lượt xem',
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-191227144525-637130547250159561.jpg',
            content:'Top phim ma, kinh dị hay và đáng sợ nhất năm 2019',
            view:'223,0k lượt xem',
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-200313164952-637197149920043328.jpg',
            content:'Phim lẻ Thái Lan hay ngất ngây mà bạn không xem thì phí cả cuộc đời',
            view:'21,4k lượt xem',
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-220131203141-637792579015243080.jpg',
            content:'Phim Hàn Quốc 2022 đầy hứa hẹn với đủ thể loại hấp dẫn',
            view:'19,4k lượt xem',
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-210727081006-637629702061820782.jpg',
            content:'30 phim hoạt hình chiếu rạp hay nhất thế giới',
            view:'186,7k lượt xem',
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-191225113432-637128704729218361.jpg',
            content:'Phim hay 2019: Khi phim Hàn Quốc mang nhiều kịch bản ấn tượng',
            view:'184,7k lượt xem',
        },
    ],
    news:[
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230208155845-638114687257424506.jpg',
            content:'Mua vé xem phim, nhận Combo Ngọt Ngào bao trọn Valentine!',
            date:'08/02/2023',
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-230119140353-638097338331291064.jpg',
            content:'Mua vé xem phim, rinh combo thẻ quà Data cực hấp dẫn!',
            date:'19/01/2023',
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-221219104845-638070437259293828.jpg',
            content:'Xem Netflix dễ dàng, thanh toán tiện lợi bằng MoMo!',
            date:'19/12/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/s770x370/momo-upload-api-221011081340-638010728204531959.jpg',
            content:'Ưu đãi sốc: giảm nóng 10.000đ khi đặt vé Cô Gái Từ Quá Khứ trên MoMo!',
            date:'11/10/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220726160521-637944483213025353.jpg',
            content:'Ưu đãi 10.000đ ngọt lịm đặt vé “Dân chơi không sợ con rơi” khi nhập mã DANCHOI',
            date:'26/07/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220610155908-637904735489990692.jpg',
            content:'Lần đầu dùng MoMo, nhận ngay voucher CGV giảm 99K!',
            date:'15/06/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220527093845-637892411258491628.jpg',
            content:'Rinh quà Doraemon cực xịn khi đặt vé xem phim trên MoMo',
            date:'27/05/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220517161257-637884007773738762.jpg',
            content:'Nhập mã FPTPLAY10, giảm nóng 10% khi thanh toán FPTPLAY bằng MoMo',
            date:'17/05/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220421101025-637861326255036094.jpg',
            content:'Ưu đãi độc quyền: Giảm nóng 10.000đ mua vé xem phim Nghề Siêu Dễ trên Ví MoMo!',
            date:'21/04/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220407102524-637849239241863161.jpg',
            content:'Lần đầu xài Ví, tặng bạn vé Lotte Cinema chỉ 9K!',
            date:'11/04/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220308170332-637823558129448838.jpg',
            content:'Nạp điện thoại 100.000đ, ẵm liền vé phim 70.000đ cực hot!',
            date:'08/03/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-221124111250-638048851700996799.jpg',
            content:'Deal xịn BHD Star chỉ 75.000Đ/vé giữa tuần, ngại gì không xem ngay!',
            date:'08/03/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220225111244-637813843646480234.jpg',
            content:'Hoàn tiền ngay 15% khi thanh toán FPT Play!',
            date:'25/02/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220224111129-637812978899459297.jpg',
            content:'Nhập mã “BATMAN” giảm giá  trực tiếp 10K/Vé - Dành cho 10.000 khách hàng đầu tiên!',
            date:'24/02/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220218105502-637807785022894915.jpg',
            content:'MoMo Cinema tặng bạn 1 vé xem phim miễn phí tại CGV',
            date:'18/02/2022',
        },
        {
            img:'https://static.mservice.io/blogscontents/momo-upload-api-220408142201-637850245214006518.jpg',
            content:'Rinh 2 thẻ quà Gojek giảm khủng nửa giá khi đặt vé xem phim trên Ví MoMo',
            date:'08/04/2022',
        },
    ],
    questions:[
        {
            question:'Có thể mua vé xem phim những rạp nào trên Ví MoMo?',
            answers:'Hiện tại bạn có thể đặt vé tại <a href="http://127.0.0.1:5500/lich%20chieu%20phim%20momo/lich%20chieu%20phim%20momo/rap-chieu.html">rạp phim</a> cũng như xem <a href="http://127.0.0.1:5500/lich%20chieu%20phim%20momo/lich%20chieu%20phim%20momo/assets/lich-chieu.html">lịch chiếu phim</a> các rạp sau: CGV Cinemas, Lotte Cinema, Galaxy Cinema, BHD Star, Mega GS, Dcine, Cinestar. <a href="https://momo.vn/cinema">Đặt vé xem phim ngay.</a>',
        },
        {
            question:'Lợi ích của việc mua vé xem phim trên Ví MoMo?',
            answers:'Nhanh chóng, trực quan không cần ra mua vé trực tiếp tại rạp. Tiết kiệm thời gian và tiện lợi. Có nhiều chương trình khuyến mãi với giá vé vô cùng hấp dẫn. <a href="https://momo.vn/cinema">Mua vé xem phim ngay.</a>',
        },
        {
            question:'Có thể mua vé xem phim kèm bắp nước hay không?',
            answers:'Hiện tại Ví MoMo có hỗ trợ mua bắp nước các cụm rạp CGV Cinemas, Lotte Cinema, BHD Star, Dcine ngay khi đặt vé. Nếu bạn muốn tăng size, đổi mùi vị bắp nước chỉ cần đến quầy và trả thêm tiền cho thu ngân. Bắp nước đã mua không hỗ trợ đổi trả.',
        },
        {
            question:'Mua vé xem phim tại MoMo có đắt hơn mua trực tiếp tại rạp không?',
            answers:'Giá vé xem phim trên Ví MoMo không thu thêm phí dịch vụ và bán bằng giá tại rạp, nhưng luôn có CTKM vào các ngày trong tuần và cuối tuần để MoMo-er có thể mua với giá vé luôn tốt hơn khi mua trực tiếp tại rạp.',
        },
        {
            question:'Vé xem phim có được đổi trả, hoàn hủy không?',
            answers:'Các vé xem phim khi tra cứu lịch chiếu phim tại Ví MoMo hiện tại không hỗ trợ đổi trả hay hoàn hủy vé',
        },
    ],
    indexNewRap:0,
    isIndexRap: 7,
    indexLogo: 0,
    isBlogLast: 0,
    isApp: false,
    indexCurrentMenu: [],
    indexCurrentQuestion: [],
    isIndexBlogs: 4,
    isIndexBlogsLast: 4,
    isIndexNews: 4,
    postionX: 0,
    postionXMovie: 0,
    indexSlide: 0,
    indexBuyTikets: [0],
        // Render rap
    listRapRender() {
        const _this = this
        const listRaps = this.listRap.map((rap, index) => {
            if (index < _this.isIndexRap) {
                    return `
                        <div class="content-lichchieuphim-last-left-name">
                            <div class="content-lichchieuphim-last-left-img">
                                <img src="${rap.imgLogo}" alt="" class="content-lichchieuphim-last-list-rap-img">
                                <h3>${rap.nameRap}</h3>
                            </div>
                            <div class="icon-angle-right">
                                <i class="ti-angle-right"></i>
                            </div>
                        </div>
                    `
            }
        })
        $('.content-lichchieuphim-last-left-list').innerHTML = listRaps.join('')
    },


            //  render movie on rap
    movieOnRapRender() {
        const movies = this.listMovieOnRap.map(movie => {
            return `
            <div class="movie-on-rap">
                <div class="movie-on-rap-container-img">
                    <div class="movie-on-rap-img">
                        <a href="${movie.href}">
                            <img class="movie-on-rap-img-item" src="${movie.img}" alt="">
                        </a>
                    </div>

                </div>
                <div class="movie-on-rap-content-container">
                    <div class="movie-on-rap-content">
                        <p class="movie-on-rap-content-address">${movie.address}</p>
                        <a href="${movie.href}">
                            <p class="movie-on-rap-content-name">${movie.name}</p>
                        </a>
                        <p class="movie-on-rap-content-sub-name">${movie.subName}</p>
                        <p class="movie-on-rap-content-subtitle">2D Phụ đề</p>
                        <div class="movie-on-rap-content-time">
                            <p class="movie-on-rap-content-time-item">${movie.time}</p>
                        </div>
                    </div>

                </div>
            </div>
            `
        })
        $('.movie-on-rap-container').innerHTML = movies.join('')
    },
    
            // render rap
    rapRender({ link, imgLogo, nameRap, address }) {
        const html = `
                <div class="content-lichchieuphim-last-list-rap-link">
                    <div class="content-lichchieuphim-last-list-rap">

                        <a href="${link}"><img src="${imgLogo}" class="content-lichchieuphim-last-list-rap-img"></a>
                        <div class="content-lichchieuphim-last-diachi">

                            <a href="${link}"><h3>Lịch chiếu phim ${nameRap}</h3></a>
                            <div class="address-rap">
                                <div>${address}</div>
                                <a href="#" class="bando">[Bản đồ]</a>
                            </div>

                        </div> 
                        
                    </div>
                </div>
            `
        $('.content-lichchieuphim-last-right-rap').innerHTML = html
    },
    

        // Render date
    dateRender() {
        const listElm = []
        let dates = new Date()
        for (let date = 0 ; date < 7 ; date++ ) {    
            let tomorrow = new Date()
            if (date == 0) {
                const html = `
                <div class="content-lichchieuphim-last-right-date-child-list color">
                    <div class="Date">
                        <p>${tomorrow.getDate()}</p>
                    </div>
                    <p class="Day">Hôm nay</p>
                </div>
                `
                listElm.push(html)
            } 
            else {
                tomorrow.setDate(new Date().getDate() + date)
                const html = `
                    <div class="content-lichchieuphim-last-right-date-child-list">
                        <div class="Date">
                            <p>${tomorrow.getDate()}</p>
                        </div>
                        <p class="Day"></p>
                    </div>
                `
                listElm.push(html)
            }   
            
        }
        $('.content-lichchieuphim-last-right-date-child').innerHTML = listElm.join('')
    },

            // render ra list logo rap

    listLogoRapRender() {
        const listLogoRap = this.listLogoRap.map(logo => {
            return `
                <div class="allrap-item">
                    <img src="${logo.logo}" alt="" class="allrap-item-img">
                    <p>${logo.name}</p>
                </div>
            `
        })
        $('.allrap').innerHTML = listLogoRap.join('')
    },

                // Render phim sap chieu


    listMovesRender() {
                
        const movie = this.listMoves.map((movie) => {
            return `
            <div class="m-2-4 l-2-4 link-phim">
                    <div class="scale-img">
                    <a href="${movie.href}"><img class="img-phim" src="${movie.img}" alt="">
                    </div>
                    <p class="tenphim">${movie.nameMovie}</p>
                    </a>
                    <p class="theloai">${movie.contentMovie}</p>
                    <div class="age-limit">
                        ${movie.ageLimit}
                    </div>
            </div>
            `
        })
        movieContainer.innerHTML = movie.join('')
    },

        // Render ra blog 

    blogMoviesRender() {
        const itemBlog = this.blogMovies.map((blog,index) => {
            if (index < this.isIndexBlogs){
                return `
                    <div class="col l-3 m-6 c-12 link-phim1">
                        <a href="#">
                            <div class="scale-img1">
                                <img class="img-phim1" src=${blog.img} alt="">
                                <div class="info-blog">
                                    <p class="tenphim1">${blog.content}</p>
                                    <p class="theloai1">${blog.view}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                `
            }
        })
        blogContainer.innerHTML = itemBlog.join('')
    },

        // render blog movie last

    blogMoviesLastRender() {
        const itemBlogLast = this.blogMoviesLast.map((blog,index) => {
            if (index < this.isIndexBlogsLast){
                return `
                    <div class="col l-3 m-6 c-12 link-phim1">
                        <a href="#">
                            <div class="scale-img1">
                                <img class="img-phim1" src=${blog.img} alt="">
                                <div class="info-blog">
                                    <p class="tenphim1">${blog.content}</p>
                                    <p class="theloai1">${blog.view}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                `
            }
        })
        $('.blog-container-last.blog-container').innerHTML = itemBlogLast.join('')
    },

        // render news

    newsRender() {
        const itemNews = this.news.map((newItem,index) => {
            if (index < this.isIndexNews) {
                return `
                    <div class="col l-3 m-6 c-6 tintuc__khuyenmai-list-item">
                        <a href="#">
                            <img src="${newItem.img}"  alt="" class="img-poster">
                            <div class="tintuc__khuyenmai-item">
                                <p class="noidungkhuyenmai">
                                    ${newItem.content}
                                </p>
                                <p class="thoigiankhuyenmai">
                                    ${newItem.date}
                                </p>
                            </div>    
                        </a>
                    </div>
                `
            }
        })
        newsContainer.innerHTML = itemNews.join('')

    },

        // render question and answer

    questionsRender() {
        const itemNews = this.news.map((newItem,index) => {
            if (index < this.isIndexNews) {
                return `
                    <div class="col l-3 m-6 c-6 tintuc__khuyenmai-list-item">
                        <a href="">
                            <img src="${newItem.img}"  alt="" class="img-poster">
                            <div class="tintuc__khuyenmai-item">
                                <p class="noidungkhuyenmai">
                                    ${newItem.content}
                                </p>
                                <p class="thoigiankhuyenmai">
                                    ${newItem.date}
                                </p>
                            </div>    
                        </a>
                    </div>
                `
            }
        })
        newsContainer.innerHTML = itemNews.join('')
    },

    addAnswerRender() {
        const answer = this.questions.map(question => {
            return `
                <li class="cauhoi">
                    <span>${question.question}</span>
                    <i class="ti-angle-down icon-down"></i>
                    <i class="ti-angle-up icon-up"></i>
                    <div class="cauhoi-conten-sub">
                        <p>${question.answers}</p>
                    </div>
                </li>
            `
        })
        $('.cauhoi-list-item').innerHTML = answer.join('')
    },

    

    eventHandler() {
        const cautraloi = $$('.cauhoi-conten-sub')
        const cauhois = $$('.cauhoi')
        const _this = this

        // link main

        if (window.innerWidth > 1024) {
            $('.content-right-item-href').href = 'https://momo.vn/cinema/blog-dien-anh'
            $('.rap-chieu').href = 'https://tantn.github.io/lichchieuphimMoMo/rap-chieu.html'
        }
        
        // Add new rap

        if (this.isIndexRap > this.listRap.length - 1) {
            $('.btn-addNewRap .icon-default').style = 'animation: unset'
        }
        $('.btn-addNewRap').onclick = () => {
            if (this.isIndexRap <= this.listRap.length - 1) {
                this.isIndexRap = this.isIndexRap + 7
                this.listRapRender()
                this.eventHandler()
            }
            
        }
        $$('.content-lichchieuphim-last-left-name').forEach((rap,index) => {
            rap.onclick = () => {
                $('.content-lichchieuphim-last-left-name.content-lichchieuphim-last-left-name-color').classList.remove('content-lichchieuphim-last-left-name-color')
                this.rapRender(this.Rap[index])
                this.indexNewRap = index
                $$('.content-lichchieuphim-last-left-name')[index].classList.add('content-lichchieuphim-last-left-name-color')
            }
        })
        this.rapRender(this.Rap[this.indexNewRap])
        $$('.content-lichchieuphim-last-left-name')[this.indexNewRap].classList.add('content-lichchieuphim-last-left-name-color')

        // click date

        $$('.content-lichchieuphim-last-right-date-child-list').forEach((date,index) => {
            date.onclick = () => {
                $('.content-lichchieuphim-last-right-date-child-list.color').classList.remove('color')
                $$('.content-lichchieuphim-last-right-date-child-list')[index].classList.add('color')
            }
        })

        // cliick vao rap
        $$('.allrap-item')[this.indexLogo].classList.add('allrap-item-color')
        $$('.allrap-item').forEach((logo, index) => {
            logo.onclick = () => {
                $('.allrap-item.allrap-item-color').classList.remove('allrap-item-color')
                $$('.allrap-item')[index].classList.add('allrap-item-color')
            }
        })

        // slide movies , next, prev

        if (this.postionXMovie == 0) {
            prevBtnMovie.classList.add('hide-one-icon-movie')
            nextBtnMovie.classList.remove('hide-one-icon-movie')
        } else {
            prevBtnMovie.classList.remove('hide-one-icon-movie')
            nextBtnMovie.classList.add('hide-one-icon-movie')
        }

        // add color for age limit

        $$('.movie-on-rap-content-address').forEach(age => {
            if (age.innerText === '18+') {
                age.style = 'background-color: #9b2020'
            }
            if (age.innerText === '16+') {
                age.style = 'background-color: #bb7d27'
            }
            if (age.innerText === '13+') {
                age.style = 'background-color: #ddbc3f'
            }
            if (age.innerText === 'P') {
                age.style = 'background-color: #579b41'
            }
        })

        $$('.age-limit').forEach(age => {
            if (age.innerText === '18+') {
                age.style = 'background-color: #9b2020'
            }
            if (age.innerText === '16+') {
                age.style = 'background-color: #bb7d27'
            }
            if (age.innerText === '13+') {
                age.style = 'background-color: #ddbc3f'
            }
            if (age.innerText === 'P') {
                age.style = 'background-color: #579b41'
            }
        })



        nextBtnMovie.onclick = () => {
            _this.postionXMovie = _this.postionXMovie - listMovesWidth
            movieContainer.style = `transform: translate(${_this.postionXMovie}px)`
            
            this.eventHandler()
        }
        prevBtnMovie.onclick = () => {
            _this.postionXMovie = _this.postionXMovie + listMovesWidth
            movieContainer.style = `transform: translate(${_this.postionXMovie}px)`
            this.eventHandler()
        }

        // Add blog new or blog last

        $$('.luotxem-view').forEach((selec,index) => {
            selec.onclick = () => {
                _this.isBlogLast = index
                $('.luotxem-view.active-view').classList.remove('active-view')
                $('.blog-container.active-view').classList.remove('active-view')

                $$('.luotxem-view')[index].classList.add('active-view')
                $$('.blog-container')[index].classList.add('active-view')
                _this.eventHandler()
            }
        })

        // Add thêm Blog phim ảnh
        if (_this.isBlogLast == 0) {
            if (this.isIndexBlogs > this.blogMovies.length - 1) {
                $('.btn-addBlog .icon-default').style = 'animation: unset'
            } else {
                $('.btn-addBlog .icon-default').style = 'animation: icon-animate .5s ease-out infinite'
                $('.btn-addBlog .icon-default').style = 'animation-direction: alternate-reverse;'
            }
        } else {
            if (this.isIndexBlogsLast > this.blogMoviesLast.length - 1) {
                $('.btn-addBlog .icon-default').style = 'animation: unset'
            } else {
                $('.btn-addBlog .icon-default').style = 'animation: icon-animate .5s ease-out infinite'
                $('.btn-addBlog .icon-default').style = 'animation-direction: alternate-reverse;'
                
            }
        }
        addBlogBtn.onclick = () => {
            if (_this.isBlogLast == 0) {
                if (this.isIndexBlogs <= this.blogMovies.length - 1) {
                    this.isIndexBlogs = this.isIndexBlogs + 4
                    addBlogBtn.classList.add('active-btn')
                    
                    setTimeout(() => {
                        addBlogBtn.classList.remove('active-btn')
                        this.blogMoviesRender()
                    }
                    ,700)  
                }
            } else {
                if (this.isIndexBlogsLast <= this.blogMoviesLast.length - 1) {
                    this.isIndexBlogsLast = this.isIndexBlogsLast + 4
                    addBlogBtn.classList.add('active-btn')
                    setTimeout(() => {
                        addBlogBtn.classList.remove('active-btn')
                        this.blogMoviesLastRender()
                    }
                    ,700)
                }
            }
            _this.eventHandler()
            
        }

        
        // Add News
        if (this.isIndexNews > this.news.length - 1) {
            $('.btn-addNews .icon-default').style = 'animation: unset'
        }

        addNewsBtn.onclick = () => {
            if (this.isIndexNews <= this.news.length - 1) {
                this.isIndexNews = this.isIndexNews + 4
                addNewsBtn.classList.add('active-btn')
                setTimeout(() => {
                    addNewsBtn.classList.remove('active-btn')
                    this.newsRender()
                }
                ,700)  
            }
            _this.eventHandler()
        }
        openElmOnMenu.forEach((selector, index) => {
            // Open Menu 
            openBtnMenu.onclick = () => {
                this.isApp = !this.isApp
                $('.header-nav').classList.toggle('active', _this.isApp)
                if (_this.indexCurrentMenu.length > 0) {
                    _this.indexCurrentMenu.forEach((index) => { 
                        if ((index + 1) < openElmOnMenu.length) {
                            openElmOnMenu[index + 1].style.marginTop = 0
                            openElmOnMenu[index].classList.remove('openApp')
                        }
                    })
                    _this.indexCurrentMenu.splice(0)
                }
            }

            //  Open các lựa chon trong Menu tren moblie, tablet

            selector.onclick = () => {
                if (window.innerWidth < 1024) {
                    if (_this.indexCurrentMenu.length > 0) {
                        _this.indexCurrentMenu.forEach((index) => { 
                            if ((index + 1) < openElmOnMenu.length) {
                                if (openElmOnMenu[index + 1].style.marginTop) {
                                    openElmOnMenu[index + 1].style.marginTop = 0
                                    openElmOnMenu[index].classList.remove('openApp')
                                }
                            }
                        })
                    }
                    if (_this.indexCurrentMenu[_this.indexCurrentMenu.length - 1] != index) {
                        openElmOnMenu[index].classList.add('openApp')
                        this.indexCurrentMenu.push(index)   
                    } else {
                        _this.indexCurrentMenu.splice(0)
                    }
    
                    // Khi onblur ra bên ngoài
                    $$('.content-right-list-item-rap').forEach(item => {
                        item.onclick = () => {
                            this.isApp = !this.isApp
                            $('.header-nav').classList.toggle('active', _this.isApp)
                        }
                    })
                    $('.lopphu').onclick = () => {
                        if (openElmOnMenu[index]) {
                            openElmOnMenu[index].classList.remove('openApp')
                            if (selectorElm[index]) {
                                openElmOnMenu[index + 1].style.marginTop = selectorElm[index].offsetHeight + 'px'
                            }
                        }
                    }
                    if (selectorElm[index]) {
                        openElmOnMenu[index + 1].style.marginTop = selectorElm[index].offsetHeight + 'px'
                    }
                } 
                
            }
                
        })

        // Add cau tra loi 
        
        cauhois.forEach( (cauhoi, index) => {
    
            cauhoi.onclick = () => {
                _this.indexCurrentQuestion.forEach((index) => {
                    if (index < cauhois.length - 1) {
                        cauhois[index + 1].style.marginTop = 0
                        cauhois[index].classList.remove('cauhoi-active')
                    } else {
                        cauhois[index].classList.remove('cauhoi-active')
                        
                        $('.footer-container').style.marginTop = 0

                        
                    }
                })

                if (!(_this.indexCurrentQuestion[_this.indexCurrentQuestion.length - 1] == index)) {
                    _this.indexCurrentQuestion.push(index)
                    cauhois[index].classList.add('cauhoi-active')
                } else {
                    _this.indexCurrentQuestion.splice(0)
                }
                if (index < cauhois.length - 1) {
                    cauhois[index + 1].style.marginTop = cautraloi[index].offsetHeight + 'px'
                }
                else{
                        $('.footer-container').style.marginTop = cautraloi[index].offsetHeight + 'px'
                    
                }
            }
        })
        
        
    },
    render() {
        this.listRapRender()
        this.dateRender()
        this.movieOnRapRender()
        this.listLogoRapRender()
        this.listMovesRender()
        this.blogMoviesRender()
        this.blogMoviesLastRender()
        this.newsRender()
        this.questionsRender()
        this.addAnswerRender()
    },

    start() {
        this.render()
        this.eventHandler()
    }
}
openApp.start()


