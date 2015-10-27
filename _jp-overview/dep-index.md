---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: jp/dep/index.html
---

# Dependencies

{% include jp-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.jp-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
