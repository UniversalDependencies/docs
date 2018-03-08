---
layout: base
title:  'Statistics of obl:tmod in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ga-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ga-dep-obl-prep.html">obl:prep</a></tt>.

51 nodes (0%) are attached to their parents as `obl:tmod`.

37 instances of `obl:tmod` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.35294117647059.

The following 6 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (28; 55% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (10; 20% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (9; 18% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ga-pos-ADV.html">ADV</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 obl:tmod	color:blue
1	Cothaíonn	cothaigh	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
2	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	nmod:poss	_	_
4	chuid	cuid	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	1	obj	_	_
5	Ghaeilge	Gaeilge	PROPN	Noun	Case=Gen|Form=Len|Gender=Fem|Number=Sing	4	compound	_	_
6	gach	gach	DET	Det	Definite=Def	7	det	_	_
7	bliain	bliain	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	obl:tmod	_	_
8	ar	ar	ADP	Simp	_	9	case	_	_
9	saoire	saoire	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	obl	_	_
10	sa	i	ADP	Art	Number=Sing|PronType=Art	11	case	_	_
11	Spidéal	Spidéal	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 obl:tmod	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	3	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	nmod	_	_
3	Micheal	Micheal	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
4	D.	D.	X	Abr	Abbr=Yes	3	flat:name	_	_
5	Higgins	Higgins	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	3	flat:name	_	_
6	ba	is	AUX	Cop	PronType=Rel|Tense=Past|VerbForm=Cop	7	cop	_	_
7	chionsiocair	cionsiocair	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	3	nsubj	_	_
8	leis	le	ADP	Simp	_	7	obl:prep	_	_
9	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	Roinn	roinn	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	12	obj	_	_
11	a	a	PART	Inf	PartType=Inf	12	mark	_	_
12	bhunú	bunú	NOUN	Noun	Form=Len|VerbForm=Inf	7	xcomp	_	_
13	sa	i	ADP	Art	Number=Sing|PronType=Art	14	case	_	_
14	bhliain	bliain	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	12	obl:tmod	_	_
15	1992	1992	NUM	Num	_	14	nummod	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:tmod	color:blue
1	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	2	det	_	_
2	lá	lá	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	a	a	PART	Vb	PartType=Vb|PronType=Rel	4	obl:tmod	_	_
4	cuireadh	cuir	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	2	acl:relcl	_	_
5	Butt	Butt	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
6	...	...	PUNCT	...	_	2	punct	_	_

~~~


