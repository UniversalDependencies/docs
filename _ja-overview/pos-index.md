---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ja/pos/index.html
---

# POS tags

{% include ja-pos-table.html %}

----------

Alphabetical listing

{% for p in site.ja-pos %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
