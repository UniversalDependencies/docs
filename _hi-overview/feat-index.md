---
layout: base
title:  'Features'
generated: 'true'
permalink: hi/feat/index.html
---

# Features

{% include hi-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hi-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
