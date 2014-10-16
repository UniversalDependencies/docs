---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: ja/dep/index.html
---

# Dependencies

{% include ja-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.ja-dep %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
