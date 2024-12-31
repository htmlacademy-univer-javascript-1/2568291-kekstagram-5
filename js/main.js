
//Случайное целое число
const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Комментарии в виде текста
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Описания картин
const descriptions = [
  'Прекрасное лето',
  'Хутор На Ливках',
  'Кардебалет',
  'Оркестр при свете дня',
  'Рождество',
  'Образ великолепия',
  'Самообман',
  'Цвета в соку',
  'Оттепель',
  'Весна'
];


//Имена
const names = ['Иван', 'Анна', 'Сергей', 'Елена', 'Андрей', 'Ольга'];

const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    // Генерируем описание фотографии
    let description = descriptions[getRandomInt(0, descriptions.length - 1)];
    // Генерируем лайки
    let likes = getRandomInt(15, 200);
    // Генерируем комментарии
    let comments = [];
    const numComments = getRandomInt(0, 30); // От 0 до 30 комментариев
    for (let j = 0; j < numComments; j++) {
      // Уникальный ID комментария
      let commentId = getRandomInt(1, 9999);
      // Выбираем случайный аватар
      let avatar = `img/avatar-${getRandomInt(1, 6)}.svg`;
      // Выбираем случайное сообщение
      let message = messages[getRandomInt(0, messages.length - 1)];
      // Выбираем случайное имя
      let name = names[getRandomInt(0, names.length - 1)];
      // Добавляем комментарий в массив
      comments.push({
        id: commentId,
        avatar: avatar,
        message: message,
        name: name
      });
    }
    // Создаем объект фотографии
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: description,
      likes: likes,
      comments: comments
    });
  }
  return photos;
};

const photos = generatePhotos();
console.log(photos);
