[![Build Status](https://travis-ci.org/mrJmek/simple_js_wysiwyg.svg?branch=master)](https://travis-ci.org/mrJmek/simple_js_wysiwyg)
[![Docker Pulls](https://img.shields.io/badge/gem-0.1.1-orange.svg?style=flat)](https://github.com/mrJmek/simple_js_wysiwyg)
[![Docker Pulls](https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat)](https://github.com/mrJmek/simple_js_wysiwyg)
# SimpleJsWysiwyg

Welcome to your new gem! In this directory, you'll find the files you need to be able to package up your Ruby library into a gem. Put your Ruby code in the file `lib/simple_js_wysiwyg`. To experiment with that code, run `bin/console` for an interactive prompt.

TODO: Delete this and the text above, and describe your gem

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'simple_js_wysiwyg'
```

And then execute:
```ruby
    $ bundle
```
Or install it yourself as:
```ruby
    $ gem install simple_js_wysiwyg
```
## Usage
Require JavaScript to app/assets/javascripts/applications.js
```ruby
    //= require simple_js_wysiwyg
```
Require style to app/assets/stylesheets/applications.css.scss
```ruby
    @import "simple_js_wysiwyg";
```
Add to `config/initializers/assets.rb` and restart your server
```ruby
    Rails.application.config.assets.precompile += %w( simple_js_wysiwyg/drag-and-drop-uploader.js )
```
Add Google font to the app/views/layouts/application.html
```html
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Nunito">
```

Now You can use text editor by pasting this form to your page:
```html
    <form id="textForm">
      <h2>teamvoy stylized JS wysiwyg text editor</h2>

      <div id="textBox" contenteditable="true" draggable="true">
      </div>
    </form>
```
Add JavScript at the end of the form if you would like to use Drag and Drop option for pictures
```html
    <%= javascript_include_tag 'simple_js_wysiwyg/drag-and-drop-uploader', 'data-turbolinks-track' => true %>
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/simple_js_wysiwyg. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
