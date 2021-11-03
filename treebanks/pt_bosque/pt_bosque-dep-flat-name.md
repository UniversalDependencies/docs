---
layout: base
title:  'Statistics of flat:name in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="pt_bosque-dep-flat-foreign.html">flat:foreign</a></tt>.

5702 nodes (3%) are attached to their parents as `flat:name`.

5702 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31111890564714.

The following 20 pairs of parts of speech are connected with `flat:name`: <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (5532; 97% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-CCONJ.html">CCONJ</a></tt> (75; 1% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-DET.html">DET</a></tt> (26; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt> (18; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="pt_bosque-pos-X.html">X</a></tt>-<tt><a href="pt_bosque-pos-X.html">X</a></tt> (8; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="pt_bosque-pos-DET.html">DET</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	MAILSON	MAILSON	PROPN	_	Gender=Masc|Number=Sing	0	root	_	_
2	DA	DA	PROPN	_	_	1	flat:name	_	_
3	NÓBREGA	NÓBREGA	PROPN	_	Number=Sing	1	flat:name	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat:name	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	pesquisa	pesquisa	NOUN	_	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	feita	fazer	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	por	por	ADP	_	_	7	case	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Hubert	Hubert	PROPN	_	ExtPos=PROPN|Gender=Fem|Number=Sing	4	obl:agent	_	_
8	Imóveis	Imóveis	PROPN	_	Number=Sing	7	flat:name	_	_
9	e	e	CCONJ	_	_	7	flat:name	_	_
10	Administração	Administração	PROPN	_	Number=Sing	7	flat:name	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Balança	Balança	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	0	root	_	_
2	Rolha	Rolha	PROPN	_	Number=Sing	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	Sacode	Sacode	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	1	conj	_	_
5	a	a	DET	_	Number=Sing|PronType=Art	4	flat:name	_	_
6	Rosquinha	Rosquinha	PROPN	_	Number=Sing	4	flat:name	_	_
7	e	e	CCONJ	_	_	8	cc	_	_
8	Peru	Peru	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	1	conj	_	_
9	Esperto	Esperto	PROPN	_	Number=Sing	8	flat:name	_	SpaceAfter=No
10	!	!	PUNCT	_	_	1	punct	_	_

~~~


