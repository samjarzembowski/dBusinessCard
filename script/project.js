var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.author = opts.author;
  this.deployedOn = opts.deployedOn;
  this.body = opts.body;
}

Project.prototype.toHtml = function () {
  var templateScript = $('#project-template').html();
  // console.log(templateScript);
  var theTemplate = Handlebars.compile(templateScript);
  var context = {
    "title": this.title,
    "author": this.author,
    "deployedOn": this.deployedOn,
    "body": this.body,
  };
  var compiledProject = theTemplate(context);
  console.log(compiledProject);


  this.daysAgo = parseInt((new Date() - new Date(this.deployedOn))/60/60/24/1000);
  return compiledProject;
  // var $newProject = $('article.template').clone();
  // $newProject.removeClass('template');
  // $newProject.find('h1').html(this.title);
  // $newProject.find('.project-body').html(this.body);
  // $newProject.find('time[pubdate]').attr('datetime', this.deployedOn);
  // $newProject.find('time[pubdate]').attr('title', this.deployedOn);
  // $newProject.find('time').html('around' + parseInt((new Date() - new Date(this.deployedOn))/60/60/24/1000) + ' days ago');
  // $newProject.append('<hr>');
  // return $newProject;
}

rawData.sort(function(a,b) {
  return (new Date(b.deployedOn)) - (new Date(a.deployedOn));
});

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml())
});

$('#projects article').removeClass('template');
