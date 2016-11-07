---
layout: base
title:  'POS tags'
generated: 'true'
permalink: sk/pos/index.html
---

# POS tags

{% include sk-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sk-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
