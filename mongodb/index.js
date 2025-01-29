const mongoose = require('mongoose');

// mongoose.connect('mongodb://0.0.0.0:27017/mydatabase')


//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('Connection error:', err));


mongoose.connect('mongodb+srv://Natty:Natty247**@cluster0.wnpx8.mongodb.net/playground')
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err => console.log('Could not connect to MongoDB.....', err))

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 5, maxLength: 255, },
    author: String,
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        trim: true
    },
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, callback) {

                setTimeout(() => {
                    //Do some async work
                    const result = v && v.length > 0;
                    callback(result);

                }, 4000)




            },
            message: 'A course should have atleast one tag.'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v=> Math.round(v),

    }
})

const Course = mongoose.model('Courses', courseSchema);

async function createCourse() {
    const course = new Course({
        // name: 'Node.js Course',
        author: 'Mosh',
        category: 'web',
        tags: ['angular', 'frontend'],
        isPublished: true,
    });

    try {
        const result = await course.save();
        console.log(result);

        // await  course.validate();

    } catch (err) {
        for(field in err.errors)

        console.log(err.errors[field].message);

    }


}

createCourse();



async function getCourses() {
    //comparison operator
    //eq(equal),
    //gt(greater than)
    //gte (greater than or equal to)
    // lt (less than)
    //lte( less than or equal to)
    //in
    //nin(not in )

    //Logical operator //or //and



    const courses = await Course


        // .find({price: {$gt: 10, } })
        //starts with Mosh

        // .find({author: /^Mosh/ })

        // //Ends with Hamedani

        // //adding i at the back makes it not case sensitive

        // .find({author: /Hamedani$/i })

        // //contains Mosh

        // .find({author: /.*Mosh.*/ })
        .find({ author: 'Mosh', isPublished: true })
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });

    console.log(courses);

}
async function updateCourse(id) {
    // Approach: Update first
    const course = await Course.findByIdAndUpdate({ _id: id }, {
        $set: {
            author: 'Natty',
            isPublished: false
        }
    }, { new: true })
    // const course = await Course.findByIdAndUpdate(id, {
    //   isPublished: true,
    //   author: 'Another Author'
    // });

    if (!course) return;

    console.log('Course updated successfully:', course);
}

// updateCourse('677ebc441e998a1656f07173');
