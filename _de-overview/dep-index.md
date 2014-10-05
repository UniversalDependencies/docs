---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: de/dep/index.html
---

# Dependencies

{% include de-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.de-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
