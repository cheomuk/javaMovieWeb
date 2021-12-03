// 상수 API_KEY : api key의 url주소 저장
const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';

// 상수 BASE_URL : tmdb의 api주소 저장
const BASE_URL = 'https://api.themoviedb.org/3';

// 상수 API_URL : 영화 정보를 가져오기 위한 url 주소 저장(인기순 정렬로 가져옴)
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

// 상수 IMG_URL : 영화 포스터 이미지를 가져오기 위한 url 주소 저장
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// 상수 searchURL :  영화 검색 url 저장
const searchURL = BASE_URL + '/search/movie?'+API_KEY;


// 리스트 genres : 장르 id와 name map형식으로 저장
const genres = [
    {
        "id": 28,
        "name": "액션"
    },
    {
        "id": 12,
        "name": "어드벤처"
    },
    {
        "id": 16,
        "name": "애니메이션"
    },
    {
        "id": 35,
        "name": "코미디"
    },
    {
        "id": 80,
        "name": "범죄영화"
    },
    {
        "id": 99,
        "name": "다큐멘터리"
    },
    {
        "id": 18,
        "name": "드라마"
    },
    {
        "id": 10751,
        "name": "가족영화"
    },
    {
        "id": 14,
        "name": "판타지"
    },
    {
        "id": 36,
        "name": "역사영화"
    },
    {
        "id": 27,
        "name": "공포영화"
    },
    {
        "id": 10402,
        "name": "음악영화"
    },
    {
        "id": 9648,
        "name": "미스테리"
    },
    {
        "id": 10749,
        "name": "로맨스"
    },
    {
        "id": 878,
        "name": "SF"
    },
    {
        "id": 10770,
        "name": "TV 영화"
    },
    {
        "id": 53,
        "name": "스릴러"
    },
    {
        "id": 10752,
        "name": "전쟁영화"
    },
]


// 상수 main : 'main'이라는 id를 가진 태그에 해당하는 html element저장
const main = document.getElementById('main');
// 상수 form : 'form'이라는 id를 가진 태그에 해당하는 html element저장
const form =  document.getElementById('form');
// 상수 search : 'search'라는 id를 가진 태그에 해당하는 html element저장
const search = document.getElementById('search');
// 상수 tagsElement : 'tag'라는 id를 가진 태그에 해당하는 html element저장
const tagsElement = document.getElementById('tags');



// 상수 prev : 'prev'라는 id를 가진 태그에 해당하는 html element저장
const prev = document.getElementById('prev')
// 상수 next : 'next'라는 id를 가진 태그에 해당하는 html element저장
const next = document.getElementById('next')
// 상수 current : 'current'라는 id를 가진 태그에 해당하는 html element저장
const current = document.getElementById('current')

// 변수 currentPage : 현재 페이지 정보를 담을 변수
var currentPage = 1;
// 변수 nextPage : 다음 페이지 정보를 담을 변수
var nextPage = 2;
// 변수 prevPage : 이전 페이지 정보를 담을 변수
var prevPage = 3;
// 변수 lastUrl : getMovies 함수가 호출될 때마다 인수로 받아온 주소를 저장할 변수(가장 마지막에 받아온 주소가 저장되게 된다)
var lastUrl = '';
// 변수 totalPages : 전체 페이지 수를 담을 변수
var totalPages = 100;

// 리스트 selectedGenre : 선택된 장르를 담을 리스트(장르를 중복 선택 가능)
var selectedGenre = []

// 장르 설정 함수 실행
setGenre();

