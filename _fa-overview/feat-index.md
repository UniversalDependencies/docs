---
layout: base
title:  'Features'
generated: 'true'
permalink: fa/feat/index.html
---

# Features

{% include fa-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.fa-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
