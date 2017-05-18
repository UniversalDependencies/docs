---
layout: base
title:  'POS tags'
generated: 'true'
permalink: dar/pos/all.html
---

# POS tags

{% include dar-pos-table.html %}

----------

{% assign sorted = site.dar-pos | sort: 'title' %}{% for p in sorted %}
<a id="al-dar-pos/{{ p.title }}" class="al-dest"/>
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}" class="al-doc">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/{% if p.collection %}{{ p.relative_path }}{% else %}{{ p.path }}{% endif %}" target="#">edit {{ p.title }}</a>
{% endfor %}
