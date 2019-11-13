---
layout: base
title:  'Statistics of expl:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pv.html">expl:pv</a></tt>.

315 nodes (0%) are attached to their parents as `expl:pass`.

274 instances of `expl:pass` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32698412698413.

The following 3 pairs of parts of speech are connected with `expl:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (307; 97% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (7; 2% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 expl:pass	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	10	cc	_	ref=MATT20.22
2	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	ref=MATT20.22
3	botezul	botez	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	10	obl	_	ref=MATT20.22
4	carele	care	PRON	Pw3msry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	8	obl	_	ref=MATT20.22
5	Eu	eu	PRON	Pp1-sr	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj:pass	_	ref=MATT20.22
6	Mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	8	expl:pass	_	ref=MATT20.22
7	voiu	vrea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres	8	aux	_	ref=MATT20.22
8	boteza	boteza	VERB	Vmn	VerbForm=Inf	3	acl	_	ref=MATT20.22|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	3	punct	_	ref=MATT20.22
10	boteza	boteza	VERB	Vmn	VerbForm=Inf	0	root	_	ref=MATT20.22|SpaceAfter=No
11	-vă	tu	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	10	expl:pass	_	ref=MATT20.22|SpaceAfter=No
12	-veți	vrea	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	10	aux	_	ref=MATT20.22|SpaceAfter=No
13	?	?	PUNCT	QUEST	_	10	punct	_	ref=MATT20.22

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 expl:pass	color:blue
1	Dară	dar	CCONJ	Ccssp	Polarity=Pos	13	cc	_	ref=MARC13.13
2	cela	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj:pass	_	ref=MARC13.13
3	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	5	nsubj	_	ref=MARC13.13
4	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux	_	ref=MARC13.13
5	răbda	răbda	VERB	Vmn	VerbForm=Inf	2	acl	_	ref=MARC13.13
6	până	până	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	8	case	_	ref=MARC13.13
7	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	fixed	_	ref=MARC13.13
8	sfîrșit	sfârșit	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	5	nmod:tmod	_	ref=MARC13.13|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	2	punct	_	ref=MARC13.13
10	acela	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	appos	_	ref=MARC13.13
11	să	să	PART	Qs	PartType=Sub	13	expl:pass	_	ref=MARC13.13
12	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	13	aux	_	ref=MARC13.13
13	mîntui	mântui	VERB	Vmn	VerbForm=Inf	0	root	_	ref=MARC13.13|SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	13	punct	_	ref=MARC13.13

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
28	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	30	case	_	ref=MATT13.12.comment
29	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	28	fixed	_	ref=MATT13.12.comment
30	el	el	PRON	Pp3msa--------s	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	27	obl	_	ref=MATT13.12.comment|SpaceAfter=No
31	)	)	PUNCT	RPAR	_	6	punct	_	ref=MATT13.12.comment|SpaceAfter=No
32	.	.	PUNCT	PERIOD	_	6	punct	_	ref=MATT13.12.comment

~~~


