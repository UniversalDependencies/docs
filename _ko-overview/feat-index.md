---
layout: base
title:  'Features'
generated: 'true'
permalink: ko/feat/index.html
---

# Features

{% include ko-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ko-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
