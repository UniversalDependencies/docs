---
layout: base
title:  'Finnish grammatical relations'
generated: 'true'
permalink: fi/dep/all.html
---

Note: This document is a draft. Not all relations have been converted to USD-compatible description yet.

{% include fi-dep-table.html %}

----------

{% for p in site.fi-dep %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url | remove_first:'/' }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_fi-dep/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
