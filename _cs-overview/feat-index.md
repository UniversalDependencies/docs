---
layout: base
title:  'Features'
generated: 'true'
permalink: cs/feat/index.html
---

# Features

{% include cs-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.cs-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
