---
layout: base
title:  'Statistics of obl:tmod in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="gd_arcosg-dep-obl-smod.html">obl:smod</a></tt>.

164 nodes (0%) are attached to their parents as `obl:tmod`.

113 instances of `obl:tmod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.48780487804878.

The following 11 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (80; 49% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (47; 29% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (27; 16% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (1; 1% instances).


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
5	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	doras	doras	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	Fi	_	9	punct	_	_
8	ag	ag	PART	Sa	_	9	case	_	_
9	èigheachd	èigh	NOUN	Nv	VerbForm=Vnoun	3	conj	_	SpaceAfter=No
10	...	...	PUNCT	Fb	_	11	punct	_	_
11	fad	fad	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	3	obl:tmod	_	_
12	a’	an	DET	Tdsmg	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	latha	latha	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	?	?	PUNCT	Fg	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:tmod	color:blue
1	's	's	CCONJ	Cc	_	4	cc	_	_
2	cò	cò	PRON	Uq	PronType=Int	4	nmod	_	_
3	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	latha	latha	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
5	a	a	PART	Q-r	PartType=Vb|PronType=Rel	6	obl:tmod	_	_
6	chunnaic	faic	VERB	V-s	Tense=Past	4	csubj:cleft	_	_
7	sibh	sibh	PRON	Pp2p	Number=Plur|Person=2	6	nsubj	_	_
8	a'	ag	PART	Sa	_	9	case	_	_
9	falbh	falbh	NOUN	Nv	VerbForm=Vnoun	6	xcomp	_	_
10	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	9	nsubj	_	SpaceAfter=No
11	?	?	PUNCT	Fg	_	4	punct	_	_

~~~


