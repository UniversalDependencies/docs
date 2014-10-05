---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: fr/dep/index.html
---

# Dependencies

{% include fr-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.fr-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
