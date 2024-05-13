---
layout: base
title:  'Statistics of appos in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `appos`

This relation is universal.

289 nodes (1%) are attached to their parents as `appos`.

289 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.36678200692042.

The following 13 pairs of parts of speech are connected with `appos`: <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (121; 42% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (88; 30% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (46; 16% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (22; 8% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	rendezvény	rendezvény	NOUN	_	Case=Nom|Number=Sing	3	nmod:att	_	_
3	szónoka	szónok	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	_
4	Tamás	Tamás	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
5	Gáspár	Gáspár	PROPN	_	Case=Nom|Number=Sing	4	flat:name	_	_
6	Miklós	Miklós	PROPN	_	Case=Nom|Number=Sing	4	flat:name	_	_
7	filozófus	filozófus	NOUN	_	Case=Nom|Number=Sing	4	appos	_	_
8	lesz	lesz	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	Régi	régi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	2	amod:att	_	_
2	barátja	barát	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	Csapó	Csapó	PROPN	_	Case=Nom|Number=Sing	2	appos	_	_
5	József	József	PROPN	_	Case=Nom|Number=Sing	4	flat:name	_	_
6	bújtatta	bújik	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	Lezárásának	lezárás	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nmod:att	_	_
2	határideje	határidő	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	SpaceAfter=No
3	:	:	PUNCT	_	_	6	punct	_	_
4	2000.	2000.	ADJ	_	Case=Nom|Number=Sing|NumType=Ord	5	nmod:att	_	_
5	január	január	NOUN	_	Case=Nom|Number=Sing	6	nmod:att	_	_
6	12.	12.	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	appos	_	_

~~~


