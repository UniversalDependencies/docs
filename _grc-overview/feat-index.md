---
layout: base
title:  'Features'
generated: 'true'
permalink: grc/feat/index.html
---

# Features

{% include grc-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.grc-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
