---
layout: base
title:  'POS tags'
generated: 'true'
permalink: bg/pos/index.html
---

# POS tags

{% include bg-pos-table.html %}

----------

Alphabetical listing

{% for p in site.bg-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
