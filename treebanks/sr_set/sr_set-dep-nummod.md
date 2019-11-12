---
layout: base
title:  'Statistics of nummod in UD_Serbian-SET'
udver: '2'
---

## Treebank Statistics: UD_Serbian-SET: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="sr_set-dep-nummod-gov.html">nummod:gov</a></tt>.

1250 nodes (1%) are attached to their parents as `nummod`.

1194 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3248.

The following 14 pairs of parts of speech are connected with `nummod`: <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (1171; 94% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (41; 3% instances), <tt><a href="sr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="sr_set-pos-DET.html">DET</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="sr_set-pos-NUM.html">NUM</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-SYM.html">SYM</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr_set-pos-X.html">X</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nummod	color:blue
1	Esat	Esat	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
2	Beriša	Beriša	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	1	flat	_	_
3	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	jedan	jedan	NUM	Mlcmsn	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	6	nummod	_	_
5	takav	takav	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	primer	primer	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Trenutno	trenutno	ADV	Rgp	Degree=Pos	4	advmod	_	_
2	putnički	putnički	ADJ	Agpmpny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	3	amod	_	_
3	vozovi	voz	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
4	saobraćaju	saobraćati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	dva	dva	NUM	Mlc	NumType=Card	6	nummod	_	_
6	puta	put	ADV	Rgp	Degree=Pos	4	obl	_	_
7	dnevno	dnevno	ADV	Rgp	Degree=Pos	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nummod	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No
2	Izvršenje	izvršenje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	_
3	smrtne	smrtan	ADJ	Agpfsgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	kazne	kazna	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
5	"	"	PUNCT	Z	_	2	punct	_	_
6	izbačeno	izbaciti	ADJ	Appnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
8	iz	iz	ADP	Sg	Case=Gen	9	case	_	_
9	Člana	Član	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	6	obl	_	_
10	15.	15.	NUM	Mdo	NumType=Ord	9	nummod	_	_

~~~


