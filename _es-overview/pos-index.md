---
layout: base
title:  'POS tags'
generated: 'true'
permalink: es/pos/index.html
---

# POS tags

{% include es-pos-table.html %}

----------

Alphabetical listing

{% for p in site.es-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
