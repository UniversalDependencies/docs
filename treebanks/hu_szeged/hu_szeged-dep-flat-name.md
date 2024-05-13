---
layout: base
title:  'Statistics of flat:name in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `flat:name`

This relation is a language-specific subtype of .

997 nodes (2%) are attached to their parents as `flat:name`.

997 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36108324974925.

The following 14 pairs of parts of speech are connected with `flat:name`: <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (931; 93% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (23; 2% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (14; 1% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-CCONJ.html">CCONJ</a></tt> (13; 1% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="hu_szeged-pos-DET.html">DET</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-X.html">X</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-X.html">X</a></tt>-<tt><a href="hu_szeged-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	Adatvédelmi	Adatvédelmi	PROPN	_	Case=Nom|Number=Sing	5	obl	_	_
3	Hivatalba	Hivatal	PROPN	_	Case=Ill|Number=Sing	2	flat:name	_	_
4	is	is	CCONJ	_	_	2	cc	_	ToDo=cc-without-conj
5	érkeznek	érkezik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	hasonló	hasonló	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod:att	_	_
7	bejelentések	bejelentés	NOUN	_	Case=Nom|Number=Plur	5	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Például	például	ADV	_	_	2	advmod:mode	_	_
2	az	az	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	12	punct	_	_
4	hogy	hogy	SCONJ	_	_	12	mark	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
6	Fillér	Fillér	PROPN	_	Case=Nom|Number=Sing	8	amod:att	_	_
7	utcai	utcai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	flat:name	_	_
8	iskola	iskola	NOUN	_	Case=Nom|Number=Sing	10	nmod:att	_	_
9	pedagógiai	pedagógiai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod:att	_	_
10	programjába	program	NOUN	_	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	obl	_	_
11	nem	nem	ADV	_	PronType=Neg	12	advmod	_	_
12	illene	illik	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
13	bele	ő	PRON	_	Case=Ill|Number=Sing|Person=3|PronType=Prs	12	compound:preverb	_	_
14	a	a	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	Fenyves	Fenyves	PROPN	_	Case=Nom|Number=Sing	12	nsubj	_	_
16	utcaié	utcai	NOUN	_	Case=Nom|Number=Sing|Number[psed]=Sing	15	flat:name	_	SpaceAfter=No
17	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:name	color:blue
1	Dr.	dr.	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
2	Rózsa	Rózsa	PROPN	_	Case=Nom|Number=Sing	1	flat:name	_	_
3	Sándort	Sándor	PROPN	_	Case=Acc|Number=Sing	1	flat:name	_	_
4	1995	1995	NUM	_	Case=Nom|Number=Sing|NumType=Card	5	nmod:att	_	_
5	decemberében	december	NOUN	_	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl	_	_
6	mentették	ment	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	fel	fel	ADV	_	Degree=Pos	6	compound:preverb	_	_
8	bírói	bírói	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	9	amod:att	_	_
9	tisztségéből	tisztség	NOUN	_	Case=Ela|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl	_	_
10	alkalmatlanság	alkalmatlanság	NOUN	_	Case=Nom|Number=Sing	6	obl	_	_
11	miatt	miatt	ADP	_	_	10	case	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


