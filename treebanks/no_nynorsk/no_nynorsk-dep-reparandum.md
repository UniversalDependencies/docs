---
layout: base
title:  'Statistics of reparandum in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `reparandum`

This relation is universal.

35 nodes (0%) are attached to their parents as `reparandum`.

25 instances of `reparandum` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.85714285714286.

The following 14 pairs of parts of speech are connected with `reparandum`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt> (6; 17% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (6; 17% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-SCONJ.html">SCONJ</a></tt> (4; 11% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (3; 9% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt> (2; 6% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 reparandum	color:blue
1	Studenten	student	NOUN	subst	Gender=Masc	2	nsubj	_	_
2	er	vere	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	av	av	ADP	prep	_	2	reparandum	_	_
4	opphavleg	opphavleg	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	2	advmod	_	_
5	av	av	ADP	prep	_	7	case	_	_
6	utanlandsk	utanlandsk	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	7	amod	_	_
7	opphav	opphav	NOUN	subst	Definite=Ind|Gender=Neut	2	obl	_	SpaceAfter=No
8	.	$.	PUNCT	clb	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 reparandum	color:blue
1	I	i	ADP	prep	_	3	case	_	_
2	så	så	ADV	adv	_	3	advmod	_	_
3	fall	fall	NOUN	subst	Definite=Ind|Gender=Neut	4	obl	_	_
4	blir	bli	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	575	575	NUM	det	Number=Plur|NumType=Card	6	nummod	_	_
6	årsverk	årsverk	NOUN	subst	Definite=Ind|Gender=Neut|Number=Plur	4	nsubj	_	_
7	blir	bli	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	reparandum	_	_
8	borte	borte	ADP	prep	_	4	xcomp	_	SpaceAfter=No
9	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 21 reparandum	color:blue
1	Ho	ho	PRON	pron	Case=Nom|Gender=Fem|Person=3|PronType=Prs	3	nsubj	_	_
2	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	lei	lei	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	0	root	_	_
4	for	for	ADP	prep	_	9	case	_	_
5	at	at	SCONJ	sbu	_	9	mark	_	_
6	ho	ho	PRON	pron	Case=Nom|Gender=Fem|Person=3|PronType=Prs	9	nsubj	_	_
7	ikkje	ikkje	ADV	adv	_	9	advmod	_	_
8	var	vere	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	9	cop	_	_
9	merksam	merksam	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	3	advcl	_	_
10	på	på	ADP	prep	_	11	case	_	_
11	paragrafen	paragraf	NOUN	subst	Gender=Masc	9	obl	_	SpaceAfter=No
12	,	$,	PUNCT	<komma>	_	14	punct	_	_
13	og	og	CCONJ	konj	_	14	cc	_	_
14	opplyser	opplyse	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	3	conj	_	_
15	at	at	SCONJ	sbu	_	24	mark	_	_
16	vedtaket	vedtak	NOUN	subst	Gender=Neut	24	nsubj	_	_
17	som	som	SCONJ	sbu	_	19	mark	_	_
18	vart	verte	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	19	aux:pass	_	_
19	gjort	gjere	ADJ	adj	Definite=Ind|Gender=Neut|VerbForm=Part	16	acl:relcl	_	_
20	ikkje	ikkje	ADV	adv	_	22	advmod	_	_
21	er	vere	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	3	reparandum	_	_
22	lenger	lenge	ADJ	adj	Degree=Cmp	24	advmod	_	_
23	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	24	cop	_	_
24	gyldig	gyldig	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	14	ccomp	_	SpaceAfter=No
25	.	$.	PUNCT	clb	_	3	punct	_	_

~~~


