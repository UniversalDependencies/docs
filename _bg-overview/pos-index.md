---
layout: base
title:  'POS tags'
generated: 'true'
permalink: bg/pos/index.html
---

# POS tags

{% include bg-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.bg-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
