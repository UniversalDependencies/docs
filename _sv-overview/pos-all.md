---
layout: base
title:  'POS tags'
generated: 'true'
permalink: sv/pos/all.html
---

# POS tags

{% include sv-pos-table.html %}

----------

{% for p in site.sv-pos %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_sv-pos/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
