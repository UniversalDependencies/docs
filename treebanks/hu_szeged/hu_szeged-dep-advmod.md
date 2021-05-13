---
layout: base
title:  'Statistics of advmod in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `advmod`

This relation is universal.
There are 7 language-specific subtypes of `advmod`: <tt><a href="hu_szeged-dep-advmod-locy.html">advmod:locy</a></tt>, <tt><a href="hu_szeged-dep-advmod-mode.html">advmod:mode</a></tt>, <tt><a href="hu_szeged-dep-advmod-que.html">advmod:que</a></tt>, <tt><a href="hu_szeged-dep-advmod-tfrom.html">advmod:tfrom</a></tt>, <tt><a href="hu_szeged-dep-advmod-tlocy.html">advmod:tlocy</a></tt>, <tt><a href="hu_szeged-dep-advmod-to.html">advmod:to</a></tt>, <tt><a href="hu_szeged-dep-advmod-tto.html">advmod:tto</a></tt>.

431 nodes (1%) are attached to their parents as `advmod`.

409 instances of `advmod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51740139211137.

The following 9 pairs of parts of speech are connected with `advmod`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (301; 70% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (56; 13% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (43; 10% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (12; 3% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (9; 2% instances), <tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="hu_szeged-pos-DET.html">DET</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Ezek	ez	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Dem	3	nsubj	_	_
2	nem	nem	ADV	_	PronType=Neg	3	advmod	_	_
3	kerülnek	kerül	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	ki	ki	ADV	_	Degree=Pos	3	compound:preverb	_	_
5	az	az	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	önkormányzat	önkormányzat	NOUN	_	Case=Nom|Number=Sing	7	nmod:att	_	_
7	tulajdonából	tulajdon	NOUN	_	Case=Ela|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	Ez	ez	DET	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	_
2	utóbbi	utóbbi	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
3	nem	nem	ADV	_	PronType=Neg	4	advmod	_	_
4	iskolaérett	iskolaérett	ADJ	_	Case=Nom|Number=Sing|VerbForm=PartPast	7	amod:att	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	problémás	problémás	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod:att	_	_
7	gyerekekkel	gyerek	NOUN	_	Case=Ins|Number=Plur	9	obl	_	_
8	is	is	CCONJ	_	_	7	cc	_	ToDo=cc-without-conj
9	foglalkozik	foglalkozik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	természet	természet	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
3	nem	nem	ADV	_	PronType=Neg	5	advmod	_	_
4	könnyű	könnyű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	5	amod:att	_	_
5	ellenfél	ellenfél	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


