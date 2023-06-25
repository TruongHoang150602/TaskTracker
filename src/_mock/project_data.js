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
    end: endTime
  };
}
export const project = [
  {
    name: 'E-Commerce Website',
    workspace: 'School',
    progress: 50,
    quality: 70,
  },
  {
    name: 'Messaging Application',
    workspace: 'School',
    progress: 70,
    quality: 80,
  },
  {
    name: 'AI Chat Application',
    workspace: 'School',
    progress: 30,
    quality: 90,
  },
];

export const projectDetail = [
  {
    name: 'E-Commerce Website',
    member: [
      {
        name: 'Hoàng Vân Trường',
        role: 'Administrator',
      },
      {
        name: 'Lê Duy Quý',
        role: 'Implementer',
      },
      {
        name: 'Tống Văn Phúc',
        role: 'Implementer',
      },
      {
        name: 'Nguyễn Trọng Quang',
        role: 'Implementer',
      },
      {
        name: 'Trần Khắc Tuân',
        role: 'Implementer',
      },
    ],
    task: [
      {
        name: 'Code refactoring',
        priority: 'Medium',
        status: 'Completed',
        detail: 'Rename the files and folders. Improve code structure and organization.',
        assignee: ['Lê Duy Quý', 'Tống Văn Phúc'],
        point: 80,
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'Clean code!!!',
          },
        ],
        ... randomTimeRange()
      },
      {
        name: 'Database design',
        priority: 'High',
        status: 'Submitted',
        detail: 'Design the database schema. Optimize data storage and retrieval.',
        assignee: ['Hoàng Vân Trường', 'Trần Khắc Tuân'],
        start: "",
        end: "",
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail: 'Great work! Looking forward to working with this design.',
          },
        ],
        ... randomTimeRange()
      },
      {
        name: 'Payment integration',
        priority: 'Low',
        status: 'New Task',
        detail: 'Integrate payment gateway for secure and seamless transactions. Handle different payment methods.',
        assignee: ['Tống Văn Phúc'],
        comment: [],
        ... randomTimeRange()
      },
      {
        name: 'Product listing page',
        priority: 'Medium',
        status: 'In Progress',
        detail:
          'Create a page to display products with proper filtering and sorting functionality. Enhance user experience.',
        assignee: ['Nguyễn Trọng Quang'],
        comment: [],
        ... randomTimeRange()
      },
      {
        name: 'User authentication',
        priority: 'Medium',
        status: 'In Progress',
        detail: 'Implement user registration and login system. Manage user roles and permissions.',
        assignee: ['Trần Khắc Tuân'],
        comment: [],
        ... randomTimeRange()
      },
      {
        name: 'Shopping cart functionality',
        priority: 'Medium',
        status: 'Completed',
        detail: 'Build a shopping cart to add and manage products. Implement cart calculations and checkout process.',
        assignee: ['Lê Duy Quý'],
        comment: [
          {
            name: 'Tống Văn Phúc',
            detail: 'The shopping cart is working perfectly!',
          },
        ],
        ... randomTimeRange()
      },
      {
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
        ... randomTimeRange()
      },
      {
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
        ... randomTimeRange()
      },
      {
        name: 'Search functionality',
        priority: 'Medium',
        status: 'Completed',
        detail: 'Implement a search feature for products. Enable efficient search with relevant results.',
        assignee: ['Nguyễn Trọng Quang'],
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
        ... randomTimeRange()
      },
      {
        name: 'Responsive design',
        priority: 'Low',
        status: 'New Task',
        detail: 'Ensure the website works well on different devices and screen sizes. Optimize for mobile and tablets.',
        assignee: ['Trần Khắc Tuân'],
        comment: [],
        ... randomTimeRange()
      },
    ],
  },
  {
    name: 'Messaging Application',
    member: [
      {
        name: 'Hoàng Vân Trường',
        role: 'Administrator',
      },
      {
        name: 'Lê Duy Quý',
        role: 'Implementer',
      },
      {
        name: 'Tống Văn Phúc',
        role: 'Implementer',
      },
      {
        name: 'Nguyễn Trọng Quang',
        role: 'Implementer',
      },
      {
        name: 'Trần Khắc Tuân',
        role: 'Implementer',
      },
    ],
    task: [
      {
        name: 'Code refactoring',
        detail: 'Improve the code structure for better readability and maintainability. Remove code duplication.',
        priority: 'Medium',
        status: 'Completed',
        assignee: ['Lê Duy Quý', 'Tống Văn Phúc'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'Clean code!!!',
          },
        ],
      },
      {
        name: 'UI Implementing',
        detail:
          'Design and implement the user interface for the messaging application. Focus on usability and aesthetics.',
        priority: 'High',
        status: 'In Progress',
        assignee: ['Lê Duy Quý', 'Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'The UI is looking great so far! I love the new design!',
          },
        ],
      },
      {
        name: 'Real-time messaging',
        detail:
          'Implement real-time messaging functionality using web sockets. Enable instant messaging between users.',
        priority: 'High',
        status: 'In progress',
        assignee: ['Tống Văn Phúc', 'Trần Khắc Tuân'],
        comment: [
          {
            name: 'Lê Duy Quý',
            detail: 'This is a critical feature, we need to get it done soon!',
          },
        ],
      },
      {
        name: 'User authentication',
        detail: 'Create a secure authentication system for users. Handle login, registration, and password recovery.',
        priority: 'Medium',
        status: 'Completed',
        assignee: ['Hoàng Vân Trường'],
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail: 'The authentication system works great! I am glad we were able to get it done so quickly.',
          },
        ],
      },
      {
        name: 'Message encryption',
        detail:
          'Implement end-to-end encryption for secure communication. Protect user messages from unauthorized access.',
        priority: 'High',
        status: 'Submitted',
        assignee: ['Lê Duy Quý', 'Tống Văn Phúc'],
        comment: [
          {
            name: 'Trần Khắc Tuân',
            detail: 'This is a complex task, but it is important to get it right! I am confident that we can do it.',
          },
        ],
      },
      {
        name: 'Notification system',
        detail:
          'Develop a system to send notifications for new messages and important updates. Ensure timely user notifications.',
        priority: 'Medium',
        status: 'Completed',
        assignee: ['Nguyễn Trọng Quang'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'The notification system is working great! I am so glad we were able to get it done.',
          },
        ],
      },
      {
        name: 'File sharing',
        detail: 'Enable users to share files with each other. Implement file upload and download functionality.',
        priority: 'Low',
        status: 'New Task',
        assignee: ['Tống Văn Phúc', 'Trần Khắc Tuân'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'This is a low priority task, but it would be nice to have it eventually.',
          },
        ],
      },
      {
        name: 'Message search',
        detail:
          'Implement a search feature to find specific messages or conversations. Enable quick and efficient search functionality.',
        priority: 'Medium',
        status: 'New Task',
        assignee: ['Trần Khắc Tuân'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'This is a medium priority task, but it would be nice to have it soon.',
          },
        ],
      },
      {
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
      },
      {
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
      },
    ],
  },
  {
    name: 'AI Chat Application',
    member: [
      {
        name: 'Hoàng Vân Trường',
        role: 'Administrator',
      },
      {
        name: 'Lê Duy Quý',
        role: 'Implementer',
      },
      {
        name: 'Tống Văn Phúc',
        role: 'Implementer',
      },
      {
        name: 'Nguyễn Trọng Quang',
        role: 'Implementer',
      },
      {
        name: 'Trần Khắc Tuân',
        role: 'Implementer',
      },
    ],
    task: [
      {
        name: 'Code refactoring',
        detail: 'Improve code readability and maintainability. Optimize algorithms and data structures.',
        priority: 'Medium',
        status: 'Completed',
        assignee: ['Lê Duy Quý', 'Tống Văn Phúc'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail: 'Clean code!!!',
          },
        ],
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        name: 'Contextual understanding',
        detail:
          'Build a system to understand and maintain contextual information during conversations. Enable meaningful and coherent responses.',
        priority: 'Low',
        status: 'Completed',
        assignee: ['Trần Khắc Tuân'],
        comment: [
          {
            name: 'Hoàng Vân Trường',
            detail:
              "Great work on the contextual understanding system. It's really impressive how well it can keep track of the conversation context.",
          },
        ],
      },
      {
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
      },
      {
        name: 'Integration with external APIs',
        detail:
          'Integrate with external services and APIs to provide additional functionality. Connect to weather, news, or other relevant APIs.',
        priority: 'Medium',
        status: 'Submitted',
        assignee: ['Lê Duy Quý', 'Trần Khắc Tuân'],
        comment: [],
      },
      {
        name: 'User profiling',
        detail:
          'Develop a system to profile users based on their interactions. Personalize responses and recommendations.',
        priority: 'Low',
        status: 'New Task',
        assignee: ['Nguyễn Trọng Quang'],
        comment: [],
      },
      {
        name: 'Conversation analytics',
        detail:
          'Implement analytics to track and analyze user conversations. Gather insights for chatbot improvement and user behavior understanding.',
        priority: 'Medium',
        status: 'In Progress',
        assignee: ['Tống Văn Phúc', 'Trần Khắc Tuân'],
        comment: [],
      },
      {
        name: 'Continuous learning',
        detail:
          'Enable the chatbot to learn from user interactions and improve over time. Implement feedback loops and model retraining.',
        priority: 'High',
        status: 'Completed',
        assignee: ['Lê Duy Quý', 'Hoàng Vân Trường'],
        comment: [
          {
            name: 'Nguyễn Trọng Quang',
            detail:
              'The chatbot is now learning from user interactions and improving over time. This is a great feature!',
          },
        ],
      },
    ],
  },
];
