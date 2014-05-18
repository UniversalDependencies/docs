---
layout: base
title:  'Universal Stanford Dependencies'
generated: 'true'
---

{% for p in site.usd %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
{% endfor %}
