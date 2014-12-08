---
layout: base
title:  'Features'
generated: 'true'
permalink: el/feat/index.html
---

# Features

{% include el-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.el-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
