---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ru/pos/index.html
---

# POS tags

{% include ru-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ru-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
