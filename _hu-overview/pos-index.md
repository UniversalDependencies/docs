---
layout: base
title:  'POS tags'
generated: 'true'
permalink: hu/pos/index.html
---

# POS tags

{% include hu-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.hu-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
