---
layout: base
title:  'Features'
generated: 'true'
permalink: hu/feat/index.html
---

# Features

{% include hu-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hu-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
