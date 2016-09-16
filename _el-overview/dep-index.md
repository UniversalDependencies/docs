---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: el/dep/index.html
---

# Dependencies

{% include el-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.el-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
