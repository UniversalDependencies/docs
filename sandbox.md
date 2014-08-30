---
layout: base
title:  'Sandbox'
---

# Sandbox

This file is intended as a "sandbox" for trying out the editing
features. Feel free to make changes by clicking the "edit page" link
at the top. (You need to be a project member and logged in to GitHub
for this to work.)

(Please note: this page is public and shared with others, and its
contents will be regularly reset. Don't store anything you want to
keep here.)

----------

# Some markdown

* bulleted
* list

1. numbered
2. list

Link: [link text](http://www.example.com)

# header 1

## header 2

### header 3

*italics* and **bold**

`inline code`

----------

# Some visualizations

<div class="sd-parse">
Just some tokens
</div>

<div class="sd-parse">
Tokens/Noun with/Adpos POS/Noun
</div>

<div class="sd-parse">
A dependency
det(dependency, A)
</div>

<div class="sd-parse" tabs="yes">
Dynamic visualization (click "edit!")
</div>

~~~ sdparse
Alternative syntax
~~~

----------

# Some Jekyll 

## Finnish documentation for relations containing "cop" 

{% for p in site.fi %}
{% if p.title contains "cop" %}
{{ p.content }}
{% endif %}
{% endfor %}

## Finnish documentation for relations with tag "case"

{% for p in site.fi %}
{% if p.tags contains "case" %}
{{ p.content }}
{% endif %}
{% endfor %}
