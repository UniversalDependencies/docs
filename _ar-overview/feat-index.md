---
layout: base
title:  'Features'
generated: 'true'
permalink: ar/feat/index.html
---

# Features

{% include ar-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ar-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
