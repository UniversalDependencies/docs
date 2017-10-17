---
layout: base
title:  'Features'
generated: 'true'
permalink: te/feat/index.html
udver: '2'
---

# Features

{% include te-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.te-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
