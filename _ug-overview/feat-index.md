---
layout: base
title:  'Features'
generated: 'true'
permalink: ug/feat/index.html
---

# Features

{% include ug-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ug-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
