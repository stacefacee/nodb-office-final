let officeQuotes = [
  {
    id: 1,
    content: "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.",
    character: 'Dwight Schrute',
    image: 'https://cdn.pastemagazine.com/www/articles/2020/05/20/the-office-dwight-schrute-main.jpg'
  },
  {  
    id: 2,
    content: "I never really thought about death until Princess Diana died. that was the saddest funeral ever -- that, and my sister's.",
    character: 'Kelly Kapoor',
    image: 'https://deecrowseer.files.wordpress.com/2018/11/office-s1-mk02.jpg'
  
  },
  { 
    id: 3,
    content: "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.",
    character: 'Michael Scott',
    image: 'https://miro.medium.com/max/1396/1*njwXqsShWvK81ANQCMBevw.jpeg'
  },
  {
    id: 4,
    content: "Sure I gave everyone pink eye once, and my ex keyed a few of their cars, and yeah I BM'd in the shredder on New Year's. But I didn't bring the lice in. that was all Pam.",
    character: 'Meredith Palmer',
    image: 'https://img1.looper.com/img/gallery/whatever-happened-to-meredith-from-the-office/intro-1526005235.jpg'
  },

  {
    id: 5,
    content: "Sometimes the clothes at Gap Kids are too flashy, so I'm forced to go to the American Girl store and order clothes for large Colonial dolls.",
    character: 'Angela Martin',
    image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-the-office-angela-kinsey.jpg'
  },

  {
    id: 6,
    content: "I wanna do a cartwheel. But real casual-like. Not enough to make a big deal out of it, but I know everyone saw it. One stunning, gorgeous cartwheel.",
    character: 'Creed Bratton',
    image: 'https://static2.cbrimages.com/wordpress/wp-content/uploads/2021/01/The-Office-Creed-Header.jpg'
  },

  {
    id: 7,
    content: "The only problem is whenever I try to make a taco, I get too excited and crush it.",
    character: 'Kevin Malone',
    image:'https://upload.wikimedia.org/wikipedia/en/6/60/Office-1200-baumgartner1.jpg'
  },
  {
    id: 8,
    content: "I would rather work for a upturned broom with a bucket for a head than work for somebody else in this office besides myself.",
    character: 'Stanley Hudson',
    image: 'https://i.insider.com/5f36932ee89ebf001f044868?width=1200&format=jpeg'
  },
  {
    id: 9,
    content: "I have six roomates, which are better than friends because they have to give you one month's notice before they leave.",
    character: 'Toby Flenderson',
    image: 'https://i.imgur.com/3yYCreo.jpg'
  }



]

let favoriteQuotes = []
let id = 9


module.exports = {
  getQuote: (req, res) => {
    res.status(200).send(officeQuotes)
  },

  addQuote: (req, res) => {
    const {content, character, image} = req.body;
    const newQuote = {
      id: id,
      content: content,
      character: character,
      image: image,
    };
    id++;
    officeQuotes.push(newQuote);
    res.status(200).send(officeQuotes);
  },
  
  deleteQuote: (req, res) => {
    const {id} = req.params;
    const index = officeQuotes.findIndex((e) => {
      return e.id === +id;
    })
    console.log(index)
    if(index === -1){
      return res.status(500).send('please delete valid item')
    }
    officeQuotes.splice(index,1)
    res.status(200).send(officeQuotes)

  },

  editQuote: (req, res) => {
    const {id} = req.params;
    const {content} = req.body;
    const index = officeQuotes.findIndex((e) => {
      return e.id === +id
    });
    officeQuotes[index].content = content
    res.status(200).send(officeQuotes)

  }

}