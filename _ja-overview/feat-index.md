---
layout: base
title:  'Features'
generated: 'true'
permalink: ja/feat/index.html
---

# Features

{% include ja-feat-table.html %}

----------

Alphabetical listing

{% for p in site.ja-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
