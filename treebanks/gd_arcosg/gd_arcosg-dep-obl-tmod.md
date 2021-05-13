---
layout: base
title:  'Statistics of obl:tmod in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="gd_arcosg-dep-obl-smod.html">obl:smod</a></tt>.

119 nodes (0%) are attached to their parents as `obl:tmod`.

93 instances of `obl:tmod` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92436974789916.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (67; 56% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (44; 37% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:tmod	color:blue
1	suidh	suidh	VERB	Vm-2s	Mood=Imp|Person=2	0	root	_	_
2	thall	thall	ADV	Rs	_	1	advmod	_	_
3	treiseag	treiseag	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	1	obl:tmod	_	_
4	bheag	beag	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
5	eile	eile	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 obl:tmod	color:blue
1	an	an	ADP	Sp	_	3	case	_	_
2	a	a	PRON	Dp3sf	Gender=Fem|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	seasamh	seas	NOUN	Nv	VerbForm=Inf	0	root	_	_
4	anns	an	ADP	Sp	_	6	case	_	_
5	an	an	DET	Tdsm	Gender=Masc|Number=Sing	6	det	_	_
6	doras	doras	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	Fi	_	9	punct	_	_
8	ag	ag	PART	Sa	_	9	case	_	_
9	èigheachd	èigh	NOUN	Nv	VerbForm=Vnoun	3	conj	_	SpaceAfter=No
10	...	...	PUNCT	Fb	_	11	punct	_	_
11	fad	fad	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	3	obl:tmod	_	_
12	a’	an	DET	Tdsmg	Case=Gen|Gender=Masc|Number=Sing	13	det	_	_
13	latha	latha	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	?	?	PUNCT	Fg	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 obl:tmod	color:blue
1	daoine	duine	NOUN	Ncpmn	Case=Nom|Gender=Masc|Number=Plur	8	dislocated	_	_
2	a	a	PART	Q-r	PartType=Vb|PronType=Rel	3	mark:prt	_	_
3	tha	bi	VERB	V-p	Tense=Pres	1	acl:relcl	_	_
4	ann	an	ADP	Sp	_	6	case	_	_
5	an	an	ADP	Sp	_	4	fixed	_	_
6	holiday	holiday	NOUN	Xfe	Foreign=Yes	3	xcomp:pred	_	_
7	houses	houses	NOUN	Xfe	Foreign=Yes	6	flat:foreign	_	_
8	dh’fheumadh	feum	VERB	V-h	Mood=Cnd	0	root	_	_
9	iad	iad	PRON	Pp3p	Number=Plur|Person=3	8	nsubj	_	_
10	cur	cuir	NOUN	Nv	VerbForm=Vnoun	1	xcomp	_	_
11	airson	airson	ADP	Nf	_	14	case	_	_
12	dìreach	dìreach	INTJ	I	_	10	discourse	_	_
13	nach	nach	PART	Qn	PartType=Cmpl|Polarity=Neg	14	mark:prt	_	_
14	eil	bi	VERB	V-p--d	Tense=Pres	10	ccomp	_	_
15	an	an	DET	Tdsm	Gender=Masc|Number=Sing	16	det	_	_
16	taigh	taigh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
17	ach	ach	ADP	Sp	_	18	case	_	_
18	occupied	occupied	ADJ	Xfe	Foreign=Yes	14	xcomp:pred	_	_
19	ceithir	ceithir	NUM	Mc	_	20	nummod	_	_
20	mìosan	mìos	NOUN	Ncpfn	Case=Nom|Gender=Fem|Number=Plur	18	obl:tmod	_	_

~~~


