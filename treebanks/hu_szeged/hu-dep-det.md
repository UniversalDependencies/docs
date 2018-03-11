---
layout: base
title:  'Statistics of det in UD_Hungarian'
udver: '2'
---

## Treebank Statistics: UD_Hungarian: Relations: `det`

This relation is universal.

5247 nodes (12%) are attached to their parents as `det`.

5245 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76176862969316.

The following 14 pairs of parts of speech are connected with `det`: <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (4430; 84% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (626; 12% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (95; 2% instances), <tt><a href="hu-pos-ADV.html">ADV</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (30; 1% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-PRON.html">PRON</a></tt> (24; 0% instances), <tt><a href="hu-pos-NUM.html">NUM</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (19; 0% instances), <tt><a href="hu-pos-PRON.html">PRON</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (12; 0% instances), <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="hu-pos-X.html">X</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="hu-pos-ADP.html">ADP</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hu-pos-DET.html">DET</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 det	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	LRI	LRI	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
3	szerdán	szerda	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
4	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	nummod	_	_
5	közleményt	közlemény	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	obj	_	_
6	juttatott	jut	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	_
7	el	el	ADV	_	_	6	compound:preverb	_	_
8	szerkesztőségünkhöz	szerkesztőség	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	6	nmod:obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Ezzel	ez	PRON	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	9	nmod:obl	_	_
2	—	—	PUNCT	_	_	4	punct	_	_
3	az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	elhangzottak	elhangzott	ADJ	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	9	parataxis	_	_
5	szerint	szerint	ADP	_	_	4	case	_	_
6	—	—	PUNCT	_	_	4	punct	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	kamara	kamara	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nsubj	_	_
9	egyetért	egyetért	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


