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

{% for p in site.el-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
