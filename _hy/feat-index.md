---
layout: base
title:  'Features'
generated: 'true'
permalink: hy/feat/index.html
udver: '2'
---

# Features

For core part-of-speech categories, see the [POS tags](pos/index.html). The features listed here distinguish additional lexical and grammatical properties of words, not covered by the POS tags.

{% include hy-feat-table.html %}

----------

Alphabetical listing

{% comment %}
{% assign sorted = site.hy-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
{% endcomment %}