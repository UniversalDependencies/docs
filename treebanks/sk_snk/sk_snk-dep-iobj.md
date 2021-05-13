---
layout: base
title:  'Statistics of iobj in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `iobj`

This relation is universal.

128 nodes (0%) are attached to their parents as `iobj`.

72 instances of `iobj` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.546875.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (88; 69% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (24; 19% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (12; 9% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Sám	sám	DET	PFms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	3	xcomp	3:xcomp	_
2	seba	seba	PRON	PPhs4	Case=Acc|Number=Sing|PronType=Prs|Reflex=Yes	3	iobj	3:iobj	_
3	vyhlasoval	vyhlasovať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
4	za	za	ADP	Eu4	AdpType=Prep|Case=Acc	8	case	8:case	_
5	„	„	PUNCT	Z	_	6	punct	6:punct	SpaceAfter=No
6	súcitného	súcitný	ADJ	AAms4x	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	SpaceAfter=No
7	”	”	PUNCT	Z	_	6	punct	6:punct	_
8	konzervatívca	konzervatívec	NOUN	SSms4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	obl:arg	3:obl:arg:za:acc	SpaceAfter=No
9	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Štúdium	štúdium	NOUN	SSns4	Case=Acc|Gender=Neut|Number=Sing	2	iobj	2:iobj	_
2	dokončil	dokončiť	VERB	VLdscm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
3	ako	ako	SCONJ	O	_	4	mark	4:mark	_
4	samouk	samouk	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	xcomp	2:xcomp	SpaceAfter=No
5	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Varoval	varovať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
2	Sýriu	sýria	PROPN	SSfs4:r	Case=Acc|Gender=Fem|Number=Sing	1	iobj	1:iobj	SpaceAfter=No
3	,	,	PUNCT	Z	_	5	punct	5:punct	_
4	aby	aby	SCONJ	OY	Mood=Cnd	5	mark	5:mark	_
5	prestala	prestať	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	1	ccomp	1:ccomp	_
6	podporovať	podporovať	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	5	xcomp	5:xcomp	_
7	teroristov	terorista	NOUN	SSmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	6	obj	6:obj	SpaceAfter=No
8	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


