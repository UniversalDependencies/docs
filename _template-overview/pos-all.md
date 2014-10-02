---
layout: base
title:  'POS tags'
generated: 'true'
permalink: template/pos/all.html
---

# POS tags

{% include template-pos-table.html %}

----------

{% for p in site.template-pos %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_template-pos/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
