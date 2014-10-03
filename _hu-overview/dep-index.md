---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: hu/dep/index.html
---

# Dependencies

{% include hu-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.hu-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
