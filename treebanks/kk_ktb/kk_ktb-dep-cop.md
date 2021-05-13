---
layout: base
title:  'Statistics of cop in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `cop`

This relation is universal.

188 nodes (2%) are attached to their parents as `cop`.

188 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0531914893617.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (90; 48% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (56; 30% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (16; 9% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (14; 7% instances), <tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (4; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 cop	color:blue
1	Есірткі	есірткі	NOUN	n	Case=Nom	2	nmod:poss	_	_
2	бизнесі	бизнес	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	8	nsubj	_	_
3	де	да	ADV	postadv	_	2	advmod	_	_
4	Орталық	орталық	ADJ	adj	_	6	nmod:poss	_	_
5	Азия	Азия	PROPN	np	Case=Nom	4	flat:name	_	_
6	аймағы	аймақ	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	8	obl	_	_
7	үшін	үшін	ADP	post	_	6	case	_	_
8	қауіп	қауіп	NOUN	n	Case=Nom	0	root	_	_
9	болып	бол	AUX	v	Aspect=Perf|VerbForm=Inf	8	cop	_	_
10	отыр	отыр	AUX	vaux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cop	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 cop	color:blue
1	Ол	ол	PRON	prn	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	кезге	кез	NOUN	n	Case=Dat	5	obl	_	_
3	қарай	қарай	ADP	post	_	2	case	_	_
4	капитал	капитал	NOUN	n	Case=Nom	5	obj	_	_
5	жинақтап	жинақта	VERB	v	Aspect=Perf|VerbForm=Conv	8	advcl	_	SpaceAfter=No
6	,	,	PUNCT	cm	_	5	punct	_	_
7	атыңды	ат	NOUN	n	Case=Acc|Number[psor]=Sing|Person[psor]=2	8	obj	_	_
8	танытуға	таныт	VERB	v	Case=Dat|VerbForm=Ger	0	root	_	_
9	болады	бол	AUX	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	SpaceAfter=No
10	”	”	PUNCT	rquot	_	8	punct	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	8	punct	_	_

~~~


