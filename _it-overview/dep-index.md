---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: it/dep/index.html
---

# Dependencies

{% include it-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.it-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
