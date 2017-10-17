---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: cop/dep/index.html
udver: '2'
---

# Dependencies

{% include cop-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.cop-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
