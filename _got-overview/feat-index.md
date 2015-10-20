---
layout: base
title:  'Features'
generated: 'true'
permalink: got/feat/index.html
---

# Features

{% include got-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.got-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
