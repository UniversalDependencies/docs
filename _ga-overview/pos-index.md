---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ga/pos/index.html
---

# POS tags

{% include ga-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ga-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
