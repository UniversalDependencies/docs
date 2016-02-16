---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: ru/dep/index.html
---

# Dependencies

{% include ru-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ru-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
