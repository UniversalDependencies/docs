---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: uk/dep/index.html
---

# Dependencies

{% include uk-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.uk-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
