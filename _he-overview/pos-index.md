---
layout: base
title:  'POS tags'
generated: 'true'
permalink: he/pos/index.html
---

# POS tags

{% include he-pos-table.html %}

----------

Alphabetical listing

{% for p in site.he-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
