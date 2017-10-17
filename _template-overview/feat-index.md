---
layout: base
title:  'Features'
generated: 'true'
permalink: template/feat/index.html
udver: '2'
---

# Features

{% include template-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.template-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
