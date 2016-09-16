---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: grc/dep/index.html
---

# Dependencies

{% include grc-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.grc-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
