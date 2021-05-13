---
layout: base
title:  'Statistics of advcl in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `advcl`

This relation is universal.

375 nodes (4%) are attached to their parents as `advcl`.

373 instances of `advcl` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.28533333333333.

The following 15 pairs of parts of speech are connected with `advcl`: <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (283; 75% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (29; 8% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (21; 6% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (20; 5% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advcl	color:blue
1	Қой	қой	VERB	v	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	cm	_	7	punct	_	_
3	қазақ	қазақ	NOUN	n	Case=Nom	7	nsubj	_	_
4	бұлармен	бұл	PRON	prn	Case=Ins|Number=Plur|PronType=Dem	7	obl	_	_
5	не	не	PRON	prn	Case=Nom|PronType=Int	6	obj	_	_
6	ғып	қыл	VERB	v	Aspect=Perf|VerbForm=Conv	7	advcl	_	_
7	соғыса	соқ	VERB	v	Aspect=Imp|VerbForm=Inf|Voice=Rcp	1	parataxis	_	_
8	алсын	ал	AUX	vaux	Mood=Opt|Number=Sing|Person=3|VerbForm=Fin	7	aux	_	SpaceAfter=No
9	?	?	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advcl	color:blue
1	Енді	енді	ADV	adv	_	7	advmod	_	_
2	біз	біз	PRON	prn	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
3	тарихымызға	тарих	NOUN	n	Case=Dat|Number[psor]=Plur|Person[psor]=1	7	obl	_	_
4	басқа	басқа	ADJ	adj	_	5	amod	_	_
5	қырынан	қыр	NOUN	n	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	6	obl	_	_
6	келуге	кел	VERB	v	Case=Dat|VerbForm=Ger	7	advcl	_	_
7	тиіс	тиіс	ADJ	adj	_	0	root	_	_
8	піз	е	AUX	cop	Aspect=Hab|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	cop	_	_
9	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 advcl	color:blue
1	Қазақстан	Қазақстан	PROPN	np	Case=Nom	2	nmod:poss	_	_
2	Республикасы	республика	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
3	туризмді	туризм	NOUN	n	Case=Acc	4	obj	_	_
4	дамытуда	дамыт	VERB	v	Case=Loc|VerbForm=Ger	7	advcl	_	_
5	үлкен	үлкен	ADJ	adj	_	6	amod	_	_
6	әлеуетке	әлеует	NOUN	n	Case=Dat	7	obl	_	_
7	ие	ие	NOUN	n	Case=Nom	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


