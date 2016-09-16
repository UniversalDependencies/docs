---
layout: base
title:  'Finnish grammatical relations'
generated: 'true'
permalink: fi/dep/all.html
---

Note: This document is a draft. Not all relations have been converted to USD-compatible description yet.

{% include fi-dep-table.html %}

----------

{% assign sorted = site.fi-dep | sort: 'title' %}{% for p in sorted %}
<a id="al-fi-dep/{{ p.title }}" class="al-dest"/>
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}" class="al-doc">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/{% if p.collection %}{{ p.relative_path }}{% else %}{{ p.path }}{% endif %}" target="#">edit {{ p.title }}</a>
{% endfor %}
