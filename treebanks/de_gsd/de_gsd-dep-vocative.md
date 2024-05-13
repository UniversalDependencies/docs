---
layout: base
title:  'Statistics of vocative in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `vocative`

This relation is universal.

7 nodes (0%) are attached to their parents as `vocative`.

4 instances of `vocative` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.85714285714286.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="de_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="de_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (1; 14% instances), <tt><a href="de_gsd-pos-PART.html">PART</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 vocative	color:blue
1	Hallo	hallo	INTJ	ITJ	_	0	root	_	_
2	Herr	Herr	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	1	vocative	_	_
3	Mark	Mark	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	2	flat	_	NamedEntity=Yes|SpaceAfter=No
4	,	,	PUNCT	$,	_	1	punct	_	_
5	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	nenne	nennen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	conj	_	_
7	Sie	Sie	PRON	PPER	Case=Acc|Person=2|Polite=Form|PronType=Prs	6	obj	_	_
8	jezt	jezt	ADV	ADV	_	9	advmod	_	_
9	so	so	ADV	ADV	_	6	advmod	_	_
10	und	und	CCONJ	KON	_	6	cc	_	_
11	nicht	nicht	PART	PTKNEG	Polarity=Neg	6	advmod	_	_
12	mit	mit	ADP	APPR	_	15	case	_	_
13	ihrem	ihr	DET	PPOSAT	Case=Dat|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	15	det:poss	_	_
14	richtigen	richtig	ADJ	ADJA	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	Namen	Name	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
16	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Frau	Frau	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	4	vocative	_	_
2	Leichsenring	Leichsenring	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing	1	flat	_	NamedEntity=Yes|SpaceAfter=No
3	,	,	PUNCT	$,	_	1	punct	_	_
4	sehen	sehen	VERB	VVFIN	Mood=Ind|Person=2|Polite=Form|Tense=Pres|VerbForm=Fin	0	root	_	_
5	Sie	Sie	PRON	PPER	Case=Nom|Person=2|Polite=Form|PronType=Prs	4	nsubj	_	_
6	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	4	obj	_	_
7	als	als	ADP	APPR	_	8	case	_	_
8	Quotenfrau	Quotenfrau	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
9	?	?	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 vocative	color:blue
1	Vielen	viel	DET	PIAT	Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	Dank	Dank	ADP	NN	_	0	root	_	_
3	Frau	Frau	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	2	vocative	_	_
4	Schrag	Schrag	PROPN	NE	Case=Dat|Gender=Masc|Number=Sing	3	flat	_	NamedEntity=Yes
5	und	und	CCONJ	KON	_	2	cc	_	_
6	bis	bis	ADP	APPR	_	10	case	_	_
7	zu	zu	ADP	APPR	_	10	case	_	_
8	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	nächsten	nah	ADJ	ADJA	Case=Dat|Degree=Sup|Gender=Masc|Number=Sing	10	amod	_	_
10	Termin	Termin	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	2	conj	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	2	punct	_	_

~~~


