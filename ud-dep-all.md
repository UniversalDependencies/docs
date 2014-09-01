---
layout: base
title:  'Universal Dependencies'
generated: 'true'
---

The following table is adapted from *Universal Stanford Dependencies:
A cross-linguistic typology* (de Marneffe *et al.* 2014).

{% include ud-table.html %}

----------

{% for p in site.ud-dep %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url | remove_first:'/' }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_ud-dep/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
