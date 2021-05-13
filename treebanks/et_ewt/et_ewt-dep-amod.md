---
layout: base
title:  'Statistics of amod in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `amod`

This relation is universal.

2137 nodes (3%) are attached to their parents as `amod`.

2061 instances of `amod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20776789892372.

The following 12 pairs of parts of speech are connected with `amod`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1995; 93% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (50; 2% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (49; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (15; 1% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (15; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-X.html">X</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Erisoov	eri_soov	NOUN	S	Case=Nom|Number=Sing	6	nsubj:cop	6:nsubj	_
2	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
3	et	et	SCONJ	J	_	6	mark	6:mark	_
4	saaks	saama	AUX	V	Mood=Cnd|Number=Sing|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
5	tuulde	tuul	NOUN	S	Case=Add|Number=Sing	6	obl	6:obl	_
6	lennata	lendama	VERB	V	VerbForm=Inf	0	root	0:root	_
7	koos	koos	ADP	K	AdpType=Prep	9	case	9:case	_
8	kallis	kallis	ADJ	A	Case=Gen|Degree=Pos|Number=Sing|Typo=Yes	9	amod	9:amod	CorrectForm=kalli
9	abikaasaga	abi_kaasa	NOUN	S	Case=Com|Number=Sing	6	obl	6:obl	_
10	...	...	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 amod	color:blue
1	Anarion	anarion	PROPN	S	Case=Nom|Number=Sing	9	parataxis	9:parataxis	SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	1:punct	_
3	Mazda	Mazda	PROPN	S	Case=Nom|Number=Sing	9	nsubj:cop	9:nsubj	_
4	929	929	NUM	N	NumForm=Digit|NumType=Card	3	flat	3:flat	_
5	3	3	NUM	N	NumForm=Digit|NumType=Card	6	obl	6:obl	_
6	liitrine	liitrine	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	3:amod	_
7	pearis	päris	ADV	D	Typo=Yes	8	advmod	8:advmod	CorrectForm=päris
8	k6va	kõva	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Typo=Yes	9	amod	9:amod	CorrectForm=kõva
9	pill	pill	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Eriti	eriti	ADV	D	_	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	Z	_	7	punct	7:punct	_
3	kui	kui	SCONJ	J	_	7	mark	7:mark	_
4	sul	sina	PRON	P	Case=Ade|Number=Sing|Person=2|PronType=Prs	7	obl	7:obl	_
5	midagi	miski	PRON	P	Case=Par|Number=Sing|PronType=Ind	7	nsubj:cop	7:nsubj	_
6	nikotiinirikast	nikotiinirikas	ADJ	A	Case=Par|Degree=Pos|Number=Sing	5	amod	5:amod	_
7	suus	suu	NOUN	S	Case=Ine|Number=Sing	1	advcl	1:advcl	_
8	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	SpaceAfter=No
9	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