// 장르 설정 함수 setGenre()
function setGenre(){

    // tagsElement 안에 저장된 html elemnet에 접근하여 해당 태그의 내부 내용을 ''(내용없음)로 바꿈
    tagsElement.innerHTML= '';

    // genre의 각각의 인덱스에 해당하는 value를 가져와 루프를 돌때마다 인덱스 순서대로 매개변수 genre에 저장
    genres.forEach(genre => {

        // 상수 g_tag : div 객체(html element) 생성하여 저장
        const g_tag = document.createElement('div');

        // g_tag div 객체에 tag 클래스 추가
        g_tag.classList.add('tag');

        // g_tag의 div 객체의 id를 리스트 genres에서 받아온 장르의 id로 설정 
        g_tag.id=genre.id;

        // g_tag의 div 객체에 genres에서 받아온 장르의 name 값으로 텍스트 삽입
        g_tag.innerText = genre.name;

        // g_tag의 div 객체에 이벤트 리스너 추가 (클릭시 이벤트 발생)
        g_tag.addEventListener('click', () => {

            // 만약 selectedGenre의 길이가 0이면 (선택된 장르가 없다면) if문 실행  
            if(selectedGenre.length == 0){

                // selectedGenre 리스트에 장르의 id추가
                selectedGenre.push(genre.id);
            }

            // selectedGenre 리스트에 선택된 장르가 이미 존재한다면 else문 실행
            else{

                // 만약 selectedGenre에 내가 선택한 장르와 같은 장르가 존재한다면 if문 실행
                if(selectedGenre.includes(genre.id)){

                    // selectedGenre의 내용물들을 순서대로 가져와서
                    // 배열 내 현재 값은 id에, 배열 내 현재 값의 인덱스 번호를 id_index에 저장
                    selectedGenre.forEach((id, id_index) => {

                        // 만약 배열의 현재 값(장르)이 내가 선택한 장르와 같다면 if문 실행
                        if(id == genre.id){

                            //selectedGenre 리스트에서 해당 장르 삭제(id_index 인덱스 번호부터 1개의 요소 삭제)
                            selectedGenre.splice(id_index, 1);
                        }
                    })
                }

                // 만약 selectedGenre에 내가 선택한 장르와 같은 장르가 존재하지 않는다면 else문 실행
                else{

                    // selectedGenre 리스트에 내가 선택한 장르의 id 추가
                    selectedGenre.push(genre.id);
                }
            }

            // 선택된 장르에 맞는 영화 불러오기
            // join 함수를 이용해 selectedGenre 리스트의 모든 원소들을 하나의 값으로 만듬(원소와 원소 사이 ,추가)
            // 만들어진 값을 encodeURI 함수를 이용해 퍼센트 인코딩 하여 인코딩 된 주소값으로 장르 검색
            // getMovies 함수를 이용해 선택된 장르에 맞는 영화를 호출
            getMovies(API_URL + '&with_genres='+encodeURI(selectedGenre.join(',')));

            // 선택된 장르의 강조(색 변경) 함수 실행
            highlightSelection();
        })

        //tagsElement(tag라는 id를 가진 태그) 안에 g_tag의 div 객체를 삽입
        tagsElement.append(g_tag);
    })
}


// 장르 태그 클릭시 선택된 장르를 강조(색 변경) 하는 함수
function highlightSelection(){

    // 상수 리스트 tags : querySelectorAll 함수를 통해 클래스가 tag인 모든 html element를 리턴받아 저장
    // (갸져올 요소는 css선택자 형식으로 구분(예시 : .tag))
    const tags = document.querySelectorAll('.tag');

    // tags의 각각의 인덱스에 해당하는 value를 가져와 루프를 돌때마다 인덱스 순서대로 매개변수 tag에 저장
    tags.forEach(tag => {

        // 가져온 장르의 클래스에서 highlight 클래스를 삭제
        tag.classList.remove('highlight')
    })

    // 클리어 버튼 함수 실행(장르를 선택했으므로 선택된 장르들 모두 해제하는 기능인 clearBtn을 활성화 하는 것)
    clearBtn();

    //selectedGenre 리스트의 길이가 0이 아니면 if문 실행(선택된 장르가 존재하면 실행)
    if(selectedGenre.length != 0){  

        // selectedGenre의 각각의 인덱스에 해당하는 value를 가져와 루프를 돌때마다 인덱스 순서대로 매개변수 id에 저장
        selectedGenre.forEach(id => {

            // 상수 hightlightedTag : 받아온 id와 같은 id를 가진 태그를 찾아 이를 나타내는 element로 초기화
            const hightlightedTag = document.getElementById(id);

            // hightlightedTag에 highlight 클래스 추가(선택된 장르에 강조 효과 추가)
            hightlightedTag.classList.add('highlight');
        })
    }
}

