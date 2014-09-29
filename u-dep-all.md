---
layout: base
title:  'Universal Dependencies'
generated: 'true'
permalink: u/dep/all.html
---

The following table is adapted from *Universal Stanford Dependencies:
A cross-linguistic typology* (de Marneffe *et al.* 2014).

{% include u-dep-table.html %}

----------

{% for p in site.u-dep %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url | remove_first:'/' }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_u-dep/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
