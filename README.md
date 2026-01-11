# React Native Intern – Combined Assessment

A simple React Native application that fetches posts from an API, provides instant search functionality, and saves user search history using AsyncStorage.

---

## Features

###  Mandatory Features
- Fetch posts from API  
  `https://jsonplaceholder.typicode.com/posts`
- Display posts using `FlatList`
- Show **title** and **body** for each post
- Clean and readable UI

### Search Functionality
- Search input at the top
- Filter posts by **title**
- Case-insensitive search
- Instant filtering as user types

### Search Persistence (AsyncStorage)
- Save search text automatically
- Restore saved search on app restart
- Auto-apply filter after restart

###  Error Handling
- API / Network failure message  
  **"Unable to fetch posts. Check your network connection."**
- Empty search result message  
  **"No posts found."**

---

##  Bonus Features Implemented
- Loading indicator while fetching data
- Pull-to-refresh functionality
- Reusable `PostCard` component
- Clean folder structure
- Custom hook for data fetching

---

## Folder Structure

```

src/
├── components/
│   └── PostCard.js
├── hooks/
│   └── usePosts.js
├── screens/
│   └── HomeScreen.js
├── services/
│   └── api.js
├── utils/
│   └── storage.js
│
App.js

````

---

## 🛠 Tech Stack

- React Native (JavaScript)
- AsyncStorage
- FlatList
- Custom Hooks
- Fetch API

---

## Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/react-native-task-assessment.git
````

2. Navigate to project directory

```bash
cd react-native-task-assessment
```

3. Install dependencies

```bash
npm install
```

4. Install AsyncStorage

```bash
npm install @react-native-async-storage/async-storage
```

5. Run the app

```bash
npx react-native run-android
# or
npx react-native run-ios
```

---

## Notes

* **React Native Version:** 0.73.x
* **Additional Libraries Used:**

  * `@react-native-async-storage/async-storage`
* **State Management:** React Hooks
* **Styling:** StyleSheet (CSS-like)

---

## 👨‍💻 Author

**Ankit Kumar**
Aspiring React Native & Full Stack Developer

---


**Thank you for reviewing this assessment!**

```
