---
layout: base
title:  'Statistics of flat:name in UD_Hungarian'
udver: '2'
---

## Treebank Statistics: UD_Hungarian: Relations: `flat:name`

This relation is a language-specific subtype of .

1006 nodes (2%) are attached to their parents as `flat:name`.

825 instances of `flat:name` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.18389662027833.

The following 13 pairs of parts of speech are connected with `flat:name`: <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (927; 92% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-ADJ.html">ADJ</a></tt> (24; 2% instances), <tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (16; 2% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-CCONJ.html">CCONJ</a></tt> (13; 1% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="hu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="hu-pos-DET.html">DET</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="hu-pos-X.html">X</a></tt>-<tt><a href="hu-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hu-pos-X.html">X</a></tt>-<tt><a href="hu-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	Adatvédelmi	Adatvédelmi	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
3	Hivatalba	Hivatal	PROPN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	flat:name	_	_
4	is	is	CCONJ	_	_	2	cc	_	ToDo=cc-without-conj
5	érkeznek	érkezik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	hasonló	hasonló	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
7	bejelentések	bejelentés	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Például	például	ADV	_	_	2	advmod:mode	_	_
2	az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	hogy	hogy	SCONJ	_	_	12	mark	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
6	Fillér	Fillér	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
7	utcai	utcai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	flat:name	_	_
8	iskola	iskola	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nmod:att	_	_
9	pedagógiai	pedagógiai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	amod:att	_	_
10	programjába	program	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	12	nmod:obl	_	_
11	nem	nem	ADV	_	PronType=Neg	12	advmod	_	_
12	illene	illik	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
13	bele	ő	PRON	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	12	compound:preverb	_	_
14	a	a	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	Fenyves	Fenyves	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	nsubj	_	_
16	utcaié	utcai	NOUN	_	Case=Nom|Number=Sing|Number[psed]=Sing|Number[psor]=None|Person[psor]=None	15	flat:name	_	SpaceAfter=No
17	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat:name	color:blue
1	1997	1997	NUM	_	Case=Nom|Number=Sing|NumType=Card	2	amod:att	_	_
2	decembere	december	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	nmod	_	ToDo=nmod
3	óta	óta	ADP	_	_	2	case	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
5	London	London	PROPN	_	Case=Nom|Number=Sing	7	flat:name	_	_
6	Bróker	Bróker	PROPN	_	Case=Nom|Number=Sing	5	flat:name	_	_
7	Rt.	Rt.	PROPN	_	Case=Nom|Number=Sing	8	nmod:att	_	_
8	tulajdonosa	tulajdonos	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	nsubj	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
10	Portofinó	Portofinó	PROPN	_	Case=Nom|Number=Sing	12	flat:name	_	_
11	Építő	Építő	PROPN	_	Case=Nom|Number=Sing	10	flat:name	_	_
12	és	és	CCONJ	_	_	14	flat:name	_	_
13	Szolgáltató	Szolgáltató	PROPN	_	Case=Nom|Number=Sing	12	flat:name	_	_
14	Kft	Kft	PROPN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


