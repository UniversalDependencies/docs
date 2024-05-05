---
layout: base
title:  'Statistics of acl in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `acl`

This relation is universal.

17 nodes (2%) are attached to their parents as `acl`.

17 instances of `acl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94117647058824.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (6; 35% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (6; 35% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl	color:blue
1	aġca	aġca	ADJ	_	_	2	amod	_	_
2	ḳoyunlar	ḳoyun	NOUN	_	Case=Nom|Number=Plur|Person=3	3	nsubj	_	_
3	olan	ol	ADJ	_	_	4	acl	_	_
4	yerde	yer	NOUN	_	Case=Loc|Number=Sing|Person=3	7	obl	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	ḳuzıcaġı	ḳuzucuḳ	NOUN	_	Case=Acc|Number=Sing|Person=3	7	nsubj	_	_
7	olmaz	ol	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	9	ccomp	_	_
8	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	7	discourse	_	_
9	olur	ol	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl	color:blue
1	bütün	bütün	ADJ	Adj	_	3	amod	_	_
2	ṣanâyiʿ-i	ṣanâyiʿ	NOUN	Noun	_	4	nmod:poss	_	_
3	nefîsenin	nefîse	ADJ	Adj	Case=Gen|Gender=Fem|Number=Sing|Person=3	2	amod	_	_
4	mevżûʿsu	mevżûʿ	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nsubj	_	_
5	güzellik	güzellik	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	obj	_	_
6	dedigimiz	de	VERB	Verb	Aspect=Perf|Number[psor]=Plur|Person[psor]=1|Polarity=Pos|Tense=Past|VerbForm=Part	7	acl	_	_
7	şeyʾin	şeyʾ	NOUN	Noun	Case=Gen|Number=Sing|Person=3	8	nmod:poss	_	_
8	żapṭ	zapt	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
9	ve	ve	CCONJ	Conj	_	10	cc	_	_
10	tasvîri	tasvîr	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	conj	_	_
11	dir	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	8	cop	_	_
12	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 acl	color:blue
1	zîrâ	zîrâ	CCONJ	_	_	13	mark	_	_
2	bu	bu	DET	_	Definite=Def|PronType=Art	4	det	_	_
3	ṭarîḳ-i	ṭarîḳ	NOUN	_	_	13	acl	_	_
4	muʿammâda	muʿammâ	ADJ	_	Case=Loc|Number=Sing|Person=3	3	obl	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	kelimeniñ	kelime	NOUN	_	Case=Gen|Number=Sing|Person=3	7	nmod	_	_
7	âḫirine	âḫir	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	obl	_	_
8	gelen	gel	ADJ	_	_	9	acl	_	_
9	ḥarfe	ḥarf	NOUN	_	Case=Dat|Number=Sing|Person=3	10	nmod	_	_
10	ayaġı	ayak	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	obl	_	_
11	diyü	diye	ADP	_	_	10	case	_	_
12	ẕikr	ẕikr	NOUN	_	Case=Nom|Number=Sing|Person=3	13	compound:lvc	_	_
13	olunur	ol	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_

~~~


