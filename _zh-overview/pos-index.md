---
layout: base
title:  'POS tags'
generated: 'true'
permalink: zh/pos/index.html
---

# POS tags

{% include zh-pos-table.html %}

----------

Alphabetical listing

{% for p in site.zh-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
