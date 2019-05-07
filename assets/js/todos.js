// Check Off specific todos by clicking

function checked(){
    $('ul').on('click', 'li', function(){
        $(this).toggleClass('checked');
    })
};

// Delete specific todos by clicking

function deleted(){
    $('ul').on('click', 'span', function(e){
        //makes whole list item fade out
        $(this).parent().fadeOut(400, function(){
            //targets whole list item
            $(this).closest('li').remove();
        });
        //stops click even from bubbling up
        e.stopPropagation();
    })
};

// Add new Todos by pressing enter

function addToDo(){
    $('input[type="text"]').keypress(function(e){
        //sets todo value as input field
        const todo = $(this).val();
        //Checks to make sure enter key is pressed and input is not empty
        if(event.which === 13 && todo !== '') {
            //adds new list item to end of ul
            $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${todo}</li>`);
            //resets input field
            $(this).val('');
        }
        
    })
};

function toggleInput(){
    $("h1 .fa-plus").on('click', function(){
        $('input[type="text"]').fadeToggle();
    })
}


// Invoking Functions
toggleInput();
addToDo();
checked();
deleted();
