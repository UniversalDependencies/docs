---
layout: base
title:  'Features'
generated: 'true'
permalink: template/feat/index.html
---

# Features

{% include template-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.template-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
