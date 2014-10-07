---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: eu/dep/index.html
---

# Dependencies

{% include eu-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.eu-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
