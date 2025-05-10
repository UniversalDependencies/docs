---
layout: base
title:  'Statistics of nsubj:outer in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sv_pud-dep-nsubj-pass.html">nsubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:outer`.

4 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.75.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (2; 50% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 nsubj:outer	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	11	nsubj:outer	11:nsubj:outer	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
3	för	för	ADP	PP	_	11	mark	11:mark	_
4	att	att	SCONJ	SN	_	11	mark	11:mark	_
5	varje	varje	DET	DT|UTR/NEU|SIN|IND	Definite=Ind|Number=Sing|PronType=Tot	6	det	6:det	_
6	mirakel	mirakel	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	11	nsubj	11:nsubj	_
7	och	och	CCONJ	KN	_	10	cc	10:cc	_
8	varje	varje	DET	DT|UTR/NEU|SIN|IND	Definite=Ind|Number=Sing|PronType=Tot	10	det	10:det	_
9	specialiserat	specialiserad	ADJ	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	10	amod	10:amod	_
10	distrikt	distrikt	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	conj	6:conj:och|11:nsubj	_
11	tar	ta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	upp	upp	ADV	PL	_	11	compound:prt	11:compound:prt	_
13	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	15	det	15:det	_
14	helt	hel	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	15	amod	15:amod	_
15	fält	fält	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	11	obj	11:obj	SpaceAfter=No
16	.	.	PUNCT	MAD	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 nsubj:outer	color:blue
1	Federico	Federico	PROPN	PM|NOM	Case=Nom	3	nsubj	3:nsubj	_
2	Fellini	Fellini	PROPN	PM|NOM	Case=Nom	1	flat:name	1:flat:name	_
3	sade	säga	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	5	det	5:det	_
5	gång	gång	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	obl	3:obl	SpaceAfter=No
6	:	:	PUNCT	MID	_	3	punct	3:punct	_
7	”	”	PUNCT	PAD	_	12	punct	12:punct	SpaceAfter=No
8	Clownen	clown	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	12	nsubj:outer	12:nsubj:outer	_
9	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
10	för	för	ADP	PP	_	11	case	11:case	_
11	mänskligheten	mänsklighet	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	12	obl	12:obl:för	_
12	vad	vad	PRON	HP|NEU|SIN|IND	Definite=Ind|Number=Sing|PronType=Int,Rel	3	parataxis	3:parataxis	_
13	skuggan	skugga	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	12	nsubj	12:nsubj	_
14	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
15	för	för	ADP	PP	_	16	case	16:case	_
16	människan	människa	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	12	obl	12:obl:för	SpaceAfter=No
17	”	”	PUNCT	PAD	_	12	punct	12:punct	SpaceAfter=No
18	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	Hennes	hon	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	_
2	anledning	anledning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	nsubj:outer	6:nsubj:outer	_
3	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
4	att	att	SCONJ	SN	_	6	mark	6:mark	_
5	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	6	nsubj	6:nsubj	_
6	ger	ge	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	otillräckligt	otillräcklig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	8	amod	8:amod	_
8	skydd	skydd	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	obj	6:obj	_
9	för	för	ADP	PP	_	11	case	11:case	_
10	amerikanska	amerikansk	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	11	amod	11:amod	_
11	arbetare	arbetare	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	8	nmod	8:nmod:för	_
12	vilkas	vilkas	PRON	HS|DEF	Definite=Def|Poss=Yes|PronType=Int,Rel	13	nmod:poss	13:nmod:poss	_
13	jobb	jobb	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	18	obj	18:obj	_
14	och	och	CCONJ	KN	_	15	cc	15:cc	_
15	levnadsstandard	levnadsstandard	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	13	conj	13:conj:och|18:obj	_
16	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	18	nsubj	18:nsubj	_
17	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	18	aux	18:aux	_
18	skada	skada	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	acl:relcl	11:acl:relcl	SpaceAfter=No
19	.	.	PUNCT	MAD	_	6	punct	6:punct	_

~~~


