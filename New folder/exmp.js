const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var fileName='index.ejs'
  res.sendFile('fileName',options, function(err){
      if (err) throw err
        
  })
})
app.post('/contact-us', (req, res) => {
    res.send('Contact-us')
})
 
 
app.post('/contact-us', function(req, res, next) {
  var f_name = req.body.f_name;
  var l_name = req.body.l_name;
  var email = req.body.email;
  var message = req.body.message;
 
  var sql = `INSERT INTO contacts (f_name, l_name, email, message, created_at) VALUES ("${f_name}", "${l_name}", "${email}", "${message}", NOW())`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})