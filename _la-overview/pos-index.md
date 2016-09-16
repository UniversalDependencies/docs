---
layout: base
title:  'POS tags'
generated: 'true'
permalink: la/pos/index.html
---

# POS tags

{% include la-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.la-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
