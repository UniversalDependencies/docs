---
layout: base
title:  'Statistics of nsubj in UD_Romanian-ArT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-ArT: Relations: `nsubj`

This relation is universal.

41 nodes (7%) are attached to their parents as `nsubj`.

23 instances of `nsubj` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63414634146341.

The following 5 pairs of parts of speech are connected with `nsubj`: <tt><a href="ro_art-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_art-pos-NOUN.html">NOUN</a></tt> (23; 56% instances), <tt><a href="ro_art-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_art-pos-PRON.html">PRON</a></tt> (15; 37% instances), <tt><a href="ro_art-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_art-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ro_art-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_art-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ro_art-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_art-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Ĺepurle	lepure	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
2	ansare	ansar	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	d-	di	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	SpaceAfter=No
4	iu	iu	ADV	Rw	PronType=Int,Rel	7	advmod	_	_
5	nu	nu	PART	Qz	Polarity=Neg	7	advmod	_	_
6	te-	tini	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	7	expl:pv	_	SpaceAfter=No
7	aştepţ	așteptu	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	advcl	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj	color:blue
1	Nu	nu	PART	Qz	Polarity=Neg	3	advmod	_	_
2	ti	tini	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	3	obj	_	_
3	cârteaşĉe	cârtescu	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	vârnu	vârnu	PRON	Pz3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	10	punct	_	_
6	că	că	SCONJ	Csssp	Polarity=Pos	10	mark	_	_
7	va	voi	AUX	Va--3p	Number=Plur|Person=3	10	aux	_	_
8	lă	el'	PRON	Pp3-pd--------w	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Weak	10	iobj	_	_
9	si	si	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	10	expl:impers	_	_
10	pară	par	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	_
11	că	că	SCONJ	Csssp	Polarity=Pos	12	mark	_	_
12	escu	hiu	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	csubj	_	_
13	mine	mini	PRON	Pp1-sn--------s	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	12	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	Tora	tora	ADV	Rgp	Degree=Pos	4	advmod	_	_
2	amiroańa	amiroańe	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	_
3	era	hiu	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
4	greauă	greu	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	diznou	diznou	ADV	Rgp	Degree=Pos	4	advmod	_	_
6	ş-	şi	CCONJ	Crssp	Polarity=Pos	9	cc	_	SpaceAfter=No
7	amirălui	amiră	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	9	iobj	_	_
8	îi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	9	expl	_	_
9	vińe	ýin	VERB	Vmii3	Mood=Ind|Person=3|Tense=Imp|VerbForm=Fin	4	conj	_	_
10	sa	să	PART	Qs	Mood=Sub	12	mark	_	_
11	z-	si	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	12	expl:pv	_	SpaceAfter=No
12	duca	duc	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	9	csubj	_	_
13	tu	tu	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	polim	polim	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	12	obl	_	SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


