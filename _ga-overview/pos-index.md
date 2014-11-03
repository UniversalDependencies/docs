---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ga/pos/index.html
---

# POS tags

{% include ga-pos-table.html %}

----------

Alphabetical listing

{% for p in site.ga-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
