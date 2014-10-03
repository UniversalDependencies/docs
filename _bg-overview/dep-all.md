---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: bg/dep/all.html
---

# Dependencies

{% include bg-dep-table.html %}

----------

{% for p in site.bg-dep %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_bg-dep/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
