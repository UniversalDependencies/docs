---
layout: base
title:  'Statistics of expl in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="qtd_sagt-dep-expl-pv.html">expl:pv</a></tt>.

119 nodes (0%) are attached to their parents as `expl`.

87 instances of `expl` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.28571428571429.

The following 6 pairs of parts of speech are connected with `expl`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (85; 71% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (17; 14% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (12; 10% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 expl	color:blue
1	Aber	aber	CCONJ	_	_	6	cc	_	LangID=DE
2	trotzdem	trotzdem	ADV	_	_	6	advmod	_	LangID=DE
3	ist	sein	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	LangID=DE
4	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	LangID=DE
5	schon	schon	ADV	_	_	6	advmod	_	LangID=DE
6	cool	cool	ADJ	_	_	0	root	_	LangID=DE
7	so	so	ADV	_	_	6	discourse	_	LangID=DE
8	değil	değil	PART	_	_	6	parataxis	_	LangID=TR
9	mi	mi	AUX	_	Number=Sing|Person=3	8	aux:q	_	LangID=TR|SpaceAfter=No
10	?	?	PUNCT	_	_	6	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	Şimdi	şimdi	NOUN	_	Case=Nom|Number=Sing	5	obl	_	LangID=TR
2	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	LangID=DE
3	ist	sein	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	LangID=DE
4	schon	schon	ADV	_	_	5	advmod	_	LangID=DE
5	so	so	ADV	_	_	0	root	_	LangID=DE
6	ähm	ähm	INTJ	_	_	5	discourse	_	LangID=DE
7	dass	dass	SCONJ	_	_	11	mark	_	LangID=DE
8	halt	halt	ADV	_	_	11	advmod	_	LangID=DE
9	Rassismus	Rassismus	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	11	obj	_	LangID=DE
10	ja	ja	ADV	_	_	11	advmod	_	LangID=DE
11	gibt	geben	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	LangID=DE|SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


