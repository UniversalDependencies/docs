---
layout: base
title:  'Statistics of csubj in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `csubj`

This relation is universal.

152 nodes (0%) are attached to their parents as `csubj`.

138 instances of `csubj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.18421052631579.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (55; 36% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (48; 32% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (28; 18% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="hu_szeged-pos-DET.html">DET</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 csubj	color:blue
1	Akinek	aki	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Rel	4	nmod:att	_	_
2	pedig	pedig	CCONJ	_	_	4	cc	_	_
3	lapát	lapát	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
4	van	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	csubj	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	kezében	kéz	NOUN	_	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	_
8	biztosan	biztos	ADJ	_	Case=Ess|Degree=Pos|Number=Sing	10	advmod:mode	_	_
9	nem	nem	ADV	_	PronType=Neg	10	advmod	_	_
10	fázik	fázik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj	color:blue
1	Igaz	igaz	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	8	punct	_	_
3	emberi	emberi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	5	amod:att	_	_
4	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	segítséget	segítség	NOUN	_	Case=Acc|Number=Sing	8	obj	_	SpaceAfter=No
6	"	"	PUNCT	_	_	5	punct	_	_
7	is	is	CCONJ	_	_	5	cc	_	ToDo=cc-without-conj
8	kapott	kap	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	csubj	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	települések	település	NOUN	_	Case=Nom|Number=Plur	11	nmod:att	_	_
11	elszigeteléséhez	elszigetelés	NOUN	_	Case=All|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	ok	ok	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
3	:	:	PUNCT	_	_	6	punct	_	_
4	Tito	Tito	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
5	álmatlanságban	álmatlanság	NOUN	_	Case=Ine|Number=Sing	6	obl	_	_
6	szenvedett	szenved	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	csubj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


