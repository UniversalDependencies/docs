---
layout: base
title:  'Statistics of cc:preconj in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="et-dep-cc.html">cc</a></tt>.

110 nodes (0%) are attached to their parents as `cc:preconj`.

106 instances of `cc:preconj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90909090909091.

The following 15 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (37; 34% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (18; 16% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (16; 15% instances), <tt><a href="et-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (12; 11% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (5; 5% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-SCONJ.html">SCONJ</a></tt> (4; 4% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-SCONJ.html">SCONJ</a></tt> (3; 3% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="et-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et-pos-SCONJ.html">SCONJ</a></tt> (2; 2% instances), <tt><a href="et-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc:preconj	color:blue
1	ettevõtted	ette_võte	NOUN	S	Case=Nom|Number=Plur	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	5	punct	_	_
3	kes	kes	PRON	P	Case=Nom|Number=Plur|PronType=Int,Rel	5	nsubj	_	_
4	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	investeerinud	investeerima	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	1	acl:relcl	_	_
6	nii	nii	ADV	D	_	7	cc:preconj	_	_
7	ehitistesse	ehitis	NOUN	S	Case=Ill|Number=Plur	5	obl	_	_
8	kui	kui	CCONJ	J	_	9	cc	_	_
9	masinatesse	masin	NOUN	S	Case=Ill|Number=Plur	7	conj	_	SpaceAfter=No
10	;	;	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Leidub	leiduma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	neid	see	PRON	P	Case=Par|Number=Plur|PronType=Dem	1	nsubj	_	_
3	nii	nii	ADV	D	_	4	cc:preconj	_	_
4	häid	hea	ADJ	A	Case=Par|Degree=Pos|Number=Plur	1	amod	_	_
5	kui	kui	CCONJ	J	_	7	cc	_	_
6	ka	ka	ADV	D	_	7	advmod	_	_
7	halbu	halb	ADJ	A	Case=Par|Degree=Pos|Number=Plur	4	conj	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc:preconj	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	_
2	Mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	3	nsubj:cop	_	_
3	sellest	see	PRON	P	Case=Ela|Number=Sing|PronType=Dem	0	root	_	_
4	siis	siis	ADV	D	_	3	advmod	_	_
5	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	_	_
7	kas	kas	ADV	D	_	8	cc:preconj	_	_
8	saab	saama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
9	aru	aru	NOUN	S	Case=Par|Number=Sing	8	obj	_	_
10	või	või	CCONJ	J	_	12	cc	_	_
11	ei	ei	AUX	V	Mood=Ind|Polarity=Neg|VerbForm=Fin	12	aux	_	_
12	saa	saama	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
13	?	?	PUNCT	Z	_	3	punct	_	_

~~~


