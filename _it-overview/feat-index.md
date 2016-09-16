---
layout: base
title:  'Features'
generated: 'true'
permalink: it/feat/index.html
---

# Features

{% include it-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.it-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
