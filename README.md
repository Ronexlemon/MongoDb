## MONGODB COMMANDS

# -> find() 
returns all the fields inside the collection 

bookstore> db.books.find()
[
  {
    _id: ObjectId('65cecf334586e30177dfe8c2'),
    title: 'Name of the wind',
    author: 'lemonr',
    pages: 500,
    genres: [ 'fantasy', 'magical' ],
    rating: 0
  },
  {
    _id: ObjectId('65ced2cd2a5d7663eb058adf'),
    title: 'The loss ship',
    author: 'johny done',
    pages: 700,
    rating: 6,
    genres: [ 'fantasy', 'magical' ]
  },
  {
    _id: ObjectId('65ced3602a5d7663eb058ae0'),
    title: 'holy ghost',
    author: 'manlt john',
    pages: 760,
    rating: 5,
    genres: [ 'fantasy', 'magical' ]
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae1'),
    title: 'The rider',
    author: ' john',
    pages: 1760,
    rating: 9,
    genres: [ 'magical' ]
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae2'),
    title: 'dansel',
    author: 'kales',
    pages: 560,
    rating: 8,
    genres: [ 'fantasy' ]
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae3'),
    title: 'The Big Man',
    author: 'yule',
    pages: 540,
    rating: 7,
    genres: [ 'fantasy', 'magical' ]
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae4'),
    title: 'The great finder',
    author: 'yule',
    pages: 400,
    rating: 3,
    genres: [ 'sci-fi', 'dysopian' ]
  }
]

# -> find({field:value})

returns all the field with the value
bookstore> db.books.find({author:"yule"})
[
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae3'),
    title: 'The Big Man',
    author: 'yule',
    pages: 540,
    rating: 7,
    genres: [ 'fantasy', 'magical' ]
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae4'),
    title: 'The great finder',
    author: 'yule',
    pages: 400,
    rating: 3,
    genres: [ 'sci-fi', 'dysopian' ]
  }
]

# -> find({},{field:1,field:1 ...fieldn:1})

returns all the values with only the fileds specified

bookstore> db.books.find({},{title:1,author:1,rating:1})
[
  {
    _id: ObjectId('65cecf334586e30177dfe8c2'),
    title: 'Name of the wind',
    author: 'lemonr',
    rating: 0
  },
  {
    _id: ObjectId('65ced2cd2a5d7663eb058adf'),
    title: 'The loss ship',
    author: 'johny done',
    rating: 6
  },
  {
    _id: ObjectId('65ced3602a5d7663eb058ae0'),
    title: 'holy ghost',
    author: 'manlt john',
    rating: 5
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae1'),
    title: 'The rider',
    author: ' john',
    rating: 9
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae2'),
    title: 'dansel',
    author: 'kales',
    rating: 8
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae3'),
    title: 'The Big Man',
    author: 'yule',
    rating: 7
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae4'),
    title: 'The great finder',
    author: 'yule',
    rating: 3
  }
]


# -> find({field:value,field:value},{field:1,field:1})

returns all the fields (field:1) from the key value specified

db.books.find({author:"yule"},{rating:1,pages:1,title:1})
[
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae3'),
    title: 'The Big Man',
    pages: 540,
    rating: 7
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae4'),
    title: 'The great finder',
    pages: 400,
    rating: 3
  }
]

# -> findOne({field:value})

returns a values which matches the key value pair

bookstore> db.books.findOne({_id:ObjectId('65ced49c2a5d7663eb058ae4')})
{
  _id: ObjectId('65ced49c2a5d7663eb058ae4'),
  title: 'The great finder',
  author: 'yule',
  pages: 400,
  rating: 3,
  genres: [ 'sci-fi', 'dysopian' ]
}

# -> .count()

returns the number of objects contained in the collection

bookstore> db.books.find().count()
7
bookstore> db.books.find({author:"yule"}).count()
2


# -> .limit(number)

return only the specified number of object

bookstore> db.books.find().limit(2)
[
  {
    _id: ObjectId('65cecf334586e30177dfe8c2'),
    title: 'Name of the wind',
    author: 'lemonr',
    pages: 500,
    genres: [ 'fantasy', 'magical' ],
    rating: 0
  },
  {
    _id: ObjectId('65ced2cd2a5d7663eb058adf'),
    title: 'The loss ship',
    author: 'johny done',
    pages: 700,
    rating: 6,
    genres: [ 'fantasy', 'magical' ]
  }
]

# -> .sort({key:1/-1})

return the objects in either asc or des order based on the key

bookstore> db.books.find().sort({title:-1})
[
  {
    _id: ObjectId('65ced3602a5d7663eb058ae0'),
    title: 'holy ghost',
    author: 'manlt john',
    pages: 760,
    rating: 5,
    genres: [ 'fantasy', 'magical' ]
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae2'),
    title: 'dansel',
    author: 'kales',
    pages: 560,
    rating: 8,
    genres: [ 'fantasy' ]
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae1'),
    title: 'The rider',
    author: ' john',
    pages: 1760,
    rating: 9,
    genres: [ 'magical' ]
  },
  {
    _id: ObjectId('65ced2cd2a5d7663eb058adf'),
    title: 'The loss ship',
    author: 'johny done',
    pages: 700,
    rating: 6,
    genres: [ 'fantasy', 'magical' ]
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae4'),
    title: 'The great finder',
    author: 'yule',
    pages: 400,
    rating: 3,
    genres: [ 'sci-fi', 'dysopian' ]
  },
  {
    _id: ObjectId('65ced49c2a5d7663eb058ae3'),
    title: 'The Big Man',
    author: 'yule',
    pages: 540,
    rating: 7,
    genres: [ 'fantasy', 'magical' ]
  },
  {
    _id: ObjectId('65cecf334586e30177dfe8c2'),
    title: 'Name of the wind',
    author: 'lemonr',
    pages: 500,
    genres: [ 'fantasy', 'magical' ],
    rating: 0
  }
]

## operators

all operators are denotedusing the $ sign

# the gt (greater than) operator

# -> $gt: value

 db.books2.find({rating:{$gt:3}})

 returns allobjects with rating greater than 3

 [
  {
    _id: ObjectId('65cedfa92a5d7663eb058ae5'),
    title: 'the way of king',
    author: 'Brandon sley',
    rating: 6,
    pages: 100,
    genres: [ 'fantasy', 'magical' ],
    reviews: [
      { name: 'yoshi', body: 'great book' },
      { name: 'mand', body: 'i like the book' }
    ]
  },
  {
    _id: ObjectId('65cee1132a5d7663eb058ae7'),
    title: 'the little monkey',
    author: 'Bran',
    rating: 7,
    pages: 100,
    genres: [ 'fantasy' ],
    reviews: [
      { name: 'john', body: 'great book yeah' },
      { name: 'feng', body: 'the book its giving' }
    ]
  }
]



