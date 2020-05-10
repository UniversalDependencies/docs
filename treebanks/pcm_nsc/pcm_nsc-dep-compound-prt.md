---
layout: base
title:  'Statistics of compound:prt in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="pcm_nsc-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="pcm_nsc-dep-compound-svc.html">compound:svc</a></tt>.

341 nodes (0%) are attached to their parents as `compound:prt`.

341 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31671554252199.

The following 9 pairs of parts of speech are connected with `compound:prt`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (330; 97% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 compound:prt	color:blue
1	#	#	PUNCT	_	_	4	punct	_	AlignBegin=214469|AlignEnd=215220|Gloss=PUNCT
2	make	make	AUX	_	Mood=Opt	4	aux	_	AlignBegin=215220|AlignEnd=215310|Gloss=SBJV
3	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	AlignBegin=215310|AlignEnd=215536|Gloss=NOM.PL.3
4	keep	keep	VERB	_	_	0	root	_	AlignBegin=215536|AlignEnd=215716|Gloss=keep
5	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	obj	_	AlignBegin=215716|AlignEnd=215857|Gloss=ACC.SG.3
6	{	{	PUNCT	_	_	7	punct	_	AlignBegin=215857|AlignEnd=215887|Gloss=PUNCT
7	up	up	ADP	_	_	4	compound:prt	_	AlignBegin=215887|AlignEnd=215996|Gloss=up
8	|r	|r	PUNCT	_	_	10	punct	_	AlignBegin=215996|AlignEnd=216026|Gloss=PUNCT
9	#	#	PUNCT	_	_	10	punct	_	AlignBegin=216026|AlignEnd=216332|Gloss=PUNCT
10	up	up	ADP	_	_	7	compound:redup	_	AlignBegin=216332|AlignEnd=216669|Gloss=up
11	}	}	PUNCT	_	_	7	punct	_	AlignBegin=216669|AlignEnd=216699|Gloss=PUNCT
12	as	as	ADP	_	_	14	mark	_	AlignBegin=216699|AlignEnd=216957|Gloss=as
13	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	AlignBegin=216957|AlignEnd=217042|Gloss=NOM.SG.3
14	dey	dey	VERB	_	VerbType=Cop	4	advcl	_	AlignBegin=217042|AlignEnd=217211|Gloss=be
15	like	like	ADP	_	_	16	case	_	AlignBegin=217211|AlignEnd=217429|Gloss=like
16	dat	dat	PRON	_	Number=Sing|PronType=Dem	14	xcomp	_	AlignBegin=217429|AlignEnd=217586|Gloss=SG.DEM
17	//	//	PUNCT	_	_	4	punct	_	AlignBegin=217586|AlignEnd=217616|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 compound:prt	color:blue
1	#	#	PUNCT	_	_	12	punct	_	AlignBegin=230050|AlignEnd=230710|Gloss=PUNCT
2	school	school	NOUN	_	_	3	nsubj	_	AlignBegin=230710|AlignEnd=231090|Gloss=school
3	dey	dey	VERB	_	VerbType=Cop	12	csubj	_	AlignBegin=231090|AlignEnd=231160|Gloss=be
4	only	only	ADJ	_	_	8	advcl	_	AlignBegin=231160|AlignEnd=231328|Gloss=only
5	wey	when	SCONJ	_	_	8	mark	_	AlignBegin=231328|AlignEnd=231477|Gloss=when
6	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=231477|AlignEnd=231590|Gloss=NOM.PL.1
7	dey	dey	AUX	_	Aspect=Imp	8	aux	_	AlignBegin=231590|AlignEnd=231710|Gloss=IPFV
8	go	go	VERB	_	_	3	ccomp	_	AlignBegin=231710|AlignEnd=231960|Gloss=go
9	#	#	PUNCT	_	_	12	punct	_	AlignBegin=231960|AlignEnd=232410|Gloss=PUNCT
10	no	no	PART	_	Polarity=Neg	12	advmod	_	AlignBegin=232410|AlignEnd=232560|Gloss=NEG
11	fit	fit	AUX	_	Mood=Pot	12	aux	_	AlignBegin=232560|AlignEnd=232680|Gloss=ABIL
12	make	make	VERB	_	_	0	root	_	AlignBegin=232680|AlignEnd=232870|Gloss=make
13	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	12	obj	_	AlignBegin=232870|AlignEnd=233000|Gloss=ACC.PL.1
14	become	become	VERB	_	_	12	xcomp	_	AlignBegin=233000|AlignEnd=233280|Gloss=become
15	better	beta	ADJ	_	Degree=Cmp	16	amod	_	AlignBegin=233280|AlignEnd=233490|Gloss=good.CMPR
16	people	people	NOUN	_	Number=Plur	14	xcomp	_	AlignBegin=233490|AlignEnd=233730|Gloss=people.PL
17	because	because	SCONJ	_	_	22	mark	_	AlignBegin=233730|AlignEnd=233975|Gloss=because
18	dis	dis	DET	_	Number=Sing|PronType=Dem	19	det	_	AlignBegin=233975|AlignEnd=234111|Gloss=SG.PROX.DEM
19	school	school	NOUN	_	_	22	nsubj	_	AlignBegin=234111|AlignEnd=234280|Gloss=school
20	na	na	AUX	_	PartType=Cop	22	cop	_	AlignBegin=234280|AlignEnd=234420|Gloss=be
21	{	{	PUNCT	_	_	22	punct	_	AlignBegin=234420|AlignEnd=234450|Gloss=PUNCT
22	garbage	garbage	NOUN	_	_	14	advcl	_	AlignBegin=234450|AlignEnd=234840|Gloss=garbage
23	in	in	ADP	_	_	22	compound:prt	_	AlignBegin=234840|AlignEnd=235000|Gloss=in
24	|c	|c	PUNCT	_	_	25	punct	_	AlignBegin=235000|AlignEnd=235030|Gloss=PUNCT
25	garbage	garbage	NOUN	_	_	22	conj	_	AlignBegin=235030|AlignEnd=235360|Gloss=garbage
26	out	out	ADP	_	_	25	compound:prt	_	AlignBegin=235360|AlignEnd=235650|Gloss=out
27	}	}	PUNCT	_	_	22	punct	_	AlignBegin=235650|AlignEnd=235680|Gloss=PUNCT
28	//	//	PUNCT	_	_	12	punct	_	AlignBegin=235650|AlignEnd=235680|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 18 compound:prt	color:blue
1	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	AlignBegin=322166|AlignEnd=322284|Gloss=NOM.PL.3
2	leave	leave	VERB	_	_	0	root	_	AlignBegin=322284|AlignEnd=322712|Gloss=leave
3	religious	religious	ADJ	_	_	2	obj	_	AlignBegin=322712|AlignEnd=323370|Gloss=religious
4	#	#	PUNCT	_	_	5	punct	_	AlignBegin=323370|AlignEnd=323570|Gloss=PUNCT
5	aside	aside	ADV	_	_	2	compound:prt	_	AlignBegin=323570|AlignEnd=323880|Gloss=aside
6	//=	//=	PUNCT	_	_	7	punct	_	AlignBegin=323880|AlignEnd=323910|Gloss=PUNCT
7	leave	leave	VERB	_	_	2	parataxis:conj	_	AlignBegin=323910|AlignEnd=324240|Gloss=leave
8	#	#	PUNCT	_	_	11	punct	_	AlignBegin=324240|AlignEnd=324960|Gloss=PUNCT
9	(	(	PUNCT	_	_	11	punct	_	AlignBegin=324890|AlignEnd=324960|Gloss=PUNCT
10	ehn	ehn	INTJ	_	_	11	discourse	_	AlignBegin=324960|AlignEnd=325550|Gloss=ehn
11	wetin	wetin	PRON	_	PronType=Int	7	parataxis:parenth	_	AlignBegin=325550|AlignEnd=325790|Gloss=what.Q
12	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	13	nsubj	_	AlignBegin=325790|AlignEnd=325887|Gloss=NOM.PL.3
13	call	call	VERB	_	_	11	advcl:cleft	_	AlignBegin=325887|AlignEnd=326060|Gloss=call
14	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	13	obj	_	AlignBegin=326060|AlignEnd=326214|Gloss=ACC.SG.3
15	?//	?//	PUNCT	_	_	11	punct	_	AlignBegin=326214|AlignEnd=326244|Gloss=PUNCT
16	)	)	PUNCT	_	_	11	punct	_	AlignBegin=326214|AlignEnd=326244|Gloss=PUNCT
17	ethnicity	ethnicity	NOUN	_	_	7	obj	_	AlignBegin=326244|AlignEnd=326750|Gloss=ethnicity
18	aside	aside	ADV	_	_	7	compound:prt	_	AlignBegin=326750|AlignEnd=327100|Gloss=aside
19	//	//	PUNCT	_	_	2	punct	_	AlignBegin=327100|AlignEnd=327208|Gloss=PUNCT

~~~


