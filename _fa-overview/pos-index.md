---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fa/pos/index.html
---

# POS tags

{% include fa-pos-table.html %}

----------

Alphabetical listing

{% for p in site.fa-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
