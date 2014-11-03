---
layout: base
title:  'POS tags'
generated: 'true'
permalink: cs/pos/index.html
---

# POS tags

{% include cs-pos-table.html %}

----------

Alphabetical listing

{% for p in site.cs-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
