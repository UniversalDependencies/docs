---
layout: base
title:  'Features'
generated: 'true'
permalink: bg/feat/index.html
---

# Features

{% include bg-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.bg-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
