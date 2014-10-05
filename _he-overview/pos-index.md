---
layout: base
title:  'POS tags'
generated: 'true'
permalink: he/pos/index.html
---

# POS tags

{% include he-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.he-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
