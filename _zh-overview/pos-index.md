---
layout: base
title:  'POS tags'
generated: 'true'
permalink: zh/pos/index.html
udver: '2'
---

# POS tags

{% include zh-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.zh-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
