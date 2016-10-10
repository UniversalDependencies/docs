---
layout: base
title:  'POS tags'
generated: 'true'
permalink: so/pos/index.html
---

# POS tags

{% include so-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.so-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
