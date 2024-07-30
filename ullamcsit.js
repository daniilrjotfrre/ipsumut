router.post('/add', function(req, res, next) {
  var title = req.body['title'];
  var director = req.body['director'];
  var release = req.body['release'];
  var review = req.body['review'];

  connection.query(
    "INSERT INTO films.filmStore (title, director, review, `release`) VALUES ('" + title.toString() + "', '" + director.toString() + "', '" + review.toString() + "', '" + release.toString() + "');",
    function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    }
  );

  res.redirect('/');
});
