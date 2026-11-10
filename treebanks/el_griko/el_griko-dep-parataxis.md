---
layout: base
title:  'Statistics of parataxis in UD_Greek-Griko'
udver: '2'
---

## Treebank Statistics: UD_Greek-Griko: Relations: `parataxis`

This relation is universal.

8 nodes (1%) are attached to their parents as `parataxis`.

7 instances of `parataxis` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.875.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-VERB.html">VERB</a></tt> (5; 63% instances), <tt><a href="el_griko-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_griko-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="el_griko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_griko-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	iche	echo	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	on	o	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	ghiardino	ghiardino	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	1	obj	_	_
4	tu	o	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	ria	ria	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
6	,	,	PUNCT	_	_	7	punct	_	_
7	iche	echo	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	_
8	ena'	ena	DET	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
9	pikuli	pikuli	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	7	obj	_	_
10	,	,	PUNCT	_	_	12	punct	_	_
11	c'	ce	CCONJ	_	_	12	cc	_	_
12	ìbbie	pao	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	_	_
13	petonta	petào	VERB	_	Aspect=Imp|VerbForm=Conv|Voice=Act	12	xcomp	_	_
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 parataxis	color:blue
1	Enan	ena	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	3	nsubj	_	_
2	ion	ime	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	bucceri	bucceri	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	c'	ce	CCONJ	_	_	7	cc	_	_
5	enan	ena	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	7	nsubj	_	_
6	io'	ime	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
7	ftechò	ftechò	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	3	conj	_	_
8	poddhì	poddhì	ADV	_	_	7	advmod	_	_
9	,	,	PUNCT	_	_	10	punct	_	_
10	iche	echo	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	parataxis	_	_
11	fta	fta	NUM	_	Case=Acc|Gender=Neut|NumType=Card	12	nummod	_	_
12	pedàcia	pedaci	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	10	obj	_	_
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 parataxis	color:blue
1	Ipìrte	pao	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	ittòtsu	ittotsu	ADV	_	_	1	advmod	_	_
3	,	,	PUNCT	_	_	4	punct	_	_
4	ivrice	vrisko	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	_
5	dio	dio	NUM	_	Case=Acc|Gender=Masc|NumType=Card	6	nummod	_	_
6	tsangùnu	tsanguni	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
7	,	,	PUNCT	_	_	9	punct	_	_
8	dio	dio	NUM	_	Case=Acc|Gender=Fem|NumType=Card	9	nummod	_	_
9	morìćce	moriccia	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	6	conj	_	_
10	,	,	PUNCT	_	_	13	punct	_	_
11	insomma	insomma	INTJ	_	_	13	discourse	_	_
12	dio	dio	NUM	_	Case=Acc|Gender=Neut|NumType=Card	13	nummod	_	_
13	smìmmata	smimma	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	6	parataxis	_	_
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


