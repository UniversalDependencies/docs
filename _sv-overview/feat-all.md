---
layout: base
title:  'Features'
generated: 'true'
permalink: sv/feat/all.html
---

# Features

{% include sv-feat-table.html %}

----------

{% for p in site.sv-feat %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_sv-feat/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
