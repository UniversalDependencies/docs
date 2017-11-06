---
layout: base
title:  'Statistics of expl:pv in UD_Croatian'
udver: '2'
---

## Treebank Statistics: UD_Croatian: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="hr-dep-expl.html">expl</a></tt>.

2161 nodes (1%) are attached to their parents as `expl:pv`.

1597 instances of `expl:pv` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0564553447478.

The following 5 pairs of parts of speech are connected with `expl:pv`: <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (2130; 99% instances), <tt><a href="hr-pos-ADV.html">ADV</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (20; 1% instances), <tt><a href="hr-pos-AUX.html">AUX</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl:pv	color:blue
1	Bivši	bivši	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
2	bugarski	bugarski	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	ministar	ministar	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
4	unutrašnjih	unutrašnji	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	5	amod	_	_
5	poslova	posao	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	_
6	odriče	odricati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	6	expl:pv	_	_
8	imuniteta	imunitet	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	6	obj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Poslije	poslije	ADP	_	Case=Gen	2	case	_	_
2	0:03	0:03	NUM	_	NumType=Mult	5	nummod	_	_
3	bilo	biti	AUX	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	5	aux	_	_
4	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
5	teško	teško	ADV	_	Degree=Pos	0	root	_	_
6	vraćati	vraćati	VERB	_	VerbForm=Inf	5	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	a	a	CCONJ	_	_	10	cc	_	_
9	kamoli	kamoliti	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advmod	_	_
10	pobijediti	pobijediti	VERB	_	VerbForm=Inf	5	conj	_	orig_deprel=nsubj|SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 expl:pv	color:blue
1	Upitan	upitati	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	18	parataxis	_	_
2	osjeća	osjećati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
3	li	li	PART	_	_	2	mark	_	_
4	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	2	expl:pv	_	_
5	kao	kao	SCONJ	_	_	6	case	_	_
6	upravitelj	upravitelj	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	obl	_	_
7	hotela	hotel	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
8	kad	kad	ADV	_	Degree=Pos|PronType=Int,Rel	11	advmod	_	_
9	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	u	u	ADP	_	Case=Loc	11	case	_	_
11	pitanju	pitanje	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	2	advcl	_	_
12	predsjednici	predsjednik	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	_
13	vlada	vlada	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	12	nmod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	1	punct	_	_
15	Van	Van	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	16	det	_	_
16	Rompuy	Rompuy	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	_
17	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	18	expl:pv	_	_
18	nakostriješi	nakostriješiti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
19	.	.	PUNCT	_	_	18	punct	_	_

~~~


