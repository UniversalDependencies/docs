---
layout: base
title:  'Statistics of expl:pv in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-expl.html">expl</a></tt>.

71 nodes (0%) are attached to their parents as `expl:pv`.

50 instances of `expl:pv` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.52112676056338.

The following 2 pairs of parts of speech are connected with `expl:pv`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (69; 97% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 expl:pv	color:blue
1	Daha	daha	ADV	_	_	2	advmod	_	LangID=TR
2	çok	çok	DET	_	_	4	det	_	LangID=TR
3	sebze	sebze	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	LangID=TR
4	türleri	tür	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	0	root	_	LangID=TR
5	weil	weil	SCONJ	_	_	11	mark	_	LangID=DE
6	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	expl	_	LangID=DE
7	mir	ich	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	11	expl:pv	_	LangID=DE
8	auch	auch	ADV	_	_	11	advmod	_	LangID=DE
9	sehr	sehr	ADV	_	_	10	advmod	_	LangID=DE
10	sehr	sehr	ADV	_	_	11	advmod	_	LangID=DE
11	schmeckt	schmecken	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	LangID=DE|SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 expl:pv	color:blue
1	Şimdi	şimdi	NOUN	_	Case=Nom|Number=Sing	5	obl	_	LangID=TR
2	adamın	adam	NOUN	_	Case=Gen|Number=Sing	3	nmod	_	LangID=TR
3	ismi	isim	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	LangID=TR
4	aklıma	akıl	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	obl	_	LangID=TR
5	gelmedi	gel	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	0	root	_	LangID=TR
6	ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	LangID=DE
7	bin	sein	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	cop	_	LangID=DE
8	mir	ich	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	10	expl:pv	_	LangID=DE
9	nicht	nicht	PART	_	Polarity=Neg	10	advmod	_	LangID=DE
10	sicher	sicher	ADJ	_	_	5	conj	_	LangID=DE|SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	LangID=OTHER
12	wie	wie	SCONJ	_	_	15	mark	_	LangID=DE
13	der	der	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	15	nsubj	_	LangID=DE
14	genau	genau	ADV	_	_	15	advmod	_	LangID=DE
15	heißt	heißen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	LangID=DE|SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


