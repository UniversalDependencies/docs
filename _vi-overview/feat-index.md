---
layout: base
title:  'Features'
generated: 'true'
permalink: vi/feat/index.html
---

# Features

{% include vi-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.vi-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
