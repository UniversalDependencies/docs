---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ta/pos/index.html
---

# POS tags

{% include ta-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ta-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
