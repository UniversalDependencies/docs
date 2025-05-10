---
layout: base
title:  'Statistics of nsubj:pass in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="gd_arcosg-dep-nsubj-outer.html">nsubj:outer</a></tt>.

182 nodes (0%) are attached to their parents as `nsubj:pass`.

182 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.1978021978022.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (107; 59% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (30; 16% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (28; 15% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (10; 5% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (7; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Thèid	rach	AUX	V-f	Mood=Ind|Tense=Fut|VerbForm=Fin	4	aux:pass	_	_
2	binn	binn	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	a	a	PART	Ug	PartType=Inf	4	mark:prt	_	_
4	thoirt	toir	NOUN	Nv	VerbForm=Inf	0	root	_	_
5	air	air	ADP	Sp	_	6	case	_	_
6	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obl	_	_
7	a-rithist	a-rithist	ADV	Rt	AdvType=Tim	4	advmod	_	SpaceAfter=No
8	.	.	PUNCT	Fe	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:pass	color:blue
1	's	is	AUX	Wp-i	ExtPos=AUX|Tense=Pres	3	cop	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	fixed	_	_
3	[Name]	[Name]	PROPN	Nn-mn	Case=Nom|CleftType=Nom|Gender=Masc|NounType=Prs	0	root	_	Anonymised=Yes
4	a	a	PART	Q-r	PartType=Vb|PronType=Rel	7	nsubj:pass	_	_
5	chaidh	rach	AUX	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
6	a	a	PART	Ug	PartType=Inf	7	mark:prt	_	_
7	chur	cuir	NOUN	Nv	VerbForm=Inf	3	csubj:cleft	_	_
8	a	a	PART	Q-r	PartType=Vb|PronType=Rel	9	nsubj	_	_
9	bhiodh	bi	VERB	V-h	Mood=Ind|VerbForm=Fin	7	acl:relcl	_	_
10	ann	ann	ADV	Rs	AdvType=Loc|ExtPos=ADV	9	xcomp:pred	_	_
11	a	a	ADV	Rs	AdvType=Loc	10	fixed	_	_
12	shin	sin	ADV	Rs	AdvType=Loc	10	fixed	_	_
13	ge-tà	ge-tà	ADV	Rg	AdvType=Man	9	advmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	chaidh	rach	AUX	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
2	a	a	DET	Dp3sf	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nsubj:pass	_	_
3	coinneachadh	coinnich	NOUN	Nv	VerbForm=Inf	0	root	_	_
4	agus	agus	CCONJ	Cc	_	5	cc	_	_
5	thàinig	thig	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	3	conj	_	_
6	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
7	a-nis	a-nis	ADV	Rt	AdvType=Tim	5	advmod	_	_
8	gu	gu	ADP	Sp	_	9	case	_	_
9	Stoitkavitch	Stoitkavitch	PROPN	Nn	NounType=Prs	5	obl	_	_
10	le	le	ADP	Sp	_	11	case	_	_
11	Gough	Gough	PROPN	Nn	NounType=Prs	5	obl	_	_
12	mu	mu	ADP	Sp	_	14	case	_	_
13	a	a	PRON	Dp3sm	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	14	nmod:poss	_	_
14	choinneimh	coinneimh	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	11	nmod	_	_

~~~


