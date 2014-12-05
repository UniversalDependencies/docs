---
layout: base
title:  'Features'
generated: 'true'
permalink: eu/feat/index.html
---

# Features

{% include eu-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.eu-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
