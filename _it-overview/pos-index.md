---
layout: base
title:  'POS tags'
generated: 'true'
permalink: it/pos/index.html
---

# POS tags

{% include it-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.it-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
