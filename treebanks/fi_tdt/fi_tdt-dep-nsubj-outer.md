---
layout: base
title:  'Statistics of nsubj:outer in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="fi_tdt-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fi_tdt-dep-nsubj-cop.html">nsubj:cop</a></tt>.

21 nodes (0%) are attached to their parents as `nsubj:outer`.

21 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.90476190476191.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (13; 62% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (5; 24% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (2; 10% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:outer	color:blue
1	Väite	väite	NOUN	N	Case=Nom|Number=Sing	6	nsubj:outer	6:nsubj:outer	_
2	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	SpaceAfter=No
3	,	,	PUNCT	Punct	_	6	punct	6:punct	_
4	että	että	SCONJ	C	_	6	mark	6:mark	_
5	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
6	ole	olla	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	yhtään	yhtään	ADV	Adv	_	9	advmod	9:advmod	_
8	objektiivista	objektiivinen	ADJ	A	Case=Par|Degree=Pos|Derivation=Inen|Number=Sing	9	amod	9:amod	_
9	tiedettä	tiede	NOUN	N	Case=Par|Number=Sing	6	nsubj	6:nsubj	SpaceAfter=No
10	.	.	PUNCT	Punct	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	Ne	se	PRON	Pron	Case=Nom|Number=Plur|PronType=Dem	4	nsubj:outer	4:nsubj:outer	_
2	ovat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	minun	minä	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	_
4	tekemiäni	tehdä	VERB	V	Case=Par|Number=Plur|Number[psor]=Sing|PartForm=Agt|Person[psor]=1|VerbForm=Part|Voice=Act	0	root	0:root	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:outer	color:blue
1	–	–	PUNCT	Punct	_	9	punct	9:punct	_
2	Kysymys	kysymys	NOUN	N	Case=Nom|Number=Sing	9	nsubj:outer	9:nsubj:outer	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
4	nyt	nyt	ADV	Adv	_	9	advmod	9:advmod	SpaceAfter=No
5	,	,	PUNCT	Punct	_	9	punct	9:punct	_
6	onko	olla	AUX	V	Clitic=Ko|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
7	tämä	tämä	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	9	nsubj:cop	9:nsubj:cop	_
8	oikea	oikea	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	9	amod	9:amod	_
9	hetki	hetki	NOUN	N	Case=Nom|Number=Sing	0	root	0:root	_
10	ostaa	ostaa	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	9	acl	9:acl	_
11	asuntoa	asunto	NOUN	N	Case=Par|Number=Sing	10	obj	10:obj	SpaceAfter=No
12	,	,	PUNCT	Punct	_	15	punct	15:punct	_
13	että	että	SCONJ	C	_	15	mark	15:mark	_
14	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	15	aux	15:aux	_
15	tule	tulla	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	9	advcl	9:advcl	_
16	Musta	musta	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	17	amod	17:amod	_
17	Pekka	Pekka	PROPN	N	Case=Nom|Number=Sing	15	nsubj	15:nsubj|16:flat:name	_
18	käteen	käsi	NOUN	N	Case=Ill|Number=Sing	15	obl	15:obl	SpaceAfter=No
19	,	,	PUNCT	Punct	_	21	punct	21:punct	_
20	Rekonen	Rekonen	PROPN	N	Case=Nom|Number=Sing	21	nsubj	21:nsubj	_
21	toteaa	todeta	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	parataxis	9:parataxis	SpaceAfter=No
22	.	.	PUNCT	Punct	_	9	punct	9:punct	_

~~~


