---
layout: base
title:  'Statistics of nsubj in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="et_edt-dep-nsubj-cop.html">nsubj:cop</a></tt>.

25935 nodes (6%) are attached to their parents as `nsubj`.

16974 instances of `nsubj` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32994023520339.

The following 26 pairs of parts of speech are connected with `nsubj`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (14950; 58% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (7131; 27% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (3454; 13% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (121; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (110; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (48; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (38; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (13; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (12; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (10; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (8; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	Kust	kust	ADV	D	_	2	mark	2:mark	_
2	tuli	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=tulema_3
3	mõte	mõte	NOUN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	Arg=tulema_Arg_1
4	kirjutada	kirjutama	VERB	V	VerbForm=Inf	3	acl	3:acl	Verb=kirjutama
5	ooper	ooper	NOUN	S	Case=Nom|Number=Sing	4	obj	4:obj	Arg=kirjutama_Arg_1|NE=B-Prod
6	"	"	PUNCT	Z	_	7	punct	7:punct	NE=I-Prod|SpaceAfter=No
7	Writing	Writing	PROPN	S	Case=Nom|Number=Sing	5	appos	5:appos	NE=I-Prod
8	to	to	X	Y	Abbr=Yes	7	flat	7:flat	NE=I-Prod
9	Vermeer	Vermeer	PROPN	S	Case=Nom|Number=Sing	7	flat	7:flat	NE=I-Prod|SpaceAfter=No
10	"	"	PUNCT	Z	_	7	punct	7:punct	NE=I-Prod|SpaceAfter=No
11	?	?	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj|3:nsubj	Arg=kalduma_Arg_0
2	kaldun	kalduma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=kalduma
3	arvama	arvama	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	2	xcomp	2:xcomp	SpaceAfter=No|Verb=arvama
4	,	,	PUNCT	Z	_	9	punct	9:punct	_
5	et	et	SCONJ	J	_	9	mark	9:mark	_
6	Vermeeri	Vermeer	PROPN	S	Case=Gen|Number=Sing	7	nmod	7:nmod	NE=B-Per
7	saatus	saatus	NOUN	S	Case=Nom|Number=Sing	9	nsubj:cop	9:nsubj	_
8	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	teistsugune	teist_sugune	PRON	P	Case=Nom|Number=Sing|PronType=Dem	3	ccomp	3:ccomp	Arg=arvama_Arg_1|SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Karl	Karl	PROPN	S	Case=Nom|Number=Sing	4	nsubj	4:nsubj	NE=B-Per
2	Martin	Martin	PROPN	S	Case=Nom|Number=Sing	1	flat	1:flat	NE=I-Per
3	Sinijärv	Sini_järv	PROPN	S	Case=Nom|Number=Sing	1	flat	1:flat	NE=I-Per
4	pakkus	pakkuma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	välja	välja	ADV	D	_	4	compound:prt	4:compound	_
6	sõna	sõna	NOUN	S	Case=Gen|Number=Sing	4	obj	4:obj	_
7	"	"	PUNCT	Z	_	8	punct	8:punct	SpaceAfter=No
8	etnofuturism	etno_futurism	NOUN	S	Case=Nom|Number=Sing	6	appos	6:appos	SpaceAfter=No
9	"	"	PUNCT	Z	_	8	punct	8:punct	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


