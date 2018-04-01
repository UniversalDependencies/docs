---
layout: base
title:  'Statistics of cc in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `cc`

This relation is universal.

212 nodes (2%) are attached to their parents as `cc`.

203 instances of `cc` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.35849056603774.

The following 18 pairs of parts of speech are connected with `cc`: <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-CCONJ.html">CCONJ</a></tt> (82; 39% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-CCONJ.html">CCONJ</a></tt> (51; 24% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-CCONJ.html">CCONJ</a></tt> (31; 15% instances), <tt><a href="kk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk-pos-CCONJ.html">CCONJ</a></tt> (15; 7% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-SCONJ.html">SCONJ</a></tt> (11; 5% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-SCONJ.html">SCONJ</a></tt> (5; 2% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="kk-pos-ADV.html">ADV</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="kk-pos-AUX.html">AUX</a></tt>-<tt><a href="kk-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="kk-pos-PRON.html">PRON</a></tt>-<tt><a href="kk-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="kk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="kk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


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
8	қолдаймын	қолда	VERB	v	Mood=Ind|Number=Sing|Person=1|Tense=Aor|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Бірақ	бірақ	CCONJ	cnjcoo	_	4	cc	_	_
2	тілек	тілек	NOUN	n	Case=Nom	4	nsubj	_	_
3	іске	іске	X	x	_	4	dep	_	_
4	аспай	ас	VERB	v	Aspect=Perf|Polarity=Neg|VerbForm=Conv	8	advcl	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	4	punct	_	_
6	аяғы	аяқ	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
7	жоқ	жоқ	ADJ	adj	_	8	acl:relcl	_	_
8	жыр	жыр	NOUN	n	Case=Nom	0	root	_	_
9	болды	бол	AUX	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	cop	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	8	punct	_	_

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
9	болып	бол	AUX	v	Aspect=Perf|VerbForm=Cov	8	cop	_	_
10	отыр	отыр	AUX	vaux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	8	punct	_	_

~~~


