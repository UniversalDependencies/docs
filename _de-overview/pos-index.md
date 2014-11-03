---
layout: base
title:  'POS tags'
generated: 'true'
permalink: de/pos/index.html
---

# POS tags

{% include de-pos-table.html %}

----------

Alphabetical listing

{% for p in site.de-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
