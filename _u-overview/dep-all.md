---
layout: base
title:  'Universal Dependencies'
generated: 'true'
permalink: u/dep/all.html
---

The following table is adapted from *Universal Stanford Dependencies:
A cross-linguistic typology* (de Marneffe *et al.* 2014). There have been modifications in the relations: we now have 40 universal relations (instead of the 42 ones proposed in the paper).

{% include u-dep-table.html %}

----------

{% for p in site.u-dep %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_u-dep/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
