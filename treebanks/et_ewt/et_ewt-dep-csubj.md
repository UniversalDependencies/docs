---
layout: base
title:  'Statistics of csubj in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="et_ewt-dep-csubj-cop.html">csubj:cop</a></tt>.

198 nodes (0%) are attached to their parents as `csubj`.

177 instances of `csubj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.68686868686869.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (151; 76% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (14; 7% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (11; 6% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (8; 4% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	See	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	2	det	2:det	_
2	kôik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot|Typo=Yes	5	obj	5:obj	CorrectForm=kõik
3	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ära	ära	ADV	D	_	5	compound:prt	5:compound	_
5	aurustada	aurustama	VERB	V	VerbForm=Inf	3	csubj	3:csubj	_
6	enne	enne	ADV	D	_	5	advmod	5:advmod	_
7	kui	kui	SCONJ	J	_	9	mark	9:mark	_
8	pôlema	põlema	NOUN	S	Case=Nom|Number=Sing|Typo=Yes	9	obl	9:obl	CorrectForm=põlema
9	pääsed	pääsema	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj	color:blue
1	hea	hea	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	_
3	kui	kui	SCONJ	J	_	7	mark	7:mark	_
4	mingi	mingi	DET	P	Case=Nom|Number=Sing|PronType=Ind	6	det	6:det	_
5	s6jav2e	sõja_vägi	NOUN	S	Case=Gen|Number=Sing|Typo=Yes	6	nmod	6:nmod	CorrectForm=sõjaväe
6	versioon	versioon	NOUN	S	Case=Nom|Number=Sing	7	nsubj	7:nsubj	_
7	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	1:csubj	SpaceAfter=No
8	...	...	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
1	Mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	2	obl	2:obl	_
2	meeldib	meeldima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	7:punct	_
4	kui	kui	SCONJ	J	_	7	mark	7:mark	_
5	tema	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj:cop	7:nsubj	_
6	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
7	mees	mees	NOUN	S	Case=Nom|Number=Sing	2	csubj	2:csubj	_
8	ja	ja	CCONJ	J	_	10	cc	10:cc	_
9	mina	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj:cop	10:nsubj	_
10	naine	naine	NOUN	S	Case=Nom|Number=Sing	7	conj	7:conj	SpaceAfter=No
11	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


