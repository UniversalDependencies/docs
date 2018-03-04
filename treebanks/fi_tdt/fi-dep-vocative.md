---
layout: base
title:  'Statistics of vocative in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `vocative`

This relation is universal.

117 nodes (0%) are attached to their parents as `vocative`.

88 instances of `vocative` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.77777777777778.

The following 15 pairs of parts of speech are connected with `vocative`: <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (69; 59% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (15; 13% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (9; 8% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="fi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 vocative	color:blue
1	Älkää	ei	AUX	V	Mood=Imp|Number=Plur|Person=2|Polarity=Neg|VerbForm=Fin|Voice=Act	4	aux	_	_
2	hyvät	hyvä	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	3	amod	_	_
3	ihmiset	ihminen	NOUN	N	Case=Nom|Number=Plur	4	vocative	_	_
4	karistako	karistaa	VERB	V	Connegative=Yes|Mood=Imp|VerbForm=Fin	0	root	_	_
5	sikarista	sikari	NOUN	N	Case=Ela|Number=Sing	4	obl	_	_
6	tuhkaa	tuhka	NOUN	N	Case=Par|Number=Sing	4	obj	_	_
7	pois	pois	ADV	Adv	_	4	advmod	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 vocative	color:blue
1	"	"	PUNCT	Punct	_	2	punct	_	_
2	Menkäähän	mennä	VERB	V	Clitic=Han|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
3	Peltonen	Peltonen	PROPN	N	Case=Nom|Number=Sing	2	vocative	_	_
4	ja	ja	CCONJ	C	_	5	cc	_	_
5	hoitakaa	hoitaa	VERB	V	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	2	conj	_	_
6	tehtävänne	tehtävä	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=2	5	obj	_	_
7	"	"	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 vocative	color:blue
1	-	-	PUNCT	Punct	_	8	punct	_	_
2	Opettaja	opettaja	NOUN	N	Case=Nom|Derivation=Ja|Number=Sing	8	vocative	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	2	punct	_	_
4	missä	mikä	PRON	Pron	Case=Ine|Number=Sing|PronType=Int	8	obl	_	_
5	sä	sinä	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs|Style=Coll	8	nsubj:cop	_	_
6	oikein	oikein	ADV	Adv	_	8	advmod	_	_
7	olet	olla	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	töissä	työ	NOUN	N	Case=Ine|Number=Plur	0	root	_	SpaceAfter=No
9	?	?	PUNCT	Punct	_	8	punct	_	_

~~~


