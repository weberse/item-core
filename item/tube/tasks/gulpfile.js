var gulp = require('gulp')
    ,nodemon = require('gulp-nodemon')
    
gulp.task('tube', function () {
  nodemon({ script: 'item/tube/server.js', ext: 'html js', ignore: ['ignored.js'] })
  .on('change', ['lint'])
  .on('restart', function () {
    console.log('restarted!')
})
});
