---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: he/dep/index.html
---

# Dependencies

{% include he-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.he-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
