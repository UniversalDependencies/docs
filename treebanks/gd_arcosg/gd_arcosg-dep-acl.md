---
layout: base
title:  'Statistics of acl in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="gd_arcosg-dep-acl-relcl.html">acl:relcl</a></tt>.

45 nodes (0%) are attached to their parents as `acl`.

45 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.64444444444444.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (26; 58% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (10; 22% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (6; 13% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl	color:blue
1	Tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	dearbhadh	dearbhadh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
3	air	air	ADP	Sp	_	5	case	_	_
4	a’	an	DET	Tdsf	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	chùis	cùis	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	1	xcomp:pred	_	_
6	do	do	ADP	Sp	_	8	obl	_	_
7	nach	nach	PART	Qn	PartType=Cmpl|Polarity=Neg	8	mark:prt	_	_
8	tug	toir	VERB	V-s--d	Tense=Past	2	acl	_	_
9	Mac	Mac	PART	Up	PartType=Pat	8	nsubj	_	_
10	na	an	DET	Tdsfg	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	flat:name	_	_
11	Ceàrdaich	Ceàrdaich	PROPN	Nn	_	9	flat:name	_	_
12	an	an	DET	Tdsf	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	aire	aire	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
14	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 acl	color:blue
1	chan	chan	PART	Qn	PartType=Cmpl|Polarity=Neg	2	mark:prt	_	_
2	eil	bi	VERB	V-p--d	Tense=Pres	0	root	_	_
3	mi	mi	PRON	Pp1s	Number=Sing|Person=1	2	nsubj	_	_
4	cinnteach	cinnteach	ADJ	Ap	_	2	xcomp:pred	_	_
5	an	an	PART	Qq	PartType=Vb|PronType=Int	6	mark:prt	_	_
6	robh	bi	VERB	V-s--d	Tense=Past	10	reparandum	_	_
7	gu	gu	PART	Qa	PartType=Cmpl	8	mark:prt	_	_
8	robh	bi	VERB	V-s--d	Tense=Past	10	reparandum	_	_
9	gu	gu	PART	Qa	PartType=Cmpl	10	mark:prt	_	_
10	robh	bi	VERB	V-s--d	Tense=Past	4	ccomp	_	_
11	fios	fios	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
12	aig	aig	ADP	Sp	_	13	case	_	_
13	Ryovitch	Ryovitch	PROPN	Nn	_	10	xcomp:pred	_	_
14	dè	dè	PRON	Uq	PronType=Int	16	nmod	_	_
15	'n	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	taobh	taobh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	11	acl	_	_
17	a	a	PART	Q-r	PartType=Vb|PronType=Rel	18	obl	_	_
18	bha	bi	VERB	V-s	Tense=Past	16	acl:relcl	_	_
19	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	18	nsubj	_	_
20	fhèin	fèin	PRON	Px	Reflex=Yes	19	nmod	_	_
21	a'	ag	PART	Sa	_	22	case	_	_
22	dol	rach	NOUN	Nv	VerbForm=Vnoun	18	xcomp:pred	_	_
23	nas	nas	PART	Uc	PartType=Comp	24	mark:prt	_	_
24	motha	math	ADJ	Apc	Degree=Cmp,Sup	22	advmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl	color:blue
1	chan	chan	PART	Qn	PartType=Cmpl|Polarity=Neg	2	mark:prt	_	_
2	eil	bi	VERB	V-p--d	Tense=Pres	0	root	_	_
3	fhios	fios	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	aig	aig	ADP	Sp	_	5	case	_	_
5	mi	mi	PRON	Pp1s	Number=Sing|Person=1	2	xcomp:pred	_	_
6	air	air	ADP	Sp	_	8	case	_	_
7	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	t-saoghal	saoghal	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	2	obl	_	_
9	dè	dè	PRON	Uq	PronType=Int	3	acl	_	_
10	ghabhas	gabh	VERB	V-f--r	Tense=Fut	9	acl:relcl	_	_
11	dèanamh	dèan	NOUN	Nv	VerbForm=Vnoun	10	xcomp	_	_

~~~


