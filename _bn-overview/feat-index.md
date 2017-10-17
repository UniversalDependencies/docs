---
layout: base
title:  'Features'
generated: 'true'
permalink: bn/feat/index.html
---

# Features

{% include bn-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.bn-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
