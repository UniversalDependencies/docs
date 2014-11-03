---
layout: base
title:  'POS tags'
generated: 'true'
permalink: it/pos/index.html
---

# POS tags

{% include it-pos-table.html %}

----------

Alphabetical listing

{% for p in site.it-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
