---
layout: base
title:  'Statistics of cop in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `cop`

This relation is universal.

495 nodes (1%) are attached to their parents as `cop`.

470 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.60606060606061.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (259; 52% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (205; 41% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (25; 5% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cop	color:blue
1	Et	et	CCONJ	_	_	4	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	aprés	après	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	il	il	PRON	_	PronType=Prs	4	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	aperceult	apercevoir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	incontinent	incontinent	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
6	estre	être	AUX	_	VerbForm=Inf	7	cop	_	gold_pos=AUX|prpos=Vun|uppos=EX
7	sain	sain	ADJ	_	_	4	ccomp	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
8	et	et	CCONJ	_	_	9	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
9	guery	guérir	VERB	_	VerbForm=Part	7	conj	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
10	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	C'	ce	PRON	PRO	PronType=Dem	4	nsubj	_	prpos=Pd
2	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	4	cop	_	join=left|prpos=Vuc
3	le	le	DET	D	Definite=Def|PronType=Art	4	det	_	prpos=Da
4	fondement	fondement	NOUN	NCS	Number=Sing	0	root	_	prpos=Nc
5	de	de	ADP	P	_	7	case	_	prpos=S
6	le	le	DET	P	Definite=Def|PronType=Art	7	det	_	prpos=Da
7	iugement	jugement	NOUN	NCS	Number=Sing	4	nmod	_	prpos=Nc|SpaceAfter=No
8	,	,	PUNCT	PON	_	4	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	C'	ce	PRON	PRO	PronType=Dem	3	nsubj	_	prpos=Pd
2	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	3	cop	_	join=left|prpos=Vuc
3	ce	ce	PRON	PRO	PronType=Dem	0	root	_	prpos=Pd
4	qui	qui	PRON	WPRO	PronType=Rel	6	nsubj	_	prpos=Pr
5	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	6	aux:pass	_	prpos=Vuc
6	dit	dire	VERB	VPP	Tense=Past|VerbForm=Part	3	acl:relcl	_	prpos=Ge
7	en	en	ADP	P	_	9	case	_	prpos=S
8	la	le	DET	D	Definite=Def	9	det	_	prpos=Da
9	loy	loi	NOUN	NCS	Number=Sing	6	obl	_	prpos=Nc|SpaceAfter=No
10	,	,	PUNCT	PON	_	9	punct	_	join=left|prpos=Fw
11	quisquis.	quisquis	NOUN	FW	_	9	flat	_	Lang=la|prpos=Xe
12	C.	codex	NOUN	FW	_	9	nmod	_	Lang=la|prpos=Xe
13	de	de	ADP	FW	_	14	case	_	Lang=la|prpos=Xe
14	postul	postulo	ADJ	FW	_	12	flat	_	Lang=la|prpos=Xe|SpaceAfter=No
15	.	.	PUNCT	PON	_	3	punct	_	join=left|prpos=Fw

~~~


