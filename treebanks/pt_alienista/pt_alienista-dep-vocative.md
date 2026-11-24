---
layout: base
title:  'Statistics of vocative in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `vocative`

This relation is universal.

20 nodes (0%) are attached to their parents as `vocative`.

12 instances of `vocative` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.15.

The following 8 pairs of parts of speech are connected with `vocative`: <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (5; 25% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (5; 25% instances), <tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="pt_alienista-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 vocative	color:blue
1	-	-	PUNCT	_	_	2	punct	_	_
2	Cala	calar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	boca	boca	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	tolo	tolo	NOUN	_	Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
7	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Benedita	Benedita	PROPN	_	_	3	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	vê	ver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	se	se	SCONJ	_	_	8	mark	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	barra	barra	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
7	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	boa	bom	ADJ	_	Gender=Fem|Number=Sing	3	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 vocative	color:blue
1	-	-	PUNCT	_	_	2	punct	_	_
2	Não	não	ADV	_	_	6	ccomp:speech	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	senhor	senhor	NOUN	_	Gender=Masc|Number=Sing	2	vocative	_	_
5	-	-	PUNCT	_	_	2	punct	_	_
6	acudiu	acudir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	vivamente	vivamente	ADV	_	_	6	advmod	_	_
8	Crispim	Crispim	PROPN	_	_	6	nsubj	_	_
9	Soares	Soares	PROPN	_	_	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


