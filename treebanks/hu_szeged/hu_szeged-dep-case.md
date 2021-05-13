---
layout: base
title:  'Statistics of case in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `case`

This relation is universal.

800 nodes (2%) are attached to their parents as `case`.

797 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41625.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADP.html">ADP</a></tt> (642; 80% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-ADP.html">ADP</a></tt> (72; 9% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-ADP.html">ADP</a></tt> (48; 6% instances), <tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt>-<tt><a href="hu_szeged-pos-ADP.html">ADP</a></tt> (15; 2% instances), <tt><a href="hu_szeged-pos-DET.html">DET</a></tt>-<tt><a href="hu_szeged-pos-ADP.html">ADP</a></tt> (11; 1% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-X.html">X</a></tt>-<tt><a href="hu_szeged-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
1	Szakmai	szakmai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	2	amod:att	_	_
2	szervezetek	szervezet	NOUN	_	Case=Nom|Number=Plur	4	nsubj	_	_
3	is	is	CCONJ	_	_	2	cc	_	ToDo=cc-without-conj
4	tiltakoznak	tiltakozik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	Jeszenszky	Jeszenszky	PROPN	_	Case=Nom|Number=Sing	6	nmod:att	_	_
6	levele	levél	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
7	ellen	ellen	ADP	_	_	6	case	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
1	Oroszország	Oroszország	PROPN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	nagyhatalom	nagyhatalom	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
3	és	és	CCONJ	_	_	5	cc	_	_
4	fontos	fontos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	5	amod:att	_	_
5	partner	partner	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
6	Magyarország	Magyarország	PROPN	_	Case=Nom|Number=Sing	2	nmod	_	ToDo=nmod
7	számára	számára	ADP	_	_	6	case	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Ázsiában	Ázsia	PROPN	_	Case=Ine|Number=Sing	7	obl	_	_
2	ezzel	ez	PRON	_	Case=Ins|Number=Sing|Person=3|PronType=Dem	7	obl	_	_
3	szemben	szemben	ADP	_	_	2	case	_	_
4	mind	mind	ADV	_	PronType=Tot	6	advmod:mode	_	_
5	több	több	DET	_	Definite=Ind|PronType=Ind	6	det	_	_
6	sikerrel	siker	NOUN	_	Case=Ins|Number=Sing	7	obl	_	_
7	veszik	vesz	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	fel	fel	ADV	_	Degree=Pos	7	compound:preverb	_	_
9	az	az	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	AIDS-szel	AIDS	NOUN	_	Case=Ins|Number=Sing	11	obl	_	_
11	szembeni	szembeni	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	12	amod:att	_	_
12	küzdelmet	küzdelem	NOUN	_	Case=Acc|Number=Sing	7	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	_

~~~


