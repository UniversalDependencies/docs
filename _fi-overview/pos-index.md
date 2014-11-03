---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fi/pos/index.html
---

# POS tags

{% include fi-pos-table.html %}

----------

Alphabetical listing

{% for p in site.fi-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
