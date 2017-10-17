---
layout: base
title:  'Features'
generated: 'true'
permalink: hsb/feat/index.html
---

# Features

{% include hsb-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hsb-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
