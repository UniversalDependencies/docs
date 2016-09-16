---
layout: base
title:  'Features'
generated: 'true'
permalink: zh/feat/index.html
---

# Features

{% include zh-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.zh-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
