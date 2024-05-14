---
layout: base
title:  'Statistics of acl in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `acl`

This relation is universal.

348 nodes (4%) are attached to their parents as `acl`.

331 instances of `acl` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75862068965517.

The following 16 pairs of parts of speech are connected with `acl`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (219; 63% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (75; 22% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (32; 9% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	Saatten	saat	NOUN	_	Case=Abl|Number=Sing|Person=3	2	obl	_	TokenRange=128:135
2	kastımız	kasıt	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	5	nsubj	_	TokenRange=136:144
3	zamanı	zaman	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	obj	_	TokenRange=145:151
4	ölçen	ölç	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	5	acl	_	TokenRange=152:157
5	alet	alet	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	TokenRange=158:162
6	değil	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	TokenRange=163:168
7	fakat	fakat	CCONJ	_	_	9	cc	_	TokenRange=169:174
8	bizzat	bizzat	ADV	_	_	9	advmod	_	TokenRange=175:181
9	zamandır	zaman	NOUN	_	Case=Nom|Number=Sing|Person=3	5	conj	_	SpaceAfter=No|TokenRange=182:190
10	.	.	PUNCT	Stop	_	9	punct	_	SpacesAfter=\r\n|TokenRange=190:191

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 acl	color:blue
1	Muhtaç	muhtaç	NOUN	_	Case=Nom|Number=Sing|Person=3	3	acl	_	_
2	olduğun	ol	VERB	Ptcp	Aspect=Perf|Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2|Polarity=Pos|Tense=Past|VerbForm=Part	1	compound:lvc	_	_
3	kudret	kudret	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	8	punct	_	_
5	damarlarındaki	damar	NOUN	Adj	_	7	amod	_	_
6	asil	asil	ADJ	Adj	_	7	amod	_	_
7	kanda	kan	NOUN	_	Case=Loc|Number=Sing|Person=3	8	obl	_	_
8	mevcuttur	mevcut	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Stop	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl	color:blue
1	Gökte	gök	NOUN	_	Case=Loc|Number=Sing|Person=3	11	obl	_	_
2	bir	bir	DET	Indef	_	4	det	_	_
3	uçar	uçar	ADJ	_	Case=Nom|Number=Sing|Person=3	4	acl	_	_
4	yıldız	yıldız	NOUN	_	Case=Nom|Number=Sing|Person=3	11	nsubj	_	_
5	hızla	hız	NOUN	_	Case=Ins|Number=Sing|Person=3	11	obl	_	_
6	,	,	PUNCT	Comma	_	11	punct	_	_
7	ani	ani	ADJ	Adj	_	9	amod	_	_
8	bir	bir	DET	Indef	_	9	det	_	_
9	eser	eser	NOUN	_	Case=Acc|Number=Sing|Person=3	10	obj	_	_
10	bırakarak	bırak	VERB	Conv	Aspect=Prog|Polarity=Pos|VerbForm=Conv	11	advcl	_	_
11	kayboldu	kaybol	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
12	.	.	PUNCT	Stop	_	11	punct	_	_

~~~


