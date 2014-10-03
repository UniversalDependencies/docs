---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ga/pos/all.html
---

# POS tags

{% include ga-pos-table.html %}

----------

{% for p in site.ga-pos %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_ga-pos/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
