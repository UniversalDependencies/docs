---
layout: base
title:  'Statistics of acl:relcl in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_alts-dep-acl.html">acl</a></tt>.

546 nodes (1%) are attached to their parents as `acl:relcl`.

546 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.67948717948718.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (258; 47% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (108; 20% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (78; 14% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (72; 13% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (15; 3% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl:relcl	color:blue
1	et	et	CCONJ	_	_	6	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	le	le	DET	_	Definite=Def	4	det	_	gold_pos=DET|prpos=Da|uppos=D
3	mesme	même	ADJ	_	_	4	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
4	jour	jour	NOUN	_	_	6	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
5	il	il	PRON	_	PronType=Prs	6	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
6	avoet	avoir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vuc|uppos=AJ
7	ung	un	DET	_	Definite=Ind	8	det	_	gold_pos=DET|prpos=Di|uppos=D
8	bouvet	bouvet	NOUN	_	_	6	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
9	qui	qui	PRON	_	PronType=Rel	11	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
10	se	se	PRON	_	PronType=Prs	11	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
11	rompyt	rompre	VERB	_	VerbForm=Fin	8	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
12	le	le	DET	_	Definite=Def	13	det	_	gold_pos=DET|prpos=Da|uppos=D
13	coll	col	NOUN	_	_	11	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
14	.	.	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	Et	et	CCONJ	_	_	4	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	sur	sur	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	ce	ce	PRON	_	PronType=Dem	4	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
4	vynt	venir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	Jammes	Jammes	PROPN	_	Number=Plur	4	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
6	Obeyr	Obeyr	PROPN	_	Number=Plur	5	flat	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
7	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
8	lequell	lequel	PRON	_	PronType=Rel	9	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
9	prynt	prendre	VERB	_	VerbForm=Fin	5	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
10	ledit	ledit	DET	_	Definite=Ind	11	det	_	gold_pos=DET|prpos=Di|uppos=D
11	drap	drap	NOUN	_	_	9	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
12	,	,	PUNCT	_	_	9	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	La	là	ADV	_	_	2	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	venés	venir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	ouyr	ouïr	VERB	_	VerbForm=Inf	2	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
4	ce	ce	PRON	_	PronType=Dem	3	obj	_	gold_pos=PRON|prpos=Pd|uppos=PRO
5	que	que	PRON	_	PronType=Rel	8	obj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
6	lesdites	ledit	DET	_	Definite=Ind	7	det	_	gold_pos=DET|prpos=Di|uppos=D
7	fames	femme	NOUN	_	Number=Plur	8	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
8	dient	dire	VERB	_	VerbForm=Fin	4	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
9	de	de	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|uppos=P
10	vous	vous	PRON	_	PronType=Prs	8	obl	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
11	,	,	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


