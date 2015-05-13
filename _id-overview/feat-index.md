---
layout: base
title:  'Features'
generated: 'true'
permalink: id/feat/index.html
---

# Features

{% include id-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.id-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
