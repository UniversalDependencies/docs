---
layout: base
title:  'POS tags'
generated: 'true'
permalink: rm/pos/index.html
---

# POS tags

{% include rm-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.rm-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
