---
layout: base
title:  'Statistics of expl:pv in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-expl.html">expl</a></tt>.

2161 nodes (1%) are attached to their parents as `expl:pv`.

1597 instances of `expl:pv` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.05552984729292.

The following 5 pairs of parts of speech are connected with `expl:pv`: <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (2133; 99% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (20; 1% instances), <tt><a href="hr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 expl:pv	color:blue
1	Srbija	Srbija	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
2	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	6	expl:pv	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	4	punct	_	_
4	istodobno	istodobno	ADV	Rgp	Degree=Pos	6	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	_
6	našla	naći	VERB	Vmp-sf	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	u	u	ADP	Sl	Case=Loc	9	case	_	_
8	diplomatskim	diplomatski	ADJ	Agpfply	Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	_
9	neprilikama	neprilika	NOUN	Ncfpl	Case=Loc|Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Poslije	poslije	ADP	Sg	Case=Gen	2	case	_	_
2	0:03	0:03	NUM	Mdm	NumType=Mult	5	nummod	_	_
3	bilo	biti	AUX	Vap-sn	Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	5	aux	_	_
4	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
5	teško	teško	ADV	Rgp	Degree=Pos	0	root	_	_
6	vraćati	vraćati	VERB	Vmn	VerbForm=Inf	5	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	10	punct	_	_
8	a	a	CCONJ	Cc	_	10	cc	_	_
9	kamoli	kamoli	ADV	Rgp	Degree=Pos	10	advmod	_	_
10	pobijediti	pobijediti	VERB	Vmn	VerbForm=Inf	5	conj	_	orig_deprel=nsubj|SpaceAfter=No
11	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 expl:pv	color:blue
1	Upitan	upitati	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	18	parataxis	_	_
2	osjeća	osjećati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
3	li	li	PART	Qq	_	2	mark	_	_
4	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	2	expl:pv	_	_
5	kao	kao	SCONJ	Cs	_	6	case	_	_
6	upravitelj	upravitelj	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	2	obl	_	_
7	hotela	hotel	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
8	kad	kad	ADV	Rgp	Degree=Pos|PronType=Int,Rel	11	advmod	_	_
9	su	biti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	u	u	ADP	Sl	Case=Loc	11	case	_	_
11	pitanju	pitanje	NOUN	Ncnsl	Case=Loc|Gender=Neut|Number=Sing	2	advcl	_	_
12	predsjednici	predsjednik	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	_
13	vlada	vlada	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	12	nmod	_	SpaceAfter=No
14	,	,	PUNCT	Z	_	1	punct	_	_
15	Van	Van	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	16	det	_	_
16	Rompuy	Rompuy	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	_
17	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	18	expl:pv	_	_
18	nakostriješi	nakostriješiti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
19	.	.	PUNCT	Z	_	18	punct	_	_

~~~


