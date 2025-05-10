---
layout: base
title:  'Statistics of nsubj in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="az_tuecl-dep-nsubj-outer.html">nsubj:outer</a></tt>.

131 nodes (14%) are attached to their parents as `nsubj`.

131 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38167938931298.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (47; 36% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (29; 22% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (16; 12% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (13; 10% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (12; 9% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="az_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Mary	Mary	PROPN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	bronz	bronz	NOUN	_	Case=Nom|Number=Sing	3	obl	_	_
3	qazandı	qazan	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Peter	Peter	PROPN	_	Case=Nom|Number=Sing	3	conj	_	_
6	gümüş	gümüş	NOUN	_	Case=Nom|Number=Sing	5	orphan	_	SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	_
8	Jane	Jane	PROPN	_	Case=Nom|Number=Sing	3	conj	_	_
9	qızıl	qızıl	NOUN	_	Case=Nom|Number=Sing	8	orphan	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Qız	qız	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	yoldaşına	yoldaş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
3	namə	namə	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	yazdı	yaz	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	çalışdı	çalış	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	kı	ki	SCONJ	_	_	9	mark	_	_
4	siqar	siqar	NOUN	_	Case=Nom|Number=Sing	5	compound	_	_
5	çekmə	çek	VERB	_	VerbForm=Vnoun	9	xcomp	_	_
6	və	və	CCONJ	_	_	8	cc	_	_
7	əlkol	alkol	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	içməni	iç	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	5	conj	_	_
9	tərkidə	tərk	VERB	_	Mood=Sub|Number=Sing|Person=3	2	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


