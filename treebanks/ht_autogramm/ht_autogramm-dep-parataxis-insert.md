---
layout: base
title:  'Statistics of parataxis:insert in UD_Haitian_Creole-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Haitian_Creole-Autogramm: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="ht_autogramm-dep-parataxis.html">parataxis</a></tt>.

4 nodes (0%) are attached to their parents as `parataxis:insert`.

2 instances of `parataxis:insert` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.5.

The following 3 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="ht_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ht_autogramm-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="ht_autogramm-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ht_autogramm-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="ht_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ht_autogramm-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 parataxis:insert	color:blue
1	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
2	Wi	wi	INTJ	_	_	4	discourse	_	Gloss=oui|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	avanse	avanse	VERB	_	_	10	parataxis:insert	_	Gloss=avancer
5	non	non	DET	_	_	6	det	_	Gloss=DET
6	mesye	mesye	NOUN	_	_	4	vocative	_	Gloss=monsieur|SpaceAfter=No
7	,"	,"	PUNCT	_	_	4	punct	_	_
8	klas	klas	NOUN	_	_	10	nsubj	_	Gloss=classe
9	la	la	DET	_	Definite=Def|Number=Sing	8	det	_	Gloss=la
10	reponn	reponn	VERB	_	_	0	root	_	Gloss=répondre|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis:insert	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Hmm	hmm	INTJ	_	_	0	root	_	Gloss=hum|SpaceAfter=No
3	...!	...!	PUNCT	_	_	2	punct	_	_
4	li	li	PRON	_	Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	reponn	reponn	VERB	_	_	2	parataxis:insert	_	Gloss=répondre|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 parataxis:insert	color:blue
1	Biden	Biden	PROPN	_	_	6	parataxis:insert	_	Gloss=Biden|SpaceAfter=No
2	:	:	PUNCT	_	_	1	punct	_	_
3	'	'	PUNCT	_	_	6	punct	_	SpaceAfter=No
4	Etazini	Etazini	PROPN	_	_	6	nsubj	_	Gloss=États-Unis
5	Pa	pa	ADV	_	Polarity=Neg	6	advmod	_	Gloss=NEG
6	Ekate	ekate	VERB	_	_	0	root	_	Gloss=écarter
7	Posibilite	posibilite	NOUN	_	_	6	obj	_	Gloss=possibilité
8	pou	pou	ADP	_	_	9	mark	_	Gloss=pour
9	Itilize	itilize	VERB	_	_	7	acl	_	Gloss=utiliser
10	Lafòs	lafòs	NOUN	_	_	9	obj	_	Gloss=force
11	pou	pou	ADP	_	_	12	mark	_	Gloss=pour
12	Tabli	tabli	VERB	_	_	9	dep	_	Gloss=établir
13	Lapè	lapè	NOUN	_	_	12	obj	_	Gloss=paix
14	an	an	ADP	_	_	15	case	_	Gloss=en
15	Ayiti'	Ayiti'	PROPN	_	_	12	obl:mod	_	Gloss=Haïti

~~~


