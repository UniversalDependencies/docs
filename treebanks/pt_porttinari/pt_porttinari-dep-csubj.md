---
layout: base
title:  'Statistics of csubj in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="pt_porttinari-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="pt_porttinari-dep-csubj-pass.html">csubj:pass</a></tt>.

354 nodes (0%) are attached to their parents as `csubj`.

262 instances of `csubj` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.20338983050847.

The following 19 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (170; 48% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (101; 29% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (46; 13% instances), <tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	claro	claro	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
3	que	que	SCONJ	_	_	4	mark	_	_
4	falo	falar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	csubj	_	_
5	sobre	sobre	ADP	_	_	6	case	_	_
6	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj	color:blue
1	A	a	ADP	_	_	2	mark	_	_
2	partir	partir	VERB	_	VerbForm=Inf	6	advcl	_	_
3	de	de	ADP	_	_	4	case	_	_
4	aí	aí	ADV	_	_	2	advmod	_	_
5	,	,	PUNCT	_	_	2	punct	_	_
6	cabe	caber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	a	a	ADP	_	_	8	case	_	_
8	Temer	Temer	PROPN	_	_	6	obl	_	_
9	tomar	tomar	VERB	_	VerbForm=Inf	6	csubj	_	_
10	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	decisão	decisão	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	_
12	sobre	sobre	ADP	_	_	14	case	_	_
13	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	caso	caso	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	verdade	verdade	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	que	que	SCONJ	_	_	8	mark	_	_
4	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	técnico	técnico	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
6	Dorival	Dorival	PROPN	_	_	5	nmod	_	_
7	Júnior	Júnior	PROPN	_	_	6	flat:name	_	_
8	tem	ter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	csubj	_	_
9	motivo	motivo	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	_
10	para	para	ADP	_	_	11	mark	_	_
11	reclamar	reclamar	VERB	_	VerbForm=Inf	9	acl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


