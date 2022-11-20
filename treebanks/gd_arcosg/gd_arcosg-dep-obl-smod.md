---
layout: base
title:  'Statistics of obl:smod in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `obl:smod`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="gd_arcosg-dep-obl-tmod.html">obl:tmod</a></tt>.

59 nodes (0%) are attached to their parents as `obl:smod`.

53 instances of `obl:smod` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.50847457627119.

The following 6 pairs of parts of speech are connected with `obl:smod`: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (33; 56% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (19; 32% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:smod	color:blue
1	Ach	ach	CCONJ	Cc	_	2	cc	_	_
2	cò	cò	PRON	Uq	PronType=Int	0	root	_	_
3	a-seo	a-seo	PRON	Pd	_	2	nsubj	_	_
4	a	a	PART	Q-r	PartType=Vb|PronType=Rel	5	nsubj	_	_
5	thàinig	thig	VERB	V-s	Tense=Past	3	acl:relcl	_	_
6	latha	latha	ADV	Rt	_	5	advmod	_	_
7	rathad	rathad	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	5	obl:smod	_	_
8	na	an	DET	Tdsfg	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	[?]	[?]	X	Xx	_	7	nmod	_	_
10	ri	ri	ADP	Sp	_	11	case	_	_
11	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	5	obl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:smod	color:blue
1	tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
2	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	a'	ag	PART	Sa	_	4	case	_	_
4	dol	rach	NOUN	Nv	VerbForm=Vnoun	1	xcomp:pred	_	_
5	sìos	sìos	ADV	Rs	_	4	advmod	_	_
6	pìos	pìos	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	4	obl:smod	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 31 obl:smod	color:blue
1	chan	chan	PART	Qn	PartType=Cmpl|Polarity=Neg	2	mark:prt	_	_
2	eil	bi	VERB	V-p--d	Tense=Pres	0	root	_	_
3	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	t-ainm	ainm	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
5	aig	aig	ADP	Sp	_	6	case	_	_
6	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	4	nmod	_	_
7	aig	aig	ADP	Sp	_	8	case	_	_
8	mi	mi	PRON	Pp1s	Number=Sing|Person=1	2	xcomp:pred	_	_
9	idir	idir	ADV	Rg	_	2	advmod	_	_
10	ach	ach	CCONJ	Cc	_	11	cc	_	_
11	bha	bi	VERB	V-s	Tense=Past	2	conj	_	_
12	[Name]	[Name]	PROPN	Nn-mn	Case=Nom|Gender=Masc	11	nsubj	_	_
13	[Name]	[Name]	PROPN	Nn-mn	Case=Nom|Gender=Masc	12	flat:name	_	_
14	ag	ag	PART	Sa	_	15	case	_	_
15	ràdh	abair	NOUN	Nv	VerbForm=Vnoun	11	xcomp:pred	_	_
16	gun	gun	PART	Qa	PartType=Cmpl	18	mark:prt	_	_
17	do	do	PART	Q--s	Tense=Past	18	mark:prt	_	_
18	dh’fhalbh	falbh	VERB	V-s	Tense=Past	15	ccomp	_	_
19	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	18	nsubj	_	_
20	le	le	ADP	Sp	_	21	case	_	_
21	canoe	canoe	X	Xfe	Foreign=Yes	18	obl	_	_
22	feasgar	feasgar	ADV	Rt	_	18	advmod	_	_
23	an-dè	an-dè	ADV	Rt	_	18	advmod	_	_
24	agus	agus	CCONJ	Cc	_	26	cc	_	_
25	chan	chan	PART	Qn	PartType=Cmpl|Polarity=Neg	26	mark:prt	_	_
26	eil	bi	VERB	V-p--d	Tense=Pres	21	conj	_	_
27	sinn	sinn	PRON	Pp1p	Number=Plur|Person=1	26	nsubj	_	_
28	cinnteach	cinnteach	ADJ	Ap	_	26	xcomp:pred	_	_
29	cò	cò	PRON	Uq	PronType=Int	31	nmod	_	_
30	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	31	det	_	_
31	taobh	taobh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	28	obl:smod	_	_
32	a	a	PART	Q-r	PartType=Vb|PronType=Rel	33	obl:smod	_	_
33	chaidh	rach	VERB	V-s	Tense=Past	31	acl:relcl	_	_
34	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	33	nsubj	_	_

~~~


