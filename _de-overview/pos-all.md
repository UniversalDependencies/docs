---
layout: base
title:  'POS tags'
generated: 'true'
permalink: de/pos/all.html
---

# POS tags

{% include de-pos-table.html %}

----------

{% for p in site.de-pos %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_de-pos/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
