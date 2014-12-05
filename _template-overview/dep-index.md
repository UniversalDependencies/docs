---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: template/dep/index.html
---

# Dependencies

{% include template-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.template-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
