# CodeBubb Javascripot Form Validation

This is a practice of Javascript form validation.

## Table of contents

- [Overview](#overview)
    - [The goal](#the-goal)
    - [Screenshots](#screenshots)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The goal

Users should be able to:

- Add their information to each input
- See an error message when their input does not validate
- See form validation messages if:
    - The field is left empty
    - The input does not meet preset standards
- View both mobile & desktop layouts
- See hover and focus states for all interactive elements on the page

### Screenshots

![desktop-normal](./assets/readMe/desktop-normal.png)
![desktop-with-info](./assets/readMe/desktop-veiw-with-info.png)
![dektop-error-states](./assets/readMe/desktop-error-states.png)
![mobile1](./assets/readMe/mobile1.png)
![mobile2](./assets/readMe/mobile2.png)
![btn-active-states](./assets/readMe/btn-active-states.png)
![pw-error](./assets/readMe/pw-errors.png)
![confirmation-error](./assets/readMe/confirm-pw-error.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
  <div class="form-group">
    <label for="firstName">First Name</label>
    <input
            type="text"
            id="firstName"
            required
            minlength="2"
    >
    <div class="error-container">
      <span class="error-icon hidden">
          <i class="fa-solid fa-circle-exclamation"></i>
      </span>
      <div class="error"></div>
    </div>
  </div>
```
```css
  img {
    width: 600px;
    height: 750px;
    filter: blur(4px);
    -webkit-filter: blur(4px);
  }

  .welcome-text {
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-90%, -90%);
  }
```
```js
  Array.from(formElement.elements).forEach(element =>
          element.addEventListener('blur', event => {
            validateSingleFormGroup(event.target.parentElement);
          })
  );
```

### Useful resources

- []() - 
- []() - 

## Author

- Github - [@mariabrock](https://github.com/mariabrock)
- LinkedIn - [@mariabrock](https://www.linkedin.com/in/maria-brock/)
