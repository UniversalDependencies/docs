---
layout: base
title:  'Statistics of obl in UD_Hungarian'
udver: '2'
---

## Treebank Statistics: UD_Hungarian: Relations: `obl`

This relation is universal.

824 nodes (2%) are attached to their parents as `obl`.

694 instances of `obl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.08252427184466.

The following 18 pairs of parts of speech are connected with `obl`: <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (461; 56% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (112; 14% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (86; 10% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-PRON.html">PRON</a></tt> (30; 4% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (29; 4% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (29; 4% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (28; 3% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-NUM.html">NUM</a></tt> (13; 2% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-PRON.html">PRON</a></tt> (10; 1% instances), <tt><a href="hu-pos-ADV.html">ADV</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="hu-pos-ADV.html">ADV</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hu-pos-ADV.html">ADV</a></tt>-<tt><a href="hu-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="hu-pos-ADV.html">ADV</a></tt>-<tt><a href="hu-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Szakmai	szakmai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	amod:att	_	_
2	szervezetek	szervezet	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
3	is	is	CCONJ	_	_	2	cc	_	ToDo=cc-without-conj
4	tiltakoznak	tiltakozik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	Jeszenszky	Jeszenszky	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
6	levele	levél	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
7	ellen	ellen	ADP	_	_	6	case	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obl	color:blue
1	És	és	CCONJ	_	_	3	cc	_	_
2	ezt	ez	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	obj	_	_
3	bizonyítja	bizonyít	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	út	út	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
6	szélén	szél	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	nmod:obl	_	_
7	órák	óra	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	obl	_	_
8	óta	óta	ADP	_	_	7	case	_	_
9	veszteglő	veszteglő	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	11	amod:att	_	_
10	távolsági	távolsági	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	amod:att	_	_
11	busz	busz	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
12	is	is	CCONJ	_	_	11	cc	_	SpaceAfter=No|ToDo=cc-without-conj
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl	color:blue
1	Ha	ha	SCONJ	_	_	4	mark	_	_
2	nem	nem	ADV	_	PronType=Neg	4	advmod	_	_
3	is	is	ADV	_	_	4	advmod:mode	_	_
4	szűnt	szűnik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl	_	_
5	meg	meg	PART	_	_	4	compound:preverb	_	SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	_	_
7	de	de	CCONJ	_	_	9	cc	_	_
8	látványosan	látványos	ADJ	_	Case=Ess|Degree=Pos|Number=Sing	9	obl	_	_
9	apadt	apad	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
11	költségvetési	költségvetési	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	12	amod:att	_	_
12	hiány	hiány	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
13	is	is	CCONJ	_	_	9	cc	_	SpaceAfter=No|ToDo=cc-without-conj
14	.	.	PUNCT	_	_	9	punct	_	_

~~~


