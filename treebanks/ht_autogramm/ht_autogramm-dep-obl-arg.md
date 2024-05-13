---
layout: base
title:  'Statistics of obl:arg in UD_Haitian_Creole-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Haitian_Creole-Autogramm: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="ht_autogramm-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ht_autogramm-dep-obl-mod.html">obl:mod</a></tt>.

18 nodes (1%) are attached to their parents as `obl:arg`.

18 instances of `obl:arg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.27777777777778.

The following 5 pairs of parts of speech are connected with `obl:arg`: <tt><a href="ht_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ht_autogramm-pos-NOUN.html">NOUN</a></tt> (10; 56% instances), <tt><a href="ht_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ht_autogramm-pos-NOUN.html">NOUN</a></tt> (3; 17% instances), <tt><a href="ht_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ht_autogramm-pos-PRON.html">PRON</a></tt> (2; 11% instances), <tt><a href="ht_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ht_autogramm-pos-PROPN.html">PROPN</a></tt> (2; 11% instances), <tt><a href="ht_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ht_autogramm-pos-ADV.html">ADV</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obl:arg	color:blue
1	Yon	yon	DET	_	Definite=Ind|Number=Sing	2	det	_	Gloss=un
2	pòt	pòt	NOUN	_	_	9	nsubj	_	Gloss=porte
3	pawòl	pawòl	NOUN	_	_	2	nmod	_	Gloss=parole
4	polis	polis	NOUN	_	_	3	nmod	_	Gloss=police
5	nasyonal	nasyonal	ADJ	_	_	4	amod	_	Gloss=national
6	Ayiti	Ayiti	PROPN	_	_	4	nmod	_	Gloss=Haïti
7	pa	pa	ADV	_	Polarity=Neg	9	advmod	_	Gloss=NEG|SpaceAfter=No
8	t	te	AUX	_	Tense=Past	9	aux	_	Gloss=PAST
9	reponn	reponn	VERB	_	_	0	root	_	Gloss=répondre
10	demann	demann	NOUN	_	_	9	obl:arg	_	Gloss=demande
11	Reuters	Reuters	PROPN	_	_	13	nsubj	_	Gloss=Reuters
12	te	te	AUX	_	Tense=Past	13	aux	_	Gloss=PAST
13	fè	fè	VERB	_	_	10	acl:relcl	_	Gloss=faire
14	pou	pou	ADP	_	_	15	case	_	Gloss=pour
15	kòmantè	kòmantè	NOUN	_	_	13	obl	_	Gloss=commentaire|SpaceAfter=No
16	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:arg	color:blue
1	Li	li	PRON	_	Number=Sing|Person=3|PronType=Prs	4	nsubj	_	Gloss=3SG
2	pa	pa	ADV	_	Polarity=Neg	4	advmod	_	Gloss=NEG
3	t	te	AUX	_	Tense=Past	4	aux	_	Gloss=PAST
4	lòt	lòt	ADJ	_	_	0	root	_	Gloss=autre
5	ke	ke	SCONJ	_	_	7	case	_	Gloss=que
6	yon	yon	DET	_	Definite=Ind|Number=Sing|PronType=Art	7	det	_	Gloss=un
7	enkoni	enkoni	NOUN	_	_	4	obl:arg	_	Gloss=inconnu
8	ki	ki	PRON	_	PronType=Rel	12	nsubj	_	Gloss=qui
9	te	te	AUX	_	Tense=Past	12	aux	_	Gloss=PAST
10	nan	nan	ADP	_	_	12	case	_	Gloss=dans
11	dezyèm	dezyèm	ADJ	_	_	12	amod	_	Gloss=deuxième
12	ane	ane	NOUN	_	_	7	acl:relcl	_	Gloss=année
13	a	la	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	Gloss=le|SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 obl:arg	color:blue
1	Ebyen	Ebyen	ADV	_	_	2	advmod	_	Gloss=et bien
2	mèsi	mèsi	INTJ	_	_	0	root	_	Gloss=merci
3	paske	paske	SCONJ	_	_	5	mark	_	Gloss=parce que
4	w	ou	PRON	_	Number=Sing|Person=2|PronType=Prs	5	nsubj	_	Gloss=2SG
5	refize	refize	VERB	_	_	2	advcl	_	Gloss=refuser
6	m	mwen	PRON	_	Number=Sing|Person=1|PronType=Prs	5	obj	_	Gloss=1SG|SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	m	mwen	PRON	_	Number=Sing|Person=1|PronType=Prs	11	nsubj	_	Gloss=1SG
9	pa	pa	ADV	_	Polarity=Neg	11	advmod	_	Gloss=NEG|SpaceAfter=No
10	t	te	AUX	_	Tense=Past	11	aux	_	Gloss=PAST|wordform=pat
11	atann	atann	VERB	_	_	5	acl:relcl	_	Gloss=attendre
12	a	a	ADP	_	_	13	case	_	Gloss=à
13	sa	sa	PRON	_	Number=Sing|PronType=Dem	11	obl:arg	_	Gloss=ça
14	non	non	DET	_	_	13	det	_	Gloss=DET|SpaceAfter=No
15	,	,	PUNCT	_	_	20	punct	_	_
16	men	men	CCONJ	_	_	20	cc	_	Gloss=mais
17	m	mwen	PRON	_	Number=Sing|Person=1|PronType=Prs	20	nsubj	_	Gloss=1SG
18	pa	pa	ADV	_	Polarity=Neg	20	advmod	_	Gloss=NEG
19	ka	ka	AUX	_	_	20	aux	_	Gloss=pouvoir
20	fòse	fòse	VERB	_	_	11	conj	_	Gloss=forcer
21	w	ou	PRON	_	Number=Sing|Person=2|PronType=Prs	20	obj	_	Gloss=2SG|SpaceAfter=No
22	.	.	PUNCT	_	_	2	punct	_	_

~~~


