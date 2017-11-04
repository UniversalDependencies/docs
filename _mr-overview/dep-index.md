---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: mr/dep/index.html
---

# Dependencies

{% include mr-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.mr-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
