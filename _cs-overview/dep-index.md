---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: cs/dep/index.html
---

# Dependencies

{% include cs-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.cs-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
