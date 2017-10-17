---
layout: base
title:  'Universal features'
generated: 'true'
permalink: u/feat/index.html
udver: '2'
---

# Universal features

{% include u-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.u-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
