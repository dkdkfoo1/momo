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
    })
})



