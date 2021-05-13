---
layout: base
title:  'Statistics of ccomp:pred in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `ccomp:pred`

This relation is a language-specific subtype of <tt><a href="hu_szeged-dep-ccomp.html">ccomp</a></tt>.
There are also 2 other language-specific subtypes of `ccomp`: <tt><a href="hu_szeged-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="hu_szeged-dep-ccomp-obl.html">ccomp:obl</a></tt>.

16 nodes (0%) are attached to their parents as `ccomp:pred`.

16 instances of `ccomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.625.

The following 5 pairs of parts of speech are connected with `ccomp:pred`: <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (6; 38% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (5; 31% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt> (2; 13% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp:pred	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	kérdés	kérdés	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
3	csak	csak	ADV	_	_	4	advmod:mode	_	_
4	az	az	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	0	root	_	SpaceAfter=No
5	:	:	PUNCT	_	_	8	punct	_	_
6	meg	meg	PART	_	_	11	compound:preverb	_	_
7	is	is	ADV	_	_	8	advmod:mode	_	_
8	tudja	tud	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp:pred	_	_
9	-e	-e	ADV	_	PronType=Int	8	advmod:que	_	_
10	ott	ott	ADV	_	PronType=Dem	11	advmod:locy	_	_
11	tartani	tart	VERB	_	VerbForm=Inf|Voice=Act	8	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 ccomp:pred	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	legáltalánosabb	általános	ADJ	_	Case=Nom|Degree=Sup|Number=Sing	3	amod:att	_	_
3	kritika	kritika	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	12	punct	_	_
5	hogy	hogy	SCONJ	_	_	12	mark	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	kormánynak	kormány	NOUN	_	Case=Gen|Number=Sing	12	nmod:att	_	_
8	nemhogy	nemhogy	CCONJ	_	_	12	cc	_	_
9	katasztrófaelhárítási	katasztrófaelhárítási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod:att	_	_
10	terve	terv	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
11	nem	nem	ADV	_	PronType=Neg	12	advmod	_	_
12	volt	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	ccomp:pred	_	SpaceAfter=No
13	,	,	PUNCT	_	_	20	punct	_	_
14	de	de	CCONJ	_	_	20	cc	_	_
15	a	a	DET	_	Definite=Def|PronType=Art	16	det	_	_
16	tragédia	tragédia	NOUN	_	Case=Nom|Number=Sing	17	nmod:att	_	_
17	bekövetkezte	bekövetkezte	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	20	obl	_	_
18	után	után	ADP	_	_	17	case	_	_
19	sem	sem	CCONJ	_	_	20	cc	_	_
20	állt	áll	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	_	_
21	a	a	DET	_	Definite=Def|PronType=Art	22	det	_	_
22	helyzet	helyzet	NOUN	_	Case=Nom|Number=Sing	23	nmod:att	_	_
23	magaslatán	magaslat	NOUN	_	Case=Sup|Number=Sing|Number[psor]=Sing|Person[psor]=3	20	obl	_	SpaceAfter=No
24	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 14 ccomp:pred	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	bevételek	bevétel	NOUN	_	Case=Nom|Number=Plur	3	nmod:att	_	_
3	alátervezésének	alátervezés	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nmod:att	_	_
4	egyébként	egyébként	ADV	_	_	5	advmod:mode	_	_
5	az	az	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	0	root	_	_
6	is	is	CCONJ	_	_	5	cc	_	ToDo=cc-without-conj
7	nagy	nagy	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	8	amod:att	_	_
8	előnye	előny	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	14	punct	_	_
10	hogy	hogy	SCONJ	_	_	14	mark	_	_
11	ily	ily	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	12	nmod:att	_	_
12	módon	mód	NOUN	_	Case=Sup|Number=Sing	14	obl	_	_
13	papíron	papír	NOUN	_	Case=Sup|Number=Sing	14	obl	_	_
14	kimutatható	kimutatható	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|VerbForm=PartPres	5	ccomp:pred	_	SpaceAfter=No
15	:	:	PUNCT	_	_	29	punct	_	_
16	jövőre	jövőre	ADV	_	_	29	advmod:tlocy	_	_
17	"	"	PUNCT	_	_	29	punct	_	SpaceAfter=No
18	a	a	DET	_	Definite=Def|PronType=Art	19	det	_	_
19	jövedelemcentralizáció	jövedelemcentralizáció	NOUN	_	Case=Nom|Number=Sing	29	nsubj	_	orig_deprel=nsubj
20	1,2	1,2	NUM	_	Case=Nom|Number=Sing|NumType=Frac	21	amod:att	_	_
21	százalékkal	százalék	NOUN	_	Case=Ins|Number=Sing	19	orphan	_	orig_deprel=nmod:obl|SpaceAfter=No
22	,	,	PUNCT	_	_	25	punct	_	_
23	az	az	DET	_	Definite=Def|PronType=Art	24	det	_	_
24	újraelosztás	újraelosztás	NOUN	_	Case=Nom|Number=Sing	25	nmod:att	_	_
25	mértéke	mérték	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	conj	_	_
26	pedig	pedig	CCONJ	_	_	29	cc	_	ToDo=cc-after-conj
27	1,9	1,9	NUM	_	Case=Nom|Number=Sing|NumType=Frac	28	amod:att	_	_
28	százalékkal	százalék	NOUN	_	Case=Ins|Number=Sing	29	obl	_	_
29	csökken	csökken	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	csubj	_	SpaceAfter=No
30	"	"	PUNCT	_	_	29	punct	_	SpaceAfter=No
31	.	.	PUNCT	_	_	5	punct	_	_

~~~


