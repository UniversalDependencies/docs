---
layout: base
title:  'Statistics of ccomp in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `ccomp`

This relation is universal.

121 nodes (1%) are attached to their parents as `ccomp`.

121 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.55371900826446.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (82; 68% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (13; 11% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (13; 11% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 ccomp	color:blue
1	Бұл	бұл	DET	det	PronType=Dem	2	det	_	_
2	мәселеде	мәселе	NOUN	n	Case=Loc	8	obl	_	_
3	де	да	ADV	postadv	_	2	advmod	_	_
4	біз	біз	PRON	prn	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	_
5	Нұрсұлтан	Нұрсұлтан	PROPN	np	Case=Nom|Gender=Masc	7	nsubj	_	_
6	Әбішұлының	Әбішұлы	PROPN	np	Case=Gen|Gender=Masc	5	flat:name	_	_
7	қолдауын	қолда	VERB	v	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	8	ccomp	_	_
8	сезінеміз	сезін	VERB	v	Aspect=Hab|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 ccomp	color:blue
1	Макроэкономикалық	макроэкономикалық	ADJ	adj	_	2	amod	_	_
2	көрсеткіштер	көрсеткіш	NOUN	n	Case=Nom|Number=Plur	3	nsubj	_	_
3	жаман	жаман	ADJ	adj	_	7	ccomp	_	_
4	емес	е	AUX	cop	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	3	punct	_	_
6	-	-	PUNCT	guio	_	3	punct	_	_
7	деді	де	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	Г.	Г.	NOUN	abbr	_	7	nsubj	_	_
9	Марченко	Марченко	PROPN	np	Case=Nom	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 ccomp	color:blue
1	Соның	сол	PRON	prn	Case=Gen|PronType=Dem	2	nmod:poss	_	_
2	өзінде	өз	PRON	prn	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3|PronType=Prs|Reflex=Yes	10	obl	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	2	punct	_	_
4	біз	біз	PRON	prn	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
5	бұл	бұл	DET	det	PronType=Dem	7	det	_	_
6	жаман	жаман	ADJ	adj	_	7	amod	_	_
7	көрсеткіш	көрсеткіш	NOUN	n	Case=Nom	9	ccomp	_	_
8	емес	е	AUX	cop	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	cop	_	_
9	деп	де	VERB	v	Aspect=Perf|VerbForm=Conv	10	advcl	_	_
10	санаймыз	сана	VERB	v	Aspect=Hab|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


