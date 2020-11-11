---
layout: base
title:  'Statistics of appos in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `appos`

This relation is universal.
There are 1 language-specific subtypes of `appos`: <tt><a href="qtd_sagt-dep-appos-trans.html">appos:trans</a></tt>.

62 nodes (0%) are attached to their parents as `appos`.

62 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.2741935483871.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (14; 23% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (10; 16% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (8; 13% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (7; 11% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (6; 10% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (5; 8% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (4; 6% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	Ya	ya	INTJ	_	_	2	discourse	_	LangID=TR
2	değil	değil	PART	_	_	0	root	_	LangID=TR
3	mi	mi	AUX	_	Number=Sing|Person=3	2	aux:q	_	LangID=TR
4	bir	bir	ADV	_	_	8	advmod	_	LangID=TR
5	de	de	ADV	_	_	4	advmod:emph	_	LangID=TR
6	işte	işte	INTJ	_	_	8	discourse	_	LangID=TR
7	Hausarbeit	Hausarbeit	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	LangID=DE
8	yazmıştım	yaz	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=1|Tense=Pqp	2	parataxis	_	LangID=TR
9	für	für	ADP	_	_	10	case	_	LangID=DE
10	Sprache	Sprache	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	LangID=DE
11	Gehirn	Gehirn	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	10	appos	_	LangID=DE|SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	Ve	ve	CCONJ	_	_	7	cc	_	LangID=TR
2	ehm	ehm	INTJ	_	_	7	discourse	_	LangID=TR
3	Kanarische	kanarisch	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	LangID=DE
4	Insel	Insel	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	3	appos	_	LangID=DE
5	de	de	ADV	_	_	3	advmod:emph	_	LangID=TR
6	çok	çok	ADV	_	_	7	advmod	_	LangID=TR
7	güzel	güzel	ADJ	_	_	0	root	_	LangID=TR|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 appos	color:blue
1	Yani	yani	ADV	_	_	5	advmod	_	LangID=TR
2	bu	bu	PRON	_	Case=Nom|Number=Sing	5	nsubj	_	LangID=TR
3	en	en	ADV	_	_	4	advmod	_	LangID=TR
4	kolay	kolay	ADJ	_	_	5	amod	_	LangID=TR
5	şeyler	şey	NOUN	_	Case=Nom|Number=Plur	0	root	_	LangID=TR
6	daha	daha	ADV	_	_	5	advmod	_	LangID=TR
7	çok	çok	ADV	_	_	5	advmod	_	LangID=TR
8	ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1	11	nsubj	_	LangID=TR
9	Statistik	Statistik	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	11	obl	_	LangID=DE
10	ona	o	PRON	_	Case=Dat|Number=Sing|Person=3	9	appos	_	LangID=TR
11	taktım	tak	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Past	5	conj	_	LangID=TR|SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


