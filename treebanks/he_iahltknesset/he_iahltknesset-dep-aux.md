---
layout: base
title:  'Statistics of aux in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `aux`

This relation is universal.

399 nodes (1%) are attached to their parents as `aux`.

391 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2406015037594.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-AUX.html">AUX</a></tt> (376; 94% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-AUX.html">AUX</a></tt> (11; 3% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-AUX.html">AUX</a></tt> (10; 3% instances), <tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltknesset-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	לא	לא	ADV	ADV	Polarity=Neg	3	advmod	_	_
2	יכולה	יכל	AUX	AUX	Gender=Fem|HebBinyan=PAAL|Number=Sing|VerbForm=Part	3	aux	_	_
3	להיות	היה	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	0	root	_	Cxn=Existential-CopPred
4	שום	שום	DET	DET	Definite=Cons	5	det	_	_
5	סכנה	סכנה	NOUN	NOUN	Gender=Fem|Number=Sing	3	nsubj	_	CxnElt=3:Existential-CopPred.Pivot|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	לא	לא	ADV	ADV	Polarity=Neg	8	advmod	_	_
8	מהותית	מהותי	ADJ	ADJ	Gender=Fem|Number=Sing	3	parataxis	_	_
9	ו	ו	CCONJ	CCONJ	_	11	cc	_	_
10	לא	לא	ADV	ADV	Polarity=Neg	11	advmod	_	_
11	קיומית	קיומי	ADJ	ADJ	Gender=Fem|Number=Sing	8	conj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	אמור	אמור	AUX	AUX	Gender=Masc|Number=Sing|VerbType=Mod	4	aux	_	_
3	להיות	היה	AUX	AUX	HebBinyan=PAAL|VerbForm=Inf	4	cop	_	_
4	אדם	אדם	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
5	ש	ש	SCONJ	SCONJ	_	6	mark	_	_
6	מתייחס	התייחס	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Mid	4	acl:relcl	_	_
7	ב	ב	ADP	ADP	_	8	case	_	_
8	רצינות	רצינות	NOUN	NOUN	Gender=Fem|Number=Sing	6	obl	_	_
9	ל	ל	ADP	ADP	_	10	case	_	_
10	מה	מה	PRON	PRON	PronType=Rel	6	obl	_	_
11	ש	ש	SCONJ	SCONJ	_	13	mark	_	_
12	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
13	אומר	אמר	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	10	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	צריך	צריך	AUX	AUX	Gender=Masc|Number=Sing|VerbType=Mod	4	aux	_	_
3	להיות	היה	AUX	AUX	HebBinyan=PAAL|VerbForm=Inf	4	cop	_	_
4	ברור	ברור	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


