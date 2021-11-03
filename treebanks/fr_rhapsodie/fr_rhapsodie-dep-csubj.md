---
layout: base
title:  'Statistics of csubj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fr_rhapsodie-dep-csubj-pass.html">csubj:pass</a></tt>.

19 nodes (0%) are attached to their parents as `csubj`.

17 instances of `csubj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.94736842105263.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (12; 63% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 csubj	color:blue
1	XXX	XXX	X	_	_	3	dep	_	Overlap=Rhap_D2007-84|Scrap=Yes|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	Overlap=Rhap_D2007-84
3	ah	ah	INTJ	_	_	8	discourse	_	Overlap=Rhap_D2007-84|SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	Overlap=Rhap_D2007-84
5	mais	mais	CCONJ	_	_	8	cc	_	Overlap=Rhap_D2007-84
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	expl:subj	_	SpaceAfter=No
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
9	qu'	que	SCONJ	_	_	12	mark	_	SpaceAfter=No
10	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	12	nsubj:pass	_	_
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:pass	_	_
12	habillé	habiller	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	csubj	_	_
13	pareil	pareil	ADV	_	_	12	advmod	_	Overlap=Rhap_D2007-86|SpaceAfter=No
14	.	.	PUNCT	_	_	8	punct	_	Overlap=Rhap_D2007-86

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 csubj	color:blue
1	enfin	enfin	ADV	_	_	4	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	expl:subj	_	SpaceAfter=No
7	est	être	AUX	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	4	reparandum	_	_
9	que	que	SCONJ	_	_	13	mark	_	_
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	SpaceAfter=No
11	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	cop	_	_
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	côté	côté	NOUN	_	Gender=Masc|Number=Sing	8	csubj	_	_
14	public	public	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	direct	direct	ADJ	_	Gender=Masc|Number=Sing	14	reparandum	_	_
17	et	et	CCONJ	_	_	18	cc	_	_
18	que	que	SCONJ	_	_	9	conj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	25	punct	_	_
20	et	et	CCONJ	_	_	25	cc	_	_
21	que	que	SCONJ	_	_	25	mark	_	_
22	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	25	dislocated	_	SpaceAfter=No
23	,	,	PUNCT	_	_	22	punct	_	_
24	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	25	nsubj	_	SpaceAfter=No
25	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	reparandum	_	SpaceAfter=No
26	,	,	PUNCT	_	_	32	punct	_	_
27	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	32	nsubj	_	SpaceAfter=No
28	est	être	AUX	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	_	_
29	comme	comme	SCONJ	_	_	32	mark	_	_
30	si	si	SCONJ	_	_	32	mark	_	_
31	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	32	nsubj	_	_
32	faisais	faire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	25	reparandum	_	_
33	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	spectacle	spectacle	NOUN	_	Gender=Masc|Number=Sing	32	obj	_	SpaceAfter=No
35	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 csubj	color:blue
1	et	et	CCONJ	_	_	8	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	euh	euh	INTJ	_	_	8	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	et	et	CCONJ	conj:reform	_	1	reparandum	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	expl:subj	_	SpaceAfter=No
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
9	que	que	SCONJ	_	_	14	mark	_	_
10	elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
12	peut-être	peut-être	ADV	_	_	14	advmod	_	_
13	pas	pas	ADV	_	Polarity=Neg	14	advmod	_	_
14	compatible	compatible	ADJ	_	Number=Sing	8	csubj	_	_
15	avec	avec	ADP	_	_	22	case	_	SpaceAfter=No
16	,	,	PUNCT	_	_	22	punct	_	_
17	euh	euh	INTJ	_	_	22	discourse	_	SpaceAfter=No
18	,	,	PUNCT	_	_	17	punct	_	_
19	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	19	reparandum	_	_
22	vie	vie	NOUN	_	Gender=Fem|Number=Sing	14	obl:mod	_	_
23	de	de	ADP	_	_	24	case	_	_
24	famille	famille	NOUN	_	Gender=Fem|Number=Sing	22	nmod	_	_
25	par	par	ADP	_	_	26	case	_	_
26	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	8	obl:mod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	8	punct	_	_

~~~


