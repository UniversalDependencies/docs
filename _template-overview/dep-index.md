---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: template/dep/index.html
---

# Dependencies

{% include template-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.template-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
