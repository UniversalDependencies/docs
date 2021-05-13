---
layout: base
title:  'Statistics of obl:dat in UD_Kurmanji-MG'
udver: '2'
---

## Treebank Statistics: UD_Kurmanji-MG: Relations: `obl:dat`

This relation is a language-specific subtype of <tt><a href="kmr_mg-dep-obl.html">obl</a></tt>.

115 nodes (1%) are attached to their parents as `obl:dat`.

114 instances of `obl:dat` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08695652173913.

The following 5 pairs of parts of speech are connected with `obl:dat`: <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (79; 69% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-PRON.html">PRON</a></tt> (16; 14% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-PROPN.html">PROPN</a></tt> (16; 14% instances), <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="kmr_mg-pos-DET.html">DET</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:dat	color:blue
1	Şerlok	Şerlok	PROPN	np	Case=Acc|Gender=Masc|Number=Sing	3	nsubj	_	_
2	Holmes	Holmes	PROPN	np	Case=Acc|Gender=Masc|Number=Sing	1	flat	_	_
3	got	gotin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	banû	banû	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	obl:dat	_	_
5	Stonêrê	Stonêr	PROPN	np	Case=Con|Gender=Masc|Number=Sing	4	flat	_	SpaceAfter=No
6	:	:	PUNCT	sent	_	13	punct	_	_
7	We	hûn	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Plur|Person=2|PronType=Prs	13	nsubj	_	_
8	her	her	DET	det	Gender=Fem,Masc|Number=Sing|PronType=Ind	9	det	_	_
9	gav	gav	NOUN	n	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	13	nmod	_	_
10	derî	derî	NOUN	n	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	13	obj	_	_
11	li	li	ADP	pr	AdpType=Prep	12	case	_	_
12	xwe	xwe	PRON	prn	Gender=Fem,Masc|Number=Plur,Sing|PronType=Prs|Reflex=Yes	13	nmod	_	_
13	digirt	girtin	VERB	vblex	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	ccomp	_	SpaceAfter=No
14	?	?	PUNCT	sent	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:dat	color:blue
1	Holmes	Holmes	PROPN	np	Case=Acc|Gender=Masc|Number=Sing	3	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	cm	_	1	punct	_	_
3	gote	gotin	VERB	vblex	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	min	ez	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	3	obl:dat	_	SpaceAfter=No
5	:	:	PUNCT	sent	_	7	punct	_	_
6	Çi	çi	DET	prn	PronType=Int	7	det	_	_
7	mirovekî	mirov	NOUN	n	Case=Con|Gender=Masc|Number=Sing|PronType=Ind	3	ccomp	_	_
8	zirav	zirav	NOUN	n	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	nmod:poss	_	_
9	e	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obl:dat	color:blue
1	Holmes	Holmes	PROPN	np	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	sent	_	3	punct	_	_
3	Baş	baş	ADJ	adj	Degree=Pos	1	parataxis	_	_
4	e	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	10	punct	_	_
6	emê	em	PRON	prn	Case=Nom|Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
7	ê	dê	PART	fut	Tense=Fut	10	aux	_	_
8	tev	tev	ADV	adv	_	10	advmod	_	_
9	de	de	ADP	post	AdpType=Post	8	fixed	_	_
10	herin	çûn	VERB	vblex	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	conj	_	_
11	Stokmoranê	Stokmoran	PROPN	np	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	10	obl:dat	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	1	punct	_	_

~~~


