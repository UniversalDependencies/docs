---
layout: base
title:  'Statistics of nsubj in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="az_tuecl-dep-nsubj-outer.html">nsubj:outer</a></tt>.

99 nodes (15%) are attached to their parents as `nsubj`.

99 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.28282828282828.

The following 11 pairs of parts of speech are connected with `nsubj`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (32; 32% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (25; 25% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (12; 12% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (9; 9% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (8; 8% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="az_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="az_tuecl-pos-DET.html">DET</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Mary	Mary	PROPN	_	_	3	nsubj	_	_
2	bronz	bronz	NOUN	_	_	3	obl	_	_
3	qazandı	qazan	VERB	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Peter	Peter	PROPN	_	_	3	conj	_	_
6	gümüş	gümüş	NOUN	_	_	5	orphan	_	SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	_
8	Jane	Jane	PROPN	_	_	3	conj	_	_
9	qızıl	qızıl	NOUN	_	_	8	orphan	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Qız	qız	NOUN	_	_	4	nsubj	_	_
2	yoldaşına	yoldaş	NOUN	_	_	4	obl	_	_
3	namә	namә	NOUN	_	_	4	obj	_	_
4	yazdı	yaz	VERB	_	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Sudə	Sudə	PROPN	_	_	4	nsubj	_	_
2	üç	üç	NUM	_	_	3	nummod	_	_
3	saatdı(r)	saat	NOUN	_	_	4	advcl	_	_
4	afisdə	afis	NOUN	_	_	0	root	_	_
5	dəyil	dəyil	AUX	_	_	4	aux	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	Ayşə	Ayşə	PROPN	_	_	9	nsubj	_	_
8	də	də	ADV	_	_	7	advmod:emph	_	_
9	evdə	ev	NOUN	_	_	4	conj	_	_
10	dəyilmiş	dəyil	AUX	_	_	9	aux	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


