---
layout: base
title:  'Features'
generated: 'true'
permalink: pl/feat/index.html
---

# Features

{% include pl-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.pl-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
