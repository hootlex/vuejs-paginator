export const mockedResponse = {
  'nested': {
    'current_page': 1,
    'last_page': 3,
    'next_page_url': '/responses/dummy2.json',
    'prev_page_url': null,
    'data': [
      {
        'id': 1,
        'plot': 'Anakin, you\'re breaking my heart! And you\'re going down a path I cannot follow!',
        'upvotes': '490',
        'writer': 'Padme'
      },
      {
        'id': 2,
        'plot': 'One thing\'s for sure, we\'re all going to be a lot thinner.',
        'upvotes': '752',
        'writer': 'Han Solo'
      },
      {
        'id': 3,
        'plot': 'At last we will reveal ourselves to the Jedi. At last we will have revenge.',
        'upvotes': '193',
        'writer': 'Darth Maul'
      },
      {
        'id': 4,
        'plot': 'The Dark Side of the Force is the pathway to many abilities some consider to be… Unnatural.',
        'upvotes': '578',
        'writer': 'Senator Palpatine'
      },
      {
        'id': 5,
        'plot': 'You can’t win, Darth. Strike me down, and I will become more powerful than you could possibly imagine.',
        'upvotes': '256',
        'writer': 'Obi Wan Kenobi'
      }
    ]
  }
}

export const options = {
  remote_data: 'nested.data',
  remote_current_page: 'nested.current_page',
  remote_last_page: 'nested.last_page',
  remote_next_page_url: 'nested.next_page_url',
  remote_prev_page_url: 'nested.prev_page_url'
}
