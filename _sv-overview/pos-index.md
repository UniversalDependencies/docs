---
layout: base
title:  'POS tags'
generated: 'true'
permalink: sv/pos/index.html
---

# POS tags

{% include sv-pos-table.html %}

----------

Alphabetical listing

{% for p in site.sv-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
