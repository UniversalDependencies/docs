---
layout: base
title:  'Statistics of flat:name in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="pt_bosque-dep-flat-foreign.html">flat:foreign</a></tt>.

5774 nodes (3%) are attached to their parents as `flat:name`.

5774 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32438517492206.

The following 19 pairs of parts of speech are connected with `flat:name`: <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (5603; 97% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-CCONJ.html">CCONJ</a></tt> (78; 1% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-DET.html">DET</a></tt> (28; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt> (20; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="pt_bosque-pos-X.html">X</a></tt>-<tt><a href="pt_bosque-pos-X.html">X</a></tt> (8; 0% instances), <tt><a href="pt_bosque-pos-DET.html">DET</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:name	color:blue
1	Um	um	NUM	_	NumType=Card	6	nsubj	_	_
2	de	de	ADP	_	_	3	case	_	_
3	eles	eles	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	1	nmod	_	_
4	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	seu	seu	DET	_	Gender=Masc|Number=Sing|PronType=Prs	6	det	_	_
6	filho	filho	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	Sérgio	Sérgio	PROPN	_	Gender=Masc|Number=Sing	6	appos	_	MWE=Sérgio_Fioravanti|MWEPOS=PROPN
9	Fioravanti	Fioravanti	PROPN	_	Number=Sing	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Título	título	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	_	_	1	punct	_	_
3	Salazar	Salazar	PROPN	_	Gender=Masc|Number=Sing	1	appos	_	MWE=Salazar_e_Caetano|MWEPOS=PROPN
4	e	e	CCONJ	_	_	3	flat:name	_	_
5	Caetano	Caetano	PROPN	_	Number=Sing	3	flat:name	_	_
6	--	--	PUNCT	_	_	3	punct	_	_
7	Cartas	Cartas	PROPN	_	Number=Sing	3	parataxis	_	MWE=Cartas_Secretas_(1932-1968)|MWEPOS=PROPN
8	Secretas	Secretas	PROPN	_	Number=Sing	7	flat:name	_	_
9	(1932-1968)	(1932-1968)	PROPN	_	Number=Sing	7	flat:name	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Balança	Balança	PROPN	_	Gender=Masc|Number=Sing	0	root	_	MWE=Balança_Rolha|MWEPOS=PROPN
2	Rolha	Rolha	PROPN	_	Number=Sing	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	Sacode	Sacode	PROPN	_	Gender=Masc|Number=Sing	1	conj	_	MWE=Sacode_a_Rosquinha|MWEPOS=PROPN
5	a	a	DET	_	Number=Sing|PronType=Art	4	flat:name	_	_
6	Rosquinha	Rosquinha	PROPN	_	Number=Sing	4	flat:name	_	_
7	e	e	CCONJ	_	_	8	cc	_	_
8	Peru	Peru	PROPN	_	Gender=Masc|Number=Sing	1	conj	_	MWE=Peru_Esperto|MWEPOS=PROPN
9	Esperto	Esperto	PROPN	_	Number=Sing	8	flat:name	_	SpaceAfter=No
10	!	!	PUNCT	_	_	1	punct	_	_

~~~


