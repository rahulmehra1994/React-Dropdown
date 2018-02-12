# React-Dropdown
This repo contains the image upload component in react for selecting one or more image from the computer and displaying the selected ones on the screen in real time and you can cancel them too. Use them Enjoy.

## Screenshots
![capture](https://user-images.githubusercontent.com/20178869/36060758-9e6e0f80-0e75-11e8-85ef-393a1907f090.PNG)
![capture2](https://user-images.githubusercontent.com/20178869/36060760-a43cd7de-0e75-11e8-8890-f18018ee7958.PNG)
- The component will look like Down arrow in circle above on include.

- On clicking the down arrow the dropdown body will be visible with animation.
- On clicking an any menu option the value of that option will be recieved in value function.

## Usage

- Just download the dropdown.js  
- Paste it in your src directory  
- Include the file  like: ```import ImgUploadComp from './your-directory/imgUploadComp';```
- Place it in your code like :
```<Dropdown 
	value={(val)=>{ this.actionOnValue(val) }}
	rows={[{label: 'Label1', value: 'value1'},{label: 'Label2', value: 'value2'},{label: 'Label3', value: 'value3'}]}
/>```
- On clicking an any menu option the value of that option will be recieved in value function like following:
```value={(val)=>{ this.actionOnValue(val) }}```
Do whataver with the value through function like *actionOnValue()*

## Props  
```rows={[{label: 'Label1', value: 'value1'}]}```  
In prop row provide the array of objects like {label: 'label', value: 'value'} that you want to show in the dropdown menu and value that you want to get on selecting any one option.
