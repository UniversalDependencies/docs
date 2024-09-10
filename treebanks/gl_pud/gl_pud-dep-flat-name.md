---
layout: base
title:  'Statistics of flat:name in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="gl_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="gl_pud-dep-flat-foreign.html">flat:foreign</a></tt>.

262 nodes (1%) are attached to their parents as `flat:name`.

262 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19465648854962.

The following 8 pairs of parts of speech are connected with `flat:name`: <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt> (239; 91% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-NUM.html">NUM</a></tt> (12; 5% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:name	color:blue
1	O	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	sitio	sitio	NOUN	NCMS000	Gender=Masc|Number=Sing	9	nsubj	_	_
3	web	web	NOUN	NCFS000	Gender=Fem|Number=Sing	2	nmod	_	_
4	de	de	ADP	SP	AdpType=Prep	6	case	_	_
5	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Circuíto	circuíto	NOUN	NCMS000	Gender=Masc|Number=Sing	2	nmod	_	_
7	Yas	yas	PROPN	NP00000	_	6	nmod	_	_
8	Marina	marina	PROPN	NP00000	_	7	flat:name	_	_
9	ten	ter	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
10	os	o	DET	DA0MP0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	horarios	horario	NOUN	NCMP000	Gender=Masc|Number=Plur	9	obj	_	_
12	exactos	exacto	ADJ	AQ0MP	_	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	Fp	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	O	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
2	seu	seu	DET	DP3MS0	Definite=Def|Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	det	_	_
3	primeiro	primeiro	ADJ	AQ0MS	_	4	amod	_	_
4	rei	rei	NOUN	NCMS000	Gender=Masc|Number=Sing	0	root	_	_
5	foi	ser	AUX	VSIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	cop	_	_
6	Mojmír	Mojmír	PROPN	NP00000	_	4	nsubj	_	_
7	I	i	NUM	Z	NumType=Ord	6	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	Fc	_	10	punct	_	_
9	que	que	PRON	PR0CN000	Gender=Neut|PronType=Rel	10	nsubj	_	_
10	gobernou	gobernar	VERB	VMIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	acl	_	_
11	de	de	ADP	SP	AdpType=Prep	12	case	_	_
12	830	830	NUM	Z	NumType=Card	10	obl	_	_
13	a	a	ADP	SP	AdpType=Prep	14	case	_	_
14	846	846	NUM	Z	NumType=Card	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	Fp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:name	color:blue
1	Eu	eu	PRON	PP1CSN00	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	tamén	tamén	ADV	RG	_	4	advmod	_	_
3	me	me	PRON	PP1CS000	Gender=Com|Number=Sing|Person=1|PronType=Prs	4	iobj	_	_
4	pregunto	preguntar	VERB	VMIP1S0	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
5	se	se	SCONJ	CS	_	9	mark	_	_
6	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Copa	copa	NOUN	NCFS000	Gender=Fem|Number=Sing	9	nsubj	_	_
8	Davis	davis	PROPN	NP00000	_	7	flat:name	_	_
9	tivo	ter	VERB	VMIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	advcl	_	_
10	algo	algo	ADV	RG	_	9	obj	_	_
11	que	que	PRON	PR0MS0	Gender=Masc|Number=Sing|PronType=Rel	12	obj	_	_
12	ver	ver	VERB	VMN0000	VerbForm=Inf	10	acl	_	SpaceAfter=No
13	.	.	PUNCT	Fp	_	4	punct	_	_

~~~


