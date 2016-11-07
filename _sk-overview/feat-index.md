---
layout: base
title:  'Features'
generated: 'true'
permalink: sk/feat/index.html
---

# Features

{% include sk-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sk-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
