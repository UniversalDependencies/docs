---
layout: base
title:  'Statistics of advcl in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `advcl`

This relation is universal.

1107 nodes (1%) are attached to their parents as `advcl`.

1068 instances of `advcl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.6639566395664.

The following 7 pairs of parts of speech are connected with `advcl`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (530; 48% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (323; 29% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (220; 20% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (15; 1% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="da_ddt-pos-ADP.html">ADP</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 advcl	color:blue
1	Dommeren	dommer	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	at	at	SCONJ	_	_	6	mark	_	_
5	man	man	PRON	_	Case=Nom|Gender=Com|PronType=Ind	6	nsubj	_	_
6	giver	give	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	obj	_	_
7	40	40	NUM	_	NumType=Card	8	nummod	_	_
8	kr.	krone	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	6	obj	_	_
9	for	for	ADP	_	AdpType=Prep	11	mark	_	_
10	hver	hver	PRON	_	Gender=Com|Number=Sing|PronType=Ind	11	mark	_	_
11	påbegyndt	påbegynde	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	6	advcl	_	_
12	to	to	NUM	_	NumType=Card	13	nummod	_	_
13	timer	time	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	Ariostea-mandskabet	Ariostea-mandskab	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	2	nsubj	_	_
2	fik	få	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	melding	melding	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
4	om	om	ADP	_	AdpType=Prep	8	mark	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	at	at	SCONJ	_	_	8	mark	_	_
7	de	de	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	_
8	førte	føre	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	advcl	_	_
9	holdløbet	holdløb	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	Så	så	ADV	_	_	0	root	_	_
2	nu	nu	ADV	_	_	3	advmod	_	_
3	sidder	sidde	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
4	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
5	dèr	der	ADV	_	_	3	advmod:lmod	_	_
6	og	og	CCONJ	_	_	7	cc	_	_
7	føler	føle	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
8	mig	jeg	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=1|PronType=Prs	7	obj	_	_
9	bedraget	bedrage	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


