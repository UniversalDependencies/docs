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

<ul>
{% for p in site.ja-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
