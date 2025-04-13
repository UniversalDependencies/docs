---
layout: base
title:  'Statistics of csubj in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="pt_porttinari-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="pt_porttinari-dep-csubj-pass.html">csubj:pass</a></tt>.

358 nodes (0%) are attached to their parents as `csubj`.

266 instances of `csubj` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.20391061452514.

The following 18 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (170; 47% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (105; 29% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (46; 13% instances), <tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
2	claro	claro	ADJ	_	Gender=Masc|Number=Sing	0	root	0:root	_
3	que	que	SCONJ	_	_	4	mark	4:mark	_
4	falo	falar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	csubj	2:csubj	_
5	sobre	sobre	ADP	_	_	6	case	6:case	_
6	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	4	obl	4:obl:sobre	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj	color:blue
1	A	a	ADP	_	_	2	mark	2:mark	_
2	partir	partir	VERB	_	VerbForm=Inf	6	advcl	6:advcl:a	_
3	de	de	ADP	_	_	4	case	4:case	_
4	aí	aí	ADV	_	_	2	advmod	2:advmod	_
5	,	,	PUNCT	_	_	2	punct	2:punct	_
6	cabe	caber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	a	a	ADP	_	_	8	case	8:case	_
8	Temer	Temer	PROPN	_	_	6	obl	6:obl:a	_
9	tomar	tomar	VERB	_	VerbForm=Inf	6	csubj	6:csubj	_
10	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	11	det	11:det	_
11	decisão	decisão	NOUN	_	Gender=Fem|Number=Sing	9	obj	9:obj	_
12	sobre	sobre	ADP	_	_	14	case	14:case	_
13	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	14:det	_
14	caso	caso	NOUN	_	Gender=Masc|Number=Sing	11	nmod	11:nmod:sobre	SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
2	verdade	verdade	NOUN	_	Gender=Fem|Number=Sing	0	root	0:root	_
3	que	que	SCONJ	_	_	8	mark	8:mark	_
4	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	_
5	técnico	técnico	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	8:nsubj	_
6	Dorival	Dorival	PROPN	_	_	5	nmod	5:nmod	_
7	Júnior	Júnior	PROPN	_	_	6	flat:name	6:flat:name	_
8	tem	ter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	csubj	2:csubj	_
9	motivo	motivo	NOUN	_	Gender=Masc|Number=Sing	8	obj	8:obj	_
10	para	para	ADP	_	_	11	mark	11:mark	_
11	reclamar	reclamar	VERB	_	VerbForm=Inf	9	acl	9:acl:para	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No

~~~


