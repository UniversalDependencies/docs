---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: sv/dep/all.html
---

# Dependencies

{% include sv-dep-table.html %}

----------

{% for p in site.sv-dep %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_sv-dep/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
