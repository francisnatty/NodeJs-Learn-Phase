//Course,Author

//Trade off bwtween query performance

//Using References (Normalization) -> CONSISTENCY

let author={
    name: 'Mosh',
}

let course ={
    author:'id', 
}

//Using Embedded Documents(Denormalization) -> PERFORMANCE

let coursse={
    author:{
        name: 'Mosh',
    }
}


//hybrid



