---
layout: base
title:  'Statistics of obl:unmarked in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `obl:unmarked`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="gd_arcosg-dep-obl-agent.html">obl:agent</a></tt>.

482 nodes (1%) are attached to their parents as `obl:unmarked`.

245 instances of `obl:unmarked` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.09336099585062.

The following 13 pairs of parts of speech are connected with `obl:unmarked`: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (189; 39% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (128; 27% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (87; 18% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (21; 4% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (20; 4% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (12; 2% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (9; 2% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (5; 1% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:unmarked	color:blue
1	Clach	clach	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	air	air	ADP	Sp	_	4	case	_	_
3	an	an	PART	Qq	PartType=Vb|PronType=Int	4	obl:unmarked	_	_
4	deach	rach	VERB	V-s--d	Mood=Ind|Tense=Past|VerbForm=Fin	1	acl:relcl	_	_
5	iomadach	iomadach	ADJ	Ar	_	6	amod	_	_
6	teine	teine	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
7	a	a	PART	Ug	PartType=Inf	8	mark:prt	_	_
8	chur	cuir	NOUN	Nv	VerbForm=Inf	1	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:unmarked	color:blue
1	suidh	suidh	VERB	Vm-2s	Mood=Ind|Person=2|VerbForm=Fin	0	root	_	_
2	thall	thall	ADV	Rs	AdvType=Loc	1	advmod	_	_
3	treiseag	treiseag	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	1	obl:unmarked	_	_
4	bheag	beag	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_
5	eile	eile	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 obl:unmarked	color:blue
1	an	an	ADP	Sp	_	3	case	_	_
2	a	a	PRON	Dp3sf	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
3	seasamh	seas	NOUN	Nv	VerbForm=Inf	0	root	_	_
4	anns	an	ADP	Sp	_	6	case	_	_
5	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	doras	doras	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	Fi	_	9	punct	_	_
8	ag	ag	PART	Sa	_	9	case	_	_
9	èigheachd	èigh	NOUN	Nv	VerbForm=Vnoun	3	conj	_	SpaceAfter=No
10	...	...	PUNCT	Fb	_	11	punct	_	_
11	fad	fad	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	3	obl:unmarked	_	_
12	a’	an	DET	Tdsmg	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	latha	latha	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	?	?	PUNCT	Fg	_	11	punct	_	_

~~~


