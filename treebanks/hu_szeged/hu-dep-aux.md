---
layout: base
title:  'Statistics of aux in UD_Hungarian'
udver: '2'
---

## Treebank Statistics: UD_Hungarian: Relations: `aux`

This relation is universal.

31 nodes (0%) are attached to their parents as `aux`.

21 instances of `aux` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12903225806452.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="hu-pos-VERB.html">VERB</a></tt>-<tt><a href="hu-pos-AUX.html">AUX</a></tt> (29; 94% instances), <tt><a href="hu-pos-AUX.html">AUX</a></tt>-<tt><a href="hu-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="hu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Bár	bár	SCONJ	_	_	3	mark	_	_
2	name	ne	ADV	_	PronType=Neg	3	advmod	_	_
3	tettem	tesz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	volna	volna	AUX	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	SpaceAfter=No
5	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 aux	color:blue
1	Ezzel	ez	PRON	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	nmod:obl	_	_
2	csak	csak	ADV	_	_	5	advmod:mode	_	_
3	azt	az	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	obj	_	_
4	akarjuk	akar	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	mondani	mond	VERB	_	VerbForm=Inf|Voice=Act	4	xcomp	_	SpaceAfter=No
6	:	:	PUNCT	_	_	4	punct	_	_
7	ha	ha	SCONJ	_	_	12	mark	_	_
8	elbeszélésünk	elbeszélés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	10	nmod:att	_	_
9	első	első	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	10	amod:att	_	_
10	embere	ember	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
11	magára	maga	PRON	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|Reflex=Yes	12	nmod:obl	_	_
12	ölti	ölt	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	advcl	_	_
13	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
14	partizán-módit	partizán-módi	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	obj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	12	punct	_	_
16	akár	akár	ADV	_	_	18	advmod:mode	_	_
17	még	még	ADV	_	_	18	advmod:tlocy	_	_
18	képviselő	képviselő	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	ccomp:obj	_	_
19	is	is	ADV	_	_	18	advmod:mode	_	_
20	lehetett	lehet	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	18	cop	_	_
21	volna	volna	AUX	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|Voice=Act	20	aux	_	SpaceAfter=No
22	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 aux	color:blue
1	Jorge	Jorge	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	appos	_	_
2	Faliba	Faliba	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	flat:name	_	_
3	atya	atya	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	rendőrségen	rendőrség	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
6	bevallotta	be+vall	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	hogy	hogy	SCONJ	_	_	14	mark	_	_
9	ez	ez	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	14	nsubj	_	_
10	már	már	ADV	_	_	14	advmod:tlocy	_	_
11	az	az	DET	_	Definite=Def|PronType=Art	14	det	_	_
12	ötödik	ötödik	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	14	amod:att	_	_
13	nemzetközi	nemzetközi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	amod:att	_	_
14	csempészútja	csempészút	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	6	ccomp:obj	_	_
15	lett	lesz	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	14	cop	_	_
16	volna	volna	AUX	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|Voice=Act	14	aux	_	SpaceAfter=No
17	,	,	PUNCT	_	_	21	punct	_	_
18	ám	ám	CCONJ	_	_	21	cc	_	_
19	jó	jó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	20	amod:att	_	_
20	ügyet	ügy	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	21	obj	_	_
21	szolgál	szolgál	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	_	SpaceAfter=No
22	.	.	PUNCT	_	_	6	punct	_	_

~~~


