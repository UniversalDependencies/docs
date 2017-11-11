---
layout: base
title:  'Statistics of expl:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pv.html">expl:pv</a></tt>.

64 nodes (0%) are attached to their parents as `expl:pass`.

53 instances of `expl:pass` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.359375.

The following 2 pairs of parts of speech are connected with `expl:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (63; 98% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:pass	color:blue
1	Aceasta	acesta	PRON	Pd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	ref=MATT1.22
2	tot	tot	ADV	Rg	_	3	advmod	_	ref=MATT1.22
3	fu	fi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT1.22
4	ca	ca	ADV	Rg	_	7	mark	_	ref=MATT1.22
5	să	să	PART	Qs	PartType=Sub	4	fixed	_	ref=MATT1.22
6	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pass	_	ref=MATT1.22
7	împle	umple	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	ref=MATT1.22
8	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	9	obj	_	ref=MATT1.22
9	zice	zice	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	mark	_	ref=MATT1.22
10	Domnul	domn	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	ref=MATT1.22
11	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	ref=MATT1.22
12	prorocul	proroc	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	obl	_	ref=MATT1.22
13	zicînd	zice	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	9	advcl	_	ref=MATT1.22|SpaceAfter=No
14	:	:	PUNCT	COLON	_	3	punct	_	ref=MATT1.22

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl:pass	color:blue
1	(	(	PUNCT	LPAR	_	6	punct	_	ref=MATT13.12.comment|SpaceAfter=No
2	că	că	SCONJ	Csssp	Polarity=Pos	6	mark	_	ref=MATT13.12.comment
3	cela	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	iobj	_	ref=MATT13.12.comment
4	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	5	nsubj	_	ref=MATT13.12.comment
5	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl	_	ref=MATT13.12.comment
6	da	da	ADV	Rg	_	0	root	_	ref=MATT13.12.comment|SpaceAfter=No
7	-să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	6	expl:pass	_	ref=MATT13.12.comment|SpaceAfter=No
8	-va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux	_	ref=MATT13.12.comment
9	lui	el	PRON	Pp3msd--------s	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	6	iobj	_	ref=MATT13.12.comment|SpaceAfter=No
10	,	,	PUNCT	COMMA	_	15	punct	_	ref=MATT13.12.comment
11	și	și	CCONJ	Ccssp	Polarity=Pos	15	cc	_	ref=MATT13.12.comment
12	mai	mai	ADV	Rg	_	13	advmod	_	ref=MATT13.12.comment
13	mult	mult	ADV	Rg	_	15	advmod	_	ref=MATT13.12.comment
14	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	15	aux	_	ref=MATT13.12.comment
15	avea	avea	VERB	Vmn	VerbForm=Inf	6	conj	_	ref=MATT13.12.comment|SpaceAfter=No
16	;	;	PUNCT	SCOLON	_	27	punct	_	ref=MATT13.12.comment
17	iară	iar	CCONJ	Ccssp	Polarity=Pos	27	cc	_	ref=MATT13.12.comment
18	carele	care	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	20	nsubj	_	ref=MATT13.12.comment
19	n-	nu	ADV	Qz	Polarity=Neg	20	advmod	_	ref=MATT13.12.comment|SpaceAfter=No
20	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	xcomp	_	ref=MATT13.12.comment
21	și	și	CCONJ	Ccssp	Polarity=Pos	23	advmod	_	ref=MATT13.12.comment
22	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	23	obj	_	ref=MATT13.12.comment
23	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	csubj:pass	_	ref=MATT13.12.comment
24	încă	încă	ADV	Rg	_	27	advmod	_	ref=MATT13.12.comment
25	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	27	expl:pass	_	ref=MATT13.12.comment
26	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	27	aux	_	ref=MATT13.12.comment
27	lua	lua	VERB	Vmn	VerbForm=Inf	6	conj	_	ref=MATT13.12.comment
28	dela	de~la	ADP	Spsa	AdpType=Prep|Case=Acc	29	case	_	ref=MATT13.12.comment
29	el	el	PRON	Pp3msa--------s	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	27	obl	_	ref=MATT13.12.comment|SpaceAfter=No
30	)	)	PUNCT	RPAR	_	6	punct	_	ref=MATT13.12.comment|SpaceAfter=No
31	.	.	PUNCT	PERIOD	_	6	punct	_	ref=MATT13.12.comment

~~~


