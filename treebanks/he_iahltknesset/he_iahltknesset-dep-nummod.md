---
layout: base
title:  'Statistics of nummod in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `nummod`

This relation is universal.

415 nodes (1%) are attached to their parents as `nummod`.

347 instances of `nummod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18313253012048.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (343; 83% instances), <tt><a href="he_iahltknesset-pos-SYM.html">SYM</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (32; 8% instances), <tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (30; 7% instances), <tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	קליע	קליע	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
2	אחד	אחת	NUM	NUM	Gender=Masc|Number=Sing|NumType=Card	1	nummod	_	_
3	פגע	פגע	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
4	ב	ב	ADP	ADP	Definite=Def|PronType=Art	5	case	_	_
5	מכונית	מכונית	NOUN	NOUN	Gender=Fem|Number=Sing	3	obl	_	_
6	ו	ו	CCONJ	CCONJ	_	7	cc	_	_
7	ניפץ	ניפץ	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Past|Voice=Act	3	conj	_	_
8	את	את	ADP	ADP	Case=Acc	9	case	_	_
9	שמשותי	שמשה	NOUN	NOUN	Gender=Fem|Number=Plur	7	obj	_	_
10	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	גם	גם	ADV	ADV	_	2	advmod	_	_
2	אני	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	מבין	הבין	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
4	ש	ש	SCONJ	SCONJ	_	12	mark	_	_
5	ב	ב	ADP	ADP	_	6	case	_	_
6	ריבית	ריבית	NOUN	NOUN	Gender=Fem|Number=Sing	12	obl	_	_
7	ריאלית	ריאלי	ADJ	ADJ	Gender=Fem|Number=Sing	6	amod	_	_
8	של	של	ADP	ADP	Case=Gen	10	case	_	_
9	8	8	NUM	NUM	_	10	nummod	_	_
10	%	%	SYM	SYM	_	6	nmod:poss	_	_
11	אי	אי	ADV	ADV	_	12	advmod	_	_
12	אפשר	אפשר	VERB	VERB	VerbType=Mod	3	ccomp	_	_
13	לקיים	קיים	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	12	csubj	_	_
14	צמיחה	צמיחה	NOUN	NOUN	Gender=Fem|Number=Sing	13	obj	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	חמש	חמש	NUM	NUM	Gender=Fem|NumType=Card	2	nummod	_	_
2	מאות	מאה	NUM	NUM	Gender=Fem|Number=Plur|NumType=Card	5	nummod	_	_
3	עד	עד	ADP	ADP	_	2	dep	_	_
4	אלף	אלף	NUM	NUM	Gender=Masc|Number=Sing|NumType=Card	2	nmod	_	_
5	הצעות	הצעה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	0	root	_	_
6	חוק	חוק	NOUN	NOUN	Gender=Masc|Number=Sing	5	compound	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


