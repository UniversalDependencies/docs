---
layout: base
title:  'POS tags'
generated: 'true'
permalink: bg/pos/index.html
---

# POS tags

{% include bg-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.bg-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
