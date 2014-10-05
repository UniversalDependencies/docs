---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fa/pos/index.html
---

# POS tags

{% include fa-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.fa-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
