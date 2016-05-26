---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: vi/dep/index.html
---

# Dependencies

{% include vi-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.vi-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
