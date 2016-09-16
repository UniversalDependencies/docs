---
layout: base
title:  'Features'
generated: 'true'
permalink: cop/feat/index.html
---

# Features

{% include cop-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.cop-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
