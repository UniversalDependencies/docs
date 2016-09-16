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

{% assign sorted = site.el-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
