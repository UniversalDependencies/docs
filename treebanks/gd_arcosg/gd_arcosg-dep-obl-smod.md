---
layout: base
title:  'Statistics of obl:smod in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `obl:smod`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="gd_arcosg-dep-obl-tmod.html">obl:tmod</a></tt>.

27 nodes (0%) are attached to their parents as `obl:smod`.

23 instances of `obl:smod` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40740740740741.

The following 5 pairs of parts of speech are connected with `obl:smod`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (15; 56% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (8; 30% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obl:smod	color:blue
1	Thug	toir	VERB	V-s	Tense=Past	0	root	_	_
2	am	an	DET	Tdsm	Gender=Masc|Number=Sing	3	det	_	_
3	fear	fear	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
4	beag	beag	ADJ	Aq-smn	Case=Nom|Gender=Masc|Number=Sing	3	amod	_	_
5	duilleag	duilleag	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	1	obj	_	_
6	phàipeir	pàipeir	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	a-mach	a-mach	ADV	Rs	_	1	advmod	_	_
8	às	as	ADP	Sp	_	9	case	_	_
9	pòcaid	pòcaid	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	1	obl	_	_
10	taobh	taobh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	9	obl:smod	_	_
11	a-staigh	a-staigh	ADJ	Aq	_	10	amod	_	_
12	na	an	DET	Tdsfg	Case=Gen|Gender=Fem|Number=Sing	13	det	_	_
13	seacaid	seacaid	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	_
14	aige	aig	ADP	Pr3sm	Gender=Masc|Number=Sing|Person=3	13	obl	_	SpaceAfter=No
15	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:smod	color:blue
1	Ach	ach	CCONJ	Cc	_	2	cc	_	_
2	cò	cò	PRON	Uq	Mood=Int	0	root	_	_
3	a-seo	a-seo	PRON	Pd	_	2	nsubj	_	_
4	a	a	PART	Q-r	PartType=Vb|PronType=Rel	5	mark:prt	_	_
5	thàinig	thig	VERB	V-s	Tense=Past	3	acl:relcl	_	_
6	latha	latha	ADV	Rt	_	5	advmod	_	_
7	rathad	rathad	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	5	obl:smod	_	_
8	na	an	DET	Tdsfg	Case=Gen|Gender=Fem|Number=Sing	9	det	_	_
9	[?]	[?]	X	Xx	_	7	nmod	_	_
10	ris	ri	ADP	Pr3sm	Gender=Masc|Number=Sing|Person=3	5	obl	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 obl:smod	color:blue
1	Tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	dà	dà	NUM	Mc	_	3	nummod	_	_
3	shluagh	sluagh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
4	eile	eile	ADJ	Aq-smn	Case=Nom|Gender=Masc|Number=Sing	3	amod	_	_
5	anns	anns	ADP	Sp	_	7	case	_	_
6	an	an	DET	Tdsf	Gender=Fem|Number=Sing	7	det	_	_
7	Eòrpa	Eòrpa	PROPN	Nt	_	3	obl	_	_
8	an	an	PROPN	Nt	_	7	flat	_	_
9	Iar	Iar	PROPN	Nt	_	7	flat	_	_
10	nach	nach	PART	Qnr	PartType=Vb|Polarity=Neg|PronType=Rel	11	mark:prt	_	_
11	eil	bi	VERB	V-p--d	Tense=Pres	1	ccomp	_	_
12	cinnt	cinnt	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
13	aig	aig	ADP	Sp	_	14	case	_	_
14	daoine	duine	NOUN	Ncpmd	Case=Dat|Gender=Masc|Number=Plur	11	obl	_	_
15	co	co	PRON	Uq	Mood=Int	18	obl:smod	_	_
16	ás	ás	ADV	R	_	15	advmod	_	_
17	a	a	PART	Q-r	PartType=Vb|PronType=Rel	18	mark:prt	_	_
18	thàinig	thig	VERB	V-s	Tense=Past	11	ccomp	_	_
19	iad	iad	PRON	Pp3p	Number=Plur|Person=3	18	nsubj	_	SpaceAfter=No
20	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


