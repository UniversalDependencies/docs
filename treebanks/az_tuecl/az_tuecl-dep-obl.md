---
layout: base
title:  'Statistics of obl in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `obl`

This relation is universal.

87 nodes (10%) are attached to their parents as `obl`.

86 instances of `obl` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.91954022988506.

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (58; 67% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (12; 14% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (10; 11% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (5; 6% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
1	Qız	qız	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	yoldaşına	yoldaş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
3	namə	namə	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	yazdı	yaz	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	Sən	sən	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	Nəməyə	Nəmə	PRON	_	Case=Dat|Number=Sing|PronType=Int	3	obl	_	_
3	baxıran	bax	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	SpaceAfter=No
4	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl	color:blue
1	Bazarda	Bazar	NOUN	_	Case=Loc|Number=Sing	3	obl	_	_
2	mivə	mivə	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	var	var	ADJ	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	amma	amma	CCONJ	_	_	5	cc	_	_
5	yaxçı	yaxçı	ADJ	_	_	3	conj	_	_
6	dəyil	dəyil	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


