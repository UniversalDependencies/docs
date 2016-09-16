---
layout: base
title:  'Features'
generated: 'true'
permalink: fi/feat/index.html
---

# Features

{% include fi-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.fi-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
