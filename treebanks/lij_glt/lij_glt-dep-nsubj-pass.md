---
layout: base
title:  'Statistics of nsubj:pass in UD_Ligurian-GLT'
udver: '2'
---

## Treebank Statistics: UD_Ligurian-GLT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="lij_glt-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="lij_glt-dep-nsubj-outer.html">nsubj:outer</a></tt>.

27 nodes (0%) are attached to their parents as `nsubj:pass`.

26 instances of `nsubj:pass` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.11111111111111.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (15; 56% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (11; 41% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	A	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	_
2	s'	se	PRON	_	Person=3|PronType=Prs	4	expl:pass	_	SpaceAfter=No
3	é	ëse	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	averta	arvî	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	da	da	ADP	_	_	6	case	_	_
6	lê	lê	PRON	_	Number=Sing|Person=3|PronType=Prs	4	obl	_	SpaceAfter=No
7	!	!	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:pass	color:blue
1	E	e	CCONJ	_	_	6	cc	_	_
2	i	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	töin	töin	NOUN	_	Gender=Masc|Number=Plur	6	nsubj:pass	_	_
4	no	no	ADV	_	_	6	advmod	_	_
5	en	ëse	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
6	appægiæ	appægiâ	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
7	con	con	ADP	_	_	9	case	_	_
8	sta	sto	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	cua	cua	NOUN	_	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 nsubj:pass	color:blue
1	Ni	ni	CCONJ	_	_	2	cc	_	_
2	Peter	Peter	PROPN	_	Gender=Masc|Number=Sing	11	nsubj:pass	_	_
3	Smith	Smith	PROPN	_	Gender=Masc|Number=Sing	2	flat	_	_
4	e	e	CCONJ	_	_	6	cc	_	_
5	ni	ni	CCONJ	_	_	6	cc	_	_
6	Mary	Mary	PROPN	_	Gender=Fem|Number=Sing	2	conj	_	_
7	Brown	Brown	PROPN	_	Gender=Fem|Number=Sing	6	flat	_	_
8	an	avei	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
9	posciuo	poei	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	aux	_	_
10	ëse	ëse	AUX	_	Tense=Pres|VerbForm=Inf	11	aux:pass	_	_
11	çernui	çerne	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


