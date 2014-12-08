---
layout: base
title:  'Features'
generated: 'true'
permalink: ja/feat/index.html
---

# Features

{% include ja-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ja-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
