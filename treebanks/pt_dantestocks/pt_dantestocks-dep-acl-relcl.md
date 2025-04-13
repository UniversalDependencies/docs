---
layout: base
title:  'Statistics of acl:relcl in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pt_dantestocks-dep-acl.html">acl</a></tt>.

288 nodes (0%) are attached to their parents as `acl:relcl`.

288 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.82638888888889.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (140; 49% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (103; 36% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (17; 6% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	King	King	PROPN	_	_	4	dislocated	_	_
2	Kong	Kong	PROPN	_	_	1	flat:name	_	_
3	não	não	ADV	_	_	4	advmod	_	_
4	há	haver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	galho	galho	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
6	que	que	PRON	_	PronType=Rel	7	nsubj	_	_
7	suporte	suportar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
8	esse	esse	DET	_	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	gorila	gorila	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	...	...	PUNCT	_	_	4	punct	_	SpaceAfter=No
11	(	(	PUNCT	_	_	12	punct	_	SpaceAfter=No
12	#petr4	#petr4	PROPN	_	_	4	parataxis	_	SpaceAfter=No
13	)	)	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	O	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	nsubj:outer	_	_
2	que	que	PRON	_	PronType=Rel	3	nsubj	_	_
3	importa	importar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
5	que	que	SCONJ	_	_	10	mark	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	ALLL3	ALLL3	PROPN	_	_	10	nsubj	_	_
8	ainda	ainda	ADV	_	_	10	advmod	_	_
9	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	subindo	subir	VERB	_	VerbForm=Ger	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	#enbr3	#enbr3	PROPN	_	_	5	nsubj	_	_
2	que	que	PRON	_	PronType=Rel	3	obj	_	_
3	comentei	comentar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	1	acl:relcl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	fez	fazer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	PB	PB	NOUN	_	Abbr=Yes|Gender=Masc|Number=Sing	5	obj	_	FullForm=price-to-book
7	(	(	PUNCT	_	_	9	punct	_	SpaceAfter=No
8	não	não	ADV	_	_	9	advmod	_	_
9	vi	ver	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	5	parataxis	_	SpaceAfter=No
10	)	)	PUNCT	_	_	9	punct	_	_
11	e	e	CCONJ	_	_	12	cc	_	_
12	rompeu	romper	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	_
13	topo	topo	NOUN	_	Gender=Masc|Number=Sing	12	obj	_	_
14	PQP	PQP	X	_	_	5	discourse	_	SpaceAfter=No

~~~


