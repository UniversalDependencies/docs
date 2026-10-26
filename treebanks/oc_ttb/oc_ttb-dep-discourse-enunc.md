---
layout: base
title:  'Statistics of discourse:enunc in UD_Occitan-TTB'
udver: '2'
---

## Treebank Statistics: UD_Occitan-TTB: Relations: `discourse:enunc`

This relation is a language-specific subtype of <tt><a href="oc_ttb-dep-discourse.html">discourse</a></tt>.

129 nodes (1%) are attached to their parents as `discourse:enunc`.

129 instances of `discourse:enunc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9922480620155.

The following 4 pairs of parts of speech are connected with `discourse:enunc`: <tt><a href="oc_ttb-pos-VERB.html">VERB</a></tt>-<tt><a href="oc_ttb-pos-PART.html">PART</a></tt> (118; 91% instances), <tt><a href="oc_ttb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oc_ttb-pos-PART.html">PART</a></tt> (8; 6% instances), <tt><a href="oc_ttb-pos-ADV.html">ADV</a></tt>-<tt><a href="oc_ttb-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="oc_ttb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oc_ttb-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse:enunc	color:blue
1	Rénder	rénder	VERB	Vm	_	5	xcomp	_	Gloss=rendre
2	l'	lo	DET	Da	_	3	det	_	Gloss=le|SpaceAfter=No
3	amna	amna	NOUN	Nc	_	1	obj	_	Gloss=âme
4	que	que	PART	Rp	_	5	discourse:enunc	_	Gloss=(énonciatif)
5	va	anar	VERB	Vm	_	0	root	_	Gloss=aller|SpaceAfter=No
6	,	,	PUNCT	F	_	5	punct	_	Gloss=,
7	rénder	rénder	VERB	Vm	_	11	xcomp	_	Gloss=rendre
8	l'	lo	DET	Da	_	9	det	_	Gloss=le|SpaceAfter=No
9	amna	amna	NOUN	Nc	_	7	obj	_	Gloss=âme
10	non	non	ADV	Rp	_	11	advmod	_	Gloss=ne
11	vòu	voler	VERB	Vm	_	5	parataxis	_	Gloss=vouloir
12	pas	pas	ADV	Rg	_	11	advmod	_	Gloss=pas|SpaceAfter=No
13	.	.	PUNCT	F	_	12	punct	_	Gloss=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 discourse:enunc	color:blue
1	E	e	CCONJ	Cc	_	12	cc	_	Gloss=et
2	fin	fin	NOUN	Nc	_	12	obl	_	Gloss=fin|MWE=fin_finala
3	finala	final	ADJ	Af	_	2	amod	_	Gloss=final|SpaceAfter=No
4	,	,	PUNCT	F	_	3	punct	_	Gloss=,
5	Casimir	Casimir	PROPN	Np	_	12	nsubj	_	Gloss=Casimir
6	qu'	que	PART	Rp	_	12	discourse:enunc	_	Gloss=(énonciatif)|SpaceAfter=No
7	ei	estar	AUX	Vm	_	12	cop	_	Gloss=être
8	lhèu	lhèu	ADV	Rg	_	12	advmod	_	Gloss=bientôt
9	bèthlèu	bèthlèu	ADV	Rg	_	12	advmod	_	Gloss=peut-être
10	a	a	ADP	Sp	_	12	case	_	Gloss=à
11	lo	lo	DET	Da	_	12	det	_	Gloss=le
12	cap	cap	NOUN	Nc	_	0	root	_	Gloss=bout
13	...	...	PUNCT	F	_	12	punct	_	Gloss=…|SpaceAfter=No
14	"	"	PUNCT	F	_	12	punct	_	Gloss="

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse:enunc	color:blue
1	Parlaretz	parlar	VERB	Vm	_	0	root	_	Gloss=_
2	b'	b'	PART	X	_	3	discourse:enunc	_	Gloss=_|SpaceAfter=No
3	aicí	aicí	ADV	Rg	_	1	advmod	_	Gloss=_
4	tan	tan	ADV	Rq	ExtPos=SCONJ	7	mark	_	Gloss=_|MWE=tan_plan_coma
5	plan	plan	ADV	Rg	_	4	fixed	_	Gloss=_
6	coma	coma	SCONJ	Cs	_	4	fixed	_	Gloss=_
7	defòra	defòra	ADV	Rg	_	1	advcl	_	Gloss=_|SpaceAfter=No
8	.	.	PUNCT	F	_	7	punct	_	Gloss=_

~~~


