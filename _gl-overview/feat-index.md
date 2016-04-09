---
layout: base
title:  'Features'
generated: 'true'
permalink: gl/feat/index.html
---

# Features

{% include gl-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.gl-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
