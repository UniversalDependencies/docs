---
layout: base
title:  'Features'
generated: 'true'
permalink: sa/feat/index.html
---

# Features

{% include sa-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sa-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
