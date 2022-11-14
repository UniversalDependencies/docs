---
layout: base
title:  'Statistics of cop in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `cop`

This relation is universal.

3400 nodes (4%) are attached to their parents as `cop`.

2628 instances of `cop` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.37823529411765.

The following 13 pairs of parts of speech are connected with `cop`: <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (976; 29% instances), <tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (805; 24% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (772; 23% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (397; 12% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (157; 5% instances), <tt><a href="is_modern-pos-PART.html">PART</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (91; 3% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (73; 2% instances), <tt><a href="is_modern-pos-AUX.html">AUX</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (46; 1% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (46; 1% instances), <tt><a href="is_modern-pos-ADP.html">ADP</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (21; 1% instances), <tt><a href="is_modern-pos-NUM.html">NUM</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="is_modern-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="is_modern-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 cop	color:blue
1	Ég	ég	PRON	PRO-N	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	IFD_tag=fp1en
2	er	vera	AUX	BEPI	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	IFD_tag=sfg1en
3	alls	allur	DET	Q-G	Case=Gen|Gender=Neut|Number=Sing|PronType=Ind	4	obl	_	IFD_tag=fohee
4	ekkert	enginn	DET	Q-A	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	5	obl	_	IFD_tag=fohen
5	hrædd	hræddur	ADJ	ADJ-N	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	xcomp	_	IFD_tag=lvensf
6	við	við	ADP	P	_	8	case	_	IFD_tag=ao
7	að	að	PART	TO	_	8	mark	_	IFD_tag=cn
8	stíga	stíga	VERB	VB	VerbForm=Inf|Voice=Act	0	root	_	IFD_tag=sng
9	upp	upp	ADP	RP	_	11	compound:prt	_	IFD_tag=aa
10	í	í	ADP	P	_	11	case	_	IFD_tag=ao
11	ræðustólinn	ræðustóll	NOUN	N-A	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	8	obl	_	IFD_tag=nkeog|SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Þetta	þessi	DET	D-N	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	IFD_tag=fahen
2	var	vera	AUX	BEDI	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	IFD_tag=sfg3eþ
3	mjög	mjög	ADV	ADV	_	4	amod	_	IFD_tag=aa
4	pent	penn	ADJ	ADJ-N	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	IFD_tag=lhensf
5	og	og	CCONJ	CONJ	_	6	cc	_	IFD_tag=c
6	huggulegt	huggulegur	ADJ	ADJ-N	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	4	amod	_	IFD_tag=lhensf|SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	IFD_tag=
8	takk	takk	INTJ	INTJ	_	10	discourse	_	IFD_tag=x
9	fyrir	fyrir	ADP	P	_	10	case	_	IFD_tag=ao
10	það	það	PRON	PRO-A	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs	4	conj	_	IFD_tag=fpheo|OriginalHead=0|SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 cop	color:blue
1	Nú	nú	ADV	ADV	_	6	advmod	_	IFD_tag=aa
2	er	vera	AUX	BEPI	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	IFD_tag=sfg1en
3	ég	ég	PRON	PRO-N	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	IFD_tag=fp1en
4	bara	bara	ADV	FP	_	6	advmod	_	IFD_tag=aa
5	með	með	ADP	P	_	6	case	_	IFD_tag=ao
6	getgátur	getgáta	NOUN	NS-A	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	0	root	_	IFD_tag=nvfo|SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	IFD_tag=
8	er	vera	AUX	BEPI	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	IFD_tag=sfg1en
9	bara	bara	ADV	FP	_	8	advmod	_	IFD_tag=aa
10	að	að	PART	TO	_	11	mark	_	IFD_tag=cn
11	hugsa	hugsa	VERB	VB	VerbForm=Inf|Voice=Act	8	acl	_	IFD_tag=sng
12	þetta	þessi	DET	D-A	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	11	obj	_	IFD_tag=faheo
13	upphátt	upphátt	ADV	ADV	_	11	advmod	_	IFD_tag=aa|SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	IFD_tag=.

~~~


