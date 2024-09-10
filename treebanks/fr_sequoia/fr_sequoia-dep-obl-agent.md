---
layout: base
title:  'Statistics of obl:agent in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_sequoia-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_sequoia-dep-obl-mod.html">obl:mod</a></tt>.

281 nodes (0%) are attached to their parents as `obl:agent`.

281 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40569395017794.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (220; 78% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (60; 21% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 obl:agent	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	mobilier	mobilier	NOUN	_	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	subventionné	subventionner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	à	à	ADP	_	_	7	case	_	_
6	50	50	NUM	_	NumType=Card	7	nummod	_	SpaceAfter=No
7	%	%	NOUN	_	Gender=Masc	4	obl:mod	_	_
8	par	par	ADP	_	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	conseil	conseil	NOUN	_	Gender=Masc|Number=Sing	4	obl:agent	_	_
11	général	général	ADJ	_	Gender=Masc|Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	bénéfice	bénéfice	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	_
5	démontré	démontrer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
6	par	par	ADP	_	_	7	case	_	_
7	Aclasta	Aclasta	PROPN	_	_	5	obl:agent	_	_
8	à	à	ADP	_	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	cours	cours	NOUN	_	Gender=Masc	5	obl:mod	_	_
11	de	de	ADP	_	_	13	case	_	_
12	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	13	det	_	_
13	études	étude	NOUN	_	Gender=Fem|Number=Plur	10	nmod	_	_
14	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 obl:agent	color:blue
1	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
2	Quiconque	quiconque	PRON	_	Number=Sing|PronType=Rel	4	nsubj	_	_
3	montait	monter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	acl:relcl	_	_
4	devait	devoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	6	aux:pass	_	Subject=SubjRaising
6	fauché	faucher	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	xcomp	_	_
7	littéralement	littéralement	ADV	_	_	6	advmod	_	_
8	soit	soit	CCONJ	_	_	11	cc	_	_
9	par	par	ADP	_	_	11	case	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	nôtres	nôtre	PRON	_	Gender=Fem|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=1|Poss=Yes|PronType=Prs	6	obl:agent	_	SpaceAfter=No
12	,	,	PUNCT	_	_	16	punct	_	_
13	soit	soit	CCONJ	_	_	16	cc	_	_
14	par	par	ADP	_	_	16	case	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	feu	feu	NOUN	_	Gender=Masc|Number=Sing	11	conj	_	_
17	de	de	ADP	_	_	19	case	_	_
18	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	19	det	_	_
19	mitrailleurs	mitrailleur	NOUN	_	Gender=Masc|Number=Plur	16	nmod	_	_
20	allemands	allemand	ADJ	_	Gender=Masc|Number=Plur	19	amod	_	SpaceAfter=No
21	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	déclarera	déclarer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	parataxis:insert	_	_
24	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	caporal	caporal	NOUN	_	Gender=Masc|Number=Sing	23	nsubj	_	_
26	Maupas	Maupas	PROPN	_	Gender=Masc|Number=Sing	25	nmod	_	_
27	lors	lors	ADV	_	ExtPos=ADV	23	advmod	_	_
28	de	de	ADP	_	_	30	case	_	_
29	son	son	DET	_	Number=Sing|Poss=Yes	30	det	_	_
30	interrogatoire	interrogatoire	NOUN	_	Gender=Masc|Number=Sing	27	obl:arg	_	SpaceAfter=No
31	.	.	PUNCT	_	_	4	punct	_	_

~~~


