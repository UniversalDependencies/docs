---
layout: base
title:  'Features'
generated: 'true'
permalink: af/feat/index.html
---

# Features

{% include af-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.af-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
