---
layout: base
title:  'Statistics of acl in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="gd_arcosg-dep-acl-relcl.html">acl:relcl</a></tt>.

19 nodes (0%) are attached to their parents as `acl`.

18 instances of `acl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.57894736842105.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (9; 47% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (6; 32% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl	color:blue
1	'S	's	CCONJ	Cc	_	3	cc	_	_
2	a'	ag	PART	Sa	_	3	case	_	_
3	cluinntinn	cluinn	NOUN	Nv	VerbForm=Vnoun	0	root	_	_
4	nan	an	DET	Tdpmg	Case=Gen|Gender=Masc|Number=Plur	5	det	_	_
5	eun	eun	NOUN	Ncpmg	Case=Gen|Gender=Masc|Number=Plur	3	nsubj	_	_
6	a'	ag	PART	Sa	_	7	case	_	_
7	bruidhinn	bruidhinn	NOUN	Nv	VerbForm=Vnoun	5	acl	_	_
8	air	air	ADP	Sp	_	11	case	_	_
9	feadh	feadh	ADP	Nf	_	8	fixed	_	_
10	na	an	DET	Tdsfg	Case=Gen|Gender=Fem|Number=Sing	11	det	_	_
11	mòintich	mòinteach	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	Fe	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 acl	color:blue
1	am	an	DET	Tdsm	Gender=Masc|Number=Sing	2	det	_	_
2	ball	ball	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	ma-thà	ma-thà	ADV	Rg	_	2	advmod	_	_
4	a-staigh	a-staigh	ADV	Rs	_	7	advmod	_	_
5	ann	an	ADP	Sp	_	7	case	_	_
6	am	an	ADP	Sp	_	5	fixed	_	_
7	bucas	bucas	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	2	xcomp:pred	_	_
8	Astràilia	Astràilia	PROPN	Nt	_	7	nmod	_	_
9	ach	ach	CCONJ	Cc	_	10	cc	_	_
10	fhuair	faigh	VERB	V-s	Tense=Past	2	conj	_	_
11	Yankos	Yankos	PROPN	Nn	_	10	nsubj	_	_
12	buille	buille	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	10	obj	_	_
13	a'	ag	PART	Sa	_	14	case	_	_
14	leigeil	leig	NOUN	Nv	VerbForm=Vnoun	10	acl	_	_
15	le	le	ADP	Sp	_	17	case	_	_
16	a	a	DET	Dp3sm	Gender=Masc|Number=Sing|Person=3|Poss=Yes	17	nmod:poss	_	_
17	chas	cas	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	14	obl	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Chuala	cluinn	VERB	V-s	Tense=Past	0	root	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	1	obj	_	_
4	a'	ag	PART	Sa	_	5	case	_	_
5	snotairich	snotair	NOUN	Nv	VerbForm=Vnoun	3	acl	_	_
6	mar	mar	ADP	Sp	_	7	case	_	_
7	each	each	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	5	obl	_	_
8	aig	aig	ADP	Sp	_	9	case	_	_
9	ceann	ceann	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	5	obl	_	_
10	sgrìob	sgrìob	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
11	ghoirid	goirid	ADJ	Aq-smg	Case=Gen|Gender=Masc|Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


