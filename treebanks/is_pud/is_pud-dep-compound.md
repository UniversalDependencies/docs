---
layout: base
title:  'Statistics of compound in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="is_pud-dep-compound-prt.html">compound:prt</a></tt>.

42 nodes (0%) are attached to their parents as `compound`.

25 instances of `compound` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (35; 83% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="is_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="is_pud-pos-SYM.html">SYM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	Þessar	þessi	PRON	favfn	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	2	det	_	_
2	plöntuættir	plöntuætt	NOUN	nvfn	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	3	nsubj	_	_
3	fyrirfinnast	fyrirfinna	VERB	sfm3fn	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	enn	enn	ADV	aa	_	3	advmod	_	_
5	í	í	ADP	aþ	_	6	case	_	_
6	Papúa	Papúa	PROPN	e	_	3	obl:arg	_	_
7	Nýju-Gíneu	Nýju-Gínea	PROPN	nveþ-s	Case=Dat|Gender=Fem|Number=Sing	6	compound	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 compound	color:blue
1	Mate	Mate	PROPN	e	_	3	compound	_	_
2	9	9	NUM	ta	_	1	nummod	_	_
3	símana	sími	NOUN	nkfog	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	4	nsubj	_	_
4	skortir	skorta	VERB	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	gervigreindarviðmót	gervigreindarviðmót	NOUN	nveo	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	svo	svo	ADV	aa	_	10	mark	_	_
8	sem	sem	SCONJ	c	_	7	fixed	_	_
9	Google	Google	PROPN	e	_	10	compound	_	_
10	Assistant	Assistant	PROPN	e	_	5	appos	_	_
11	eða	eða	CCONJ	c	_	12	cc	_	_
12	Siri	Siri	PROPN	e	_	10	conj	_	_
13	frá	frá	ADP	aþ	_	14	case	_	_
14	Apple	Apple	PROPN	e	_	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 compound	color:blue
1	Stjórnendur	stjórnandi	NOUN	nkfn	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	13	nsubj	_	_
2	fyrirtækja	fyrirtæki	NOUN	nhfe	Case=Gen|Definite=Ind|Gender=Neut|Number=Plur	1	nmod:poss	_	_
3	á	á	ADP	ao	_	6	case	_	_
4	borð	borð	NOUN	nheo	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	3	fixed	_	_
5	við	við	ADP	ao	_	3	fixed	_	_
6	Spotify	Spotify	PROPN	e	_	2	nmod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	Tesla	Tesla	PROPN	e	_	6	conj	_	SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	_	_
10	Uber	Uber	PROPN	e	_	6	conj	_	_
11	og	og	CCONJ	c	_	12	cc	_	_
12	Snapchat	Snapchat	PROPN	e	_	6	conj	_	_
13	sækja	sækja	VERB	sfg3fn	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
14	einkaviðburð	einkaviðburður	NOUN	nheo	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	13	obj	_	_
15	auk	auk	ADP	ae	_	16	case	_	_
16	Mountain	Mountain	PROPN	nxee-s	Case=Gen|Number=Sing	13	obl	_	_
17	View	View	PROPN	nxee-s	Case=Gen|Number=Sing	16	flat:name	_	_
18	ráðstefnunnar	ráðstefna	NOUN	nveeg	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	17	compound	_	SpaceAfter=No
19	.	.	PUNCT	.	_	13	punct	_	_

~~~


