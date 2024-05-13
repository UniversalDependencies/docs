---
layout: base
title:  'Statistics of expl in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `expl`

This relation is universal.
There are 3 language-specific subtypes of `expl`: <tt><a href="es_ancora-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="es_ancora-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="es_ancora-dep-expl-pv.html">expl:pv</a></tt>.

294 nodes (0%) are attached to their parents as `expl`.

251 instances of `expl` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23469387755102.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (291; 99% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl	color:blue
1	A	a	ADP	sps00	_	3	case	3:case	_
2	cada	cada	DET	di0cs0	Number=Sing|PronType=Tot	3	det	3:det	_
3	residente	residente	NOUN	nccs000	Number=Sing	9	obl:arg	9:obl:arg	ArgTem=arg2:ben
4	de	de	ADP	spcms	_	6	case	6:case	_
5	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	campo	campo	NOUN	ncms000	Gender=Masc|Number=Sing	3	nmod	3:nmod	_
7	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	expl:pass	9:expl:pass	_
8	le	él	PRON	pp3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	9	expl	9:expl	ArgTem=arg2:ben
9	entrega	entregar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
10	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	11:det	_
11	cupón	cupón	NOUN	ncms000	Gender=Masc|Number=Sing	9	nsubj	9:nsubj	SpaceAfter=No|ArgTem=arg1:pat
12	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 expl	color:blue
1	A	a	ADP	spcms	_	3	case	3:case	_
2	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	3:det	_
3	lector	lector	NOUN	ncms000	Gender=Masc|Number=Sing	9	obl:arg	9:obl:arg	ArgTem=arg3:ben
4	de	de	ADP	sps00	_	5	case	5:case	_
5	hoy	hoy	ADV	rg	_	3	advmod	3:advmod	_
6	no	no	ADV	rn	Polarity=Neg	9	advmod	9:advmod	_
7	le	él	PRON	pp3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	9	expl	9:expl	ArgTem=arg3:ben
8	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
9	fácil	fácil	ADJ	aq0cs0	Number=Sing	0	root	0:root	ArgTem=arg2:atr
10	compartir	compartir	VERB	vmn0000	VerbForm=Inf	9	csubj	9:csubj	ArgTem=arg1:tem
11	tan	tanto	ADV	rg	_	12	advmod	12:advmod	_
12	sana	sano	ADJ	aq0fs0	Gender=Fem|Number=Sing	13	amod	13:amod	_
13	hilaridad	hilaridad	NOUN	ncfs000	Gender=Fem|Number=Sing	10	obj	10:obj	SpaceAfter=No|ArgTem=arg1:pat
14	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


