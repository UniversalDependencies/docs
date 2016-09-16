---
layout: base
title:  'POS tags'
generated: 'true'
permalink: it/pos/index.html
---

# POS tags

{% include it-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.it-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
