---
layout: base
title:  'Features'
generated: 'true'
permalink: jp/feat/index.html
---

# Features

{% include jp-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.jp-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
