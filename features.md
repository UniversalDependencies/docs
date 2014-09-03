---
layout: base
title:  'Features'
---

# Features

## Universal features

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

-------------

## Other features

The following features are left for further discussion. We may decide
to leave them optional and language/treebank-specific.

### NounType = class

Chinese classifiers between cardinal numbers and nouns. Note that this
is the only value of nountype. Interset also has the values “com” and
“prop” but in Universal Treebanks, we decided to distinguish these two
already at the level of POS tags.

### NameType

Classification of named entities (token-based, no nesting of entities
etc.) and terms. On one hand, this is pretty universal; on the other
hand, most of us would probably see it as a separate level of
annotation. There are treebanks where the FEAT column contains this
information but they are rare: I saw it in the Czech CoNLL 2006 & 2007
& 2009 data, and in one tagset for Japanese.

Values for named entities: geo, prs, giv, sur, nat, com, pro, oth

Values for terms: col, sci, che, med, tec, cel, gov, jus, fin, env, cul, spo, hob

(See https://wiki.ufal.ms.mff.cuni.cz/user:zeman:interset:features#nametype.)

-------------

## Language-specific documentation

(TODO)
