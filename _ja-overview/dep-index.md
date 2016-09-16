---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: ja/dep/index.html
---

# Dependencies

{% include ja-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ja-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
