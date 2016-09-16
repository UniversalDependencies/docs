---
layout: base
title:  'POS tags'
generated: 'true'
permalink: et/pos/index.html
---

# POS tags

{% include et-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.et-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
