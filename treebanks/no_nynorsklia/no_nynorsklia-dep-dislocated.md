---
layout: base
title:  'Statistics of dislocated in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `dislocated`

This relation is universal.

16 nodes (0%) are attached to their parents as `dislocated`.

15 instances of `dislocated` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.1875.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (8; 50% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (7; 44% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 dislocated	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	jo	jo	ADV	_	_	2	advmod	_	_
4	alle	all	DET	_	Number=Plur|PronType=Tot	6	det	_	_
5	slags	slags	NOUN	_	Gender=Neut	6	nmod	_	_
6	folk	folk	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	dislocated	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	parataxis	_	_
8	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	måtte	måtte	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	aux	_	_
10	vere	vere	VERB	_	VerbForm=Inf	6	acl:relcl	_	_
11	i	i	ADP	_	_	10	compound:prt	_	_
12	saman	saman	ADV	_	_	11	advmod	_	_
13	med	med	ADP	_	_	12	obl	_	_
14	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dislocated	color:blue
1	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl	_	_
3	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	dislocated	_	_
4	spurde	spørje	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
5	etter	etter	ADP	_	_	4	compound:prt	_	_
6	da	da	ADV	_	_	4	advmod	_	_
7	spesielt	spesiell	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	4	advmod	_	_
8	?	$?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 26 dislocated	color:blue
1	sporlaust	sporlaus	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	parataxis	_	_
2	den	den	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	stod	stå	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	reparandum	_	_
4	#	#	PUNCT	_	_	5	punct	_	_
5	hadde	ha	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
6	#	#	PUNCT	_	_	7	punct	_	_
7	kontakt	kontakt	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	obj	_	_
8	med	med	ADP	_	_	7	nmod	_	_
9	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	par	par	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	12	reparandum	_	_
11	tre	tre	NUM	_	Number=Plur|NumType=Card	12	nummod	_	_
12	andre	annan	DET	_	Number=Plur|PronType=Dem	8	det	_	_
13	vardøbåtane	vardøbåt	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	14	nmod	_	_
14	dei	dei	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	15	nsubj	_	_
15	snakka	snakke	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
16	i	i	ADP	_	_	18	reparandum	_	_
17	i	i	ADP	_	_	18	case	_	_
18	telefon	telefon	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	obl	_	_
19	med	med	ADP	_	_	20	case	_	_
20	kvarandre	kvarandre	PRON	_	Animacy=Hum|Case=Acc|Number=Plur|PronType=Rcp	15	obl	_	_
21	#	#	PUNCT	_	_	24	punct	_	_
22	og	og	CCONJ	_	_	24	cc	_	_
23	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	24	expl	_	_
24	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	15	conj	_	_
25	det	det	DET	_	Gender=Neut|Number=Sing|PronType=Dem	26	det	_	_
26	siste	sist	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	24	dislocated	_	_
27	dei	dei	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	28	nsubj	_	_
28	høyrde	høyre	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	26	acl:relcl	_	_
29	frå	frå	ADP	_	_	30	case	_	_
30	han	han	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	28	obl	_	_
31	.	$.	PUNCT	_	_	5	punct	_	_

~~~