// 클리어 버튼 함수 clearBtn (클리어 버튼은 장르 선택 전에는 보아지 않다가 장르를 선택하면 나타나는 방식)
function clearBtn(){

    // 변수 clearBtn : 'clear'라는 id를 가진 태그를 찾아 이를 나타내는 element로 초기화
    let clearBtn = document.getElementById('clear');

    // clearBtn에 값이 존재한다면 if문 실행 (clear라는 id를 가진 태그가 있다면 실행) 
    if(clearBtn){

        // clearBtn의 element 객체에 highlight 클래스 추가
        clearBtn.classList.add('highlight');
    }

    // clear라는 id를 가진 태그가 없다면 아래의 else문 실행
    else{

        // 변수 clear : div 객체(html element)생성하여 저장
        let clear = document.createElement('div');

        // clear의 div 객체에 tag, highlight 클래스 추가
        clear.classList.add('tag','highlight');

        // clear의 div 객체의 id를 clear로 설정
        clear.id = 'clear';

        // clear의 div 객체에 Clear x 텍스트 삽입
        clear.innerText = 'Clear x';

        // clear의 div 객체에 이벤트 리스너 추가 (생성된 div 객체 클릭시 이벤트 발생)
        clear.addEventListener('click', () => {

            // 리스트 selectedGenre 안의 원소들 제거
            selectedGenre = [];

            // 장르 설정 함수 호출
            setGenre();           
      
            // 영화 불러오기 함수 호출
            getMovies(API_URL);
        })

        //tagsElement(tag라는 id를 가진 태그) 안에 clear의 div 객체를 삽입
        tagsElement.append(clear);
    }   
}

// 영화 호출 함수 실행
getMovies(API_URL);

// 영화 호출 함수 getMovies
// 인수로 영화 호출 API url 주소를 받아와 매개변수 url에 저장
function getMovies(url){

    // lstUrl에 받아온 url주소를 대입
    lastUrl = url;

    // fetch 작동 순서
    // fetch 함수를 통해 themovieapi 호출 (GET방식)
    // then을 통해 respons를 처라한 후 응답을 json형태로 파싱
    // 받아온 데이터를 매개변수 data에 저장
    fetch(url).then(res => res.json()).then(data => {

        // 가져온 데이터의 길이가 0이 아니면 if문 안의 코드 실행
        if(data.results.length !== 0){

            // 영화 보여주기 함수 실행(가져온 영화 데이터 전달)
            showMovies(data.results);

            // 받아온 영화 데이터의 페이지를 가져와 현재 페이지로 설정
            currentPage = data.page;

            // 다음 페이지를 현재 페이지의 값 + 1로 설정
            nextPage = currentPage + 1;

            // 이전 페이지를 현재 페이지의 값 - 1로 설정
            prevPage = currentPage - 1;

            // 전체 페이지를 받아온 데이터의 전체 페이지로 설정
            totalPages = data.total_pages;

            // current라는 id를 가진 태그에 현재 페이지의 정보 삽입
            current.innerText = currentPage;

            // 만약 현재 페이지가 1이거나 그보다 작다면 if문 안의 코드 실행
            if(currentPage <= 1){

                // prev id를 가진 태그에 disabled 클래스 추가
                //(1페이지는 이전페이지가 존재하지 않으므로 이전 페이지 호출 기능을 없앰)
                prev.classList.add('disabled');

                // next id를 가진 태그에서 disabled 클래스 삭제
                next.classList.remove('disabled')

            }

            // 만약 현재 페이지가 전체 페이지보다 크거나 같으면 else if문 안의 코드 실행
            else if(currentPage>= totalPages){

                // prev id를 가진 태그에서 disabled 클래스 삭제
                prev.classList.remove('disabled');

                // next id를 가진 태그에 disabled 클래스 추가
                next.classList.add('disabled')
            }
            
            // 현재 페이지가 맨 처음 페이지 혹은 맨 마지막 페이지가 아니라면 else문 안의 코드 실행 
            else{

                //prev id를 가진 태그와 next id를 가진 태그에서 disabled 클래스 삭제
                prev.classList.remove('disabled');
                next.classList.remove('disabled')
            } 
        }
        
        // 가져온 데이터의 길이가 0인 경우 else문 안의 코드 실행(가져온 데이터가 없는 경우 else문 실행)
        else{

        // main이라는 id를 가진 태그를 찾아 ht 태그 및 h1태그 내부 내용 삽입
        main.innerHTML= `<h1 class="no-results">불러온 영화가 없습니다.</h1>`
        }  
    })
}


