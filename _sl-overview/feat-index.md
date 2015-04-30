---
layout: base
title:  'Features'
generated: 'true'
permalink: sl/feat/index.html
---

# Features

{% include sl-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sl-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
