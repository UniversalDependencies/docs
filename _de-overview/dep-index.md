---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: de/dep/index.html
---

# Dependencies

{% include de-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.de-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
