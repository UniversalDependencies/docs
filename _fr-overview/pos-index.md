---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fr/pos/index.html
---

# POS tags

{% include fr-pos-table.html %}

----------

Alphabetical listing

{% for p in site.fr-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
