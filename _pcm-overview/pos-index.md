---
layout: base
title:  'POS tags'
generated: 'true'
permalink: pcm/pos/index.html
udver: '2'
---

# POS tags

{% include pcm-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.pcm-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
