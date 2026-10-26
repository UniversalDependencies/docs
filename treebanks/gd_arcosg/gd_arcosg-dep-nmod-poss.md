---
layout: base
title:  'Statistics of nmod:poss in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="gd_arcosg-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

893 nodes (1%) are attached to their parents as `nmod:poss`.

889 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03247480403135.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (623; 70% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (257; 29% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	slaod	slaod	VERB	Vm-2s	Mood=Ind|Person=2|VerbForm=Fin	0	root	_	_
2	a-steach	a-steach	ADV	Rs	AdvType=Loc	1	advmod	_	_
3	do	do	DET	Dp2s	Number=Sing|Person=2|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	shèithear	sèithear	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	obj	_	_
5	ceart	ceart	ADV	Rg	AdvType=Man	6	advmod	_	_
6	faisg	faisg	ADJ	Ap	_	9	advmod	_	_
7	air	air	ADP	Sp	_	9	case	_	_
8	a’	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	bhòrd	bòrd	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	tha	bi	VERB	V-p	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	thusa	thu	PRON	Pp2s--e	Form=Emp|Number=Sing|Person=2|PronType=Prs	1	nsubj	_	_
3	an	an	ADP	Sp	_	5	case	_	_
4	do	do	PRON	Dp2s	Number=Sing|Person=2|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	ghille	gille	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
6	mhòr	mòr	ADJ	Aq-smd	Case=Dat|Gender=Masc|Number=Sing	5	amod	_	_
7	a-neist	a-neist	ADV	Rt	AdvType=Tim	5	advmod	_	_
8	a	a	PART	Uv	PartType=Voc	9	case:voc	_	_
9	[Name]	[Name]	PROPN	Nn-mv	Case=Voc|Gender=Masc|NounType=Prs	1	vocative	_	Anonymised=Yes

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	MacLeish	MacLeish	PROPN	Nn	NounType=Prs	0	root	_	_
2	an-àird	an-àird	ADV	Rs	AdvType=Loc	5	advmod	_	_
3	air	air	ADP	Sp	_	5	case	_	_
4	a	a	DET	Dp3sf	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	son	airson	ADP	Nf	_	1	xcomp:pred	_	_

~~~


