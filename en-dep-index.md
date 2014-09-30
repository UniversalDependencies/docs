---
layout: base
title:  'English grammatical relations'
generated: 'true'
permalink: en/dep/index.html
---

{% include en-dep-table.html %}

----------


<ul>
{% for p in site.en-dep %}
  <li><a>en-dep/{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
