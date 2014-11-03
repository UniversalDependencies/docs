---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: ja/dep/index.html
---

# Dependencies

{% include ja-dep-table.html %}

----------

Alphabetical listing

{% for p in site.ja-dep %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
