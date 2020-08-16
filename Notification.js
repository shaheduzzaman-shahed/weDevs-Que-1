let allRead = true;

let notifications = [
   {message: 'Lorem', read: true},
   {message: 'Ipsum', read: true},
   {message: 'Dolor', read: true},
   {message: 'Sit', read: false},
   {message: 'Amet', read: true}
];
 
res = notifications.find((notification) => notification.read === false)

if(res){
    allRead = res.read
}
