source 'https://rubygems.org'

ruby '2.0.0'

gem 'bitters'
gem 'bourbon'
gem 'coffee-rails'
gem 'delayed_job_active_record', '>= 4.0.0'
gem 'email_validator'
gem 'flutie'
gem 'high_voltage'
gem 'jquery-rails'
gem 'mapbox-rails'
gem 'neat'
gem 'pg'
gem 'rack-timeout'
gem 'rails', '>= 4.0.0'
gem 'recipient_interceptor'

### See
### http://stackoverflow.com/questions/22392862/undefined-method-environment-for-nilnilclass-when-importing-bootstrap
gem 'sass-rails', '~> 4.0.0'

gem 'simple_form'
gem 'title'
gem 'uglifier'
gem 'unicorn'

group :development do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'foreman'
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :development, :test do
  gem 'dotenv-rails'
  gem 'factory_girl_rails'
  gem 'pry-rails'
  gem 'rspec-rails', '>= 2.14'
end

group :test do
  gem 'capybara-webkit', '>= 1.0.0'
  gem 'database_cleaner'
  gem 'launchy'
  gem 'shoulda-matchers'
  gem 'simplecov', require: false
  gem 'timecop'
  gem 'webmock'
end

group :staging, :production do
  gem 'newrelic_rpm', '>= 3.7.3'
end
