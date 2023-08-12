---
layout: base
title:  'Statistics of csubj in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="en_lines-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="en_lines-dep-csubj-pass.html">csubj:pass</a></tt>.

168 nodes (0%) are attached to their parents as `csubj`.

97 instances of `csubj` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.78571428571429.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (66; 39% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (47; 28% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (32; 19% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (9; 5% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	This	this	DET	DEM-SG	Number=Sing|PronType=Dem	2	det	_	_
2	indexing	index	VERB	ING	Tense=Pres|VerbForm=Part	4	csubj	_	_
3	also	also	ADV	_	_	4	advmod	_	_
4	includes	include	VERB	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	the	the	DET	DEF	Definite=Def|PronType=Art	6	det	_	_
6	notion	notion	NOUN	SG-NOM	Number=Sing	4	obj	_	_
7	of	of	ADP	_	_	9	case	_	_
8	an	an	DET	IND-SG	Definite=Ind|PronType=Art	9	det	_	_
9	accelerator	accelerator	NOUN	SG-NOM	Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	Is	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	it	it	PRON	PERS-SG	_	3	expl	_	_
3	possible	possible	ADJ	POS	Degree=Pos	0	root	_	_
4	that	that	SCONJ	_	_	6	mark	_	_
5	you	you	PRON	PERS-P2	_	6	nsubj	_	_
6	know	know	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	3	csubj	_	_
7	the	the	DET	DEF	Definite=Def|PronType=Art	8	det	_	_
8	people	people	NOUN	PL-NOM	Number=Plur	6	obj	_	_
9	involved	involve	VERB	PASS	Tense=Past|VerbForm=Part	8	acl	_	SpaceAfter=No
10	?	?	PUNCT	QuestionMark	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	What	what	PRON	WH	PronType=Int	3	obj	_	_
2	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	criticise	criticise	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	6	csubj	_	_
4	is	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	the	the	DET	DEF	Definite=Def|PronType=Art	6	det	_	_
6	spirit	spirit	NOUN	SG-NOM	Number=Sing	0	root	_	_
7	underlying	underlie	VERB	ING	Tense=Pres|VerbForm=Part	6	acl	_	_
8	these	this	DET	DEM-PL	Number=Plur|PronType=Dem	9	det	_	_
9	amendments	amendment	NOUN	PL-NOM	Number=Plur	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	6	punct	_	_

~~~


