---
layout: base
title:  'Statistics of amod in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `amod`

This relation is universal.

5027 nodes (5%) are attached to their parents as `amod`.

4832 instances of `amod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31688880047742.

The following 18 pairs of parts of speech are connected with `amod`: <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (4599; 91% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (167; 3% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (70; 1% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (46; 1% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (42; 1% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (37; 1% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (19; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (12; 0% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (11; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (10; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 amod	color:blue
1	Kas	kas	ADV	D	_	7	advmod	_	_
2	jälle	jälle	ADV	D	_	7	advmod	_	_
3	üks	üks	PRON	P	Case=Nom|Number=Sing|PronType=Ind	7	det	_	_
4	uus	uus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
5	ja	ja	CCONJ	J	_	6	cc	_	_
6	tundmatu	tundmatu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	conj	_	_
7	põlvkond	põlvkond	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
8	...	...	PUNCT	Z	_	7	punct	_	SpaceAfter=No
9	?	?	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	_	_
2	õigustab	õigustama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	edasist	edasine	ADJ	A	Case=Par|Degree=Pos|Number=Sing	2	amod	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	11	punct	_	_
5	aga	aga	CCONJ	J	_	11	cc	_	_
6	esialgu	esi_algu	ADV	D	_	11	advmod	_	_
7	olen	olema	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
8	ikkagi	ikkagi	ADV	D	_	11	advmod	_	_
9	lolli	loll	NOUN	S	Case=Gen|Number=Sing	11	obl	_	_
10	moodi	moodi	ADP	K	AdpType=Post	9	case	_	_
11	vahel	vahel	ADV	D	_	2	conj	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	66-aastane	66-aastane	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	Heino	Heino	PROPN	S	Case=Nom|Number=Sing	3	nsubj	_	_
3	sisenes	sisenema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
4	Küütri	Küütri	PROPN	S	Case=Gen|Number=Sing	5	nmod	_	_
5	tänavas	tänav	NOUN	S	Case=Ine|Number=Sing	3	obl	_	_
6	oma	oma	PRON	P	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	7	nmod	_	_
7	kodumaja	kodu-maja	NOUN	S	Case=Gen|Number=Sing	8	nmod	_	_
8	trepikotta	trepi-koda	NOUN	S	Case=Add|Number=Sing	3	obl	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


