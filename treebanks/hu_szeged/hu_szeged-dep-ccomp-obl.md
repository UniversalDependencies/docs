---
layout: base
title:  'Statistics of ccomp:obl in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `ccomp:obl`

This relation is a language-specific subtype of <tt><a href="hu_szeged-dep-ccomp.html">ccomp</a></tt>.
There are also 2 other language-specific subtypes of `ccomp`: <tt><a href="hu_szeged-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="hu_szeged-dep-ccomp-pred.html">ccomp:pred</a></tt>.

154 nodes (0%) are attached to their parents as `ccomp:obl`.

142 instances of `ccomp:obl` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.29220779220779.

The following 11 pairs of parts of speech are connected with `ccomp:obl`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (110; 71% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (12; 8% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 ccomp:obl	color:blue
1	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
2	Mindegyik	mindegyik	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Tot	4	nsubj	_	_
3	ezt	ez	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Dem	4	obj	_	_
4	csinálja	csinál	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp:obl	_	SpaceAfter=No
5	"	"	PUNCT	_	_	4	punct	_	_
6	—	—	PUNCT	_	_	4	punct	_	_
7	panaszkodnak	panaszkodik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	közútkezelő	közútkezelő	NOUN	_	Case=Nom|Number=Sing	10	nmod:att	_	_
10	dolgozói	dolgozó	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 19 ccomp:obl	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	lányt	lány	NOUN	_	Case=Acc|Number=Sing	6	obj	_	_
3	azonban	azonban	CCONJ	_	_	6	cc	_	_
4	végzetes	végzetes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	5	amod:att	_	_
5	baleset	baleset	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
6	érte	ér	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	12	punct	_	_
8	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	Gazda	Gazda	PROPN	_	Case=Nom|Number=Sing	12	nsubj	_	_
10	pedig	pedig	CCONJ	_	_	12	cc	_	_
11	azzal	az	PRON	_	Case=Ins|Number=Sing|Person=3|PronType=Dem	12	obl	_	_
12	vádolja	vádol	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
13	őt	ő	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	12	obj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	mármint	mármint	CCONJ	_	_	16	cc	_	_
16	Titót	Tito	PROPN	_	Case=Acc|Number=Sing	13	conj	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	hogy	hogy	SCONJ	_	_	19	mark	_	_
19	szándékos	szándékos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	12	ccomp:obl	_	_
20	volt	van	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	19	cop	_	_
21	a	a	DET	_	Definite=Def|PronType=Art	22	det	_	_
22	halála	halál	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	nsubj	_	SpaceAfter=No
23	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 ccomp:obl	color:blue
1	Ez	ez	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	annak	az	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Dem	3	obl	_	_
3	köszönhető	köszönhető	ADJ	_	Case=Nom|Number=Sing|VerbForm=PartPres	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	15	punct	_	_
5	hogy	hogy	SCONJ	_	_	15	mark	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	10	det	_	_
7	tavalyi	tavalyi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod:att	_	_
8	második	második	ADJ	_	Case=Nom|Number=Sing|NumType=Ord	9	amod:att	_	_
9	félévi	félévi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod:att	_	_
10	regresszió	regresszió	NOUN	_	Case=Nom|Number=Sing	15	obl	_	_
11	után	után	ADP	_	_	10	case	_	_
12	idén	idén	ADV	_	_	15	advmod:tlocy	_	_
13	nemzetközi	nemzetközi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	14	amod:att	_	_
14	konjunktúra	konjunktúra	NOUN	_	Case=Nom|Number=Sing	15	nsubj	_	_
15	kezdődött	kezdődik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	ccomp:obl	_	SpaceAfter=No
16	,	,	PUNCT	_	_	19	punct	_	_
17	ami	ami	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Rel	19	nsubj	_	_
18	lehetővé	lehető	ADJ	_	Case=Tra|Number=Sing|VerbForm=PartPres	19	obl	_	_
19	tette	tesz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	14	acl	_	_
20	a	a	DET	_	Definite=Def|PronType=Art	21	det	_	_
21	kereslet	kereslet	NOUN	_	Case=Nom|Number=Sing	22	nmod:att	_	_
22	növekedését	növekedés	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	obj	_	SpaceAfter=No
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


