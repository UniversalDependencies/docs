---
layout: base
title:  'Statistics of compound in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="et_edt-dep-compound-prt.html">compound:prt</a></tt>.

477 nodes (0%) are attached to their parents as `compound`.

421 instances of `compound` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10691823899371.

The following 13 pairs of parts of speech are connected with `compound`: <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (340; 71% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (54; 11% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (45; 9% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (15; 3% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	Teie	sina	PRON	P	Case=Gen|Number=Plur|Person=2|PronType=Prs	3	nmod	3:nmod	_
2	uus	uus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	film	film	NOUN	S	Case=Nom|Number=Sing	10	nsubj:cop	10:nsubj	NE=B-Prod
4	"	"	PUNCT	Z	_	7	punct	5:punct	NE=I-Prod|SpaceAfter=No
5	8	8	NUM	N	NumForm=Digit|NumType=Card	7	nummod	3:appos	NE=I-Prod
6	½	½	NUM	N	NumForm=Digit|NumType=Frac	5	compound	5:compound	NE=I-Prod
7	naist	naine	NOUN	S	Case=Par|Number=Sing	3	appos	3:appos	NE=I-Prod|SpaceAfter=No
8	"	"	PUNCT	Z	_	7	punct	5:punct	NE=I-Prod
9	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
10	austusavaldus	austus_avaldus	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
11	Fellinile	Fellini	PROPN	S	Case=All|Number=Sing	10	nmod	10:nmod	NE=B-Per|SpaceAfter=No
12	.	.	PUNCT	Z	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	CQL-il	CQL	NOUN	Y	Abbr=Yes|Case=Ade|Number=Sing	7	obl	7:obl	NE=B-Prod
2	(	(	PUNCT	Z	_	5	punct	5:punct	SpaceAfter=No
3	Continous	continious	ADJ	T	Degree=Pos	4	amod	4:amod	Lang=en|NE=B-Prod
4	Query	query	NOUN	T	Number=Sing	5	compound	5:compound	Lang=en|NE=I-Prod
5	Language	language	NOUN	T	Number=Sing	1	appos	1:appos	Lang=en|NE=I-Prod|SpaceAfter=No
6	)	)	PUNCT	Z	_	5	punct	5:punct	_
7	põhinev	põhinev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	9	acl	9:acl	_
8	edasiarendatud	edasi_arenda=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	9	acl	9:acl	_
9	otsing	otsing	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	DVD	DVD	NOUN	Y	Abbr=Yes	2	nmod	2:nmod	_
2	loojate	looja	NOUN	S	Case=Gen|Number=Plur	3	nmod	3:nmod	_
3	murest	mure	NOUN	S	Case=Ela|Number=Sing	6	obl	6:obl	_
4	võib	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
5	aru	aru	NOUN	S	Case=Par|Number=Sing	6	compound	6:compound	_
6	saada	saama	VERB	V	VerbForm=Inf	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


