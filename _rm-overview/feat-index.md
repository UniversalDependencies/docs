---
layout: base
title:  'Features'
generated: 'true'
permalink: rm/feat/index.html
---

# Features

{% include rm-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.rm-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
