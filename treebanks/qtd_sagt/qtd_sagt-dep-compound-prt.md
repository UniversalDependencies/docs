---
layout: base
title:  'Statistics of compound:prt in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="qtd_sagt-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="qtd_sagt-dep-compound-redup.html">compound:redup</a></tt>.

80 nodes (0%) are attached to their parents as `compound:prt`.

76 instances of `compound:prt` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.0625.

The following 8 pairs of parts of speech are connected with `compound:prt`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (43; 54% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (20; 25% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PART.html">PART</a></tt> (12; 15% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 compound:prt	color:blue
1	Spielt	spielen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
2	da	da	ADV	_	_	1	advmod	_	LangID=DE
3	nicht	nicht	PART	_	Polarity=Neg	1	advmod	_	LangID=DE
4	die	der	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	LangID=DE
5	Dings	Ding	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	LangID=DE
6	mit	mit	ADP	_	_	1	compound:prt	_	LangID=DE
7	die	der	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	LangID=DE
8	prenses	prenses	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	LangID=TR
9	oynamıyor	oyna	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	1	parataxis	_	LangID=TR
10	mu	mi	AUX	_	Number=Sing|Person=3	9	aux:q	_	LangID=TR
11	orada	ora	PRON	_	Case=Loc|Number=Sing	9	obl	_	LangID=TR|SpaceAfter=No
12	?	?	PUNCT	_	_	1	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 compound:prt	color:blue
1	Also	also	ADV	_	_	4	advmod	_	LangID=DE
2	her	her	DET	_	Definite=Def	3	det	_	LangID=TR
3	halükarda	halükar	NOUN	_	Case=Loc|Number=Sing	4	obl	_	LangID=TR
4	kommt	kommen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
5	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	LangID=DE
6	uns	wir	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	4	obj	_	LangID=DE
7	zugute	zugute	ADV	_	_	4	compound:prt	_	LangID=DE|SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 compound:prt	color:blue
1	Ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	LangID=DE
2	glaube	glauben	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
3	burada	bura	PRON	_	Case=Loc|Number=Sing	6	obl	_	LangID=TR
4	çok	çok	DET	_	_	5	det	_	LangID=TR
5	kişi	kişi	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	LangID=TR
6	gitti	git	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	ccomp	_	LangID=TR
7	değil	değil	PART	_	_	2	parataxis:discourse	_	LangID=TR
8	mi	mi	AUX	_	Number=Sing|Person=3	7	aux:q	_	LangID=TR
9	an	an	ADP	_	_	11	case	_	LangID=DE
10	dem	der	DET	_	Case=Dat|Gender=Neut|Number=Sing|PronType=Art	11	det	_	LangID=DE
11	IMS	IMS	PROPN	_	Case=Dat|Gender=Neut|Number=Sing	3	nmod	_	LangID=DE|SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	LangID=OTHER
13	ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	LangID=DE
14	glaube	glauben	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	parataxis	_	LangID=DE
15	da	de	ADV	_	_	16	advmod	_	LangID=DE
16	gehen	gehen	VERB	_	VerbForm=Inf	14	ccomp	_	LangID=DE
17	viele	viel	PRON	_	Case=Nom|Definite=Ind|Number=Plur|PronType=Ind	16	nsubj	_	LangID=DE
18	hin	hin	PART	_	_	16	compound:prt	_	LangID=DE|SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	LangID=OTHER

~~~


