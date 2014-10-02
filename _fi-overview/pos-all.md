---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fi/pos/all.html
---

# POS tags

{% include fi-pos-table.html %}

----------

{% for p in site.fi-pos %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_fi-pos/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
