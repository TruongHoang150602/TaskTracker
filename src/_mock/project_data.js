function randomTimeRange() {
  const currentDate = new Date(); // Lấy ngày hiện tại

  // Sinh ngẫu nhiên một số từ 0 đến 6 để đại diện cho các ngày trong tuần (0: Chủ nhật, 1: Thứ 2, 2: Thứ 3, ...)
  const randomDayOfWeek = Math.floor(Math.random() * 7);

  // Tính toán ngày bắt đầu và kết thúc dựa trên ngày hiện tại và randomDayOfWeek
  const startDay = currentDate.getDate() + randomDayOfWeek;
  const endDay = startDay;

  // Lấy thời gian bắt đầu trong ngày
  const startHour = Math.floor(Math.random() * 24); // Giờ bắt đầu (0-23)
  const startMinute = Math.floor(Math.random() * 60); // Phút bắt đầu (0-59)
  const startTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), startDay, startHour, startMinute);

  // Lấy thời gian kết thúc trong ngày
  const endHour = startHour + Math.floor(Math.random() * (24 - startHour)); // Giờ kết thúc lớn hơn hoặc bằng giờ bắt đầu
  const endMinute = Math.floor(Math.random() * 60); // Phút kết thúc (0-59)
  const endTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), endDay, endHour, endMinute);

  return {
    start: startTime,
    end: endTime,
  };
}

export const project = [
  {
    name: 'E-Commerce Website',
    workspace: 'School',
    progress: 50,
    quality: 70,
    role: 'Admin',
  },
  {
    name: 'Messaging Application',
    workspace: 'Home',
    progress: 70,
    quality: 80,
    role: 'Implementer',
  },
  {
    name: 'AI Chat Application',
    workspace: 'Company',
    progress: 30,
    quality: 90,
    role: 'Assignee',
  },
  {
    name: 'To-do List Application',
    workspace: 'Home',
    progress: 90,
    quality: 80,
    role: 'Approver',
  },
  {
    name: 'Sport Tracking Software',
    workspace: 'Company',
    progress: 60,
    quality: 85,
    role: 'Supporter',
  },
];

