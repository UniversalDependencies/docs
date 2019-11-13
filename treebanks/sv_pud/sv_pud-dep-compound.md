---
layout: base
title:  'Statistics of compound in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="sv_pud-dep-compound-prt.html">compound:prt</a></tt>.

81 nodes (0%) are attached to their parents as `compound`.

81 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35802469135802.

The following 10 pairs of parts of speech are connected with `compound`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (28; 35% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (27; 33% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (11; 14% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (6; 7% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 5% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 compound	color:blue
1	Yerba	Yerba	PROPN	PM|NOM	Case=Nom	2	compound	2:compound	_
2	Buena-trädgården	Buena-trädgård	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	nsubj	3:nsubj	_
3	anlades	anlägga	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
4	i	i	ADP	PP	_	5	case	5:case	_
5	början	början	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	obl	3:obl:i	_
6	av	av	ADP	PP	_	7	case	7:case	_
7	1990-talet	1990-tal	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nmod	5:nmod:av	_
8	på	på	ADP	PP	_	9	case	9:case	_
9	taket	tak	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	3	obl	3:obl:på	_
10	till	till	ADP	PP	_	14	case	14:case	_
11	Moscone	Moscone	PROPN	PM|NOM	Case=Nom	14	compound	14:compound	_
12	North	North	PROPN	PM|NOM	Case=Nom	14	compound	14:compound	_
13	Convention	convention	NOUN	NN|SIN|NOM	Case=Nom|Number=Sing	14	compound	14:compound	_
14	Center	center	NOUN	NN|SIN|NOM	Case=Nom|Number=Sing	9	nmod	9:nmod:till	SpaceAfter=No
15	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Studenter	student	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	nsubj:pass	5:nsubj:pass	_
2	vid	vid	ADP	PP	_	4	case	4:case	_
3	LUISS	LUISS	PROPN	PM|NOM	Case=Nom	4	compound	4:compound	_
4	University	university	NOUN	NN|SIN|NOM	Case=Nom|Number=Sing	1	nmod	1:nmod:vid	_
5	meddelades	meddela	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
6	under	under	ADP	PP	_	8	case	8:case	_
7	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing	8	det	8:det	_
8	möte	möte	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	5	obl	5:obl:under|10:nsubj	_
9	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	nsubj	8:ref	_
10	ägde	äga	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	acl:relcl	8:acl:relcl	_
11	rum	rum	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	10	compound:prt	10:compound:prt	_
12	i	i	ADP	PP	_	13	case	13:case	_
13	Rom	Rom	PROPN	PM|NOM	Case=Nom	10	obl	10:obl:i	SpaceAfter=No
14	.	.	PUNCT	MAD	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Yas	Yas	PROPN	PM|NOM	Case=Nom	2	compound	2:compound	_
2	Marina	Marina	PROPN	PM|NOM	Case=Nom	3	compound	3:compound	_
3	Circuits	Circuit	PROPN	PM|GEN	Case=Gen	4	nmod:poss	4:nmod:poss	_
4	hemsida	hemsida	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nsubj	5:nsubj	_
5	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	exakta	exakt	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	7	amod	7:amod	_
7	tider	tid	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obj	5:obj	SpaceAfter=No
8	.	.	PUNCT	MAD	_	5	punct	5:punct	_

~~~


