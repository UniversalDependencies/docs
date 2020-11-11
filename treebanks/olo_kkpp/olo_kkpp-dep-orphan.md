---
layout: base
title:  'Statistics of orphan in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `orphan`

This relation is universal.

15 nodes (1%) are attached to their parents as `orphan`.

8 instances of `orphan` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13333333333333.

The following 7 pairs of parts of speech are connected with `orphan`: <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (4; 27% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (3; 20% instances), <tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt> (3; 20% instances), <tt><a href="olo_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 orphan	color:blue
1	Häi	Häi	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	osti	ostua	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	mašinan	mašin	NOUN	NOUN	Case=Acc|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	7	punct	_	_
5	ga	ga	CCONJ	CCONJ	_	6	cc	_	_
6	hänen	häi	PRON	PRON	Case=Gen|Number=Sing|Person=3|PronType=Prs	7	nmod:poss	_	_
7	velleh	velli	NOUN	NOUN	Case=Ill|Number=Sing	2	conj	_	_
8	pyörän	pyöry	NOUN	NOUN	Case=Acc|Number=Sing	7	orphan	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 28 orphan	color:blue
1	Häi	häi	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	saneloo	sanella	VERB	X	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	:	:	PUNCT	PUNCT	_	9	punct	_	_
4	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
5	Konzu	Konzu	SCONJ	SCONJ	_	9	mark	_	_
6	minun	minä	PRON	PRON	Case=Gen|Number=Sing|Person=1|PronType=Prs	7	nmod:poss	_	_
7	taatto	taatto	NOUN	X	Case=Nom|Number=Sing	9	nsubj:cop	_	_
8	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
9	bohattu	bohattu	ADJ	ADJ	Case=Nom|Number=Sing	2	parataxis	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	15	punct	_	_
11	kolme	kolme	NUM	NUM	Case=Nom|Number=Sing|NumType=Card	12	nummod	_	_
12	virstaa	virsta	NOUN	X	Case=Par|Number=Sing	15	obj	_	_
13	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	14	cop	_	_
14	kodi	kodi	NOUN	NOUN	Case=Nom|Number=Sing	15	nsubj:cop	_	_
15	piduhuttu	piduhus	NOUN	NOUN	Case=Par|Number=Sing	9	parataxis	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	19	punct	_	_
17	a	a	CCONJ	CCONJ	_	18	cc	_	_
18	virstaa	virsta	NOUN	X	Case=Par|Number=Sing	19	orphan	_	_
19	levevytty	levevys	NOUN	X	Case=Par|Number=Sing	15	conj	_	SpaceAfter=No
20	;	;	PUNCT	PUNCT	_	22	punct	_	_
21	kezäkse	kezä	NOUN	NOUN	Case=Tra|Number=Sing	22	obl	_	_
22	kraassi	kraassie	VERB	X	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	15	parataxis	_	_
23	koin	kodi	NOUN	NOUN	Case=Gen|Number=Sing	22	obj	_	_
24	mustal	mustu	ADJ	ADJ	Case=Ade|Number=Sing	25	amod	_	_
25	kraaskal	kraaska	NOUN	X	Case=Ade|Number=Sing	22	obl	_	SpaceAfter=No
26	,	,	PUNCT	PUNCT	_	25	punct	_	_
27	a	a	CCONJ	CCONJ	_	28	cc	_	_
28	talvekse	talvi	NOUN	NOUN	Case=Tra|Number=Sing	29	orphan	_	_
29	valgiel	valgei	ADJ	ADJ	Case=Ade|Number=Sing	24	conj	_	SpaceAfter=No
30	.	.	PUNCT	PUNCT	_	22	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 orphan	color:blue
1	Sit	sit	ADV	ADV	_	2	advmod	_	_
2	oli	olla	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	häkki	häkki	NOUN	NOUN	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
4	:	:	PUNCT	PUNCT	_	9	punct	_	_
5	seičče	seiččen	NUM	X	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	virstaa	virsta	NOUN	X	Case=Par|Number=Sing	9	nsubj:cop	_	_
7	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
8	sarvet	sarvi	NOUN	NOUN	Case=Nom|Number=Plur	9	obj	_	_
9	piduhuttu	piduhus	NOUN	X	Case=Par|Number=Sing	2	parataxis	_	SpaceAfter=No
10	;	;	PUNCT	PUNCT	_	12	punct	_	_
11	paimoi	paimoi	NOUN	NOUN	Case=Nom|Number=Sing	12	nsubj	_	_
12	istui	istuo	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	parataxis	_	_
13	sarvel	sarvi	NOUN	NOUN	Case=Ade|Number=Sing	12	obl	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	15	punct	_	_
15	toine	toine	PRON	PRON	Case=Nom|Number=Sing	11	conj	_	_
16	toizel	toine	PRON	PRON	Case=Ade|Number=Sing	15	orphan	_	SpaceAfter=No
17	;	;	PUNCT	PUNCT	_	18	punct	_	_
18	torvittih	torvie	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	24	punct	_	_
20	ga	ga	CCONJ	CCONJ	_	21	cc	_	_
21	toine	toine	PRON	PRON	Case=Nom|Number=Sing	24	nsubj	_	_
22	toizen	toine	PRON	PRON	Case=Acc|Number=Sing	24	obl	_	_
23	ei	ei	AUX	AUX	Number=Sing|Person=3|Polarity=Neg	24	aux	_	_
24	kuulluh	kuulla	VERB	X	Connegative=Yes	18	acl:relcl	_	_
25	torvindaa	torvinda	NOUN	X	Case=Par|Number=Sing	24	obj	_	SpaceAfter=No
26	.	.	PUNCT	PUNCT	_	24	punct	_	SpaceAfter=No

~~~


