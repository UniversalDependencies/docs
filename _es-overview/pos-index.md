---
layout: base
title:  'POS tags'
generated: 'true'
permalink: es/pos/index.html
---

# POS tags

{% include es-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.es-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
