const btn = document.querySelectorAll('.tab a')
const contents = document.querySelectorAll('.all .tab_contents')

const images = document.querySelectorAll('.all .tab_contents a')
const text = document.querySelectorAll('.all .tab_contents p')
console.log(btn, contents)
console.log(images, text)

for(let i of contents){i.style.display = 'none'}
contents[0].style.display = 'grid'

for(let j of text)(j.style.opacity = '0')

btn.forEach((target,index)=>{
    target.addEventListener('mouseover',(e)=>{
        for(let i of contents){
            i.style.display = 'none'
        }
        contents[index].style.display = 'grid'
    })
})



images.forEach((target,index)=>{
    target.addEventListener('mouseover',(e)=>{
        for(let j of text){
            j.style.opacity = '0'
        }
        text[index].style.opacity = '1'
        text[index].style.transition = 'opacity 0.5s'
    })
    target.addEventListener('mouseout',(e)=>{
        for(let j of text)(j.style.opacity = '0')
    })
})

//탭 제목 마우스 올리는 이벤트 생성
//마우스 올린 대상에 active 클래스 적용
//그 외 나머지 초기화 active 클래스 제거
//객체.classList.add(적용클래스명) O

for(let i of btn){
    i.addEventListener('mouseover',()=>{
        for(let j of btn){j.classList.remove('active')}
        i.classList.add('active')
    })
}

