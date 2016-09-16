---
layout: base
title:  'Features'
generated: 'true'
permalink: fo/feat/index.html
---

# Features

{% include fo-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.fo-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
