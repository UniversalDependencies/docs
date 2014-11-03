---
layout: base
title:  'POS tags'
generated: 'true'
permalink: hu/pos/index.html
---

# POS tags

{% include hu-pos-table.html %}

----------

Alphabetical listing

{% for p in site.hu-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
