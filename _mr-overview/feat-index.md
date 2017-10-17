---
layout: base
title:  'Features'
generated: 'true'
permalink: mr/feat/index.html
---

# Features

{% include mr-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.mr-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
