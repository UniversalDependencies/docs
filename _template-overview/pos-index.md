---
layout: base
title:  'POS tags'
generated: 'true'
permalink: template/pos/index.html
---

# POS tags

{% include template-pos-table.html %}

----------

Alphabetical listing

{% for p in site.template-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
