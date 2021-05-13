---
layout: base
title:  'Statistics of obl:agent in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="br_keb-dep-obl.html">obl</a></tt>.

66 nodes (1%) are attached to their parents as `obl:agent`.

58 instances of `obl:agent` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.34848484848485.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (46; 70% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt> (12; 18% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-PRON.html">PRON</a></tt> (6; 9% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 obl:agent	color:blue
1	Kontet	kontañ	VERB	vblex	Tense=Past|VerbForm=Part	0	root	_	_
2	e	e	AUX	vpart	_	1	aux	_	_
3	vo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	1	aux	_	_
4	ar	an	DET	det	_	5	det	_	_
5	poentoù	poent	NOUN	n	Gender=Masc|Number=Plur	1	nsubj	_	_
6	e	e	ADP	pr	_	8	case	_	_
7	r	an	DET	det	_	8	det	_	_
8	fin	fin	NOUN	n	Gender=Fem|Number=Sing	1	obl	_	_
9	gant	gant	ADP	pr	_	11	case	_	_
10	an	an	DET	det	_	11	det	_	_
11	urzhiataer	urzhiataer	NOUN	n	Gender=Masc|Number=Sing	1	obl:agent	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 obl:agent	color:blue
1	Kenaozet	kenaozañ	VERB	vblex	Tense=Past|VerbForm=Part	0	root	_	_
2	e	e	AUX	vpart	_	1	aux	_	_
3	vo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	1	aux:pass	_	_
4	an	an	DET	det	_	5	det	_	_
5	degouezh	degouezh	NOUN	n	Gender=Masc|Number=Sing	1	nsubj	_	_
6	e	e	ADP	pr	_	8	case	_	_
7	r	an	DET	det	_	8	det	_	_
8	bloaz	bloaz	NOUN	n	Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
9	-mañ	mañ	ADV	adv	_	8	advmod	_	_
10	gant	gant	ADP	pr	_	13	case	_	_
11	Park	Park	X	x	_	13	dep	_	_
12	an	an	X	x	_	13	dep	_	_
13	Arvorig	Arvorig	PROPN	np	Number=Sing	1	obl:agent	_	SpaceAfter=No
14	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 obl:agent	color:blue
1	Ne	ne	ADV	adv	Polarity=Neg	3	advmod	_	_
2	vezit	bezañ	AUX	vblex	Aspect=Hab|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	dilezet	dilezel	VERB	vblex	Tense=Past|VerbForm=Part	0	root	_	_
4	gwezh	gwezh	X	x	_	5	dep	_	_
5	ebet	ebet	ADV	adv	_	3	advmod	_	_
6	gant	gant	ADP	pr	_	7	case	_	_
7	añ	indirect	PRON	prn	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl:agent	_	_
8	.	.	PUNCT	sent	_	3	punct	_	_

~~~


