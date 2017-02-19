---
layout: base
title:  'Features'
generated: 'true'
permalink: lt/feat/index.html
---

# Features

{% include lt-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.lt-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
