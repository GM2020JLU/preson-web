// 页面加载完成后显示 "关于我" 部分
document.addEventListener('DOMContentLoaded', function() {
    loadPhotos();
    updateActiveNavItem();
    // 确保 "关于我" 部分可见
    document.getElementById('about').style.display = 'block';
    
    // 初始化轮播
    new bootstrap.Carousel(document.getElementById('photo-carousel'), {
        interval: 5000 // 设置自动轮播间隔，如果不需要自动轮播，可以删除这一行
    });
});

// 页面切换
function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// 加载照片
function loadPhotos() {
    const photoPath = 'images/'; // 修改为相对路径
    const carouselInner = document.getElementById('carousel-inner');

    // 使用指定的照片
    const photoList = [
        '02.jpg', '03.jpg', '04.jpg', '05.jpg',
        '07.jpg', '08.jpg', '09.jpg', '10.jpg'
    ];

    // 每组显示3张照片
    for (let i = 0; i < photoList.length; i += 3) {
        const div = document.createElement('div');
        div.className = `carousel-item ${i === 0 ? 'active' : ''}`;
        
        const row = document.createElement('div');
        row.className = 'row';
        
        for (let j = i; j < i + 3 && j < photoList.length; j++) {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            
            const img = document.createElement('img');
            img.src = `${photoPath}${photoList[j]}`;
            img.className = 'img-fluid w-100 h-100';
            img.style.objectFit = 'cover';
            img.alt = `照片 ${photoList[j]}`;
            
            col.appendChild(img);
            row.appendChild(col);
        }
        
        div.appendChild(row);
        carouselInner.appendChild(div);
    }
}

// 其他功能...

// 更新激活的导航项
function updateActiveNavItem() {
    const sections = document.querySelectorAll('main > section');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
}