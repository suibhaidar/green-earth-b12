# WELCOME TO EMERGENCY HOTLINE 


#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()? 

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

## ⚙️ Answers

## Answer the question no. 1) 

**var** function-scoped  মানে যেই function এর ভেতরে declare করা হবে, পুরো function জুড়েই কাজ করবে।
-Hoisting: হয় (কিন্তু মান থাকে undefined)।
-Redeclare করা যায়।
-মান পরিবর্তন করা যায়।
**let** block-scope, scope এর ভেতরেই কাজ করবে।
-Hoisting: হয়, ব্যবহার করলে error।
-Redeclare করা যায় না।
-মান পরিবর্তন করা যায়।
**const** block-scope, scope এর ভেতরেই কাজ করবে।
-Hoisting: হয়, ব্যবহার করলে error।
-Redeclare করা যায় না।
-মান পরিবর্তন করা যায় না ।


## Answer the question no.2) 
  **forEach()**
-শুধু array-এর প্রতিটি element এ কাজ করে।
-Return করে না ।
  **map()**
- array-এর প্রতিটি element এ কাজ করে।
-নতুন array return করে। মূল array পরিবর্তন হয় না।
  **filter()**
-প্রতিটি element কে শর্ত অনুযায়ী পরীক্ষা করে।
-শুধু যেগুলো true হয় সেগুলো নিয়ে নতুন array return করে।


 ## Answer the question no .3) 
  -ES6 এ **Arrow function** হলো JavaScript function লেখার ছোট ও সহজ syntax |


 ## Answer the question no.4) 
**Destructuring assignment** হলো ES6 এ একটা ফিচার যেখানে array বা object এর ভেতরের মানগুলোকে আলাদা variable এ সহজে assign করা যায়।

## Answer the question no. 5)

**Template literals** হলো নতুন string সিনট্যাক্স যেটা backtick (`) দিয়ে লেখা হয়।
এটা 
Variable / expression string এর মধ্যে রাখা যায়।
Multiline string লেখা যায়।
Expression evaluate করা যায়।
--া নরমাল string করা যায় না