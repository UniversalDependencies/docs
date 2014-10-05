---
layout: base
title:  'Features'
generated: 'true'
permalink: fa/feat/index.html
---

# Features

{% include fa-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.fa-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
