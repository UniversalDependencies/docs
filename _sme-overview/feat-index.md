---
layout: base
title:  'Features'
generated: 'true'
permalink: sme/feat/index.html
---

# Features

{% include sme-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sme-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
