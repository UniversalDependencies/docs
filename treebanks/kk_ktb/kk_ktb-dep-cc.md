---
layout: base
title:  'Statistics of cc in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `cc`

This relation is universal.

199 nodes (2%) are attached to their parents as `cc`.

192 instances of `cc` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.36180904522613.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt> (82; 41% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt> (50; 25% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt> (31; 16% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt> (15; 8% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-SCONJ.html">SCONJ</a></tt> (10; 5% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-SCONJ.html">SCONJ</a></tt> (3; 2% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt>-<tt><a href="kk_ktb-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	-	-	PUNCT	guio	_	8	punct	_	_
2	Бас	бас	NOUN	n	Case=Nom	3	compound	_	_
3	прокуратураның	прокуратура	NOUN	n	Case=Gen	7	nmod:poss	_	_
4	және	және	CCONJ	cnjcoo	_	6	cc	_	_
5	Бас	бас	NOUN	n	Case=Nom	6	compound	_	_
6	прокурордың	прокурор	NOUN	n	Case=Gen	3	conj	_	_
7	жұмысын	жұмыс	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	8	obj	_	_
8	қолдаймын	қолда	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Біз	біз	PRON	prn	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
2	осы	осы	DET	det	PronType=Dem	3	det	_	_
3	дәстүрді	дәстүр	NOUN	n	Case=Acc	4	obj	_	_
4	қастерлеп	қастерле	VERB	v	Aspect=Perf|VerbForm=Conv	7	advcl	_	_
5	сақтаймыз	сақта	VERB	v	Aspect=Hab|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
6	және	және	CCONJ	cnjcoo	_	7	cc	_	_
7	нығайтамыз	нығайт	VERB	v	Aspect=Hab|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	conj	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Осы	осы	DET	det	PronType=Dem	2	det	_	_
2	орайда	орай	NOUN	n	Case=Loc	8	obl	_	_
3	Сіздің	сіз	PRON	prn	Case=Gen|Number=Sing|Person=2|Polite=Form|PronType=Prs	4	nmod:poss	_	_
4	сапарыңыз	сапар	NOUN	n	Case=Nom|Number[psor]=Sing|Person[psor]=2|Polite=Form	8	nsubj	_	_
5	аса	аса	ADV	adv	_	8	advmod	_	_
6	мәнді	мәнді	ADJ	adj	_	0	root	_	_
7	әрі	әрі	CCONJ	cnjcoo	_	8	cc	_	_
8	маңызды	маңызды	ADJ	adj	_	6	conj	_	_
9	болып	бол	AUX	v	Aspect=Perf|VerbForm=Inf	8	cop	_	_
10	отыр	отыр	AUX	vaux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	8	punct	_	_

~~~


