---
layout: base
title: 'Gender'
shortdef: 'gender'
---

## {{ page.title }}: {{ page.shortdef }}

Gender is usually a lexical feature of nouns and inflectional
feature of other parts of speech (adjectives, verbs) that mark
agreement with nouns. In English gender affects only the choice of
the personal pronoun <I>(he / she / it)</I> and the feature is
usually not encoded in English tagsets.

African languages have analogous feature of noun classes: there
might be separate grammatical categories for flat objects, long thin
objects etc. African noun classes are not covered in the current
proposal because none of the tagsets that are currently covered by
Interset is for a language that has noun classes. They might be added
in future.

### Masc: masculine gender

Nouns denoting male persons are masculine. Other nouns may be also
grammatically masculine, without any relation to sex. Example: [cs]
<I><span style='color: red'>hrad</span></I> (castle)

### Fem: feminine gender

Nouns denoting
female persons are feminine. Other nouns may be also grammatically
feminine, without any relation to sex. Example: [de] <I><span style='color: red'>Burg</span></I>
(castle)

### Neut: neuter gender

Some
languages have only the masculine/feminine distinction while others
also have this third gender for nouns that are neither masculine nor
feminine (grammatically).

### Com: common gender

Some languages do not distinguish
masculine/feminine most of the time but they do distinguish neuter
vs. non-neuter (Swedish neutrum / utrum). The non-neuter is called
common gender.

Note that it
could also be expressed as a combined value Gender
= &ldquo;Fem,Masc&rdquo;
and it is thus questionable whether we want to keep it also as a
separate value. In Interset I decided to keep it because I try
to limit using combined feature values to exceptional, undecided
cases, not to something that occurs systematically in the grammar.
The
natural downside is that we have to decide for every new tagset
mapping whether to use &ldquo;Com&rdquo;
or not.
