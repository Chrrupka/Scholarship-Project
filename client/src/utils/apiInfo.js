const apiInfo = {
  baseUrl: 'http://localhost:4200/api',
  userEndpoint: {
    auth: '/user/auth',
    create: '/user/create',
    all: '/user/all',
    remove: '/user/remove/{id}', // zamienić {id} na id z kodu
    logout: '/user/logout/{id}', // zamienić {id} na id z kodu
    activate: '/user/activate/{hash}', // zamienić {hash} na hash z kodu
    generateFile: '/user/{id}/generate/file', // zamienić {id} na id z kodu
    emailAvailability: '/user/email/{email}' // zamienić {email} na email z kodu
  },
  detailsEndpoint: {
    allAndCreate: '/details',
    byIdAndUpdateAndDelete: '/details/{id}'
  },
  attachmentEndpoint: {
    create: '/attachment',
    getOrRemove: '/attachment/{id}',

  },
  applicationEndpoints: {
    all: '/applications',
    getByIdAndRemoveAndUpdate: '/application/{id}',
    create: '/application'
  },
  studentEndpoint: {
    all: '/students',
    create: '/student',
    getByIdAndRemoveAndUpdate: '/student/{id}'
  }
};

export default apiInfo;
