---
layout: base
title:  'Statistics of aux:tense in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `aux:tense`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_sequoia-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_sequoia-dep-aux-pass.html">aux:pass</a></tt>.

948 nodes (1%) are attached to their parents as `aux:tense`.

948 instances of `aux:tense` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57911392405063.

The following 4 pairs of parts of speech are connected with `aux:tense`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (909; 96% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (20; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (18; 2% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux:tense	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	conteur	conteur	NOUN	_	Number=Sing	5	nsubj:caus	_	Gender[lex]=Masc
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	fait	faire	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	5	aux:caus	_	Tense[denom]=Past
5	jouer	jouer	VERB	_	VerbForm=Inf	0	root	_	Subject=ObjRaising
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	enfants	enfant	NOUN	_	Number=Plur	5	obj:agent	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux:tense	color:blue
1	Dans	dans	ADP	_	_	4	case	_	_
2	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
3	deux	deux	NUM	_	NumType=Card	4	nummod	_	Number[lex]=Plur
4	cas	cas	NOUN	_	_	10	obl:mod	_	Gender[lex]=Masc|Number[ctxt]=Plur|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	Gender[ctxt]=Fem|SpaceAfter=No
7	évolution	évolution	NOUN	_	Number=Sing	10	nsubj	_	Gender[lex]=Fem
8	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	_
9	été	être	AUX	_	VerbForm=Part	10	cop	_	Tense[denom]=Past
10	favorable	favorable	ADJ	_	Number=Sing	0	root	_	Gender[ctxt]=Fem|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 19 aux:tense	color:blue
1	M.	monsieur	NOUN	_	Number=Sing	4	nsubj	_	Gender[lex]=Masc
2	Birdal	Birdal	PROPN	_	_	1	flat:name	_	Gender[lex]=Unknown
3	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	aux:tense	_	_
4	demandé	demander	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Tense[denom]=Past
5	à	à	ADP	_	_	7	mark	_	_
6	être	être	AUX	_	VerbForm=Inf	7	aux:pass	_	Subject=SubjRaising
7	libéré	libérer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	xcomp	_	Tense[denom]=Past
8	pour	pour	ADP	_	_	9	case	_	_
9	raison	raison	NOUN	_	Number=Sing	7	obl:mod	_	Gender[lex]=Fem
10	de	de	ADP	_	_	11	case	_	_
11	santé	santé	NOUN	_	Number=Sing	9	nmod	_	Gender[lex]=Fem|SpaceAfter=No
12	,	,	PUNCT	_	_	16	punct	_	_
13	suite	suite	NOUN	_	ExtPos=ADP|Number=Sing	16	case	_	Gender[lex]=Fem|Idiom=Yes
14	à	à	ADP	_	_	13	fixed	_	InIdiom=Yes
15	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	attentat	attentat	NOUN	_	Number=Sing	7	obl:mod	_	Gender[lex]=Masc
17	dont	dont	PRON	_	PronType=Rel	22	nmod	_	_
18	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	nsubj	_	_
19	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	22	aux:tense	_	_
20	été	être	AUX	_	VerbForm=Part	22	cop	_	Tense[denom]=Past
21	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	victime	victime	NOUN	_	Number=Sing	16	acl:relcl	_	Gender[lex]=Fem|SpaceAfter=No
23	.	.	PUNCT	_	_	4	punct	_	_

~~~


