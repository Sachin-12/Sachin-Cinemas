- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- ## Getting Started
	- First, run the development server:
	-
	  ``` bash
	  	  npm run dev
	  	  # or
	  	  yarn dev
	  ```
	- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- ## Demo UI Screen
- <img width="1497" alt="image" src="https://user-images.githubusercontent.com/24960422/170443388-84fb16b1-3bb5-43ce-a478-615d03394757.png">
- <img width="307" alt="image" src="https://user-images.githubusercontent.com/24960422/170443732-57e1ede4-2606-41f8-9136-486629993344.png">

- ## Faster Page load
	- Used `Static Site Generation` using **nextjs** for initial page load.
	- The first page of the screen `/movies` loads much faster as the html is directly rendered from the server
	- Implemented `React Query` for fetching data and caching it .
		- This speeds the movies page load times after the initial load
	- Implemented Pagination for faster navigation of various movies
- ## Styling
	- Used `MaterialUI` library and css module system for styling pages and components
- ## Reusable components
	- Implemented atomic design principles for creating re-usable react component
		- Reference: https://atomicdesign.bradfrost.com/chapter-2/
	- Implemented re-usable theatre layout component which can be used to display different screen layouts depending on the customer requirement
  - Used a prop named layout in `ScreenLayout` component which has information about the theatre sitting layout
  
  - ``` js
      const layout = {
      columnSplit: [3, 9, 3], rowSplit: [3, 10, 2]
      }
    ```
  - Here columnSplit describes how the columns are split in the actual cinema theatre
  - 3,9,3 indicates a 3 seats, a gap, then 9 seats , a gap and finally another 3 seats
  - This info can be fetched from the server and sent as props to this component which takes care of rendering the layout based on it.
  - Similar approach can be used for providing pricing information based on rows.

- ## State Management
  - Used zustand for global state management 

- ## Testing
	- Added jest setup
	- Used react-testing-library for testing react components
