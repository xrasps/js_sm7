let news = []

let inputName = document.getElementById('inputName')
let inputText = document.getElementById('inputText')
let inputDate = document.getElementById('inputDate')
let inputAuthor = document.getElementById('inputAuthor')
let btn_sub = document.getElementById('btn_sub')

let newsPlace = document.querySelector('.news')

function showArr(arr){
    arr.forEach( x=> {
        newsPlace.insertAdjacentHTML ('beforeend', `
        <div class="news_item">
                        <div class="news_head">
                            <div class="news_name">${x.title}</div>
                            <div class="news_date">${x.date}</div>
                        </div>
                        
                        <div class="news_text">${x.text}
                        </div>
                        <div class="news_footer">
                            <div class="news_author">${x.author}</div>
                            <div class="news_id">id: ${x.id} </div>
                        </div>
                    </div>
        `)
    }
        )
}

function addArray() {
    let object = {
        title: inputName.value,
        date: inputDate.value,
        text: inputText.value,
        author: inputAuthor.value,

    }

    news.push(object)
        newsPlace.innerHTML = ''
        inputName.value = ''
        inputText.value = ''
        inputDate.value = ''
        inputAuthor.value = ''
        showArr(news)
    
}
btn_sub.addEventListener('click', addArray)