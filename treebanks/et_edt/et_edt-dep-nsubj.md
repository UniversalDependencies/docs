---
layout: base
title:  'Statistics of nsubj in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="et_edt-dep-nsubj-cop.html">nsubj:cop</a></tt>.

25926 nodes (6%) are attached to their parents as `nsubj`.

16956 instances of `nsubj` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32330479055774.

The following 24 pairs of parts of speech are connected with `nsubj`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (14956; 58% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (7119; 27% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (3453; 13% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (128; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (106; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (43; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (36; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (14; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (13; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (11; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (8; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	Kust	kust	ADV	D	_	2	mark	_	_
2	tuli	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	mõte	mõte	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	_
4	kirjutada	kirjutama	VERB	V	VerbForm=Inf	3	acl	_	_
5	ooper	ooper	NOUN	S	Case=Nom|Number=Sing	4	obj	_	_
6	"	"	PUNCT	Z	_	7	punct	_	SpaceAfter=No
7	Writing	Writing	PROPN	S	Case=Nom|Number=Sing	5	appos	_	_
8	to	to	X	Y	Abbr=Yes	7	flat	_	_
9	Vermeer	Vermeer	PROPN	S	Case=Nom|Number=Sing	7	flat	_	SpaceAfter=No
10	"	"	PUNCT	Z	_	7	punct	_	SpaceAfter=No
11	?	?	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	kaldun	kalduma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	arvama	arvama	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	2	xcomp	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	9	punct	_	_
5	et	et	SCONJ	J	_	9	mark	_	_
6	Vermeeri	Vermeer	PROPN	S	Case=Gen|Number=Sing	7	nmod	_	_
7	saatus	saatus	NOUN	S	Case=Nom|Number=Sing	9	nsubj:cop	_	_
8	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
9	teistsugune	teist_sugune	PRON	P	Case=Nom|Number=Sing|PronType=Dem	3	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No
2	Writing	Writing	PROPN	S	Case=Nom|Number=Sing	6	nsubj	_	_
3	to	to	X	Y	Abbr=Yes	2	flat	_	_
4	Vermeer	Vermeer	PROPN	S	Case=Nom|Number=Sing	2	flat	_	SpaceAfter=No
5	"	"	PUNCT	Z	_	2	punct	_	_
6	esietendub	esi_etenduma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	Amsterdamis	Amsterdam	PROPN	S	Case=Ine|Number=Sing	6	obl	_	_
8	1.	1.	ADJ	N	Case=Ade|Number=Sing|NumForm=Digit|NumType=Ord	9	amod	_	_
9	detsembril	detsember	NOUN	S	Case=Ade|Number=Sing	6	obl	_	_
10	1999	1999	NUM	N	NumForm=Digit|NumType=Card	9	nummod	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	6	punct	_	_

~~~


