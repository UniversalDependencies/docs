---
layout: base
title:  'English grammatical relations'
generated: 'true'
---

{% include en-table.html %}

----------

The following pages contain documentation and examples converted from
Section 2 of *[Stanford typed dependencies
manual](http://nlp.stanford.edu/software/dependencies_manual.pdf)* (de
Marneffe and Manning 2008).

<ul>
{% for p in site.en-dep %}
  <li><a href="{{ p.url | remove_first:'/' }}">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
