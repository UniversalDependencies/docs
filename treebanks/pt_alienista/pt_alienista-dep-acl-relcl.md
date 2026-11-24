---
layout: base
title:  'Statistics of acl:relcl in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pt_alienista-dep-acl.html">acl</a></tt>.

248 nodes (1%) are attached to their parents as `acl:relcl`.

247 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.88709677419355.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (168; 68% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (40; 16% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (8; 3% instances), <tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="pt_alienista-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_alienista-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl:relcl	color:blue
1	Não	não	ADV	_	_	2	advmod	_	_
2	desmaiou	desmaiar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	;	;	PUNCT	_	_	4	punct	_	_
4	correu	correr	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
5	a	a	ADP	_	_	7	case	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	sala	sala	NOUN	_	Gender=Fem|Number=Sing	4	obl	_	_
8	interior	interior	ADJ	_	Number=Sing	7	amod	_	_
9	onde	onde	ADV	_	_	12	advmod	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	marido	marido	NOUN	_	Gender=Masc|Number=Sing	12	nsubj	_	_
12	estudava	estudar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Depois	depois	ADV	_	_	0	root	_	_
2	de	de	ADP	_	_	3	case	_	_
3	tanto	tanto	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	1	obl	_	_
4	que	que	PRON	_	PronType=Rel	6	obj	_	_
5	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	fez	fazer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	acl:relcl	_	SpaceAfter=No
7	...	...	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 21 acl:relcl	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Não	não	ADV	_	_	3	advmod	_	_
3	admira	admirar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	retorquiu	retorquir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	parataxis	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	5	nsubj	_	SpaceAfter=No
8	;	;	PUNCT	_	_	11	punct	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Costa	Costa	PROPN	_	_	11	nsubj	_	_
11	abriu	abrir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	parataxis	_	_
12	mão	mão	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	_
13	de	de	ADP	_	_	15	case	_	_
14	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	estrela	estrela	NOUN	_	Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
16	,	,	PUNCT	_	_	21	punct	_	_
17	que	que	PRON	_	PronType=Rel	21	nsubj	_	_
18	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	_	_
19	em	em	ADP	_	_	21	case	_	_
20	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	céu	céu	NOUN	_	Gender=Masc|Number=Sing	15	acl:relcl	_	SpaceAfter=No
22	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


