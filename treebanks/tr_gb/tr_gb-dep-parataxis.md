---
layout: base
title:  'Statistics of parataxis in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `parataxis`

This relation is universal.

54 nodes (0%) are attached to their parents as `parataxis`.

33 instances of `parataxis` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.85185185185185.

The following 13 pairs of parts of speech are connected with `parataxis`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (27; 50% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (6; 11% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (4; 7% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (4; 7% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (3; 6% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 parataxis	color:blue
1	Eve	ev	NOUN	_	Case=Dat|Number=Sing	6	obl	_	_
2	çat	çat	X	_	_	6	obl	_	_
3	kapı	kapı	NOUN	_	Case=Nom|Number=Sing	2	fixed	_	_
4	bir	bir	DET	_	Definite=Ind|Number=Sing	5	det	_	_
5	alıcı	alıcı	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
6	geldi	gel	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	odaları	oda	NOUN	_	Case=Acc|Number=Plur	10	obj	_	_
9	modaları	moda	NOUN	_	Case=Acc|Number=Plur	8	compound:redup	_	_
10	dolaştı	dolaş	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 parataxis	color:blue
1	Bakabilirim	bak	VERB	_	Aspect=Hab|Mood=GenPot|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	parataxis	_	_
2	de	de	CCONJ	_	_	1	cc	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	beklemesi	bekle	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	5	ccomp	_	_
5	gerek	gerek	ADJ	_	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis	color:blue
1	Esra	Esra	PROPN	_	Number=Sing	3	nsubj	_	_
2	Handan'ın	Handan	PROPN	_	Case=Gen|Number=Sing	3	nmod	_	_
3	ablası	abla	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_
4	ymış	i	AUX	_	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	_
5	,	,	PUNCT	_	_	6	punct	_	_
6	öyle	öyle	ADJ	_	_	3	parataxis	_	_
7	mi	mi	AUX	_	PronType=Int	6	aux:q	_	SpaceAfter=No
8	?	?	PUNCT	_	_	3	punct	_	_

~~~


