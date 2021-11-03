---
layout: base
title:  'Statistics of obl:smod in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `obl:smod`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="gd_arcosg-dep-obl-tmod.html">obl:tmod</a></tt>.

54 nodes (0%) are attached to their parents as `obl:smod`.

49 instances of `obl:smod` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.53703703703704.

The following 5 pairs of parts of speech are connected with `obl:smod`: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (33; 61% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (15; 28% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:smod	color:blue
1	Ach	ach	CCONJ	Cc	_	2	cc	_	_
2	cò	cò	PRON	Uq	PronType=Int	0	root	_	_
3	a-seo	a-seo	PRON	Pd	_	2	nsubj	_	_
4	a	a	PART	Q-r	PartType=Vb|PronType=Rel	5	mark:prt	_	_
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:smod	color:blue
1	‘s	's	CCONJ	Cc	_	4	cc	_	_
2	cuin'	cuin'	PRON	Uq	PronType=Int	4	obl:smod	_	_
3	a	a	PART	Q-r	PartType=Vb|PronType=Rel	4	mark:prt	_	_
4	tha	bi	VERB	V-p	Tense=Pres	0	root	_	_
5	sibh	sibh	PRON	Pp2p	Number=Plur|Person=2	4	nsubj	_	_
6	'dol	rach	NOUN	Nv	VerbForm=Vnoun	4	xcomp:pred	_	_
7	an	an	ADP	Sp	_	8	case	_	_
8	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	6	obl	_	_
9	?	?	PUNCT	Fg	_	4	punct	_	_

~~~


