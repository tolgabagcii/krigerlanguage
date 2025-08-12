const allCategories = [...new Set(coursesData.map(course => course.kategori))];

let currentCourseData = null;
let selectedCourseUrl = '';
let currentCategory = 'Tümü';
let currentPath = [];
let currentLevelData = coursesData;
let typingInterval = null;

const categoryFilter = document.getElementById('category-filter');
const sectionsContainer = document.getElementById('sections-container');
const currentSectionTitle = document.getElementById('current-section-title');
const breadcrumb = document.getElementById('breadcrumb');

function initializeBackButton() {
    const container = document.querySelector('.container');
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i>   Geri Dön';
    backButton.onclick = goBack;
    container.appendChild(backButton);
    backButton.style.display = 'none';
}

function goBack() {
    if (currentPath.length > 0) {
        const previousLevel = currentPath.pop();
        currentLevelData = previousLevel.data;
        displayLevelData(previousLevel.data);
        updateBreadcrumb();
        
        document.querySelector('.back-button').style.display = currentPath.length > 0 ? 'block' : 'none';
    }
}

function createCategoryFilters() {
    categoryFilter.innerHTML = '';
    
    const allButton = document.createElement('button');
    allButton.textContent = 'Tümü';
    allButton.className = currentCategory === 'Tümü' ? 'category-btn active' : 'category-btn';
    allButton.onclick = () => {
        currentPath = [];
        filterCoursesByCategory('Tümü');
        document.querySelector('.back-button').style.display = 'none';
    };
    categoryFilter.appendChild(allButton);
    
    allCategories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = currentCategory === category ? 'category-btn active' : 'category-btn';
        button.onclick = () => {
            currentPath = [];
            filterCoursesByCategory(category);
            document.querySelector('.back-button').style.display = 'none';
        };
        categoryFilter.appendChild(button);
    });
}

function filterCoursesByCategory(category) {
    currentCategory = category;
    createCategoryFilters();
    
    if (category === 'Tümü') {
        currentLevelData = coursesData;
        displayLevelData(coursesData);
        currentSectionTitle.textContent = 'Tüm Kurslar';
    } else {
        const filteredCourses = coursesData.filter(course => course.kategori === category);
        currentLevelData = filteredCourses;
        displayLevelData(filteredCourses);
        currentSectionTitle.textContent = `${category} Kursları`;
    }
    
    updateBreadcrumb();
}

function displayLevelData(levelData) {
    sectionsContainer.innerHTML = '';

    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.style.display = currentPath.length > 0 ? 'block' : 'none';
    }

    if (levelData.length === 0) {
        sectionsContainer.innerHTML = `
            <div class="no-course">
                <i class="fas fa-book-open"></i>
                <h3>İçerik Bulunamadı</h3>
                <p>Bu kategoride henüz içerik bulunmamaktadır.</p>
            </div>
        `;
        return;
    }

    levelData.forEach(item => {
        const hasSubsections = item.altBolumler && item.altBolumler.length > 0;
        const isQuiz = !hasSubsections && item.quizUrl;
        
        const card = document.createElement('div');
        card.className = `section-card ${hasSubsections ? 'has-subsection' : ''} ${isQuiz ? 'quiz-card' : ''}`;
        
        card.innerHTML = `
            <div class="section-image">
                ${item.gorselUrl ? `<img src="${item.gorselUrl}" alt="${item.baslik}">` : ''}
                <div class="section-badges">
                    ${item.kategori ? `
                        <span class="course-category">
                            <i class="fas fa-tag"></i>
                            ${item.kategori}
                        </span>` : ''}
                    
                    ${isQuiz ? `
                        <span class="quiz-tag">
                            <i class="fas fa-graduation-cap"></i>
                            Kurs
                        </span>` : `
                        <span class="section-tag">
                            <i class="fas fa-layer-group"></i>
                            Bölüm
                        </span>`}
                    
                    ${item.seviye ? `
                        <span class="level-indicator">
                            <i class="fas fa-signal"></i>
                            ${item.seviye}
                        </span>` : ''}
                    
                    ${isQuiz && calculateTotalWords(getCourseData(item.jsonDosyalari)) > 0 ? `
                        <div class="word-count">
                            <i class="fas fa-question-circle"></i>
                            ${calculateTotalWords(getCourseData(item.jsonDosyalari))} soru
                        </div>` : ''}
                </div>
            </div>
            <h3 class="section-title-card">${item.baslik}</h3>
            <p class="section-description">${item.aciklama}</p>
        `;
        
        card.addEventListener('click', () => {
            if (item.quizUrl) {
                showCourseContent(item);
            } else if (hasSubsections) {
                currentPath.push({
                    title: item.baslik,
                    data: currentLevelData
                });
                currentLevelData = item.altBolumler;
                displayLevelData(item.altBolumler);
                updateBreadcrumb(item.baslik);
                document.querySelector('.back-button').style.display = 'block';
            } else {
                showCourseContent(item);
            }
        });
        
        sectionsContainer.appendChild(card);
    });
}

