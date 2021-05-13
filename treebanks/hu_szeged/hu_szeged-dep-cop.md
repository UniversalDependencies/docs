---
layout: base
title:  'Statistics of cop in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `cop`

This relation is universal.

169 nodes (0%) are attached to their parents as `cop`.

124 instances of `cop` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.45562130177515.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (78; 46% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (65; 38% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (10; 6% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (6; 4% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (5; 3% instances), <tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Ettől	ez	DET	_	Case=Abl|Number=Sing|Person=3|PronType=Dem	3	det	_	_
2	a	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	győzelemtől	győzelem	NOUN	_	Case=Abl|Number=Sing	4	obl	_	_
4	magabiztos	magabiztos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
5	lettem	lesz	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cop	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	rendezvény	rendezvény	NOUN	_	Case=Nom|Number=Sing	3	nmod:att	_	_
3	szónoka	szónok	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
4	Tamás	Tamás	PROPN	_	Case=Nom|Number=Sing	7	appos	_	_
5	Gáspár	Gáspár	PROPN	_	Case=Nom|Number=Sing	4	flat:name	_	_
6	Miklós	Miklós	PROPN	_	Case=Nom|Number=Sing	4	flat:name	_	_
7	filozófus	filozófus	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
8	lesz	lesz	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Ez	ez	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	0	root	_	_
2	lenne	lesz	AUX	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	áldozat	áldozat	NOUN	_	Case=Nom|Number=Sing	1	nsubj	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
6	sikeres	sikeres	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod:att	_	_
7	BL-szereplésért	BL-szereplés	NOUN	_	Case=Cau|Number=Sing	1	nmod:obl	_	SpaceAfter=No
8	?	?	PUNCT	_	_	1	punct	_	_

~~~


