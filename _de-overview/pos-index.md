---
layout: base
title:  'POS tags'
generated: 'true'
permalink: de/pos/index.html
---

# POS tags

{% include de-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.de-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
