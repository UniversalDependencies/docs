---
layout: base
title:  'Features'
generated: 'true'
permalink: kk/feat/index.html
---

# Features

{% include kk-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.kk-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
