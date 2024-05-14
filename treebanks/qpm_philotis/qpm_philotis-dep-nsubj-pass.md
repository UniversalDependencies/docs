---
layout: base
title:  'Statistics of nsubj:pass in UD_Pomak-Philotis'
udver: '2'
---

## Treebank Statistics: UD_Pomak-Philotis: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="qpm_philotis-dep-nsubj.html">nsubj</a></tt>.

20 nodes (0%) are attached to their parents as `nsubj:pass`.

15 instances of `nsubj:pass` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.55.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-NOUN.html">NOUN</a></tt> (19; 95% instances), <tt><a href="qpm_philotis-pos-VERB.html">VERB</a></tt>-<tt><a href="qpm_philotis-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Drúgyne	drug	DET	_	Animacy=Hum|Case=Nom|Definite=Def|Deixis=Remt|Gender=Masc|Number=Plur|PronType=Ind	2	det	_	_
2	belidjé	belidjé	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	7	nsubj:pass	_	_
3	sí	so	PRON	_	Case=Gen|PronType=Prs|Reflex=Yes	7	expl	_	_
4	so	som	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
5	kákta	kákta	ADV	_	Deixis=Prox|DeixisRef=2|PronType=Rel	7	advmod	_	_
6	gi	ja	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	7	obj	_	_
7	znáhme	znom	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	at	at	ADP	_	_	9	case	_	_
9	krájete	kraj	NOUN	_	Case=Acc|Definite=Def|Deixis=Prox|DeixisRef=2|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nsubj:pass	color:blue
1	Za	za	ADP	_	_	3	case	_	_
2	ennók	adín	DET	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	3	det	_	_
3	déne	den	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	7	obl:tmod	_	_
4	i	i	CCONJ	_	_	7	cc	_	_
5	dvéne	dve	NUM	_	Definite=Def|Deixis=Remt|Number=Plur|NumType=Card	8	nummod	_	_
6	sa	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	7	expl	_	_
7	rádat	rádom	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	nétekin	nétekin	ADJ	_	Definite=Ind	7	nsubj:pass	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	i	i	CCONJ	_	_	11	cc	_	_
11	móskona	móskyj	ADJ	_	Case=Nom|Definite=Def|Deixis=Remt|Gender=Neut|Number=Sing	8	appos	_	_
12	i	i	CCONJ	_	_	13	cc	_	_
13	žónckona	žónckyj	ADJ	_	Case=Nom|Definite=Def|Deixis=Remt|Gender=Neut|Number=Sing	11	conj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


