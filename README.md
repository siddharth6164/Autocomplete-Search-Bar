# Autocomplete Search Bar in React

## Project Details

### Features:

1. **Autocomplete Functionality:**
   - As users type in the search bar, show all related words or suggestions.
   - Suggestions dynamically update based on the input.

2. **Optimized Code & Caching:**
   - Implement optimized logic to reduce unnecessary re-renders and API calls.
   - Use caching (e.g., with a simple JavaScript object or localStorage) to store previous search results and improve performance.

### Implementation Outline:

1. **State Management:**
   - Use React state to track user input and filtered suggestions.

2. **Debouncing for Performance:**
   - Add a debounce function to limit API requests and avoid excessive calls.

3. **Caching Strategy:**
   - Store previously fetched results in a cache.
   - Check the cache before making new requests.

4. **UI & Styling:**
   - Create a dropdown list to display matching suggestions.
   - Highlight the active suggestion as the user navigates with the keyboard.


---
### Screenshot ###

![Screenshot of my project](https://github.com/siddharth6164/Autocomplete-Search-Bar/blob/main/public/Autocomplete-search-bar.png)
