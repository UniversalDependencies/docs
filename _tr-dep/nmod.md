---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

The `nmod` relation is used for nominal modifiers.
They depend either on another noun (group “noun dependents”) or on a predicate (group “non-core dependents of clausal predicates”).

`nmod` is a [noun](tr-pos/NOUN) (or noun phrase) functioning as a non-core (oblique) argument or adjunct.
This means that it functionally corresponds to an adverbial when it attaches to a verb, adjective or other adverb.
But when attaching to a noun, it corresponds to an attribute, or genitive complement (the terms are less standardized here).

The `nmod` relation is further specified by the [Case](tr-feat/Case) feature or [case]() relation.

We also use the following language-specific subtypes for nmod:

- [nomd:cau](nmod-cau): nominal modifier of a causative predicate that
  markes the _causee_.
- [nmod:comp](nmod-comp): a comparative nominal modifier
- [nmod:pass](nmod-pass): nominal modifier of a passive predicate that
  express the actor (subject of the active predicate)
- [nmod:tmod](nmod-tmod): nominal modifier that indicates time
- [nmod:own](nmod-own): owner in a possessive existential sentence
- [nmod:poss](nmod-poss): possessor in in a genitive-possessive construction
- [nmod:part](nmod-part): noun modifier specifying the whole-part relation

We do not currently distinguish between core arguments and adjuncts
(TODO: link to discussion).

~~~ conllu
# I read the book on the plane
1	Kitabı	kitap	NOUN	NOUN	Case=Acc	3	dobj
2	uçakta	uçak	NOUN	NOUN	Case=Loc	3	nmod
3	okudum	oku	VERB	VERB	Tense=Past|Person=1|Number=Sing	0	root
~~~

~~~ conllu
# I read the book with the glasses
1	Kitabı	kitap	NOUN	NOUN	Case=Acc	3	dobj
2	gözlükle	gözlük	NOUN	NOUN	Case=Ins	3	nmod
3	okudum	oku	VERB	VERB	Tense=Past|Person=1|Number=Sing	0	root
~~~

~~~ conllu
# I read the book out of curiosity
1	Kitabı	kitap	NOUN	NOUN	Case=Acc	3	dobj
2	meraktan	merak	NOUN	NOUN	Case=Abl	3	nmod
3	okudum	oku	VERB	VERB	Tense=Past|Person=1|Number=Sing	0	root
~~~

~~~ conllu
# I read the book to the children
1	Kitabı	kitap	NOUN	NOUN	Case=Acc	3	dobj
2	çocuklara	çocuk	NOUN	NOUN	Case=Dat	3	nmod
3	okudum	oku	VERB	VERB	Tense=Past|Person=1|Number=Sing	0	root
~~~

~~~ sdparse
resim –li kitap \n (the\/a) book with illustrations
nmod(kitap, resim)
case(resim, –li)
~~~
