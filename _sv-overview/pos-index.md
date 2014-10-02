---
layout: base
title:  'POS tags'
generated: 'true'
permalink: sv/pos/index.html
---

# POS tags

{% include sv-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.sv-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
