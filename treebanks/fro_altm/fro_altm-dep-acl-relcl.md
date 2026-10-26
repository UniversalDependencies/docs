---
layout: base
title:  'Statistics of acl:relcl in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fro_altm-dep-acl.html">acl</a></tt>.

251 nodes (2%) are attached to their parents as `acl:relcl`.

251 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.60956175298805.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (151; 60% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (76; 30% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (14; 6% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 acl:relcl	color:blue
1	Item	item	ADV	_	_	4	advmod	_	prpos=Rg|SpaceAfter=No|uppos=ADV
2	,	,	PUNCT	_	_	1	punct	_	join=left|prpos=Fw|uppos=PON
3	il	il	PRON	_	PronType=Prs	4	expl	_	prpos=Pp|uppos=PRO
4	a	avoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vuc|uppos=AJ
5	cas	cas	NOUN	_	Number=Sing	4	obj	_	prpos=Nc|uppos=NCS
6	en	en	ADP	_	_	7	case	_	prpos=S|uppos=P
7	quoi	quoi	PRON	_	PronType=Rel	10	obl	_	prpos=Pr|uppos=WPRO
8	il	il	PRON	_	PronType=Prs	10	expl	_	prpos=Pp|uppos=PRO
9	n'	ne	ADV	_	Polarity=Neg	10	advmod	_	prpos=Rp|uppos=NEG
10	a	avoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	5	acl:relcl	_	prpos=Vuc|uppos=AJ
11	point	point	ADV	_	Polarity=Neg	10	advmod	_	prpos=Rg|uppos=ADVNEG
12	de	de	DET	_	Definite=Ind	13	det	_	prpos=Dn|uppos=D
13	respit	répit	NOUN	_	Number=Sing	10	obj	_	prpos=Nc|SpaceAfter=No|uppos=NCS
14	,	,	PUNCT	_	_	4	punct	_	join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl:relcl	color:blue
1	Adonc	adonc	ADV	_	_	2	advmod	_	prpos=Rg|uppos=ADV
2	voult	vouloir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=MDJ
3	le	le	DET	_	Definite=Def|PronType=Art	4	det	_	prpos=Da|uppos=D
4	suitour	suiteur	NOUN	_	Number=Sing	2	nsubj	_	prpos=Nc|uppos=NCS
5	avoir	avoir	AUX	_	VerbForm=Inf	6	aux	_	prpos=Vun|uppos=AX
6	ataint	atteindre	VERB	_	Tense=Past|VerbForm=Part	2	xcomp	_	prpos=Ge|uppos=VPP
7	ce	ce	PRON	_	PronType=Dem	6	obj	_	prpos=Pd|uppos=PRO
8	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	prpos=Pr|uppos=WPRO
9	pendoit	pendre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	7	acl:relcl	_	prpos=Vvc|uppos=VJ
10	a	à	ADP	_	_	12	case	_	prpos=S|uppos=P
11	le	le	DET	_	Definite=Def|PronType=Art	12	det	_	prpos=Da|uppos=D
12	brief	bref	NOUN	_	Number=Sing	9	obl	_	prpos=Nc|uppos=NCS

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 acl:relcl	color:blue
1	Le	le	DET	_	Definite=Def|PronType=Art	2	det	_	prpos=Da|uppos=D
2	justicié	justicié	NOUN	_	Number=Sing	3	nsubj	_	prpos=Nc|uppos=NCS
3	mist	mettre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	gage	gage	NOUN	_	Number=Sing	3	obj	_	prpos=Nc|uppos=NCS
5	et	et	CCONJ	_	_	6	cc	_	prpos=Cc|uppos=CONJO
6	plege	pleige	NOUN	_	Number=Sing	4	conj	_	prpos=Nc|uppos=NCS
7	que	que	SCONJ	_	_	10	mark	_	prpos=Cs|uppos=CONJS
8	eus	il	PRON	_	PronType=Prs	10	nsubj	_	prpos=Pp|uppos=PRO
9	avoient	avoir	AUX	_	Number=Plur|Person=3|VerbForm=Fin	10	aux	_	prpos=Vuc|uppos=AJ
10	justicié	justicier	VERB	_	Tense=Past|VerbForm=Part	4	acl	_	prpos=Ge|uppos=VPP
11	la	là	ADV	_	_	10	advmod	_	prpos=Rg|uppos=ADV
12	ou	où	PRON	_	PronType=Rel	15	obl	_	prpos=Pr|uppos=WPRO
13	il	il	PRON	_	PronType=Prs	15	nsubj	_	prpos=Pp|uppos=PRO
14	ne	ne	ADV	_	Polarity=Neg	15	advmod	_	prpos=Rp|uppos=NEG
15	pouaient	pouvoir	VERB	_	Number=Plur|Person=3|VerbForm=Fin	11	acl:relcl	_	prpos=Vvc|uppos=VJ
16	ne	ni	CCONJ	_	_	18	cc	_	prpos=Cc|uppos=CONJO
17	ne	ne	ADV	_	Polarity=Neg	18	advmod	_	prpos=Rp|uppos=NEG
18	devoient	devoir	VERB	_	Number=Plur|Person=3|VerbForm=Fin	15	conj	_	prpos=Vvc|SpaceAfter=No|uppos=VJ
19	;	;	PUNCT	_	_	3	punct	_	join=left|prpos=Fw|uppos=PON

~~~


