---
layout: base
title:  'Statistics of nsubj in UD_Ottoman_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-TueCL: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="ota_tuecl-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="ota_tuecl-dep-nsubj-pass.html">nsubj:pass</a></tt>.

125 nodes (13%) are attached to their parents as `nsubj`.

124 instances of `nsubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.576.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="ota_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_tuecl-pos-PROPN.html">PROPN</a></tt> (47; 38% instances), <tt><a href="ota_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt> (23; 18% instances), <tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_tuecl-pos-PROPN.html">PROPN</a></tt> (14; 11% instances), <tt><a href="ota_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt> (13; 10% instances), <tt><a href="ota_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_tuecl-pos-PRON.html">PRON</a></tt> (13; 10% instances), <tt><a href="ota_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_tuecl-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_tuecl-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="ota_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="ota_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="ota_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ota_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ota_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Mary	Mary	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	tunç	tunç	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
3	iḥrāz	murād	NOUN	_	Case=Nom|Number=Sing	4	compound:lvc	_	_
4	eyledi	eyle	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	Peter	Peter	PROPN	_	Case=Nom|Number=Sing	4	conj	_	_
7	sīm	sīm	NOUN	_	Case=Nom|Number=Sing	4	orphan	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	Jane	Jane	PROPN	_	Case=Nom|Number=Sing	4	conj	_	_
10	zer	zer	NOUN	_	Case=Nom|Number=Sing	9	orphan	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Yaġmur	yaġmur	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	yaġdıġını	yaġ	VERB	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	4	ccomp	_	_
3	ẓann	ẓann	NOUN	_	Case=Nom|Number=Sing|Person=3	4	compound:lvc	_	_
4	ediyorum	et	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	İguazu	İguazu	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	kebīr	kebīr	ADJ	_	_	4	amod	_	_
3	bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	memleket	memleket	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	mi	mi	AUX	_	Number=Sing|Person=3|PronType=Int	4	aux:q	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	yoḫsa	yoḫsa	CCONJ	_	_	8	cc	_	_
8	ṣaġīr	ṣaġīr	ADJ	_	_	4	conj	_	_
9	mi	mi	AUX	_	Number=Sing|Person=3|PronType=Int	8	aux:q	_	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


