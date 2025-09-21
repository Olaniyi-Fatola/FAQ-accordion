const openAnswer = document.querySelectorAll('.plus');
const closeAnswer = document.querySelectorAll('.minus');
const answer = document.querySelectorAll('dd');


openAnswer.forEach((open, i) => {

    closeAnswer.forEach((close, j) => {

        answer.forEach((content, index) => {

            open.addEventListener('click', (e) => {

            while (i===j){
                while(j===index){
                    if(open.style.display != 'none'){
                    content.style.display = "block"
                    close.style.display = "block";
                    open.style.display = "none";

                    console.log(i,j,index);
                } 
                break;
                }
                break;
                }
            })

            close.addEventListener('click', (a) => {
                    
                while (i===j){
                while(j===index){
                    if(close.style.display != 'none'){
                    content.style.display = "none"
                    open.style.display = "block";
                    close.style.display = "none";

                    console.log(i,j,index);
                } 
                break;
                }
                break;
                }
                
            })

        })

});
})
