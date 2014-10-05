---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: fa/dep/index.html
---

# Dependencies

{% include fa-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.fa-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
