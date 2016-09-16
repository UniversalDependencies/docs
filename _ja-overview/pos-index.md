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

{% assign sorted = site.ja-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