// 영화 보여주기 함수
function showMovies(data){

    // 'main' id를 가진 태그를 찾아 내부 내용을 모두 삭제
    main.innerHTML = '';

    //getMovies에서 받아온 영화의 정보를 각 루프마다 순서대로 매개변수 movie에 저장
    data.forEach(movie => {

        // 좌항의 변수명과 movie 안의 영화 정보(json 데이터)의 key값을 매칭하여 변수에 value값을 저장
        // 예) 변수 title에는 title의 key 값을 가진 데이터의 value가 저장됨
        const {title, poster_path, vote_average, overview, id} = movie;

        // 상수 movieElement : div 객체로 초기화
        const movieElement = document.createElement('div');

        // movieElement의 div 객체에 movie 클래스 추가
        movieElement.classList.add('movie');

        // movieElement의 div 객체에 내부 html 코드 추가
        // img 태그 : 영화 이미지 불러오기
        // movie-info 클래스를 가진 div 태그 : 
        // - h3 형식으로 영화 제목 출력
        // - span의 클래스를 changeColor로부터 리턴받은 값(평점에 따라 색 차별)으로 설정 후 평균 평점 출력
        // overview 클래스를 가진 div 태그 : 영화 카드에 마우스를 올리면 나오는 overview
        // - h3 형식으로 overview 텍스트 출력
        // - overview 변수에 저장된 overview 정보 출력
        // -  한줄 개행 후 리뷰 작성버튼 출력, 버튼 객체의 id를 영화의 id와 같게 설정
        movieElement.innerHTML = 
        `
            <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${changeColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <br/> 
                <button class="know-more" id="${id}">리뷰 작성</button>
            </div>
        
        `
        //mian 클래스를 가진 태그에 movieElement 객체 삽입
        main.appendChild(movieElement);

        // id라는 id를 가진 태그를 찾아 이벤트 리스트 추가
        //(익명함수를 콜백함수로 사용하여 함수를 별도로 호출하지 않아도 즉시 실행되도록 함)
        document.getElementById(id).addEventListener('click', () => {

            //여기에 리뷰 작성 기능 추가 예정
        })
    })
}




// 평점 평균에 따른 색 변경 함수 changeColor(매개변수 a_vote에 평점 평균값을 받아와 저장)
function changeColor(a_vote){

    // 평점 평균이 8이상이면 'green' 리턴
    if(a_vote>= 8){
        return 'green'
    }

    // 평점 평균이 5이상 8미만이면 'orange' 리턴
    else if(a_vote >= 5){
        return "orange"
    }
    // 평점 평균이 5미만이면 'red' 리턴
    else{
        return 'red'
    }
}

