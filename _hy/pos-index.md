---
layout: base
title:  'POS tags'
generated: 'true'
permalink: hy/pos/index.html
udver: '2'
---

# POS tags

These tags mark the core part-of-speech categories. To distinguish additional lexical and grammatical properties of words, use the [universal features](hy/feat/index.html).

{% include hy-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hy-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
