---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ko/pos/index.html
---

# POS tags

{% include ko-pos-table.html %}

----------

Alphabetical listing

{% for p in site.ko-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
