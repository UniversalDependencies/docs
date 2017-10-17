---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: pcm/dep/all.html
udver: '2'
---

# Dependencies

The following table lists the syntactic relations used in UD v2 for Naija.

{% include pcm-dep-table.html %}

----------

{% assign sorted = site.pcm-dep | sort: 'title' %}{% for p in sorted %}
<a id="al-pcm-dep/{{ p.title }}" class="al-dest"/>
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}" class="al-doc">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/{% if p.collection %}{{ p.relative_path }}{% else %}{{ p.path }}{% endif %}" target="#">edit {{ p.title }}</a>
{% endfor %}
