source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

# ruby versions['ruby']
ruby '2.7.2'
gem 'github-pages', versions['github-pages']
