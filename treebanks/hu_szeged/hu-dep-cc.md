---
layout: base
title:  'Statistics of cc in UD_Hungarian'
udver: '2'
---

## Treebank Statistics: UD_Hungarian: Relations: `cc`

This relation is universal.

1821 nodes (4%) are attached to their parents as `cc`.

1454 instances of `cc` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.69412410763317.

The following 19 pairs of parts of speech are connected with `cc`: <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (738; 41% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (627; 34% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (187; 10% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (125; 7% instances), <tt><a href="hu-pos-PRON.html">PRON</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (69; 4% instances), <tt><a href="hu-pos-ADV.html">ADV</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (34; 2% instances), <tt><a href="hu-pos-NUM.html">NUM</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (21; 1% instances), <tt><a href="hu-pos-DET.html">DET</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="hu-pos-AUX.html">AUX</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="hu-pos-NUM.html">NUM</a></tt>-<tt><a href="hu-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="hu-pos-PRON.html">PRON</a></tt>-<tt><a href="hu-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 cc	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
2	utolsó	utolsó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
3	hat	hat	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	4	nummod	_	_
4	hónapos	hónapos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	időszak	időszak	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nsubj	_	_
6	azonban	azonban	CCONJ	_	_	10	cc	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	hét	hét	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
9	elején	eleje	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:obl	_	_
10	lejárt	le+jár	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cc	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Mindez	mindez	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	8	nsubj	_	_
2	mára	mára	ADV	_	_	8	advmod:tto	_	_
3	kritikus	kritikus	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
4	forgalmi	forgalmi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
5	és	és	CCONJ	_	_	6	cc	_	_
6	környezeti	környezeti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	conj	_	_
7	helyzethez	helyzet	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:obl	_	_
8	vezetett	vezet	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


