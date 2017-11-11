---
layout: base
title:  'Statistics of xcomp in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `xcomp`

This relation is universal.

112 nodes (1%) are attached to their parents as `xcomp`.

90 instances of `xcomp` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.69642857142857.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (51; 46% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (24; 21% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (19; 17% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (9; 8% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 xcomp	color:blue
1	Când	când	ADV	Rw	PronType=Int,Rel	4	advmod:tmod	_	_
2	Anița	Anița	PROPN	Npfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	_
3	bani	ban	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	4	obj	_	_
4	cerea	cere	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	advcl:tcl	_	Rhyme=ID10|SpaceAfter=No|Type=Paired
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	_
7	făcea	face	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
8	că	că	SCONJ	Csssp	Polarity=Pos	10	mark	_	_
9	n-	nu	ADV	Qz	Polarity=Neg	10	advmod	_	SpaceAfter=No
10	auzea	auzi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	xcomp	_	Rhyme=ID4|SpaceAfter=No|Type=Paired
11	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 xcomp	color:blue
1	Ferice	ferice	ADV	Rg	_	0	root	_	ref=MATT5.9
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	ref=MATT5.9
3	împăcătorii	împăcător	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	1	nmod:pmod	_	ref=MATT5.9|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	12	punct	_	ref=MATT5.9
5	că	că	SCONJ	Csssp	Polarity=Pos	12	mark	_	ref=MATT5.9
6	aceia	acela	PRON	Pd3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	12	nsubj:pass	_	ref=MATT5.9
7	fii	fiu	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	12	xcomp	_	ref=MATT5.9
8	lui	-ul	DET	Tf-so	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	9	det	_	ref=MATT5.9
9	Dumnedzeu	Dumnezeu	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	7	nmod	_	ref=MATT5.9
10	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	12	expl:pass	_	ref=MATT5.9
11	vor	vrea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	12	aux	_	ref=MATT5.9
12	chema	chema	VERB	Vmn	VerbForm=Inf	1	advcl	_	ref=MATT5.9|SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	1	punct	_	ref=MATT5.9

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 xcomp	color:blue
1	A	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	aux	_	_
2	început	începe	VERB	Vmp	VerbForm=Part	0	root	_	_
3	a	a	PART	Qn	PartType=Inf	5	mark	_	_
4	te	tu	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	5	obj	_	_
5	lua	lua	VERB	Vmn	VerbForm=Inf	2	ccomp	_	_
6	lumea	lume	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
7	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	ochi	ochi	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	5	obl	_	_
9	și	și	CCONJ	Ccssp	Polarity=Pos	12	cc	_	_
10	a	a	PART	Qn	PartType=Inf	12	mark	_	_
11	te	tu	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	12	obj	_	_
12	face	face	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
13	prost	prost	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	12	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


