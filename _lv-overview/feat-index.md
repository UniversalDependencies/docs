---
layout: base
title:  'Features'
generated: 'true'
permalink: lv/feat/index.html
---

# Features

{% include lv-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.lv-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
