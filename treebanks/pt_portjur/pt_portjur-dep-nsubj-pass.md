---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_portjur-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_portjur-dep-nsubj-outer.html">nsubj:outer</a></tt>.

720 nodes (1%) are attached to their parents as `nsubj:pass`.

366 instances of `nsubj:pass` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33194444444444.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (612; 85% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (84; 12% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt> (21; 3% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj:pass	color:blue
1	Eis	eis	ADV	_	_	3	advmod	_	_
2	aí	aí	ADV	_	_	3	advmod	_	_
3	caracterizada	caracterizar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	intenção	intenção	NOUN	_	Gender=Fem|Number=Sing	3	nsubj:pass	_	_
6	de	de	ADP	_	_	8	case	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	abandono	abandono	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	mandado	mandado	NOUN	_	Gender=Masc|Number=Sing	9	nsubj	_	_
3	judicial	judicial	ADJ	_	Number=Sing	2	amod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	que	que	PRON	_	PronType=Rel	7	nsubj:pass	_	_
6	será	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	aux:pass	_	_
7	arquivado	arquivar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	2	acl:relcl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	cancelará	cancelar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	registro	registro	NOUN	_	Gender=Masc|Number=Sing	9	obj	_	_
12	original	original	ADJ	_	Number=Sing	11	amod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	adotado	adotado	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 nsubj:pass	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	guarda	guarda	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	poderá	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	ser	ser	AUX	_	VerbForm=Inf	5	aux:pass	_	_
5	revogada	revogar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	3	xcomp	_	_
6	a	a	ADP	_	_	8	case	_	_
7	qualquer	qualquer	DET	_	Number=Sing|PronType=Ind	8	det	_	_
8	tempo	tempo	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	mediante	mediante	ADP	_	_	11	case	_	_
11	ato	ato	NOUN	_	Gender=Masc|Number=Sing	5	obl	_	_
12	judicial	judicial	ADJ	_	Number=Sing	11	amod	_	_
13	fundamentado	fundamentado	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	11	amod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	ouvido	ouvir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	5	advcl	_	_
16	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	Ministério	Ministério	PROPN	_	_	15	nsubj:pass	_	_
18	Público	Público	PROPN	_	_	17	flat:name	_	SpaceAfter=No
19	.	.	PUNCT	_	_	3	punct	_	_

~~~


