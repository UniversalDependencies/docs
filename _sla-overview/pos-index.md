---
layout: base
title:  'POS tags'
generated: 'true'
permalink: sla/pos/index.html
---

# POS tags

{% include sla-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sla-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
