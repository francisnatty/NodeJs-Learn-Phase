const express= require('express');
const router=express.Router();



const courses=[
    {id: 1,name: 'Course1'},
    {id: 2,name: 'Course2'},
    {id: 3,name: 'Course3'},
    {id: 4,name: 'Course4'},
]


router.get('/',(req,res)=>{
    res.send('Hello world') 
})

router.get('/',(req,res)=>{
    res.send(courses)
})
 
router.post('/api/courses',(req,res)=>{
    const {error}= validateCourse(req.body);
    if(error){
        res.status(400).send(result.error.details[0].message);
        return
     }

    const course={ 
        id: courses.length + 1,
        name: req.body.name
    };
    
    courses.push(course);
    res.send(course);

    const someValue = req.body.someValue;  // This will now work with urlencoded
    if (!someValue) {
      return res.status(400).send('someValue is required');
    }
  
    let result = someValue + ' processed';
    res.send(result);
  

});

router.put('/:id',(req,res)=>{
    const course=courses.find(c => c.id=== parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course with the given ID was not found.');
        return
    }
   
    const result= validateCourse(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return
    }

    course.name=req.body.name;
    res.send(course);
    console.log(courses);

})

function validateCourse(course){
    const schema=Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}

router.delete('/:id',(req,res)=>{
 const course=courses.find(c => c.id=== parseInt(req.params.id));
 if(!course){
     res.status(404).send('The course with the given ID was not found.');
     return
 }

 const index=courses.indexOf(course);
 courses.splice(index,1);

 res.send(course);
 //console.log(courses)


})




router.get('/api/courses/:id',(req,res)=>{
 res.send(courses);
}) 


module.exports=router;