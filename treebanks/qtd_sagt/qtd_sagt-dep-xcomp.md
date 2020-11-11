---
layout: base
title:  'Statistics of xcomp in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `xcomp`

This relation is universal.

284 nodes (1%) are attached to their parents as `xcomp`.

205 instances of `xcomp` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1830985915493.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (175; 62% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (51; 18% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (30; 11% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (7; 2% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Eh	eh	INTJ	_	_	7	discourse	_	LangID=TR
2	kitaplardan	kitap	NOUN	_	Case=Abl|Number=Plur	4	nmod	_	LangID=TR
3	mesela	mesela	ADV	_	_	7	advmod	_	LangID=TR
4	Abilektüre	Abilektüre	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	nmod	_	LangID=DE
5	ne	ne	PRON	_	Case=Nom|Number=Sing	7	obj	_	LangID=TR
6	okumanız	oku	VERB	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=2|VerbForm=Vnoun	7	xcomp	_	LangID=TR
7	gerekti	gerek	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	LangID=TR|SpaceAfter=No
8	?	?	PUNCT	_	_	7	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Man	man	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Ind	2	nsubj	_	LangID=DE
2	muss	müssen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	reparandum	_	LangID=DE
3	allgemein	allgemein	ADJ	_	_	6	advmod	_	LangID=DE
4	şey	şey	NOUN	_	Case=Nom|Number=Sing	5	xcomp	_	LangID=TR
5	olmak	ol	VERB	_	Number=Sing|VerbForm=Vnoun	6	csubj	_	LangID=TR
6	lazım	lazım	ADJ	_	_	0	root	_	LangID=TR
7	sprachenbegabt	Sprachebegabt	ADJ	_	_	6	dislocated	_	LangID=DE
8	meinst	meinen	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres	6	parataxis:discourse	_	LangID=DE
9	du	du	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	LangID=DE|SpaceAfter=No
10	?	?	PUNCT	_	_	6	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Hani	hani	ADV	_	_	3	advmod	_	LangID=TR
2	şey	şey	NOUN	_	Case=Nom|Number=Sing	3	obj	_	LangID=TR
3	diyorlar	de	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	LangID=TR
4	ja	ja	ADV	_	_	3	advmod	_	LangID=DE
5	assozial	Assozial	ADJ	_	_	3	xcomp	_	LangID=DE|SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	LangID=OTHER
7	hiçbir	hiçbir	DET	_	Definite=Ind	8	det	_	LangID=TR
8	şeyden	şey	NOUN	_	Case=Abl|Number=Sing	9	obl	_	LangID=TR
9	anlamaz	anla	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	3	xcomp	_	LangID=TR
10	...	...	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


