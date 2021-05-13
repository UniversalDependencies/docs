---
layout: base
title:  'Statistics of iobj in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `iobj`

This relation is universal.

64 nodes (0%) are attached to their parents as `iobj`.

43 instances of `iobj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.609375.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (48; 75% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (9; 14% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	So	so	ADV	_	_	5	discourse	_	LangID=DE
2	Almanlar'da	Almanlar	NOUN	_	Case=Loc|Number=Sing	5	obl	_	LangID=TR
3	irgendwie	irgendwie	ADV	_	_	5	advmod	_	LangID=DE
4	die	der	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	5	nsubj	_	LangID=DE
5	machen	machen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
6	sich	er|es|sie	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	5	iobj	_	LangID=DE
7	da	da	ADV	_	_	5	advmod	_	LangID=DE
8	gar	gar	ADV	_	_	9	advmod	_	LangID=DE
9	keine	kein	PRON	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Neg|PronType=Neg	5	obj	_	LangID=DE
10	so	so	ADV	_	_	5	discourse	_	LangID=DE|SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 iobj	color:blue
1	Die	der	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	9	nsubj	_	LangID=DE
2	tun	tun	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	LangID=DE
3	sich	er|es|sie	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs|Reflex=Yes	9	expl:pv	_	LangID=DE
4	da	da	ADV	_	_	9	advmod	_	LangID=DE
5	halt	halt	ADV	_	_	9	advmod	_	LangID=DE
6	mit	mit	ADP	_	_	8	case	_	LangID=DE
7	so	so	ADV	_	_	8	advmod	_	LangID=DE
8	Sachen	Sache	NOUN	_	Case=Dat|Gender=Fem|Number=Plur	9	iobj	_	LangID=DE
9	beschäftigen	beschäftigen	VERB	_	VerbForm=Inf	0	root	_	LangID=DE
10	so	so	ADV	_	_	14	advmod	_	LangID=DE
11	Wände	Wand	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	14	obj	_	LangID=DE
12	bilmem	bil	VERB	_	_	14	advcl	_	LangID=TR
13	ne	ne	PRON	_	Case=Nom|Number=Sing	12	obj	_	LangID=TR
14	malen	malen	VERB	_	VerbForm=Inf	9	parataxis	_	LangID=DE|SpaceAfter=No
15	.	.	PUNCT	_	_	9	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 iobj	color:blue
1	Ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	LangID=DE
2	bereue	bereuen	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	LangID=DE
3	es	es	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	LangID=DE
4	gerade	gerade	ADV	_	_	2	advmod	_	LangID=DE
5	auch	auch	ADV	_	_	2	advmod	_	LangID=DE
6	voll	voll	ADV	_	_	2	advmod	_	LangID=DE|SpaceAfter=No
7	,	,	PUNCT	_	_	15	punct	_	LangID=OTHER
8	dass	dass	SCONJ	_	_	15	mark	_	LangID=DE
9	ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	LangID=DE
10	an	an	ADP	_	_	12	case	_	LangID=DE
11	dem	der	DET	_	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	12	det	_	LangID=DE
12	IfL	IfL	PROPN	_	Case=Dat|Gender=Masc|Number=Plur	15	obl	_	LangID=DE
13	nie	nie	ADV	_	_	15	advmod	_	LangID=DE
14	daran	daran	ADV	_	_	15	iobj	_	LangID=DE
15	teilgenommen	teilnehmen	VERB	_	VerbForm=Part	2	ccomp	_	LangID=DE
16	habe	haben	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	aux	_	LangID=DE|SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	LangID=OTHER
18	keşke	keşke	ADV	_	_	19	advmod	_	LangID=TR
19	yapsaydım	yap	VERB	_	Aspect=Imp|Evident=Fh|Mood=Cnd|Number=Sing|Person=1|Tense=Past	2	conj	_	LangID=TR
20	daha	daha	ADV	_	_	21	advmod	_	LangID=TR
21	fazla	fazla	ADJ	_	_	19	advmod	_	LangID=TR|SpaceAfter=No
22	.	.	PUNCT	_	_	2	punct	_	LangID=OTHER

~~~


