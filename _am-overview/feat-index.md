---
layout: base
title:  'Features'
generated: 'true'
permalink: am/feat/index.html
---

# Features

{% include am-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.am-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
