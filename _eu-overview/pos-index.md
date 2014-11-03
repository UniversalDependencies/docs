---
layout: base
title:  'POS tags'
generated: 'true'
permalink: eu/pos/index.html
---

# POS tags

{% include eu-pos-table.html %}

----------

Alphabetical listing

{% for p in site.eu-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
