---
layout: base
title:  'Features'
generated: 'true'
permalink: es/feat/index.html
---

# Features

{% include es-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.es-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
