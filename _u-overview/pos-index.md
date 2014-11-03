---
layout: base
title:  'Universal POS tags'
generated: 'true'
permalink: u/pos/index.html
---

# Universal POS tags

{% include u-pos-table.html %}

----------

Alphabetical listing

{% for p in site.u-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
