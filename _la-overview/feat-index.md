---
layout: base
title:  'Features'
generated: 'true'
permalink: la/feat/index.html
---

# Features

{% include la-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.la-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