// form 이라는 id를 가진 html element를 찾아 이벤트 리스너 추가(submit버튼 클릭시 이벤트 발생, 콜백함수로 이벤트 객체를 참조)
form.addEventListener('submit', (e) => {

    // 이벤트 중단(ubmit과 동시에 창이 다시 실행되면서 초기화면으로 돌아가는 것을 방지)
    e.preventDefault();

    // 변수 searchTerm : 사용자 입력값을 저장
    const searchTerm = search.value;

    // 선택된 장르 초기화
    selectedGenre = [];

    // 장르 설정 함수 호출(선택된 장르 초기화 후 다시 장르 목록을 호출하기 위함)
    setGenre();

    // searchTerm에 값이 입력되었다면 if문 실행
    if(searchTerm) {

        // 사용자로부터 입력받은 값으로 검색한 영화 호출 
        getMovies(searchURL + '&query=' + searchTerm)
    }
    
    // searchTerm에 값이 입력되지 않았다면 else문 실행
    else{

        // 기본 영화 호출 url 호출
        getMovies(API_URL);
    }
})

// prev의 div 객체(html elemnet)에 이벤트 리스너 추가(클릭시 이벤트 발생)
prev.addEventListener('click', () => {

    // 이전 페이지의 값이 0보다 크다면 if문 실행
    if(prevPage > 0){

        // pageCall 함수를 통해 이전 페이지 호출
        pageCall(prevPage);
    }
})

// next의 div 객체(html elemnet)에 이벤트 리스너 추가(클릭시 이벤트 발생)
next.addEventListener('click', () => {

    // 다음 페이지가 마지막 페이지이거나 그보다 작으면 if문 실행
    if(nextPage <= totalPages){

        // pageCall 함수를 이용해 다음페이지 호출
        pageCall(nextPage);
    }
})

// 페이지 호출 함수 pageCall 매개변수 page에 호출할 페이지의 정보를 저장함
function pageCall(page){

    // 리스트 urlSplit : 가장 마지막으로 getMovies 함수 호출시 받아온 url 주소를 분할하여 리스트 형태로 저장
    // ?를 기준으로 나누어 저장(?는 저장되지 않음)
    let urlSplit = lastUrl.split('?');

    // 리스트 queryParams : 리스트 urlSplit의 1번 인덱스에 저장된 값을 &를 기준으로 나누어 리스트 형태로 저장
    let queryParams = urlSplit[1].split('&');

    // 리스트 key : 리스트 queryParams의 뒤에서 2번째 인덱스에 저장된 값을 =을 기준으로 나누어 리스트 형태로 저장
    let key = queryParams[queryParams.length -1].split('=');

    // 리스트 key의 맨처음 인덱스의 value가 'page'가 아니면 if문 실행
    if(key[0] != 'page'){

        // 변수 url : 마지막으로 호출한 url주소 + '&page=' + 호출할 페이지 정보를 조합하여 url주소를 생성후 저장
        let url = lastUrl + '&page='+page

        // 변수 url에 저장된 호출할 페이지 주소를 실제로 호출하는 역할을 수행하는 getMovies함수 호출
        getMovies(url);
    }

    // 리스트 key의 맨처음 인덱스의 value가 'page'라면 else문 실행
    else{

        // 리스트 key의 1번 인덱스에 호출할 페이지의 정보를 문자열로 변환해 저장
        key[1] = page.toString();

        // 변수 joinurl1 : key의 모든 인덱스를 join 함수를 통해 하나의 값으로 결합하여 저장
        // (인덱스와 인덱스 사이에 = 추가하여 결합)
        let joinurl1 = key.join('=');

        // 리스트 queryParams의 뒤에서 2번째 인덱스에 변수 a에 저장된 값 대입
        queryParams[queryParams.length -1] = makeurl1;

        // 변수 joinurl2 : 리스트 queryParams의 모든 인덱스를 join함수를 통해 하나로 결합하여 저장
        // (인덱스와 인덱스 사이에 & 추가 하여 결합, 위의 분해 과정을 다시 되돌리는 과정)
        let joinurl2 = queryParams.join('&');

        // 변수 url : 리스트 urlSplit의 0번 인덱스의 value + '?' = joinurl2에 저장된 값을 조합하여 url 주소 생성후 저장
        let url = urlSplit[0] +'?'+ joinurl2

        // 변수 url에 저장된 호출할 페이지 주소를 실제로 호출하는 역할을 수행하는 getMovies함수 호출
        getMovies(url);
    }
}