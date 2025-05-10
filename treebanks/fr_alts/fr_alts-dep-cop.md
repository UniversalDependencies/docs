---
layout: base
title:  'Statistics of cop in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `cop`

This relation is universal.

233 nodes (1%) are attached to their parents as `cop`.

221 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.73390557939914.

The following 3 pairs of parts of speech are connected with `cop`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (121; 52% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (93; 40% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (19; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Je	je	PRON	_	PronType=Prs	5	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
2	suys	être	AUX	_	VerbForm=Fin	5	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
3	ung	un	DET	_	Definite=Ind	5	det	_	gold_pos=DET|prpos=Di|uppos=D
4	paupvre	pauvre	ADJ	_	_	5	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
5	louagier	louagier	NOUN	_	_	0	root	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
6	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 cop	color:blue
1	Lesquelles	lequel	DET	_	_	2	det	_	gold_pos=DET|prpos=Dr|uppos=WD
2	fames	femme	NOUN	_	Number=Plur	4	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
3	luy	il	PRON	_	PronType=Prs	4	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	demandoient	demander	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	que	que	PRON	_	PronType=Rel	4	ccomp	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
6	c'	ce	PRON	_	PronType=Dem	5	nsubj	_	gold_pos=PRON|prpos=Pd|SpaceAfter=No|uppos=PRO
7	est	être	AUX	_	VerbForm=Fin	5	cop	_	gold_pos=AUX|join=left|prpos=Vuc|uppos=EJ
8	que	que	PRON	_	PronType=Rel	10	obj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
9	elle	il	PRON	_	PronType=Prs	10	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
10	avoet	avoir	VERB	_	VerbForm=Fin	5	acl:relcl	_	gold_pos=VERB|prpos=Vuc|SpaceAfter=No|uppos=AJ
11	,	,	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


