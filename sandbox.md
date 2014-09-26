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

~~~ sdparse
Just some tokens
~~~

~~~ sdparse
Tokens/Noun with/Adpos POS/Noun
~~~

~~~ sdparse
A dependency
det(dependency, A)
~~~

<div class="sd-parse">
Alternative syntax
</div>

<div class="sd-parse" tabs="yes">
Dynamic visualization (click "edit!")
</div>

~~~ sdparse
Example with error
det(no-such, token)
~~~

----------

## CoNLL-U example

<div class="conllu-parse" tabs="yes">
1     I         I        PRON    PRN      Num=Sing|Per=1     2      nsubj _ _
2-3   haven't   _        _       _        _                  _      _ _ _
2     have      have     VERB    VB       Tens=Pres          0      root _ _
3     not       not      ADV     RB       _                  2      neg _ _
4     a         a        DET     DT       _                  5      det _ _
5     clue      clue     NOUN    NN       Num=Sing           2      dobj _ _
6     .         .        PUNCT   .        _                  2      punct _ _
</div>

Simplified syntax + sentence label

~~~ conllu
# sentence-label long-label
1     I         I        PRON    PRN      Num=Sing|Per=1     2      nsubj _ _
2     have      have     VERB    VB       Tens=Pres          0      root _ _
~~~

<a name="hebrew" />

## Right-to-left text (Hebrew)

~~~ sdparse
Aדני/NOUN Aראה/VERB Aסרט/NOUN
nsubj(Aראה, Aדני)
dobj(Aראה, Aסרט)
~~~

----------

# Some Jekyll 

## Finnish documentation for relations containing "cop" 

{% for p in site.fi-dep %}
{% if p.title contains "cop" %}
{{ p.content }}
{% endif %}
{% endfor %}

## Finnish documentation for relations with tag "case"

{% for p in site.fi-dep %}
{% if p.tags contains "case" %}
{{ p.content }}
{% endif %}
{% endfor %}
