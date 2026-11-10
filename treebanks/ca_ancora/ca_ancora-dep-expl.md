---
layout: base
title:  'Statistics of expl in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `expl`

This relation is universal.
There are 3 language-specific subtypes of `expl`: <tt><a href="ca_ancora-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ca_ancora-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ca_ancora-dep-expl-pv.html">expl:pv</a></tt>.

175 nodes (0%) are attached to their parents as `expl`.

161 instances of `expl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.68.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (172; 98% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-DET.html">DET</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 expl	color:blue
1	Pel	pel	ADP	sps00	ExtPos=ADP	6	case	6:case	MWE=Pel_que_fa_a|MWEPOS=ADP
2	que	que	SCONJ	_	_	1	fixed	1:fixed	_
3	fa	fa	NOUN	_	_	1	fixed	1:fixed	_
4	a	a	ADP	_	_	1	fixed	1:fixed	_
5	les	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	6:det	_
6	seccions	secció	NOUN	ncfp000	Gender=Fem|Number=Plur	11	obl	11:obl	SpaceAfter=No
7	,	,	PUNCT	fc	PunctType=Comm	6	punct	6:punct	_
8	se	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	11	obj	11:obj	_
9	n'	en	PRON	pp3cn000	Case=Gen|Person=3|PronType=Prs	11	expl	11:expl	SpaceAfter=No|ArgTem=arg1:pat
10	han	haver	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	11:aux	_
11	creat	crear	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
12	de	de	ADP	sps00	_	13	case	13:case	_
13	noves	nou	ADJ	aq0fp0	Gender=Fem|Number=Plur	11	nsubj	11:nsubj	SpaceAfter=No|ArgTem=arg1:pat
14	.	.	PUNCT	fp	PunctType=Peri	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 expl	color:blue
1	Carod	Carod	PROPN	np0000p	_	4	nsubj	4:nsubj	ArgTem=arg0:agt|Entity=(CESSCATA2001100339886c1-organization-1-CorefType:ident,gstype:spec)
2	també	també	ADV	rg	_	4	advmod	4:advmod	_
3	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	avançat	avançar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
5	que	que	SCONJ	cs	_	16	mark	16:mark	_
6	'	'	PUNCT	fz	PunctType=Quot	16	punct	16:punct	SpaceAfter=No
7	si	si	SCONJ	cs	_	10	mark	10:mark	_
8	vostès	tu	PRON	pp2cp00p	Number=Plur|Person=2|Polite=Form|PronType=Prs	10	nsubj	10:nsubj	ArgTem=arg0:agt|Entity=(CESSCATA2001100339886c24-organization-1-CorefType:ident,gstype:spec)
9	no	no	ADV	rn	Polarity=Neg	10	advmod	10:advmod	_
10	volen	voler	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	16	advcl	16:advcl	_
11	anar	anar	VERB	vmn0000	VerbForm=Inf	10	xcomp	10:xcomp	ArgTem=arg1:pat
12	tan	tan	ADV	rg	_	13	advmod	13:advmod	_
13	lluny	lluny	ADV	rg	_	11	advmod	11:advmod	SpaceAfter=No|ArgTem=argM:loc
14	,	,	PUNCT	fc	PunctType=Comm	10	punct	10:punct	_
15	no	no	ADV	rn	Polarity=Neg	16	advmod	16:advmod	_
16	posin	posar	VERB	vmm03p0	Mood=Imp|Number=Plur|Person=3|VerbForm=Fin	4	ccomp	4:ccomp	ArgTem=arg1:pat
17	obstacles	obstacle	NOUN	ncmp000	Gender=Masc|Number=Plur	16	obj	16:obj	ArgTem=arg1:pat
18	a	a	ADP	spcmp	_	19	case	19:case	_
19	els	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	expl	16:expl	_
20	que	que	PRON	pr0cn000	PronType=Rel	23	nsubj	23:nsubj	ArgTem=arg0:agt|Entity=(NOCOREF:Gen--4-gstype:gen,HomoDD
21	sí	sí	ADV	rg	_	23	advmod	23:advmod	_
22	hi	hi	PRON	pp3cn000	Case=Loc|Person=3|PronType=Prs	23	obl:arg	23:obl:arg	ArgTem=arg4:des
23	volem	voler	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	19	acl:relcl	19:acl:relcl	ArgTem=arg2:ben
24	anar	anar	VERB	vmn0000	VerbForm=Inf	23	xcomp	23:xcomp	SpaceAfter=No|ArgTem=arg1:pat|Entity=NOCOREF:Gen)
25	;	;	PUNCT	fx	PunctType=Semi	34	punct	34:punct	_
26	si	si	SCONJ	cs	_	30	mark	30:mark	_
27	vostès	tu	PRON	pp2cp00p	Number=Plur|Person=2|Polite=Form|PronType=Prs	30	nsubj	30:nsubj	ArgTem=arg0:agt|Entity=(CESSCATA2001100339886c24-organization-1-CorefType:ident,gstype:spec)
28	no	no	ADV	rn	Polarity=Neg	30	advmod	30:advmod	_
29	hi	hi	PRON	pp3cn000	Case=Loc|Person=3|PronType=Prs	30	obl:arg	30:obl:arg	ArgTem=arg4:des
30	volen	voler	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	34	advcl	34:advcl	_
31	anar	anar	VERB	vmn0000	VerbForm=Inf	30	xcomp	30:xcomp	SpaceAfter=No|ArgTem=arg1:pat
32	,	,	PUNCT	fc	PunctType=Comm	30	punct	30:punct	_
33	hi	hi	PRON	pp3cn000	Case=Loc|Person=3|PronType=Prs	34	obl:arg	34:obl:arg	ArgTem=arg4:des
34	anirem	anar	VERB	vmif1p0	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	16	advcl	16:advcl	_
35	nosaltres	jo	PRON	pp1cp000	Number=Plur|Person=1|PronType=Prs	34	nsubj	34:nsubj	SpaceAfter=No|ArgTem=arg0:agt|Entity=(CESSCATA2001100339886c3-organization-1-CorefType:ident,gstype:spec)
36	'	'	PUNCT	fz	PunctType=Quot	16	punct	16:punct	SpaceAfter=No
37	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


