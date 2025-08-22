---
layout: base
title:  'Statistics of cop in UD_Kurmanji-MG'
udver: '2'
---

## Treebank Statistics: UD_Kurmanji-MG: Relations: `cop`

This relation is universal.

257 nodes (3%) are attached to their parents as `cop`.

236 instances of `cop` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.43190661478599.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (159; 62% instances), <tt><a href="kmr_mg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (56; 22% instances), <tt><a href="kmr_mg-pos-NUM.html">NUM</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (16; 6% instances), <tt><a href="kmr_mg-pos-PRON.html">PRON</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (13; 5% instances), <tt><a href="kmr_mg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (7; 3% instances), <tt><a href="kmr_mg-pos-ADV.html">ADV</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="kmr_mg-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cop	color:blue
1	Meheke	meh	NOUN	n	Case=Con|Gender=Fem|Number=Sing|PronType=Ind	0	root	_	_
2	Nîsanê	nîsan	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	1	nmod:poss	_	_
3	bû	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	cop	_	SpaceAfter=No
4	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	Walê	walê	ADV	adv	_	2	advmod	_	_
2	dixuye	xuyan	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ko	ku	SCONJ	cnjsub	_	5	mark	_	_
4	gelek	gelek	ADV	preadv	_	5	advmod	_	_
5	xemxwar	xemxwar	ADJ	adj	Degree=Pos	2	ccomp	_	_
6	e	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
7	û	û	CCONJ	cnjcoo	_	5	cc	_	_
8	misîbetin	musîbet	NOUN	n	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	11	nsubj	_	_
9	lê	li	ADP	pr	AdpType=Prep	10	case	_	_
10	_	ew	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|PronType=Dem	11	nmod	_	_
11	qewimîne	qewimin	VERB	vblex	Evident=Nfh|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 cop	color:blue
1	Jinikê	jinik	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	sent	_	5	punct	_	_
3	Ev	ev	DET	det	Case=Nom|Gender=Fem,Masc|Number=Plur,Sing|PronType=Dem	4	det	_	_
4	malbat	malbat	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
5	yek	yek	NUM	num	Case=Nom|Definite=Def|Number=Sing|NumType=Card	1	parataxis	_	_
6	malbatên	malbat	NOUN	n	Case=Con|Definite=Def|Gender=Fem|Number=Plur	5	nmod	_	_
7	Ingilterê	Ingiltere	PROPN	np	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	6	nmod:poss	_	_
8	en	yê	ADP	con	AdpType=Post|Gender=Fem,Masc|Number=Plur	6	dep	_	_
9	dewlementir	dewlemend	ADJ	adj	Degree=Cmp	6	amod	_	_
10	bû	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	1	punct	_	_

~~~


