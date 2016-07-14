---
layout: base
title:  'Features'
generated: 'true'
permalink: bxr/feat/index.html
---

# Features

{% include bxr-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.bxr-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