function updateBreadcrumb(title) {
    breadcrumb.innerHTML = '';
    
    const rootItem = document.createElement('div');
    rootItem.className = 'breadcrumb-item root';
    rootItem.textContent = currentCategory === 'Tümü' ? 'Tüm Kurslar' : currentCategory;
    rootItem.onclick = () => {
        currentPath = [];
        filterCoursesByCategory(currentCategory);
        document.querySelector('.back-button').style.display = 'none';
    };
    breadcrumb.appendChild(rootItem);
    
    currentPath.forEach((pathItem, index) => {
        const separator = document.createElement('span');
        separator.className = 'breadcrumb-separator';
        separator.innerHTML = '›';
        breadcrumb.appendChild(separator);
        
        const item = document.createElement('div');
        item.className = 'breadcrumb-item';
        item.textContent = pathItem.title;
        item.onclick = () => {
            currentPath = currentPath.slice(0, index);
            currentLevelData = pathItem.data;
            displayLevelData(pathItem.data);
            updateBreadcrumb();
            document.querySelector('.back-button').style.display = index > 0 ? 'block' : 'none';
        };
        breadcrumb.appendChild(item);
    });
    
    if (title) {
        const separator = document.createElement('span');
        separator.className = 'breadcrumb-separator';
        separator.innerHTML = '›';
        breadcrumb.appendChild(separator);
        
        const currentItem = document.createElement('div');
        currentItem.className = 'breadcrumb-item';
        currentItem.textContent = title;
        currentItem.style.color = '#555';
        currentItem.style.fontWeight = '800';
        breadcrumb.appendChild(currentItem);
    }
}

function calculateTotalWords(courseData) {
    let total = 0;
    for (const section of Object.values(courseData)) {
        total += Object.keys(section).length;
    }
    return total;
}

function getCourseData(jsonDosyalari) {
    const courseData = {};
    
    jsonDosyalari.forEach(dosyaAdi => {
        const jsonKey = dosyaAdi.replace('.js', '');
        if (window[jsonKey]) {
            Object.assign(courseData, window[jsonKey]);
        }
    });
    
    return courseData;
}

function showCourseContent(course) {
    const courseData = getCourseData(course.jsonDosyalari);
    currentCourseData = courseData;
    selectedCourseUrl = course.quizUrl || course.url;
    
    document.getElementById('modalCourseTitle').textContent = course.baslik;
    
    const courseContent = document.getElementById('courseContent');
    courseContent.innerHTML = '';
    
    const detailedDesc = document.getElementById('detailedDescription');
    detailedDesc.innerHTML = '<div class="typing-cursor"></div>';
    
    const descriptionText = course.detayliAciklama || 'Bu içerik hakkında detaylı bilgi bulunmamaktadır.';
    typeText(detailedDesc, descriptionText);
    
    for (const [sectionName, words] of Object.entries(courseData)) {
        const wordCount = Object.keys(words).length;
        
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'course-section';
        sectionDiv.innerHTML = `
            <div class="course-section-title">${sectionName}</div>
            <div class="course-section-count">${wordCount} kelime</div>
        `;
        
        courseContent.appendChild(sectionDiv);
    }
    
    document.getElementById('courseContentModal').classList.add('active');
}

function typeText(element, text, speed = 30) {
    if (typingInterval) clearInterval(typingInterval);
    
    element.innerHTML = '';
    let i = 0;
    
    typingInterval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            typingInterval = null;
        }
    }, speed);
}


function startCourse() {
  closeModal('courseContentModal');

  let url = (selectedCourseUrl || '').trim();


  if (!url || url === '/' || url === '#') {
    url = '404.html';
  }


  window.location.assign(url);
}

function closeModal(modalId) {
    if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
    }
    document.getElementById(modalId).classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    createCategoryFilters();
    filterCoursesByCategory('Tümü');
    initializeBackButton(); 
});

function navigateToRoot() {
    currentPath = [];
    filterCoursesByCategory('Tümü');
    document.querySelector('.back-button').style.display = 'none';
}


(function(){
    const ready=Promise.all([
        new Promise(r=>window.addEventListener('load',r,{once:true})),
        (document.fonts&&document.fonts.ready)||Promise.resolve()
    ]);

    ready
      .then(()=>{                       
          const imgs=[...document.querySelectorAll('img,object[type="image/svg+xml"]')];
          return Promise.all(imgs.map(el=>{
              if(el.tagName==='IMG'&&el.decode)return el.decode().catch(()=>{});
              if(el.tagName==='OBJECT')return new Promise(r=>el.addEventListener('load',r,{once:true}));
              return Promise.resolve();
          }));
      })
      .then(()=>new Promise(r=>setTimeout(r,4000))) 
      .then(()=>{
          const l=document.getElementById('pageLoader');
          if(!l)return;
          l.classList.add('hide');
          setTimeout(()=>l.remove(),500);
      });
})();