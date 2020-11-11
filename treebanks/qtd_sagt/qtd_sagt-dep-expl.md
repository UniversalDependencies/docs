---
layout: base
title:  'Statistics of expl in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="qtd_sagt-dep-expl-pv.html">expl:pv</a></tt>.

80 nodes (0%) are attached to their parents as `expl`.

52 instances of `expl` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0125.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (76; 95% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (4; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	Hayır	hayır	ADV	_	_	4	discourse	_	LangID=TR
2	em	em	INTJ	_	_	4	discourse	_	LangID=TR
3	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	LangID=DE
4	geht	gehen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
5	einfach	einfach	ADV	_	_	4	advmod	_	LangID=DE
6	um	um	ADP	_	_	8	case	_	LangID=DE
7	einen	ein	DET	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	LangID=DE
8	Paşa	paşa	NOUN	_	Case=Nom|Number=Sing	4	obl	_	LangID=TR|SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 expl	color:blue
1	Ama	ama	CCONJ	_	_	7	cc	_	LangID=TR
2	heute	heute	ADV	_	_	7	advmod	_	LangID=DE
3	ist	sein	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	LangID=DE
4	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	expl	_	LangID=DE
5	ein	ein	DET	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	6	det	_	LangID=DE
6	bisschen	bißchen	ADV	_	_	7	advmod	_	LangID=DE
7	frischer	frisch	ADJ	_	_	0	root	_	LangID=DE
8	düne	dün	NOUN	_	Case=Dat|Number=Sing	7	obl	_	LangID=TR
9	nazaran	nazaran	ADP	_	_	8	case	_	LangID=TR|SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	LangID=OTHER

~~~