export const projectDetail = [
  {
    name: 'E-Commerce Website',
    description: `An e-commerce platform is an online 
    marketplace where sellers and buyers can trade products and services.
    It offers convenience, a wide range of options, and
    secure transactions.`,
    member: [
      {
        id: 1,
        email: 'truong.hv205034@sis.hust.edu.vn',
        name: 'Hoàng Vân Trường',
        role: 'Administrator',
      },
      {
        id: 2,
        name: 'Lê Duy Quý',
        email: 'quy.ld205018@sis.hust.edu.vn',
        role: 'Supporter',
      },
      {
        id: 3,
        name: 'Tống Văn Phúc',
        email: 'phuc.tv200409@sis.hust.edu.vn',
        role: 'Approver',
      },
      {
        id: 4,
        name: 'Nguyễn Trọng Quang',
        email: 'quang.nt205118@sis.hust.edu.vn',
        role: 'Implementer',
      },
      {
        id: 5,
        name: 'Trần Khắc Tuân',
        email: 'tuan.tk200440@sis.hust.edu.vn',
        role: 'Implementer',
      },
    ],
    task: [
      {
        id: 1,
        name: 'Code refactoring',
        priority: 'Medium',
        status: 'Completed',
        detail: 'Rename the files and folders. Improve code structure and organization.',
        assignee: ['Lê Duy Quý', 'Tống Văn Phúc'],
        point: '80',
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'Clean code!!!',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 2,
        name: 'Database design',
        priority: 'High',
        status: 'Submitted',
        detail: 'Design the database schema. Optimize data storage and retrieval.',
        assignee: ['Hoàng Vân Trường', 'Trần Khắc Tuân'],
        start: '',
        end: '',
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail: 'Great work! Looking forward to working with this design.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 3,
        name: 'Payment integration',
        priority: 'Low',
        status: 'New Task',
        detail: 'Integrate payment gateway for secure and seamless transactions. Handle different payment methods.',
        assignee: ['Tống Văn Phúc'],
        comment: [],
        ...randomTimeRange(),
      },
      {
        id: 4,
        name: 'Product listing page',
        priority: 'Medium',
        status: 'In Progress',
        detail:
          'Create a page to display products with proper filtering and sorting functionality. Enhance user experience.',
        assignee: ['Nguyễn Trọng Quang'],
        comment: [],
        ...randomTimeRange(),
      },
      {
        id: 5,
        name: 'User authentication',
        priority: 'Medium',
        status: 'In Progress',
        detail: 'Implement user registration and login system. Manage user roles and permissions.',
        assignee: ['Trần Khắc Tuân'],
        comment: [],
        ...randomTimeRange(),
      },
      {
        id: 6,
        name: 'Shopping cart functionality',
        priority: 'Medium',
        status: 'Completed',
        detail: 'Build a shopping cart to add and manage products. Implement cart calculations and checkout process.',
        assignee: ['Lê Duy Quý'],
        point: '80',
        comment: [
          {
            name: 'Tống Văn Phúc',
            detail: 'The shopping cart is working perfectly!',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 7,
        name: 'Order management system',
        priority: 'High',
        status: 'Submitted',
        detail: 'Develop a system to manage and track customer orders. Handle order processing and status updates.',
        assignee: ['Hoàng Vân Trường', 'Trần Khắc Tuân'],
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail: 'I think there is something wrong, check my note in the code',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 8,
        name: 'Inventory management',
        priority: 'Low',
        status: 'New Task',
        detail: 'Create a system to track and manage product inventory. Handle stock updates and notifications.',
        assignee: ['Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'If you need help, contact me',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 9,
        name: 'Search functionality',
        priority: 'Medium',
        status: 'Completed',
        detail: 'Implement a search feature for products. Enable efficient search with relevant results.',
        assignee: ['Nguyễn Trọng Quang'],
        point: '90',
        comment: [
          {
            name: 'Lê Duy Quý',
            detail: 'The search functionality works great!',
          },
          {
            name: 'Tống Văn Phúc',
            detail: 'Nice job on the search implementation.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 10,
        name: 'Responsive design',
        priority: 'Low',
        status: 'New Task',
        detail: 'Ensure the website works well on different devices and screen sizes. Optimize for mobile and tablets.',
        assignee: ['Trần Khắc Tuân'],
        comment: [],
        ...randomTimeRange(),
      },
    ],
  },
  {
    name: 'Messaging Application',
    description: 'The Messaging Application is a software project designed to provide an online platform for users to chat and send messages to each other. It allows users to send and receive text messages, interact with each other, and create personal or group conversations.',
    member: [
      {
        id: 1,
        name: 'Hoàng Vân Trường',
        email: 'truong.hv205034@sis.hust.edu.vn',
        role: 'Implementer',
      },
      {
        id: 2,
        name: 'Lê Duy Quý',
        email: 'quy.ld205018@sis.hust.edu.vn',
        role: 'Administrator',
      },
      {
        id: 3,
        name: 'Tống Văn Phúc',
        email: 'phuc.tv200409@sis.hust.edu.vn',
        role: 'Approver',
      },
      {
        id: 4,
        name: 'Nguyễn Trọng Quang',
        email: 'quang.nt205118@sis.hust.edu.vn',
        role: 'Implementer',
      },
      {
        id: 5,
        name: 'Trần Khắc Tuân',
        email: 'tuan.tk200440@sis.hust.edu.vn',
        role: 'Supporter',
      },
    ],
    task: [
      {
        id: 1,
        name: 'User authentication',
        detail: 'Create a secure authentication system for users. Handle login, registration, and password recovery.',
        priority: 'Medium',
        status: 'Completed',
        assignee: ['Hoàng Vân Trường'],
        point: '90',
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail: 'The authentication system works great! I am glad we were able to get it done so quickly.',
          },
        ],
      },
      {
        id: 2,
        name: 'Message archiving',
        detail:
          'Develop a system to archive and store messages. Allow users to access and retrieve past conversations.',
        priority: 'Low',
        status: 'In Progress',
        assignee: ['Hoàng Vân Trường'],
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail: 'I can help you with this task if you need.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 3,
        name: 'Deployment',
        detail: 'Deploy the messaging application to production. Ensure that the application is available to users.',
        priority: 'High',
        status: 'In Progress',
        assignee: ['Lê Duy Quý', 'Hoàng Vân Trường'],
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail: 'This is a critical task, we need to get it done as soon as possible!',
          },
        ],
        ...randomTimeRange(),
      },
    ],
  },
  {
    name: 'AI Chat Application',
    description: 'The AI Chat Application project is an innovative software application that leverages artificial intelligence (AI) technologies to provide a conversational interface for users. This application aims to facilitate seamless communication between users and the computer system by enabling natural language conversations.',
    member: [
      {
        id: 1,
        name: 'Hoàng Vân Trường',
        email: 'truong.hv205034@sis.hust.edu.vn',
        role: 'Assignee',
      },
      {
        id: 2,
        name: 'Lê Duy Quý',
        email: 'quy.ld205018@sis.hust.edu.vn',
        role: 'Implementer',
      },
      {
        id: 3,
        name: 'Tống Văn Phúc',
        email: 'phuc.tv200409@sis.hust.edu.vn',
        role: 'Implementer',
      },
      {
        id: 4,
        name: 'Nguyễn Trọng Quang',
        email: 'quang.nt205118@sis.hust.edu.vn',
        role: 'Implementer',
      },
      {
        id: 5,
        name: 'Trần Khắc Tuân',
        email: 'tuan.tk200440@sis.hust.edu.vn',
        role: 'Administrator',
      },
    ],
    task: [
      {
        id: 1,
        name: 'Code refactoring',
        detail: 'Improve code readability and maintainability. Optimize algorithms and data structures.',
        priority: 'Medium',
        status: 'Completed',
        assignee: ['Lê Duy Quý', 'Tống Văn Phúc'],
        point: '80',
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'Clean code!!!',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 2,
        name: 'Resource collecting',
        detail:
          'Collect and curate relevant data resources for training the AI chatbot. Ensure data quality and accuracy.',
        priority: 'High',
        status: 'In Progress',
        assignee: ['Lê Duy Quý', 'Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'Good progress so far.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 3,
        name: 'Natural language processing',
        detail:
          'Implement NLP algorithms to understand and process user input. Enable intelligent conversation handling.',
        priority: 'High',
        status: 'New Task',
        assignee: ['Tống Văn Phúc', 'Trần Khắc Tuân'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: "Let's start working on this task.",
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 4,
        name: 'Intent recognition',
        detail:
          'Develop algorithms to recognize user intents and map them to appropriate responses. Improve accuracy and response relevance.',
        priority: 'Medium',
        status: 'Submitted',
        assignee: ['Lê Duy Quý', 'Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail:
              'Good work on the intent recognition algorithm. A few more tweaks and it should be ready for release.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 5,
        name: 'Contextual understanding',
        detail:
          'Build a system to understand and maintain contextual information during conversations. Enable meaningful and coherent responses.',
        priority: 'Low',
        status: 'Completed',
        assignee: ['Trần Khắc Tuân'],
        point: '75',
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail:
              "Great work on the contextual understanding system. It's really impressive how well it can keep track of the conversation context.",
          },
        ],
      },
      {
        id: 6,
        name: 'Multi-language support',
        detail:
          'Enable the chatbot to handle conversations in multiple languages. Implement language detection and translation capabilities.',
        priority: 'High',
        status: 'In Progress',
        assignee: ['Tống Văn Phúc', 'Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: "This is a critical feature for our chatbot. We need to make sure it's done right.",
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 7,
        name: 'Integration with external APIs',
        detail:
          'Integrate with external services and APIs to provide additional functionality. Connect to weather, news, or other relevant APIs.',
        priority: 'Medium',
        status: 'Submitted',
        assignee: ['Lê Duy Quý', 'Trần Khắc Tuân'],
        comment: [],
        ...randomTimeRange(),
      },
      {
        id: 8,
        name: 'User profiling',
        detail:
          'Develop a system to profile users based on their interactions. Personalize responses and recommendations.',
        priority: 'Low',
        status: 'New Task',
        assignee: ['Nguyễn Trọng Quang'],
        comment: [],
        ...randomTimeRange(),
      },
      {
        id: 9,
        name: 'Conversation analytics',
        detail:
          'Implement analytics to track and analyze user conversations. Gather insights for chatbot improvement and user behavior understanding.',
        priority: 'Medium',
        status: 'In Progress',
        assignee: ['Tống Văn Phúc', 'Trần Khắc Tuân'],
        comment: [],
        ...randomTimeRange(),
      },
      {
        id: 10,
        name: 'Continuous learning',
        detail:
          'Enable the chatbot to learn from user interactions and improve over time. Implement feedback loops and model retraining.',
        priority: 'High',
        status: 'Completed',
        assignee: ['Lê Duy Quý', 'Hoàng Vân Trường'],
        point: '70',
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail:
              'The chatbot is now learning from user interactions and improving over time. This is a great feature!',
          },
        ],
        ...randomTimeRange(),
      },
    ],
  },
  {
    name: 'To-do List Application',
    description: 'The To-do List Application is a project aimed at helping users effectively manage and organize their tasks and activities. The application provides a user-friendly interface where users can create, update, and track their to-do items.',
    member: [
      {
        id: 1,
        name: 'Hoàng Vân Trường',
        email: 'truong.hv205034@sis.hust.edu.vn',
        role: 'Approver',
      },
      {
        id: 2,
        name: 'Lê Duy Quý',
        email: 'quy.ld205018@sis.hust.edu.vn',
        role: 'Implementer',
      },
      {
        id: 3,
        name: 'Tống Văn Phúc',
        email: 'phuc.tv200409@sis.hust.edu.vn',
        role: 'Administrator',
      },
      {
        id: 4,
        name: 'Nguyễn Trọng Quang',
        email: 'quang.nt205118@sis.hust.edu.vn',
        role: 'Implementer',
      },
      {
        id: 5,
        name: 'Trần Khắc Tuân',
        email: 'tuan.tk200440@sis.hust.edu.vn',
        role: 'Implementer',
      },
    ],
    task: [
      {
        id: 1,
        name: 'Create user interface',
        detail: 'Design and develop the user interface for the to-do list application.',
        priority: 'Medium',
        status: 'New Task',
        assignee: ['Hoàng Vân Trường'],
        comment: [
          {
            name: 'Lê Duy Quý',
            detail: "I have some ideas for the user interface. Let's discuss them.",
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 2,
        name: 'Implement data storage',
        detail: 'Choose a data storage solution and implement it in the to-do list application.',
        priority: 'High',
        status: 'In Progress',
        assignee: ['Tống Văn Phúc'],
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail: 'I think we should use a cloud-based data storage solution.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 3,
        name: 'Add features',
        detail:
          'Add features to the to-do list application, such as the ability to add notes, set reminders, and prioritize tasks.',
        priority: 'Medium',
        status: 'Submitted',
        assignee: ['Trần Khắc Tuân'],
        point: '80',
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'The features you added are great! The to-do list application is now more powerful and useful.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 4,
        name: 'Test and debug',
        detail: 'Test and debug the to-do list application to ensure that it is working properly.',
        priority: 'High',
        status: 'In Progress',
        assignee: ['Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Lê Duy Quý',
            detail: "I found a bug in the task prioritization feature. I'm working on a fix.",
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 5,
        name: 'Release to production',
        detail: 'Release the to-do list application to production so that users can start using it.',
        priority: 'High',
        status: 'New Task',
        assignee: ['Hoàng Vân Trường'],
        comment: [],
        ...randomTimeRange(),
      },
      {
        id: 6,
        name: 'Create a mobile app',
        detail: 'Develop a mobile app version of the to-do list application.',
        priority: 'Medium',
        status: 'New Task',
        assignee: ['Hoàng Vân Trường', 'Lê Duy Quý'],
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail: 'I think a mobile app would be a great way to reach more users.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 7,
        name: 'Integrate with calendar',
        detail:
          "Integrate the to-do list application with the user's calendar to allow users to easily add tasks to their calendar and see their tasks on their calendar.",
        priority: 'Low',
        status: 'Completed',
        assignee: ['Trần Khắc Tuân'],
        point: '100',
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail:
              'This integration is really helpful! I can easily see my tasks on my calendar and add them to my calendar.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 8,
        name: 'Add social features',
        detail:
          'Add social features to the to-do list application, such as the ability to share tasks with others, collaborate on tasks, and see what tasks your friends are working on.',
        priority: 'High',
        status: 'In Progress',
        assignee: ['Lê Duy Quý', 'Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail:
              'I think social features would be a great way to make the to-do list application more engaging and collaborative.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 9,
        name: 'Add analytics',
        detail:
          'Add analytics to the to-do list application to track how users are using the application and to identify areas where the application can be improved.',
        priority: 'Medium',
        status: 'Submitted',
        assignee: ['Tống Văn Phúc'],
        comment: [],
        ...randomTimeRange(),
      },
      {
        id: 10,
        name: 'Add security features',
        detail:
          'Add security features to the to-do list application to protect user data, such as password protection, two-factor authentication, and data encryption.',
        priority: 'High',
        status: 'Submitted',
        assignee: ['Hoàng Vân Trường'],
        comment: [],
        ...randomTimeRange(),
      },
    ],
  },
  {
    name: 'Sport Tracking Software',
    description: 'The Sport Tracking Software is a comprehensive application designed to track and monitor various sporting activities. With this software, users can effortlessly record and analyze their performance data, providing valuable insights for athletes, coaches, and fitness enthusiasts.',
    member: [
      {
        id: 1,
        name: 'Hoàng Vân Trường',
        email: 'truong.hv205034@sis.hust.edu.vn',
        role: 'Supporter',
      },
      {
        id: 2,
        name: 'Lê Duy Quý',
        email: 'quy.ld205018@sis.hust.edu.vn',
        role: 'Supporter',
      },
      {
        id: 3,
        name: 'Tống Văn Phúc',
        email: 'phuc.tv200409@sis.hust.edu.vn',
        role: 'Implementer',
      },
      {
        id: 4,
        name: 'Nguyễn Trọng Quang',
        email: 'quang.nt205118@sis.hust.edu.vn',
        role: 'Implementer',
      },
      {
        id: 5,
        name: 'Trần Khắc Tuân',
        email: 'tuan.tk200440@sis.hust.edu.vn',
        role: 'Administrator',
      },
    ],
    task: [
      {
        id: 1,
        name: 'Add support for tracking multiple sports',
        detail:
          'Currently, the software only supports tracking one sport. This task will add support for tracking multiple sports, such as running, cycling, swimming, and hiking.',
        priority: 'Medium',
        status: 'New Task',
        assignee: ['Lê Duy Quý', 'Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail:
              'This is a great idea! It would be really helpful to be able to track multiple sports with the same software.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 2,
        name: 'Improve the accuracy of the calorie burn estimates',
        detail:
          'The current calorie burn estimates are not very accurate. This task will improve the accuracy of the estimates by using more data and a more sophisticated algorithm.',
        priority: 'High',
        status: 'In Progress',
        assignee: ['Trần Khắc Tuân'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail:
              'This is a critical task. We need to make sure that the calorie burn estimates are as accurate as possible.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 3,
        name: 'Add a social media integration feature',
        detail:
          'This feature will allow users to share their workouts and fitness data with their friends and followers on social media.',
        priority: 'Low',
        status: 'Completed',
        assignee: ['Lê Duy Quý'],
        point: '90',
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'This is a great feature! It will help to motivate users and keep them engaged with the software.',
          },
        ],
      },
      {
        id: 4,
        name: 'Add a weather forecast feature',
        detail:
          'This feature will allow users to see the weather forecast for their current location before they start a workout.',
        priority: 'Medium',
        status: 'Submitted',
        assignee: ['Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'This is a useful feature. It will help users to plan their workouts accordingly.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 5,
        name: 'Add a sleep tracking feature',
        detail: 'This feature will allow users to track their sleep patterns and quality.',
        priority: 'High',
        status: 'New Task',
        assignee: ['Tống Văn Phúc'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'This is a great feature! It will help users to improve their sleep habits.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 6,
        name: 'Add a goal setting feature',
        detail:
          'This feature will allow users to set goals for themselves, such as running a marathon or losing weight.',
        priority: 'Medium',
        status: 'Completed',
        assignee: ['Lê Duy Quý', 'Tống Văn Phúc'],
        point: '80',
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail:
              'This is a great feature! It will help users to stay motivated and on track with their fitness goals.',
          },
        ],
      },
      {
        id: 7,
        name: 'Add a leaderboard feature',
        detail: 'This feature will allow users to compete with each other for the top spot on the leaderboard.',
        priority: 'Low',
        status: 'Submitted',
        assignee: ['Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'This is a fun feature. It will help to motivate users and keep them engaged with the software.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 8,
        name: 'Add a training plan feature',
        detail: 'This feature will allow users to create and follow a training plan for a specific sport or goal.',
        priority: 'Medium',
        status: 'New Task',
        assignee: ['Lê Duy Quý', 'Tống Văn Phúc'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'This is a great feature! It will help users to stay on track with their fitness goals.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 9,
        name: 'Add a community forum feature',
        detail: 'This feature will allow users to connect with other users and share tips, advice, and stories.',
        priority: 'Low',
        status: 'Completed',
        assignee: ['Nguyễn Trọng Quang'],
        point: '90',
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail:
              'This is a great feature! It will help users to stay motivated and connected with the sport tracking community.',
          },
        ],
        ...randomTimeRange(),
      },
      {
        id: 10,
        name: 'Add a personalized analytics feature',
        detail:
          'This feature will allow users to see personalized analytics about their workouts, such as their progress over time, their strengths and weaknesses, and their areas for improvement.',
        priority: 'High',
        status: 'In Progress',
        assignee: ['Trần Khắc Tuân'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail:
              'This is a critical feature. It will help users to understand their fitness data and make informed decisions about their workouts.',
          },
        ],
        ...randomTimeRange(),
      },
    ],
  },
];
