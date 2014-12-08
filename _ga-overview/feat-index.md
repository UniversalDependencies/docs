---
layout: base
title:  'Features'
generated: 'true'
permalink: ga/feat/index.html
---

# Features

{% include ga-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ga-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
