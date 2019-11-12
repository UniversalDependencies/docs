---
layout: base
title:  'Statistics of dep in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `dep`

This relation is universal.

5 nodes (0%) are attached to their parents as `dep`.

5 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-X.html">X</a></tt> (3; 60% instances), <tt><a href="sv_lines-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 dep	color:blue
1	Två	två	NUM	CARD-PL	_	5	nsubj	_	_
2	av	av	ADP	_	_	3	case	_	_
3	dem	de	PRON	PERS-P3PL-ACC	Case=Acc|Definite=Def|Number=Plur|PronType=Prs	1	nmod	_	_
4	hade	ha	AUX	PAST-AUX	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
5	varit	vara	VERB	SUP-ACT	VerbForm=Sup|Voice=Act	0	root	_	_
6	på	på	ADP	_	_	7	case	_	_
7	en	en	PRON	IND-SG	Number=Sing|PronType=Ind	5	obl	_	_
8	av	av	ADP	_	_	11	case	_	_
9	hans	han	PRON	P3SG-GEN	Case=Gen|Definite=Def|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
10	foie	foie	X	FGN	_	11	dep	_	_
11	gras-fester	gras-fest	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	7	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	JAG	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	dep	_	SpaceAfter=No
2	:	:	PUNCT	Colon	_	1	punct	_	_
3	Nej	nej	INTJ	_	_	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	3	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	HON	hon	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	dep	_	SpaceAfter=No
2	:	:	PUNCT	Colon	_	1	punct	_	_
3	Kvinnor	kvinna	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	_	_
4	också	också	ADV	_	_	3	advmod	_	SpaceAfter=No
5	?	?	PUNCT	QuestionMark	_	3	punct	_	SpacesAfter=\n\n

~~~


