---
layout: base
title:  'Features'
generated: 'true'
permalink: swl/feat/index.html
---

# Features

{% include swl-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.swl-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
