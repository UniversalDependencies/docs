---
layout: base
title:  'Statistics of xcomp in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="olo_kkpp-dep-xcomp-ds.html">xcomp:ds</a></tt>.

15 nodes (1%) are attached to their parents as `xcomp`.

15 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (12; 80% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="olo_kkpp-pos-AUX.html">AUX</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Ennevahnas	ennevahnas	ADV	ADV	_	2	advmod	_	PronType=Temp
2	opastettih	opastua	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	arbuamah	arbuata	VERB	X	Case=Ill|VerbForm=Inf	2	xcomp	_	_
4	jo	jo	ADV	ADV	_	2	advmod	_	PronType=Temp
5	pienete	pieni	ADJ	X	Case=Par|Number=Sing	2	advcl	_	_
6	olles	olla	AUX	X	Case=Ine|VerbForm=Ger	5	cop	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Tavallizele	tavalline	ADJ	ADJ	Case=All|Number=Sing	2	amod	_	_
2	ristikanzale	ristikanzu	NOUN	NOUN	Case=All|Number=Sing	5	obl	_	_
3	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	ylen	ylen	ADV	ADV	_	5	advmod	_	_
5	jygei	jygei	ADJ	ADJ	Case=Nom|Number=Sing	0	root	_	_
6	kerras	kerras	ADV	ADV	_	7	advmod	_	_
7	arvata	arvata	VERB	VERB	VerbForm=Inf	5	xcomp	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	mis	mi	PRON	PRON	Case=Ine|Number=Sing	11	obl	_	PronType=Interr
10	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	pagin	pagin	NOUN	NOUN	Case=Nom|Number=Sing	7	ccomp	_	_
12	vahnas	vahnu	ADJ	ADJ	Case=Ine|Number=Sing	13	amod	_	_
13	arbaitukses	arbaitus	NOUN	NOUN	Case=Ine|Number=Sing	11	obl	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	19	punct	_	_
15	gu	gu	ADV	ADV	_	19	advmod	_	_
16	tekstas	tekstu	NOUN	NOUN	Case=Ine|Number=Sing	19	obl	_	_
17	nimidä	nimidä	PRON	PRON	Case=Par|Number=Sing|Polarity=Neg|PronType=Ind	19	obj	_	_
18	ei	ei	AUX	AUX	Number=Sing|Person=3|Polarity=Neg	19	aux	_	_
19	sanottu	sanuo	VERB	VERB	Connegative=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	conj	_	_
20	kohti	kohti	ADV	ADV	_	19	advmod	_	_
21	da	da	CCONJ	CCONJ	_	22	cc	_	_
22	sen	sen	ADV	ADV	_	24	advmod	_	_
23	ližäkse	ližäkse	ADV	ADV	_	22	fixed	_	_
24	käytettih	käyttiä	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	19	conj	_	_
25	erilazii	erilaine	ADJ	ADJ	Case=Par|Number=Plur	26	amod	_	_
26	metaaforoi	metaaforu	NOUN	X	Case=Par|Number=Plur	24	obj	_	SpaceAfter=No
27	.	.	PUNCT	PUNCT	_	24	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Illal	illal	ADV	ADV	_	4	advmod	_	PronType=Temp
2	ei	ei	AUX	AUX	Number=Sing|Person=3|Polarity=Neg	3	aux	_	_
3	suannuh	suaha	AUX	AUX	Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	arbailla	arbailla	VERB	VERB	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	xcomp	_	_
5	–	–	PUNCT	PUNCT	_	6	punct	_	_
6	varattih	varata	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
7	Arbaituksen	Arbaitus	NOUN	NOUN	Case=Gen|Number=Sing	8	nmod:poss	_	_
8	akkua	akku	NOUN	NOUN	Case=Par|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	12	punct	_	_
10	ku	ku	SCONJ	SCONJ	_	12	mark	_	_
11	häi	häi	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
12	tulou	tulla	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	_
13	yön	yö	NOUN	NOUN	Case=Gen|Number=Sing	14	nmod:poss	_	_
14	aigua	aigu	NOUN	NOUN	Case=Par|Number=Sing	12	obl	_	_
15	da	da	CCONJ	CCONJ	_	16	cc	_	_
16	ähkiäy	ähkie	VERB	X	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	_	_
17	bokkah	bokku	NOUN	NOUN	Case=Ill|Number=Sing	16	obl	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No

~~~


