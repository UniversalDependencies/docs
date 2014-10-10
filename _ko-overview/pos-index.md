---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ko/pos/index.html
---

# POS tags

{% include ko-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.ko-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
