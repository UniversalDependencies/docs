---
layout: base
title:  'Features'
generated: 'true'
permalink: ro/feat/index.html
---

# Features

{% include ro-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ro-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
