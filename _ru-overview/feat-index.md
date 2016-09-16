---
layout: base
title:  'Features'
generated: 'true'
permalink: ru/feat/index.html
---

# Features

{% include ru-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ru-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
