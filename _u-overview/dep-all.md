---
layout: base
title:  'Universal Dependencies'
generated: 'true'
permalink: u/dep/all.html
---

# Universal Dependencies

The following table is adapted from *Universal Stanford Dependencies:
A cross-linguistic typology* (de Marneffe *et al.* 2014). There have been modifications in the relations: we now have 40 universal relations (instead of the 42 ones proposed in the paper).

{% include u-dep-table.html %}

----------

{% assign sorted = site.u-dep | sort: 'title' %}{% for p in sorted %}
<a id="al-u-dep/{{ p.title }}" class="al-dest"/>
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}" class="al-doc">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/{% if p.collection %}{{ p.relative_path }}{% else %}{{ p.path }}{% endif %}" target="#">edit {{ p.title }}</a>
{% endfor %}
