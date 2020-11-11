---
layout: base
title:  'Statistics of compound in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="qtd_sagt-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="qtd_sagt-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="qtd_sagt-dep-compound-redup.html">compound:redup</a></tt>.

113 nodes (0%) are attached to their parents as `compound`.

102 instances of `compound` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19469026548673.

The following 14 pairs of parts of speech are connected with `compound`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (55; 49% instances), <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (24; 21% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (6; 5% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (4; 4% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Yani	yani	ADV	_	_	6	advmod	_	LangID=TR
2	hangisi	hangisi	PRON	_	Case=Nom|Number=Sing|Person=3	6	obj	_	LangID=TR
3	daha	daha	ADV	_	_	6	advmod	_	LangID=TR
4	fazla	fazla	ADJ	_	_	6	advmod	_	LangID=TR
5	hoşuna	hoş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	compound	_	LangID=TR
6	gitti	git	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	LangID=TR
7	zu	zu	ADP	_	_	9	case	_	LangID=DE
8	dem	der	DET	_	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	det	_	LangID=DE
9	Lesen	Lese|Lesen	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	6	obl	_	LangID=DE|SpaceAfter=No
10	?	?	PUNCT	_	_	6	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	En	en	ADV	_	_	2	advmod	_	LangID=TR
2	son	son	NOUN	_	Case=Nom|Number=Sing	10	obl	_	LangID=TR
3	sinemaya	sinema	NOUN	_	Case=Dat|Number=Sing	10	obl	_	LangID=TR
4	belki	belki	ADV	_	_	10	advmod	_	LangID=TR
5	eh	eh	INTJ	_	_	10	discourse	_	LangID=TR
6	vor	vor	ADP	_	_	9	case	_	LangID=DE
7	ein	ein	NUM	_	NumType=Card	8	compound	_	LangID=DE
8	zwei	zwei	NUM	_	NumType=Card	9	nummod	_	LangID=DE
9	Monaten	Monat	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	10	obl	_	LangID=DE
10	gittim	git	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	LangID=TR|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Ja	Ja	INTJ	_	_	4	discourse	_	LangID=DE
2	tam	tam	ADV	_	_	4	advmod	_	LangID=TR
3	denk	denk	ADJ	_	_	4	compound	_	LangID=TR
4	geldi	gel	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	LangID=TR
5	weißt	weißen|wissen	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	parataxis	_	LangID=DE
6	du	du	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	LangID=DE|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	LangID=OTHER

~~~


