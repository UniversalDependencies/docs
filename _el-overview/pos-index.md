---
layout: base
title:  'POS tags'
generated: 'true'
permalink: el/pos/index.html
---

# POS tags

{% include el-pos-table.html %}

----------

Alphabetical listing

{% for p in site.el-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
