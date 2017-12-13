---
layout: base
title:  'POS tags'
generated: 'true'
permalink: hy/pos/index.html
udver: '2'
---

# POS tags

These tags mark the core part-of-speech categories. To distinguish additional lexical and grammatical properties of words, use the [universal features](feat/index.html).

{% include hy-pos-table.html %}

----------

Alphabetical listing

{{ site.hy }}

{% comment %}
{% comment %} Commenting this out for the time being, I don't know how to fix and it's crashing the docs. -fginter {% comment %}
{% assign sorted = site.hy-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
{% endcomment %}
