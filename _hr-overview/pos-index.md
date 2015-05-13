---
layout: base
title:  'POS tags'
generated: 'true'
permalink: hr/pos/index.html
---

# POS tags

{% include hr-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hr-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
