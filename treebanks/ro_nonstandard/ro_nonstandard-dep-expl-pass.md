---
layout: base
title:  'Statistics of expl:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pv.html">expl:pv</a></tt>.

63 nodes (0%) are attached to their parents as `expl:pass`.

52 instances of `expl:pass` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34920634920635.

The following 3 pairs of parts of speech are connected with `expl:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (61; 97% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-dep-_.html">_</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:pass	color:blue
1	Aceasta	acesta	PRON	Pd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	ref=MATT 1.22
2	tot	tot	ADV	Rg	_	3	advmod	_	ref=MATT 1.22
3	fu	fi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 1.22
4	ca	ca	ADV	Rg	_	7	mark	_	ref=MATT 1.22
5	să	să	PART	Qs	PartType=Sub	4	fixed	_	ref=MATT 1.22
6	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Refl|Strength=Weak	7	expl:pass	_	ref=MATT 1.22
7	împle	umple	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	ref=MATT 1.22
8	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		9	obj	_
9	zice	zice	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	mark	_	ref=MATT 1.22
10	Domnul	domn	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	ref=MATT 1.22
11	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	ref=MATT 1.22
12	prorocul	proroc	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	obl	_	ref=MATT 1.22
13	zicînd	zice	VERB	Vmg-----p	Mood=Ger|Polarity=Pos|VerbForm=Fin	9	advcl	_	ref=MATT 1.22
14	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 1.22

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl:pass	color:blue
1	(	(	PUNCT	LPAR	_	6	punct	_	ref=MATT 13.12.comment
2	că	că	SCONJ	Csssp	Polarity=Pos	6	mark	_	ref=MATT 13.12.comment
3	cela	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	iobj	_	ref=MATT 13.12.comment
4	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		5	nsubj	_
5	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl	_	ref=MATT 13.12.comment
6	da	da	ADV	Rg	_	0	root	_	ref=MATT 13.12.comment
7	-se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Refl|Strength=Weak	6	expl:pass	_	ref=MATT 13.12.comment
8	-va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux	_	ref=MATT 13.12.comment
9	lui	el	PRON	Pp3msd--------s 	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	6	iobj	_	ref=MATT 13.12.comment
10	,	,	PUNCT	COMMA	_	15	punct	_	ref=MATT 13.12.comment
11	şi	și	CCONJ	Ccssp	Polarity=Pos	15	cc	_	ref=MATT 13.12.comment
12	mai	mai	ADV	Rg	_	13	advmod	_	ref=MATT 13.12.comment
13	mult	mult	ADV	Rg	_	15	advmod	_	ref=MATT 13.12.comment
14	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	15	aux	_	ref=MATT 13.12.comment
15	avea	avea	VERB	Vmn	Mood=Inf|VerbForm=Fin	6	conj	_	ref=MATT 13.12.comment
16	;	;	PUNCT	SCOLON	_	27	punct	_	ref=MATT 13.12.comment
17	iară	iar	CCONJ	Ccssp	Polarity=Pos	27	cc	_	ref=MATT 13.12.comment
18	carele	care	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	20	nsubj	_	ref=MATT 13.12.comment
19	n-	nu	ADV	Qz	Polarity=Neg	20	advmod	_	ref=MATT 13.12.comment
20	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	xcomp	_	ref=MATT 13.12.comment
21	şi	și	CCONJ	Ccssp	Polarity=Pos	23	advmod	_	ref=MATT 13.12.comment
22	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		23	obj	_
23	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	csubj:pass	_	ref=MATT 13.12.comment
24	încă	încă	ADV	Rg	_	27	advmod	_	ref=MATT 13.12.comment
25	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Refl|Strength=Weak	27	expl:pass	_	ref=MATT 13.12.comment
26	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	27	aux	_	ref=MATT 13.12.comment
27	lua	lua	VERB	Vmn	Mood=Inf|VerbForm=Fin	6	conj	_	ref=MATT 13.12.comment
28	de la	de~la	ADP	Spsa	AdpType=Prep|Case=Acc	29	case	_	ref=MATT 13.12.comment
29	el	el	PRON	Pp3msa--------s 	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	27	obl	_	ref=MATT 13.12.comment
30	)	)	PUNCT	RPAR	_	6	punct	_	ref=MATT 13.12.comment
31	.	.	PUNCT	PERIOD	_	6	punct	_	ref=MATT 13.12.comment

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 expl:pass	color:blue
1	Dară	dar	CCONJ	Ccssp	Polarity=Pos	4	cc	_	ref=MATT 3.14
2	Ioan	Ioan	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	ref=MATT 3.14
3	foarte	foarte	ADV	Rg	_	4	advmod	_	ref=MATT 3.14
4	conteniia	conteni	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	ref=MATT 3.14
5	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	ref=MATT 3.14
6	El	el	PRON	Pp3msa--------s 	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	4	nmod:pmod	_	ref=MATT 3.14
7	grăind	grăi	VERB	Vmg-----p	Mood=Ger|Polarity=Pos|VerbForm=Fin	4	advcl	_	ref=MATT 3.14
8	:	:	PUNCT	COLON	_	10	punct	_	ref=MATT 3.14
9	Eu	eu	PRON	Pp1-sr	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj:pass	_	ref=MATT 3.14
10	trebuiesc	trebui	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	parataxis	_	ref=MATT 3.14
11	să	să	PART	Qs	PartType=Sub	13	mark	_	ref=MATT 3.14
12	mă	eu	_	Pp1-pa--------w	_	13	expl:pass	_	ref=MATT 3.14
13	botez	boteza	VERB	Vmsp1s	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	csubj	_	ref=MATT 3.14
14	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	ref=MATT 3.14
15	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	14	fixed	_	ref=MATT 3.14
16	Tine	tu	PRON	Pp2-sa--------s	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	13	obl	_	ref=MATT 3.14
17	şi	și	CCONJ	Ccssp	Polarity=Pos	19	cc	_	ref=MATT 3.14
18	Tu	tu	PRON	Pp2-sr	Case=Acc,Nom|Number=Sing|Person=1|PronType=Prs	19	nsubj	_	ref=MATT 3.14
19	vii	veni	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	10	conj	_	ref=MATT 3.14
20	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	21	case	_	ref=MATT 3.14
21	mine	eu	PRON	Pp1-sa--------s	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	19	obl	_	ref=MATT 3.14
22	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MATT 3.14

~~~


