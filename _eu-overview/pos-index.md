---
layout: base
title:  'POS tags'
generated: 'true'
permalink: eu/pos/index.html
---

# POS tags

{% include eu-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.eu-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
