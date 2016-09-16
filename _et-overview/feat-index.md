---
layout: base
title:  'Features'
generated: 'true'
permalink: et/feat/index.html
---

# Features

{% include et-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.et-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
