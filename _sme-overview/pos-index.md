---
layout: base
title:  'POS tags'
generated: 'true'
permalink: sme/pos/index.html
---

# POS tags

{% include sme-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sme-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
