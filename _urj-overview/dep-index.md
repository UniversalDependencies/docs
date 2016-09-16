---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: urj/dep/index.html
---

# Dependencies

{% include urj-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.urj-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
