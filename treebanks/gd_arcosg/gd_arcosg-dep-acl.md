---
layout: base
title:  'Statistics of acl in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="gd_arcosg-dep-acl-relcl.html">acl:relcl</a></tt>.

84 nodes (0%) are attached to their parents as `acl`.

84 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.05952380952381.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (53; 63% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (14; 17% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (7; 8% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (7; 8% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	oh	oh	INTJ	I	_	3	discourse	_	_
2	thì	thì	INTJ	I	_	3	discourse	_	_
3	fhios	fios	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	gun	gu	PART	Qa	PartType=Cmpl	5	mark:prt	_	_
5	robh	bi	VERB	V-s--d	Tense=Past	3	acl	_	_
6	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
7	ag	ag	PART	Sa	_	8	case	_	_
8	obair	obraich	NOUN	Nv	VerbForm=Vnoun	5	xcomp:pred	_	_
9	air	air	ADP	Sp	_	10	case	_	_
10	iad	iad	PRON	Pp3p	Number=Plur|Person=3	8	obl	_	_
11	an-raoir	an-raoir	ADV	Rt	_	8	advmod	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 acl	color:blue
1	chan	cha	PART	Qn	PartType=Vb|Polarity=Neg	2	mark:prt	_	_
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
1	chan	cha	PART	Qn	PartType=Vb|Polarity=Neg	2	mark:prt	_	_
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


