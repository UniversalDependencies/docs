---
layout: base
title:  'Universal POS tags'
generated: 'true'
permalink: u/pos/all.html
---

# Universal POS tags

{% include u-pos-table.html %}

----------

{% for p in site.u-pos %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_u-pos/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
