---
layout: base
title:  'Features'
generated: 'true'
permalink: cs/feat/index.html
---

# Features

{% include cs-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.cs-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
