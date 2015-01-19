var gulp = require('gulp')
    ,nodemon = require('gulp-nodemon')
    ,coffee = require('gulp-coffee')
    ,concat = require('gulp-concat')

gulp.task('tube', ['coffee'], function () {
  nodemon({ script: 'item/tube/server.js', ext: 'html js', ignore: ['ignored.js'] })
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
  })
});

gulp.task('coffee', function() {
  gulp.src('./item/tube/src/client/*.coffee')
  .pipe(coffee({bare: true}))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./item/tube/public/js/'))
});
