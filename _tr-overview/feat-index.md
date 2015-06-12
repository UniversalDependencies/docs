---
layout: base
title:  'Features'
generated: 'true'
permalink: tr/feat/index.html
---

# Features

{% include tr-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.tr-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
