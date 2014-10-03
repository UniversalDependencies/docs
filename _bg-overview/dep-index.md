---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: bg/dep/index.html
---

# Dependencies

{% include bg-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.bg-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
