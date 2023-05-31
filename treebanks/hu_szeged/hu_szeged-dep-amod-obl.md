---
layout: base
title:  'Statistics of amod:obl in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `amod:obl`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `amod`: <tt><a href="hu_szeged-dep-amod-att.html">amod:att</a></tt>, <tt><a href="hu_szeged-dep-amod-attlvc.html">amod:attlvc</a></tt>, <tt><a href="hu_szeged-dep-amod-mode.html">amod:mode</a></tt>.

61 nodes (0%) are attached to their parents as `amod:obl`.

52 instances of `amod:obl` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47540983606557.

The following 9 pairs of parts of speech are connected with `amod:obl`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (35; 57% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (14; 23% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod:obl	color:blue
1	Felvetődik	fel+vetődik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	a	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	kérdés	kérdés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	nsubj	_	SpaceAfter=No
4	:	:	PUNCT	_	_	1	punct	_	_
5	vajon	vajon	ADV	_	PronType=Int	7	advmod:que	_	_
6	végtelenné	végtelen	ADJ	_	Case=Tra|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:obl	_	_
7	válik	válik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	SpaceAfter=No
8	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 amod:obl	color:blue
1	Az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	nsubj	_	_
2	is	is	CCONJ	_	_	1	cc	_	ToDo=cc-without-conj
3	tény	tény	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	SpaceAfter=No
4	:	:	PUNCT	_	_	3	punct	_	_
5	az	az	DET	_	Definite=Def|PronType=Art	12	det	_	_
6	immár	immár	ADV	_	_	9	advmod:mode	_	_
7	tíz	tíz	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	8	nummod	_	_
8	éve	év	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	obl	_	_
9	tartó	tartó	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	12	amod:att	_	_
10	folyamatos	folyamatos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
11	világgazdasági	világgazdasági	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
12	konjunktúra	konjunktúra	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	nsubj	_	_
13	minden	minden	DET	_	Definite=Ind|PronType=Tot	14	det	_	_
14	eddiginél	eddigi	ADJ	_	Case=Ade|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	amod:obl	_	_
15	hosszabb	hosszú	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	csubj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod:obl	color:blue
1	Mindezt	mindez	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	6	obj	_	_
2	a	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	levél	levél	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod:att	_	_
4	írója	író	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
5	zárójelbe	zárójel	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
6	teszi	tesz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	18	punct	_	_
8	s	s	CCONJ	_	_	18	cc	_	_
9	rövidre	rövid	ADJ	_	Case=Sub|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	amod:obl	_	_
10	zárva	zárva	ADV	_	VerbForm=Conv	18	xcomp	_	_
11	feljelentését	feljelentés	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	obj	_	SpaceAfter=No
12	,	,	PUNCT	_	_	18	punct	_	_
13	a	a	DET	_	Definite=Def|PronType=Art	15	det	_	_
14	magyar	magyar	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	amod:att	_	_
15	társadalmat	társadalom	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	obj	_	_
16	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	17	nummod	_	_
17	osztályra	osztály	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	nmod:obl	_	_
18	bontja	bont	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	6	punct	_	_

~~~


