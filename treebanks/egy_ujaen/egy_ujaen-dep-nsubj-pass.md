---
layout: base
title:  'Statistics of nsubj:pass in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="egy_ujaen-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="egy_ujaen-dep-nsubj-outer.html">nsubj:outer</a></tt>.

33 nodes (1%) are attached to their parents as `nsubj:pass`.

33 instances of `nsubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24242424242424.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (13; 39% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> (10; 30% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt> (10; 30% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubj:pass	color:blue
1	(w)ṭ(.w)	wṭi̯	VERB	SFC|PastPass|Abstrel	Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
2	n	n	ADP	Pron.st	Case=Ben	3	case	_	_
3	⸗k	k	PRON	SFP	Gender=Masc|Number=Sing|Person=2|PronType=Prs	1	obl	_	_
4	ṭp	ṭp	NOUN	Subj	Gender=Masc|Number=Sing	1	nsubj:pass	_	_
5	⸗k	k	PRON	SFP|Poss=Yes	Gender=Masc|Number=Sing|Person=2|PronType=Prs	4	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj:pass	color:blue
1	Ḥr.w	Ḥr.w	PROPN	_	Case=Voc|Gender=Masc	5	dislocated	_	_
2	i҆m(.i҆)	m	ADJ	NisbaPrep	Case=Equ|Gender=Masc|Number=Sing	1	amod	_	_
3	Wśr(.w)	Wśr.w	PROPN	_	Gender=Masc	1	nmod	_	_
4	Ppy	Ppy	PROPN	_	Gender=Masc	3	appos	_	_
5	ḥtm(.w)	ḥtm	VERB	SFC|PastPass|Abstrel	Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
6	⸗k	k	PRON	SFP|Subj	Gender=Masc|Number=Sing|Person=2|PronType=Prs	5	nsubj:pass	_	_
7	m	m	ADP	Cons.st	Case=Ins	8	case	_	_
8	i҆r.t	i҆r.t	NOUN	_	Definite=Cons|Gender=Fem|Number=Sing	5	obl	_	_
9	Ḥr.w	Ḥr.w	PROPN	Gen	Case=Gen|Gender=Masc	8	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	i҆wi҆(.w)	i҆wr	VERB	SFC|PastPass|Abstrel	Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
2	Wni҆ś	Wni҆ś	PROPN	_	Gender=Masc	1	nsubj:pass	_	_
3	m	m	ADP	Cons.st	Case=Tem	4	case	_	_
4	grḥ	grḥ	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	_
5	mś(.w)	mśi̯	VERB	SFC|PastPass|Abstrel	Tense=Past|VerbForm=Fin|Voice=Pass	1	parataxis	_	_
6	Wni҆ś	Wni҆ś	PROPN	_	Gender=Masc	5	nsubj:pass	_	_
7	m	m	ADP	Cons.st	Case=Tem	8	case	_	_
8	grḥ	grḥ	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	_

~~~


