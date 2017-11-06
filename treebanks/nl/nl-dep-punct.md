---
layout: base
title:  'Statistics of punct in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `punct`

This relation is universal.

22724 nodes (11%) are attached to their parents as `punct`.

15448 instances of `punct` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.40661855307164.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (12758; 56% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (4600; 20% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (1724; 8% instances), <tt><a href="nl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (1346; 6% instances), <tt><a href="nl-pos-PRON.html">PRON</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (565; 2% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (563; 2% instances), <tt><a href="nl-pos-NUM.html">NUM</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (463; 2% instances), <tt><a href="nl-pos-X.html">X</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (190; 1% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (124; 1% instances), <tt><a href="nl-pos-SYM.html">SYM</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (102; 0% instances), <tt><a href="nl-pos-DET.html">DET</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (100; 0% instances), <tt><a href="nl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (75; 0% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (51; 0% instances), <tt><a href="nl-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (41; 0% instances), <tt><a href="nl-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (22; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 punct	color:blue
1	,,	,,	PUNCT	LET	_	7	punct	_	SpaceAfter=No
2	Mijn	mijn	PRON	VNW|bez|det|stan|vol|1|ev|prenom|zonder|agr	Person=1|PronType=Prs	3	nmod:poss	_	_
3	basisniveau	basisniveau	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	nsubj	_	_
4	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	flink	flink	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	7	advmod	_	_
6	omhoog	omhoog	ADV	BW	_	7	advmod	_	_
7	gegaan	gaan	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	LET	_	7	punct	_	SpaceAfter=No
9	''	''	PUNCT	LET	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	5	nsubj	_	_
2	ben	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	nogal	nogal	ADV	BW	_	5	advmod	_	_
4	een	een	DET	LID|onbep|stan|agr	Definite=Ind	5	det	_	_
5	twijfelaar	twijfelaar	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	LET	_	5	punct	_	SpaceAfter=No
7	''	''	PUNCT	LET	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 punct	color:blue
1	Mooier	mooi	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	0	root	_	_
2	kon	kunnen	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	1	cop	_	_
3	niet	niet	ADV	BW	_	1	advmod	_	SpaceAfter=No
4	,	,	PUNCT	LET	_	5	punct	_	_
5	vond	vinden	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	1	parataxis	_	_
6	Van	Van	PROPN	SPEC|deeleigen	_	5	nsubj	_	_
7	Moorsel	Moorsel	PROPN	SPEC|deeleigen	_	6	flat:name	_	SpaceAfter=No
8	.	.	PUNCT	LET	_	1	punct	_	_

~~~


