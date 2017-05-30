---
layout: base
title:  'Features'
generated: 'true'
permalink: hy/feat/index.html
---

# Features

{% include hy-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hy-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
