---
layout: base
title:  'POS tags'
generated: 'true'
permalink: lt/pos/index.html
---

# POS tags

{% include lt-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.lt-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
