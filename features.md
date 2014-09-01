---
layout: base
title:  'Features'
---

# Features

Alphabetical listing

<ul>
{% for p in site.ud-feat %}
  <li><a href="{{ p.url | remove_first:'/' }}">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>

All of these can be considered attributes of lemmas (rather than
individual word forms) and they represent a fine-grained
sub-classification of words.

Many features' names suggest that they are subclasses of one
particular core part of speech but this is not always the case,
especially not with "prontype". We may want to rename them if this is
too confusing but I'm quite fine with the current names. Some features
are boolean, see below.

The list of features is certainly not exhausting (even if you feel
exhausted after reading it :-)) and new features may appear as new
tagsets are converted.

There is no consistent solution for fusion words (a word that is
result of merging two other words which are syntactically independent
and belong to different parts of speech): Czech "dělals" (dělal + jsi
... main verb + auxiliary), "proň" (pro + něj ... preposition +
pronoun), German "zum" (zu + dem ... preposition + article) etc.
Interset currently contains a few ad-hoc values for instantiations
that I encountered but the only truly general approach seems to be to
split such words into separate tokens (Interset takes input
tokenization as fixed).
