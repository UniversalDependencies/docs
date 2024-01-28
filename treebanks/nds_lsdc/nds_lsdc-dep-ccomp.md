---
layout: base
title:  'Statistics of ccomp in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `ccomp`

This relation is universal.

42 nodes (1%) are attached to their parents as `ccomp`.

38 instances of `ccomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.92857142857143.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (30; 71% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (5; 12% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 ccomp	color:blue
1	Hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	lemma_gml=hê¹
2	vorwündert	vorwunderen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	lemma_gml=vorwunderen
3	sik	sik	PRON	_	Case=Acc,Dat|Person=3|PronType=Prs|Reflex=Yes	2	expl:pv	_	lemma_gml=sik¹
4	un	un	CCONJ	_	_	5	cc	_	lemma_gml=unde²
5	vrågt	vrågen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	lemma_gml=vrâgen
6	den	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	lemma_gml=dê¹
7	waerd	waerd	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	5	iobj	_	lemma_gml=wērt¹|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	hwat	wat	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Int	11	obj	_	lemma_gml=wat(te)³
10	dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	lemma_gml=dat
11	bedüdde	bedüden	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	ccomp	_	lemma_gml=bedü̂den|SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 ccomp	color:blue
1	Dårup	dårup	ADV	_	_	2	advmod	_	lemma_gml=dârup
2	segden	seggen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	lemma_gml=seggen
3	de	de	DET	_	Case=Nom|Definite=Def|Number=Plur|PronType=Art	4	det	_	lemma_gml=dê
4	anderen	ander	PRON	_	Case=Nom|Number=Plur|PronType=Ind	2	nsubj	_	lemma_gml=ander
5	teager	teagen	ADP	_	AdpType=Prep	6	case	_	lemma_gml=tēgen
6	Josua	Josua	PROPN	_	Number=Sing	2	obl	_	lemma_gml=josua|SpaceAfter=No
7	:	:	PUNCT	_	_	12	punct	_	_
8	»	»	PUNCT	_	_	12	punct	_	SpaceAfter=No
9	Wy	wy	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	lemma_gml=wî
10	wellet	willen	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres	12	aux	_	lemma_gml=willen
11	dyne	dyn	DET	_	Case=Nom|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	12	det	_	lemma_gml=dîn
12	knechte	knecht	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	2	ccomp	_	lemma_gml=knecht
13	syn	weasen	AUX	_	VerbForm=Inf	12	cop	_	lemma_gml=wēsen
14	un	un	CCONJ	_	_	16	cc	_	lemma_gml=unde
15	dy	du	PRON	_	Case=Acc,Dat|Number=Sing|Person=2|PronType=Prs	16	obj	_	lemma_gml=dû
16	underdån	underdån	ADJ	_	Degree=Pos	12	conj	_	lemma_gml=underdân
17	syn	weasen	AUX	_	VerbForm=Inf	16	cop	_	lemma_gml=wēsen|SpaceAfter=No
18	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
19	«	«	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 16 ccomp	color:blue
1	De	de	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	lemma_gml=dê
2	seilmaker	seilmaker	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	lemma_gml=sêilmāker
3	snupper	snupperen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma_gml=snopperen
4	bannig	bannig	ADJ	_	Degree=Pos	3	advmod	_	lemma_gml=bannich
5	in	in	ADP	_	AdpType=Prep	7	case	_	lemma_gml=in
6	de	de	DET	_	Case=Acc,Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	lemma_gml=dê
7	luft	lucht	NOUN	_	Case=Acc,Dat|Gender=Fem|Number=Sing	3	obl	_	lemma_gml=luft
8	rum	herüm	ADV	_	_	3	compound:prt	_	lemma_gml=hērümme
9	un	un	CCONJ	_	_	10	cc	_	lemma_gml=unde
10	wus	weaten	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	conj	_	lemma_gml=wēten
11	eyrst	eyrst	ADV	_	_	10	advmod	_	lemma_gml=êrst
12	gaar	gaar	ADV	_	_	10	advmod	_	lemma_gml=gār
13	nich	nich	PART	_	PartType=Neg	10	advmod	_	lemma_gml=nicht|SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	wat	wat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	16	nsubj	_	lemma_gml=watte
16	lous	lous	ADV	_	_	10	ccomp	_	lemma_gml=lôs
17	wöör	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	16	cop	_	lemma_gml=wēsen|SpaceAfter=No
18	.	.	PUNCT	_	_	3	punct	_	_

~~~


