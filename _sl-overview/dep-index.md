---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: sl/dep/index.html
---

# Dependencies

{% include sl-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sl-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
