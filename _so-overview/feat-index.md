---
layout: base
title:  'Features'
generated: 'true'
permalink: so/feat/index.html
---

# Features

{% include so-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.so-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
